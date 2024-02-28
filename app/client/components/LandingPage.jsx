import React from 'react';
import About from './About.jsx';
import Team from './Team.jsx';
import Header from './Header.jsx';
import Images from './Images.jsx';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <About />
      <Images />
      <Team />
    </div>
  );
};

export default LandingPage;
