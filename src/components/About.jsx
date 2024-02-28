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
          Follow Nemo on Github
        </GitHubButton>
      </div>
    </div>
  );
};

export default About;
