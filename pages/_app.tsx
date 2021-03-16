import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import cssReset from 'styled-reset';

import theme, { rootColors } from '@styles';

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    :root {
      ${Object.entries(rootColors).map(([key, value]) => `--${key}:${value};`)}
    }

    ${cssReset}

    body {
      font-size: 16px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      background-color: ${theme.colors.background};
      color: ${theme.colors.copy};
    }
  `,
);

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
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
