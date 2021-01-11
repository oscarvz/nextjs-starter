import styled, { css } from 'styled-components';

const Component = styled.h1<{ bold?: boolean }>(
  ({ bold }) => css`
    ${bold &&
    css`
      font-weight: bold;
    `}
  `,
);

const Heading: React.FC<{ bold?: boolean }> = ({ children, bold }) => (
  <Component bold={bold}>{children}</Component>
);

export default Heading;
