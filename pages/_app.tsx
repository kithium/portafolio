// import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// agregamos la configuracion para NextUI y encapsulasmos
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes/darktheme';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={ darkTheme }>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
