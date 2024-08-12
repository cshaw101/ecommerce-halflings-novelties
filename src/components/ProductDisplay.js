import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import ProductDetails from './ProductDetails';
import { useCart } from '../context/CartContext';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const ProductDisplay = ({ name, description, price, imageUrl, stock, product }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success'); // 'success', 'info', or 'error'
  
  const { addToCart } = useCart();

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleAddToCart = () => {
    try {
      addToCart(product);
      setAlertMessage('Item Added to Cart');
      setAlertSeverity('success');
    } catch (error) {
      setAlertMessage('Failed to add item to cart');
      setAlertSeverity('error');
    }
    setAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <div className="product-display">
      <img 
        src={imageUrl} 
        alt={name} 
        style={{ width: '100%', cursor: 'pointer' }} 
        onClick={handleOpenDialog} 
      />
      <h2 style={{ cursor: 'pointer', color: 'blue' }} onClick={handleOpenDialog}>
        {name}
      </h2>
      <p>{description}</p>
      <p style={{ fontWeight: 'bold', color: stock === 'In Stock' ? 'green' : 'red' }}>
        {stock}
      </p>
      <p>{price}</p>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleAddToCart}
        disabled={stock === 'Out of Stock'}
      >
        Add to Cart
      </Button>
      <Button variant="outlined" color="primary" onClick={handleOpenDialog}>
        View Details
      </Button>

      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <ProductDetails open={dialogOpen} onClose={handleCloseDialog} product={product} />
      </Dialog>

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

export default ProductDisplay;
