import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import theme, { GlobalStyle } from '@styles';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="description" content="Next.js starter" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
