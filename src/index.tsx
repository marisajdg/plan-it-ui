import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignIn';
import Dashboardtest from './pages/Dashboardtest';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//create consts for paths
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}/>
        <Route path="sign-in" element={<SignInPage/>}/>
        <Route path="dashboard" element={<Dashboardtest/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);