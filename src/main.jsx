import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Ensure the path to App is correct
import LanguageProvider from './components/LanguageProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageProvider>
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  </LanguageProvider>

);
