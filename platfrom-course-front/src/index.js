import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { UserProvider } from './Context/UserContext';
import { GroupProvider } from './Context/GroupContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <GroupProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </GroupProvider>
    </UserProvider>  
  </React.StrictMode>
);

reportWebVitals();
