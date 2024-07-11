import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { UserProvider } from './Context/UserContext';
import { GroupProvider } from './Context/GroupContext';
import { HmProvider } from './Context/HmContext';
import { ForgotProvider } from './Context/ForgotContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <GroupProvider>
        <HmProvider>
          <ForgotProvider>
            <HashRouter>
              <App />
            </HashRouter>
          </ForgotProvider>  
        </HmProvider>
      </GroupProvider>
    </UserProvider>  
  </React.StrictMode>
);

reportWebVitals();
