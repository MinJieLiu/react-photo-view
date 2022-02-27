import type { AppProps } from 'next/app';
import { GlobalScrollbar } from 'mac-scrollbar';
import 'mac-scrollbar/dist/mac-scrollbar.css';
import '../styles/global.css';
import 'nextra-theme-docs/style.css';
import '../../react-photo-view/dist/react-photo-view.css';

export default function Nextra({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalScrollbar />
    </>
  );
}
