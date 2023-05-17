// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// agregamos la configuracion para NextUI y encapsulasmos
import { NextUIProvider } from '@nextui-org/react';

// nte . cambiar theme
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { darkTheme, lightTheme } from '../themes/darktheme';

// mtd 
export default function App({ Component, pageProps }: AppProps) {
 

  return (
    <>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider theme={lightTheme}>
          <Component {...pageProps} />
        </NextUIProvider>


      </NextThemesProvider>

    </>
  )
}
