import Head from 'next/head';
import styled from 'styled-components';

// TODO: Fix breaking named import Wrapper aliased path @components
import Wrapper from './Wrapper';

const Header = styled.header`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: lightgray;
`;

const Main = styled(Wrapper)``;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  background: lightgray;
`;

const Layout = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <>
    <Head>
      <title>{!!title ? title : 'Next.js starter'}</title>
    </Head>

    <Header>
      <Wrapper>
        <h1>Next.js starter</h1>
      </Wrapper>
    </Header>

    <Main as="main">{children}</Main>

    <Footer>
      <p>Built with &hearts; somewhere</p>
    </Footer>
  </>
);

export default Layout;
