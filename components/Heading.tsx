import styled, { css } from 'styled-components';

type Props = { bold?: boolean; italic?: boolean };

const Heading = styled.h1<Props>(
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
