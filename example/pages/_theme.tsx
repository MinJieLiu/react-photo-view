import React from 'react';
import { createTheme } from 'vite-pages-theme-doc';

export default createTheme({
  logo: <b>react-photo-view</b>,
  topNavs: [
    {
      label: '首页',
      path: '/',
    },
    { label: 'Github ⭐', href: 'https://github.com/MinJieLiu/react-photo-view' },
  ],
});
