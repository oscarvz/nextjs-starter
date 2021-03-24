import { createGlobalStyle, css } from 'styled-components';
import cssReset from 'styled-reset';

import { colors, shadows } from './theme';

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    :root {
      ${Object.entries(colors).map(([key, value]) => `--${key}: ${value};`)}
      ${Object.entries(shadows).map(([key, value]) => `--shadow-${key}: ${value};`)}
    }

    ${cssReset}

    * {
      box-sizing: border-box;
      transition: all 0.1s ease-in-out;
    }

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
      color: unset;
      text-decoration: none;
    }
  `,
);

export default GlobalStyle;
