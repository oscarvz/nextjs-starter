import { css } from 'styled-components';
import { theme } from './theme';

import type {
  CSSObject,
  DefaultTheme,
  FlattenInterpolation,
  Interpolation,
  InterpolationFunction,
  ThemedStyledProps,
} from 'styled-components';

type CSSPropArguments =
  | CSSObject
  | TemplateStringsArray
  | InterpolationFunction<
      ThemedStyledProps<Record<string, unknown>, DefaultTheme>
    >;

// TODO: Create own custom CSSProp in due time
const media = Object.keys(theme.screen).reduce(
  (acc, selector) => {
    acc[selector as keyof typeof theme.screen] = (
      args,
      ...interpolations
    ) => css`
      @media (min-width: ${theme.screen[
          selector as keyof typeof theme.screen
        ]}) {
        ${css(args, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as {
    [key in keyof typeof theme.screen]: (
      args: CSSPropArguments,
      ...interpolations: Array<
        Interpolation<ThemedStyledProps<unknown, DefaultTheme>>
      >
    ) => FlattenInterpolation<
      ThemedStyledProps<Record<string, unknown>, DefaultTheme>
    >;
  },
);

const mergedTheme = {
  ...theme,
  media,
};

export default mergedTheme;
export { default as GlobalStyle } from './globalStyle';
