import React from 'react';
import GitHubButton from '../../app/node_modules/react-github-btn';

const Team = () => {
  return (
    <div>
      <h1 id='header'>Meet the Team</h1>
      <div id='team-box'>
        <div id='headshot-layout'>
          <h2>Anthony Chatidya</h2>
          <img id='headshot-img' src='../assets/headshot-anthony.jpg' />
          <h3>Software Engineer</h3>
          <div id='team-btn'>
            <button id='linkedIn-btn'></button>
            {/* <a
              style={{ backgroundImage: '../assets/LinkedIn.png' }}
              id='linkedIn-btn'
              href='https://www.linkedin.com/in/trevor-hilz/'
              target='_blank'
            ></a> */}
            <GitHubButton
              href='https://github.com/AnthonyChaiditya'
              data-color-scheme='no-preference: light; light: light; dark: dark;'
              data-size='large'
              aria-label='Follow @buttons on GitHub'
            >
              GitHub
            </GitHubButton>
          </div>
        </div>
        <div id='headshot-layout'>
          <h2>Ari Benkov</h2>
          <img id='headshot-img' src='../assets/headshot-ari.png' />
          <h3>Software Engineer</h3>
          <div id='team-btn'>
            <div>L.I.</div>
            <div>
              <GitHubButton
                href='https://github.com/abenkov2'
                data-color-scheme='no-preference: light; light: light; dark: dark;'
                data-size='large'
                aria-label='Follow @buttons on GitHub'
              >
                GitHub
              </GitHubButton>
            </div>
          </div>
        </div>
        <div id='headshot-layout'>
          <h2>Callum Miles</h2>
          <img id='headshot-img' src='../assets/headshot-callum.jpeg' />
          <h3>Software Engineer</h3>
          <div id='team-btn'>
            <div>L.I.</div>
            <div>
              <GitHubButton
                href='https://github.com/callummiles'
                data-color-scheme='no-preference: light; light: light; dark: dark;'
                data-size='large'
                aria-label='Follow @buttons on GitHub'
              >
                GitHub
              </GitHubButton>
            </div>
          </div>
        </div>
        <div id='headshot-layout'>
          <h2>Paul Burger</h2>
          <img id='headshot-img' src='../assets/headshot-paul.jpg' />
          <h3>Software Engineer</h3>
          <div id='team-btn'>
            <div>L.I.</div>
            <div>
              <GitHubButton
                href='https://github.com/pvburger'
                data-color-scheme='no-preference: light; light: light; dark: dark;'
                data-size='large'
                aria-label='Follow @buttons on GitHub'
              >
                GitHub
              </GitHubButton>
            </div>
          </div>
        </div>
        <div id='headshot-layout'>
          <h2>Trevor Hilz</h2>
          <img id='headshot-img' src='../assets/headshot-trevor.jpg' />
          <h3>Software Engineer</h3>
          <div id='team-btn'>
            <div>L.I.</div>
            <div>
              <GitHubButton
                href='https://github.com/Maelstrom116'
                data-color-scheme='no-preference: light; light: light; dark: dark;'
                data-size='large'
                aria-label='Follow @buttons on GitHub'
              >
                GitHub
              </GitHubButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
