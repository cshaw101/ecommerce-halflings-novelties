import React, { useState } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    console.log('Search term in App:', term); // Check if this logs the correct search term
    setSearchTerm(term);
  };

  return (
    <div className="app-container">
      <ButtonAppBar onSearch={handleSearch} />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store searchTerm={searchTerm} />} />
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