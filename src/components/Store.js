import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import mockProducts from '../mockProducts';
import ProductDisplay from './ProductDisplay';

const Store = () => {
  const [page, setPage] = useState(1);
  const productsPerPage = 6;

  const handleChange = (event, value) => {
    setPage(value);
  };

  // Determine the products to display based on the current page
  const displayedProducts = mockProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return (
    <div>
      <h1>Store</h1>
      <Grid container spacing={2}>
        {displayedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductDisplay
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} sx={{ marginTop: '20px', alignItems: 'center' }}>
        <Pagination
          count={Math.ceil(mockProducts.length / productsPerPage)}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default Store;
