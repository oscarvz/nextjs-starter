import { createGlobalStyle, css } from 'styled-components';
import cssReset from 'styled-reset';

import { theme } from './theme';

const themeCssVariables = Object.entries(theme).reduce((acc, [key, val]) => {
  return [
    ...acc,
    ...Object.entries(val).map(
      ([entryKey, entryValue]) => `--${key}-${entryKey}: ${entryValue};`,
    ),
  ];
}, [] as Array<string>);

const GlobalStyle = createGlobalStyle(
  ({ theme: { color, font } }) => css`
    :root {
      ${themeCssVariables}
    }

    ${cssReset}

    * {
      box-sizing: border-box;
      transition: all 0.1s ease-in-out;
    }

    body {
      font-size: 16px;
      font-family: ${font.primary};
      background-color: ${color.backgroundAlt};
      color: ${color.copy};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${font.secondary};
      font-weight: bold;
    }

    a {
      color: unset;
      text-decoration: none;
    }
  `,
);

export default GlobalStyle;
