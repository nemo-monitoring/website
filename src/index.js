import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
// import './styles.css';
import App from './App.jsx';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
