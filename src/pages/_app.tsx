import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Nav from '../components/Nav/Nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
