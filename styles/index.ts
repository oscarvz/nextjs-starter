import type {
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';

import { css } from 'styled-components';

import { theme } from './theme';

const media = Object.entries(theme.screen).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: (
      args: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) => `
      @media (min-width: ${value}) {
        ${css(args, ...interpolations)}
      }
    `,
  }),
  {} as {
    [key in keyof typeof theme.screen]: (
      args: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) => FlattenSimpleInterpolation;
  },
);

const mergedTheme = {
  ...theme,
  /**
   * The media function behaves like the styled-components css function. It
   * allows you to write styles for media queries with the breakpoints defined
   * in your theme.
   * @example
   * const MyStyledDiv = styled.div`
   *   background: green;
   *
   *   ${({ theme: { media } }) => media.xl`
   *     background: yellow;
   *   `}
   * `;
   */
  media,
};

export default mergedTheme;
export { default as GlobalStyle } from './globalStyle';
