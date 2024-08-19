import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <SearchProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </SearchProvider>
  </BrowserRouter>
</React.StrictMode>
);
