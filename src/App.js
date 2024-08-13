// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Store from './components/Store';
import Home from './components/Home';
import ButtonAppBar from './components/Nav';
import ShoppingCart from './components/ShoppingCart';
import About from './components/About';
import Footer from './components/Footer';
import ProductDetailsPage from './components/ProductsDetailsPage'; // Ensure this path is correct
import Success from './components/Success';
import Failure from './components/Failure';

function App() {
  return (
    <div className="app-container">
      <ButtonAppBar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/shoppingcart' element={<ShoppingCart />} />
          <Route path='/about' element={<About />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path='/success' element={<Success />} />
          <Route path='failure' element={<Failure />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
