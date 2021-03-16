import { css } from 'styled-components';

import type {
  CSSObject,
  DefaultTheme,
  FlattenInterpolation,
  InterpolationFunction,
  ThemedStyledProps,
} from 'styled-components';

type CSSMediaArguments =
  | CSSObject
  | TemplateStringsArray
  | InterpolationFunction<ThemedStyledProps<Record<string, unknown>, DefaultTheme>>;

const screens = {
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1366px',
};

const media = Object.keys(screens).reduce(
  (acc, selector) => {
    acc[selector as keyof typeof screens] = (args: CSSMediaArguments) => css`
      @media (min-width: ${screens[selector as keyof typeof screens]}) {
        ${css(args)}
      }
    `;

    return acc;
  },
  {} as {
    [key in keyof typeof screens]: (
      args: CSSMediaArguments,
    ) => FlattenInterpolation<ThemedStyledProps<Record<string, unknown>, DefaultTheme>>;
  },
);

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
