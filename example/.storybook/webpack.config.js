let foundCSSRule = false;

function removeDuplicateCSSRule(rule) {
  if (!rule || !rule.test) {
    return;
  }
  if (rule.test.toString() !== '/\\.css$/') {
    return;
  }
  if (!foundCSSRule) {
    foundCSSRule = true;
    return;
  }
  return false;
}

function updateRules(oldRules) {
  const newRules = [];
  if (!oldRules || !oldRules.length) {
    return newRules;
  }
  for (let i = 0; i < oldRules.length; i++) {
    const rule = oldRules[i];
    if (rule.oneOf) {
      rule.oneOf = updateRules(rule.oneOf);
      newRules.push(rule);
    } else {
      const newRule = removeDuplicateCSSRule(oldRules[i]);
      if (newRule) {
        // If a new rule was returned, push it into the new rules list
        newRules.push(newRule);
      }
      if (newRule !== false) {
        // If any function returned false, it means remove it from the list of rules
        // Otherwise, we just use the old rule that was there previously
        newRules.push(oldRules[i]);
      }
    }
  }
  return newRules;
}

module.exports = async ({ config, mode }) => {
  console.log('*** Custom webpack running ****');
  config.module.rules = updateRules(config.module.rules);
  // Uncomment this line if you would like to view the final webpack config so you can alter it.  Useful for debugging
  // console.dir(config, { depth: null });
  return config;
};
