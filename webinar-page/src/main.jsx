import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WebinarProvider } from './context/WebinarContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <WebinarProvider>
    <App />
  </WebinarProvider>
);
