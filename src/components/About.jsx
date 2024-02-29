import React from 'react';
import GitHubButton from 'react-github-btn';

const About = () => {
  return (
    <div id='about-box'>
      <h1 id='header'>What is Nemo Monitoring</h1>
      <p style={{ lineHeight: '1.5em' }}>
        Nemo offers a straightforward and user-friendly health monitoring
        solution for your Kubernetes Clusters, focusing on the CPU and Memory
        consumption across the cluster's nodes and pods, and delivering the
        insights in two accessible formats. The first format is a neatly
        arranged table, customizable to prioritize the metrics most relevant to
        you. The second format features easy-to-interpret donut charts that
        display usage statistics, with dynamic color changes to reflect usage
        levels. Both presentation methods ensure the provision of real-time
        data. Moreover, the Cluster tab lays out the architecture of your
        Kubernetes Cluster, from the Master Node through to the Nodes, and down
        to the Pods, with a color-coding scheme akin to our chart system,
        designed to indicate usage severity.
      </p>
      <div>
        <GitHubButton
          href='https://github.com/oslabs-beta/nemo'
          data-color-scheme='no-preference: light; light: light; dark: dark;'
          data-size='large'
          aria-label='Follow @buttons on GitHub'
        >
          Nemo on GitHub
        </GitHubButton>
      </div>
      <h1 id='header'>Using Nemo</h1>
      <div id='about-use'>
        <div id='use-text'>
          {/* If you have already setup Nemo and have a locally run cluster, click
          the button to access our online demo portal. If you do not have Nemo,
          visit our GitHub page to learn more. */}
          To get started with our tool, please visit our GitHub repository to
          clone the backend server. This is essential for running the local
          server that our frontend application relies on for serving its
          information. Follow the steps below for a seamless setup:
          <ol>
            <li>
              Navigate to our GitHub repository <em>(button on the right)</em>
            </li>
            <li>Clone the repository to your local machine.</li>
            <li>
              Follow the setup instructions in the README to get your server up
              and running.
            </li>
          </ol>
          Thank you for using our tool! If you encounter any issues or need
          further assistance, please refer to our documentation or contact our
          support team.
        </div>
        <GitHubButton
          href='https://github.com/oslabs-beta/nemo'
          data-color-scheme='no-preference: light; light: light; dark: dark;'
          data-size='large'
          aria-label='Follow @buttons on GitHub'
        >
          Nemo on GitHub
        </GitHubButton>
        <a
          href='https://nemo-dashboard.vercel.app/'
          target='_blank'
          id='header-btn'
        >
          Access Nemo
        </a>
      </div>
    </div>
  );
};

export default About;
