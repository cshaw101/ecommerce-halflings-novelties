import React from 'react';
import Store from './Store';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/* This will not have searchTerm if it's a placeholder */}
      <Store /> 
    </div>
  );
}

export default Home;