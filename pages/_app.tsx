// import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// agregamos la configuracion para NextUI y encapsulasmos
import { Button, NextUIProvider } from '@nextui-org/react';
import { darkTheme, ligthTheme } from '../themes/darktheme';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState(darkTheme); // Inicialmente, se establece el tema oscuro

  // Función para cambiar el tema
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === darkTheme ? ligthTheme : darkTheme);
  };

  return (
    <NextUIProvider theme={currentTheme}>
      <Button onPress={toggleTheme}>Cambiar tema</Button>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
