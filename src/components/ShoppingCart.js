import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import BasicButtons from '../styles/BasicButtons'; // Import your custom button component

const ShoppingCart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('info'); 

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    setAlertMessage('Item removed from cart');
    setAlertSeverity('info');
    setAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <BasicButtons onClick={() => handleRemoveFromCart(item.id)} label='Remove' variant="contained" color="secondary" />
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <BasicButtons onClick={clearCart} label='Clear Cart' variant="contained" color="primary" />

      )}

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
    </div>
  );
};

export default ShoppingCart;
