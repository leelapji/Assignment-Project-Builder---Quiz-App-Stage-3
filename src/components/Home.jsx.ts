import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Quiz</h1>
      <Link to="/quiz">
        <button>Play</button>
      </Link>
    </div>
  );
};

export default Home;
