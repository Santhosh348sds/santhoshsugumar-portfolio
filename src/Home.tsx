import React from 'react';

interface HomeProps {
  name?: string;
}

const Home: React.FC<HomeProps> = ({ name = 'World' }) => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to My Portfolio, {name}!</h1>
      <p>This component is written in TypeScript (.tsx)</p>
    </div>
  );
};

export default Home;
