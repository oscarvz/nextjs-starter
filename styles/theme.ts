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

export const rootColors = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  copy: 'rgb(0, 0, 0)',
  copyAlt: 'rgb(74, 75, 79)',
  background: 'rgb(245, 245, 245)',
  primary: 'rgb(29, 223, 205)',
  primaryAlt: 'rgb(4, 51, 47)',
};

const colors = Object.keys(rootColors).reduce(
  (acc, val) => ({
    ...acc,
    [val]: `var(--${val})`,
  }),
  {} as typeof rootColors,
);

const shadow = {
  small: '0 0 .5rem rgba(0, 0, 0, 0.15)',
  large: '0 0 1rem rgba(0, 0, 0, 0.15)',
};

const theme = {
  screens,
  media,
  colors,
  shadow,
};

export default theme;
