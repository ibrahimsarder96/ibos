import React from 'react';

const Home = () => {
  let name = localStorage.getItem("userName")
  return (
    <div>
      <h1>this home page {name}</h1>
    </div>
  );
};

export default Home;