import React from 'react'
import type { AppProps } from 'next/app'
import { GlobalScrollbar } from 'mac-scrollbar'
import 'mac-scrollbar/dist/mac-scrollbar.css'
import 'nextra-theme-docs/style.css'
import GlobalStyles from '../styles/global'

export default function Nextra({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <GlobalScrollbar />
    </>
  )
}
