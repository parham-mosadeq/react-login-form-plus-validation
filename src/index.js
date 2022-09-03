import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/global.css'
import { BrowserRouter as BR } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BR>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BR>
);
