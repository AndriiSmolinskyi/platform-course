import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { UserProvider } from './Context/UserContext';
import { HomeProvider } from './Context/HomeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <HomeProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </HomeProvider>
    </UserProvider>  
  </React.StrictMode>
);

reportWebVitals();
