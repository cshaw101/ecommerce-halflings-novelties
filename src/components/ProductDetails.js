import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetails = ({ open, onClose, product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(product.thumbnail);
  const [alertOpen, setAlertOpen] = useState(false);

  if (!product) return null;

  const galleryImages = product.images || [];

  const handleBackClick = () => {
    navigate('/store');
    onClose(); 
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleAddToCart = () => {
    addToCart(product);
    setAlertOpen(true); // Show success message
    onClose(); // Close the Dialog after adding to the cart
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogContent>
          <div className="product">
            <IconButton 
              onClick={handleBackClick} 
              style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1000 }}
            >
              <ArrowBackIcon />
            </IconButton>

            <div className="product__photo">
              <div className="photo-container">
                <div className="photo-main" style={{ textAlign: 'center' }}>
                  <div className="controls">
                    <IconButton>
                      <ShareIcon />
                    </IconButton>
                    <IconButton>
                      <FavoriteBorderIcon />
                    </IconButton>
                  </div>
                  <img 
                    src={selectedImage} 
                    alt={product.title} 
                    style={{ width: '300px', height: 'auto', maxWidth: '100%' }} 
                  />
                </div>
                <div className="photo-album" style={{ marginTop: '10px' }}>
                  <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
                    {galleryImages.map((img, index) => (
                      <li key={index} style={{ marginRight: '10px' }}>
                        <img 
                          src={img} 
                          alt={`${product.title} gallery`} 
                          style={{ width: '100px', height: 'auto', cursor: 'pointer' }} 
                          onClick={() => handleImageClick(img)}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="product__info">
              <div className="title">
                <h1>{product.title}</h1>
                <span style={{ fontWeight: 'bold', color: product.stock > 0 ? 'green' : 'red' }}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              <div className="price">
                $ <span>{product.price}</span>
              </div>
              <div className="description">
                <h3>Details</h3>
                <p>{product.description}</p>
              </div>
              <Button 
                variant="contained" 
                color="primary" 
                style={{ marginRight: '10px' }}
                disabled={product.stock === 0} // Disable button if out of stock
                onClick={handleAddToCart} // Connect Add to Cart functionality
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={alertOpen}
        autoHideDuration={3000} // Set duration to 3 seconds
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Position at the top center
        sx={{ zIndex: 1500 }} // Ensure Snackbar appears on top of the Dialog
      >
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          Item Added to Cart
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductDetails;
