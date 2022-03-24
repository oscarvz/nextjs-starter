import { FunctionComponent, useCallback } from 'react';
import { useState } from 'react';
import Head from 'next/head';
import styled, { css } from 'styled-components';

import { Button, Heading, Wrapper as BaseWrapper } from '@components';

type Props = { title?: string };

const FixedBar = styled.div(
  ({ theme: { colors, shadows } }) => css`
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${colors.background};
    box-shadow: ${shadows.lg};
  `,
);

const Header = styled(FixedBar).attrs({ as: 'header' })`
  top: 0;
  height: 4rem;
`;

const Footer = styled(FixedBar).attrs({ as: 'footer' })(
  ({ theme: { colors, fonts } }) => css`
    bottom: 0;
    height: 3rem;
    font-family: ${fonts.secondary};
    font-size: 0.8rem;
    color: ${colors.copyAlt};
  `,
);

const Main = styled(BaseWrapper)`
  padding: 4rem 1.5rem 3rem;
`;

const HeaderWrapper = styled(BaseWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Layout: FunctionComponent<Props> = ({ children, title }) => {
  const [userName, setUserName] = useState(null);

  const callApi = useCallback(async () => {
    try {
      const res = await fetch('/api/login');

      if (res.ok) {
        const data = await res.json();
        setUserName(data.name);
      }
    } catch (err) {
      throw new Error(`${err}`);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{title || 'Next.js starter'}</title>
      </Head>

      <Header>
        <HeaderWrapper>
          <Heading bold>Next.js starter</Heading>

          {!userName ? (
            <Button primary onClick={callApi}>
              click me
            </Button>
          ) : (
            <p>Logged in as {userName}</p>
          )}
        </HeaderWrapper>
      </Header>

      <Main as="main">{children}</Main>

      <Footer>
        <p>Your fancy footer here &copy; 2021</p>
      </Footer>
    </>
  );
};

export default Layout;
