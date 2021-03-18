import { createGlobalStyle, css } from 'styled-components';
import cssReset from 'styled-reset';

import { rootColors } from '.';

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    :root {
      ${Object.entries(rootColors).map(([key, value]) => `--${key}:${value};`)}
    }

    ${cssReset}

    body {
      font-size: 16px;
      font-family: ${theme.fonts.primary};
      background-color: ${theme.colors.backgroundAlt};
      color: ${theme.colors.copy};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${theme.fonts.secondary};
      font-weight: bold;
    }

    a {
      text-decoration: none;
    }
  `,
);

export default GlobalStyle;
