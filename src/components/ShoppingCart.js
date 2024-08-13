import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import BasicButtons from '../styles/BasicButtons'; // Import your custom button component
import ProductDetailsModal from './ProductDetailsModal'; // Import the new modal component
import axios from 'axios';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('info');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    setAlertMessage('Item removed from cart');
    setAlertSeverity('info');
    setAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const handleOpenModal = (productId) => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => {
        setSelectedProduct(response.data);
        setModalOpen(true);
      })
      .catch(err => {
        console.error('Error fetching product details:', err);
      });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCheckout = async () => {
    console.log('Checkout button clicked');
    try {
      const response = await axios.post('http://localhost:3001/create-checkout-session', {
        cartItems,
      });
      console.log('Response received:', response);
      window.location.href = response.data.url;
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };
  

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                {item.images && item.images.length > 0 ? (
                  <img 
                    src={item.images[0]} 
                    alt={item.title} 
                    style={{ width: '100px', height: '100px', marginRight: '10px', cursor: 'pointer' }} 
                    onClick={() => handleOpenModal(item.id)}
                  />
                ) : (
                  <div style={{ width: '100px', height: '100px', marginRight: '10px', backgroundColor: '#f0f0f0' }}>
                    No Image
                  </div>
                )}
                <div>
                  <h3 
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleOpenModal(item.id)}
                  >
                    {item.title}
                  </h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <BasicButtons 
                    onClick={() => handleRemoveFromCart(item.id)} 
                    label='Remove' 
                    variant="outlined" 
                    color="secondary" 
                  />
                </div>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
            <p>Total Price: ${totalPrice}</p>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <BasicButtons 
          onClick={clearCart} 
          label='Clear Cart' 
          variant="contained" 
          color="primary" 
        />
      )}
       <BasicButtons 
                    onClick={handleCheckout} 
                    label='Checkout' 
                    variant="contained" 
                    color="primary" 
                  />

      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Position at the top center
      >
        <Alert onClose={handleCloseAlert} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>

      <ProductDetailsModal 
        open={modalOpen} 
        onClose={handleCloseModal} 
        product={selectedProduct} 
      />
    </div>
  );
};

export default ShoppingCart;
