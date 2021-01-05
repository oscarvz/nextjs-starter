import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import cssReset from 'styled-reset';

import { theme } from '@styles';

const GlobalStyle = createGlobalStyle(() => cssReset);

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="description" content="Next.js starter" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <GlobalStyle />

    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
