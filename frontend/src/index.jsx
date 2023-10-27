import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Login from './pages/auth/login/Login.jsx';
import Reg from './pages/auth/reg/Reg.jsx';


const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/reg" element={<Reg />} />
  </Route>
);

const route = createBrowserRouter(routes);
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
      <RouterProvider router={route} />
  </React.StrictMode>
  )
