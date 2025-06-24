import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './context/AppContext.jsx';

const PUBLISHABLE_KEY = "pk_test_c3VidGxlLXRyb2xsLTgyLmNsZXJrLmFjY291bnRzLmRldiQ"; // ✅

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ClerkProvider>
  </BrowserRouter>
);


