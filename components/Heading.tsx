import styled, { css } from 'styled-components';

const Heading = styled.h1<{ bold?: boolean; italic?: boolean }>(
  ({ bold, italic }) => css`
    ${bold &&
    css`
      font-weight: bold;
    `}

    ${italic &&
    css`
      font-style: italic;
    `}
  `,
);

export default Heading;
