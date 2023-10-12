import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './pages/Home.jsx';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
      <Home name="laxman" />
      <App />
  </React.StrictMode>
  )