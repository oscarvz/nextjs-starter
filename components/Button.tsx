import styled, { css } from 'styled-components';

type Props = { primary?: boolean };

const Button = styled.button<Props>(
  ({ theme: { color, shadow }, primary }) => css`
    padding: 0.5rem;
    color: ${color.primaryAlt};
    background-color: ${primary ? color.primary : color.background};
    box-shadow: ${shadow.sm};
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
  `,
);

export default Button;
