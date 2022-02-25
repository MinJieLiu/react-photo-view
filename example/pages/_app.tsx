import type { AppProps } from 'next/app';
import '../styles/global.css';
import 'nextra-theme-docs/style.css';
import '../../dist/react-photo-view.css';

export default function Nextra({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
