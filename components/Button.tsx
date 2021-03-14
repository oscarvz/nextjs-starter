import styled, { css } from 'styled-components';

const Button = styled.button<{ primary?: boolean }>(
  ({ theme, primary }) => css`
    padding: 0.5rem;
    color: ${theme.colors.primaryDark};
    background-color: ${primary ? theme.colors.primary : theme.colors.white};
    box-shadow: ${theme.shadow.small};
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
  `,
);

export default Button;
