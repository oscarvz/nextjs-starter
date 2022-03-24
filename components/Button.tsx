import styled, { css } from 'styled-components';

type Props = { primary?: boolean };

const Button = styled.button<Props>(
  ({ theme: { colors, shadows }, primary }) => css`
    padding: 0.5rem;
    color: ${colors.primaryAlt};
    background-color: ${primary ? colors.primary : colors.background};
    box-shadow: ${shadows.sm};
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
  `,
);

export default Button;
