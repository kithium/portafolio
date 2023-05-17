// import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// agregamos la configuracion para NextUI y encapsulasmos
import { Button, NextUIProvider } from '@nextui-org/react';

import { useState } from 'react';
// nte . cambiar theme
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { darkTheme, lightTheme } from '../themes/darktheme';
// nte . cambiar theme
// mtd 
export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState(darkTheme); // Inicialmente, se establece el tema oscuro

  // Función para cambiar el tema
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === darkTheme ? lightTheme : darkTheme);
  };

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
        <NextUIProvider theme={currentTheme}>
          {/* <Button onPress={toggleTheme}>Cambiar tema</Button> */}
          <Component {...pageProps} />
        </NextUIProvider>


      </NextThemesProvider>

    </>
  )
}
