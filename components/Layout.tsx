import Head from 'next/head';
import styled, { css } from 'styled-components';

import { Heading, Wrapper } from '@components';

const Header = styled.header(
  ({ theme }) => css`
    padding: 1rem 0;
    background: ${theme.colors.white};
    box-shadow: ${theme.shadow.large};
  `,
);

const Main = styled(Wrapper)`
  padding: 0 1rem;
`;

const Footer = styled.footer(
  ({ theme }) => css`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0.5rem 0;
    text-align: center;
    background: ${theme.colors.white};
    box-shadow: ${theme.shadow};
  `,
);

const Layout: React.FC<{ title?: string }> = ({ children, title }) => (
  <>
    <Head>
      <title>{title || 'Next.js starter'}</title>
    </Head>

    <Header>
      <Wrapper>
        <Heading bold>Next.js starter</Heading>
      </Wrapper>
    </Header>

    <Main as="main">{children}</Main>

    <Footer>
      <p>Built with &hearts; somewhere</p>
    </Footer>
  </>
);

export default Layout;
