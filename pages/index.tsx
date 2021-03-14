import { useState } from 'react';
import { Button, Layout } from '@components';

const Home: React.FC = () => {
  const [name, setName] = useState(null);

  const callApi = async (): Promise<void> => {
    try {
      const res = await fetch('/api/login');

      if (res.ok) {
        const data = await res.json();
        setName(data.name);
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <Layout title="Next.js starter home">
      <h1>Personal Next.js starter!</h1>

      {/* TODO: Add list of all libraries here too */}

      {!name ? (
        <Button primary onClick={callApi}>
          click me
        </Button>
      ) : (
        <h1>Welcome {name}!</h1>
      )}
    </Layout>
  );
};

export default Home;
