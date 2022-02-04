import React from 'react';
import { createTheme } from 'vite-pages-theme-doc';

import { GlobalScrollbar } from 'mac-scrollbar';
import 'mac-scrollbar/dist/mac-scrollbar.css';

export default createTheme({
  logo: (
    <>
      <b>react-photo-view</b>
      <GlobalScrollbar />
    </>
  ),
  topNavs: [
    {
      label: '首页',
      path: '/',
    },
    { label: 'Github ⭐', href: 'https://github.com/MinJieLiu/react-photo-view' },
  ],
});
