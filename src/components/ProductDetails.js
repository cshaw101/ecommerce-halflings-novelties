// ProductDetails.js
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ open, onClose, product }) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(product.thumbnail); // Default to the thumbnail image

  if (!product) return null;

  const galleryImages = product.images || [];
  
  const handleBackClick = () => {
    navigate('/store');
    onClose(); 
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <div className="product">
          {/* Back button */}
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
                {/* Display the selected image */}
                <img 
                  src={selectedImage} 
                  alt={product.title} 
                  style={{ width: '300px', height: 'auto', maxWidth: '100%' }} 
                />
              </div>
              <div className="photo-album" style={{ marginTop: '10px' }}>
                <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
                  {/* Gallery images */}
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
              <span>In Stock: {product.stock}</span>
            </div>
            <div className="price">
              $ <span>{product.price}</span>
            </div>
            <div className="description">
              <h3>Details</h3>
              <p>{product.description}</p>
            </div>
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
              Add to Cart
            </Button>
           
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetails;
