import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import ProductDetails from './ProductDetails';

const ProductDisplay = ({ name, description, price, imageUrl, stock, product }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="product-display">
      <img src={imageUrl} alt={name} style={{ width: '100%' }} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <Button variant="contained" color="primary">
        Add to Cart
      </Button>
      <Button variant="outlined" color="primary" onClick={handleOpenDialog}>
        View Details
      </Button>

      {/* Modal dialog for product details */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <ProductDetails open={dialogOpen} onClose={handleCloseDialog} product={product} />
      </Dialog>
    </div>
  );
};

export default ProductDisplay;
