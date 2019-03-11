import React from 'react';
import auth from './../Auth/index';

const Home = () => {
  return (
    <div><h1>Welcome to Home page!</h1></div>
  );
}

export default auth(Home);