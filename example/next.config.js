const nextra = require('nextra');

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
});

module.exports = withNextra({
  i18n: {
    locales: ['zh-CN', 'en-US'],
    defaultLocale: 'zh-CN',
  },
  redirects: () => {
    return [
      {
        source: '/docs',
        destination: '/docs/getting-started',
        statusCode: 301,
      },
    ];
  },
});
