import { css, DefaultTheme, ThemedCssFunction } from 'styled-components';

// TODO: Improve Screens, Media & Label typing to get rid of the 'any' on line 21
type Screens = {
  [key: string]: string;
};

type Label = 'sm' | 'md' | 'lg' | 'xl';

type Media = {
  [key in Label]: ThemedCssFunction<DefaultTheme>;
};

const screens: Screens = {
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1366px',
};

const media: Media = Object.keys(screens).reduce((acc: any, label: string) => {
  acc[label] = (args: TemplateStringsArray) => css`
    @media (min-width: ${screens[label]}) {
      ${css(args)}
    }
  `;

  return acc;
}, {});

const colors = {
  white: 'rgba(255, 255, 255, 1)',
  black: 'rgba(0, 0, 0, 1)',
};

const theme = {
  screens,
  media,
  colors,
};

export default theme;
