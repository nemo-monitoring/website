import React from 'react';
import GitHubButton from 'react-github-btn';

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
            <a
              href='https://www.linkedin.com/in/anthony-chaiditya/'
              target='_blank'
            >
              <img id='linkedIn-btn' src='../assets/LinkedIn-circle.png' />
            </a>
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
            <a
              href='https://www.linkedin.com/in/ari-benkov-787b25139/'
              target='_blank'
            >
              <img id='linkedIn-btn' src='../assets/LinkedIn-circle.png' />
            </a>
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
            <a href='https://www.linkedin.com/in/callum-miles/' target='_blank'>
              <img id='linkedIn-btn' src='../assets/LinkedIn-circle.png' />
            </a>
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
            <a href='https://www.linkedin.com/in/pvburger/' target='_blank'>
              <img id='linkedIn-btn' src='../assets/LinkedIn-circle.png' />
            </a>
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
            <a href='https://www.linkedin.com/in/trevor-hilz/' target='_blank'>
              <img id='linkedIn-btn' src='../assets/LinkedIn-circle.png' />
            </a>
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
