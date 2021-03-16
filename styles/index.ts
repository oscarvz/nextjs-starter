import { css } from 'styled-components';
import { screens, colors as rootColors, shadow } from './theme';

import type {
  CSSObject,
  DefaultTheme,
  FlattenInterpolation,
  Interpolation,
  InterpolationFunction,
  ThemedStyledProps,
} from 'styled-components';

type CSSMediaArguments =
  | CSSObject
  | TemplateStringsArray
  | InterpolationFunction<ThemedStyledProps<Record<string, unknown>, DefaultTheme>>;

// TODO: Create own custom CSSProp in due time
const media = Object.keys(screens).reduce(
  (acc, selector) => {
    acc[selector as keyof typeof screens] = (args, ...interpolations) => css`
      @media (min-width: ${screens[selector as keyof typeof screens]}) {
        ${css(args, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as {
    [key in keyof typeof screens]: (
      args: CSSMediaArguments,
      ...interpolations: Array<Interpolation<ThemedStyledProps<unknown, DefaultTheme>>>
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
  media,
  colors,
  shadow,
};

export default mergedTheme;
export { rootColors };
