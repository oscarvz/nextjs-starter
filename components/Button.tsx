import styled, { css } from 'styled-components';

type Props = { primary?: boolean };

const Button = styled.button<Props>(
  ({ theme, primary }) => css`
    padding: 0.5rem;
    color: ${theme.colors.primaryAlt};
    background-color: ${primary
      ? theme.colors.primary
      : theme.colors.background};
    box-shadow: ${theme.shadows.sm};
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
  `,
);

export default Button;
