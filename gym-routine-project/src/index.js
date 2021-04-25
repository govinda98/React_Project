import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'; 

ReactDOM.render(
  <Auth0Provider
    domain="dev-x048n5x8.us.auth0.com"
    clientId="ojbiqhsf6FjAzA5O2Zy6C71yj0JwtsUW"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

