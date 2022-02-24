import type { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';

import { Heading as BaseHeading, Layout, Libraries } from '@components';
import type { LibrariesArray } from '@components';

const Heading = styled(BaseHeading).attrs({ as: 'h2' })`
  font-size: 2.5rem;
  margin: 5rem 0;
`;

const Home: NextPage<LibrariesArray> = ({ libraries }) => (
  <Layout title="Next.js starter home">
    <Heading>Personal Next.js starter!</Heading>

    <Libraries libraries={libraries} />
  </Layout>
);

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
