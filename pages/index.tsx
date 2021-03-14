import { GetStaticProps } from 'next';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import { Button, Layout } from '@components';

type Props = {
  libraries: {
    name: string;
    description: string;
    url: string;
    logo: string;
  }[];
};

const LibrariesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const LibraryItem = styled.li(
  ({ theme }) => css`
    flex-basis: 50%;
    background-color: ${theme.colors.white};
    padding: 1rem;
    display: flex;
  `,
);

const Home: React.FC<Props> = ({ libraries }) => {
  const [userName, setUserName] = useState(null);

  const callApi = async (): Promise<void> => {
    try {
      const res = await fetch('/api/login');

      if (res.ok) {
        const data = await res.json();
        setUserName(data.name);
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <Layout title="Next.js starter home">
      <h1>Personal Next.js starter!</h1>

      {/* TODO: Add list of all libraries here too */}

      {!userName ? (
        <Button primary onClick={callApi}>
          click me
        </Button>
      ) : (
        <h1>Welcome {userName}!</h1>
      )}

      <LibrariesList>
        {libraries.map(({ name, description, url }) => (
          <LibraryItem key={name}>
            <h3>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </h3>
            <p>{description}</p>
          </LibraryItem>
        ))}
      </LibrariesList>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/libraries`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      libraries: data,
    },
  };
};
