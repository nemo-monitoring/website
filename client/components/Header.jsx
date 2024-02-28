import React from 'react';

const Header = () => {
  return (
    <div style={{ backgroundColor: 'blue', fontSize: '50px' }} id='header-box'>
      <img id='logo' src='../assets/nemo-logo.png' />
      <div id='header-main'>
        <a
          href='https://github.com/oslabs-beta/nemo'
          target='_blank'
          id='header-btn'
        >
          GitHub
        </a>
        <button id='header-btn'>Demo Nemo</button>
      </div>
    </div>
  );
};

export default Header;
