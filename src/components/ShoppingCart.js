import React from 'react';
import BasicButtons from '../styles/BasicButton';


const ShoppingCart = () => {
  return (
    <div>
      <h1>ShoppingCart</h1>
      <BasicButtons to='/checkout' label="Checkout" variant="contained" />
    </div>
  )
}

export default ShoppingCart
