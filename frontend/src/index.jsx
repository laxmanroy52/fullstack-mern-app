import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
      <Header />
  </React.StrictMode>
  )