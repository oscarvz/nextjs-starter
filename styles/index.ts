import { css } from 'styled-components';
import theme from './theme';

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

const { screens, colors: rootColors, shadow } = theme;

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

const colors = Object.keys(rootColors).reduce(
  (acc, val) => ({
    ...acc,
    [val]: `var(--${val})`,
  }),
  {} as typeof rootColors,
);

const mergedTheme = {
  screens,
  media,
  colors,
  shadow,
};

export default mergedTheme;
export { rootColors };
