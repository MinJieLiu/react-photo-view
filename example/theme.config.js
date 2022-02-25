export default {
  projectLink: 'https://github.com/MinJieLiu/react-photo-view', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/MinJieLiu/react-photo-view/tree/master/example', // base URL for the docs repository
  titleSuffix: ' – react-photo-view',
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  nextLinks: true,
  prevLinks: true,
  customSearch: null,
  darkMode: true,
  footer: true,
  footerText: `Apache-2.0 ${new Date().getFullYear()} © MinJieLiu.`,

  footerEditLink: ({ locale }) => {
    switch (locale) {
      case 'zh-CN':
        return '在 GitHub 上编辑本页 →';
      default:
        return 'Edit this page on GitHub →';
    }
  },
  logo: <span>react-photo-view</span>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="react-photo-view: A beautiful photo preview component" />
      <meta name="og:title" content="react-photo-view: A beautiful photo preview component" />
    </>
  ),
  i18n: [
    { locale: 'zh-CN', text: '简体中文' },
    // { locale: 'en-US', text: 'English' },
  ],
};
