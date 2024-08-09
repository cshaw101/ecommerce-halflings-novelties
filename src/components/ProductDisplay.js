import React from 'react'
import BasicButtons from '../styles/BasicButtons'

const ProductDisplay = () => (
    <section>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
        <h3>Page Deoderant</h3>
        <h5>$100.00</h5>
        </div>
      </div>
      <form action="http://localhost:3001/create-checkout-session" method="POST">
      <BasicButtons label="Checkout" variant="contained" type="submit" />
        
      </form>
    </section>
  );

 export default ProductDisplay


