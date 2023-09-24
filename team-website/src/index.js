// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Your main App component

const root = document.getElementById('root'); // Replace with your root element ID

// Use ReactDOM.createRoot to render your app
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(<App />);
