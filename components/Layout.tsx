import Head from 'next/head';
import styled from 'styled-components';

// Note: using the '@components' alias will break import
import Heading from './Heading';
import Wrapper from './Wrapper';

const Header = styled.header`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: lightgray;
`;

const Main = styled(Wrapper).attrs({ as: 'main' })``;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  background: lightgray;
`;

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

    <Main>{children}</Main>

    <Footer>
      <p>Built with &hearts; somewhere</p>
    </Footer>
  </>
);

export default Layout;
