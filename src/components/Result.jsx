import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  return (
    <div>
      <h1>Your Score: {score}</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Result;
