const nextra = require('nextra');

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  staticImage: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  i18n: {
    locales: ['zh-CN', 'en-US'],
    defaultLocale: 'zh-CN',
  },
  eslint: {
    ignoreDuringBuilds: true,
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
