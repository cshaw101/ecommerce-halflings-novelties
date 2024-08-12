import React from 'react';
import { Modal, Box, Typography } from '@mui/material';


const ProductDetailsModal = ({ open, onClose, product }) => {

  if (!product) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box 
        sx={{ 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: '8px',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          {product.title}
        </Typography>
        <img 
          src={product.images[0]} 
          alt={product.title} 
          style={{ width: '100%', height: 'auto', margin: '10px 0' }} 
        />
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {product.description}
        </Typography>
        <Typography sx={{ mt: 2 }}>Price: ${product.price}</Typography>
        <Typography sx={{ mt: 2 }}>Stock: {product.stock}</Typography>
        <Typography sx={{ mt: 2 }}>Brand: {product.brand}</Typography>
        <Typography sx={{ mt: 2 }}>Category: {product.category}</Typography>
      </Box>
    </Modal>
  );
};

export default ProductDetailsModal;
