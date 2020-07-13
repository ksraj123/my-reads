import { Link } from 'react-router-dom';
import React from 'react';

const Error404page = () => (
  <div>
    <h1>Hmm... Something not seems to be right....</h1>
    <div>
      <Link to="/">Back to home</Link>
    </div>
  </div>
);

export default Error404page;
