import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useProducts from '../mockProducts';
import ProductDisplay from './ProductDisplay';

const Store = () => {
  const { productData, loading, error } = useProducts();
  const [page, setPage] = useState(1);
  const productsPerPage = 9;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayedProducts = productData.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <div>
      <h1>Store</h1>
      <Grid container spacing={2}>
        {displayedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductDisplay
              name={product.title}
              description={product.description}
              price={`$${product.price}`}
              imageUrl={product.thumbnail}
              stock={product.stock}
              product={product}  // Pass the entire product object
            />
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} sx={{ marginTop: '20px', alignItems: 'center' }}>
        <Pagination
          count={Math.ceil(productData.length / productsPerPage)}
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
