import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import cssReset from 'styled-reset';

import { theme } from '@styles';

const GlobalStyle = createGlobalStyle`
  ${cssReset}

  body {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif
  }
`;

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
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
