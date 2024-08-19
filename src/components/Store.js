import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import useProducts from '../mockProducts';
import ProductDisplay from './ProductDisplay';
import MostLiked from './MostLiked';
import { useSearch } from '../context/SearchContext'; // Adjust path as necessary

const Store = () => {
  const { productData, loading, error } = useProducts();
  const { searchTerm } = useSearch();
  const [page, setPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    console.log('Search term in Store:', searchTerm); // Ensure the search term is received
  }, [searchTerm]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  // Filter products based on the search term
  const filteredProducts = productData.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedProducts = filteredProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  const skeletonArray = Array.from(new Array(productsPerPage));

  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <div>
      <MostLiked />
      <h1>Our Products</h1>
      <Grid container spacing={2}>
        {loading
          ? skeletonArray.map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Skeleton variant="rectangular" width="100%" height={200} />
                <Skeleton width="60%" />
                <Skeleton width="40%" />
                <Skeleton width="100%" />
                <Skeleton width="80%" />
              </Grid>
            ))
          : displayedProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductDisplay
                  name={product.title}
                  description={product.description}
                  price={`$${product.price}`}
                  imageUrl={product.thumbnail}
                  stock={product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  product={product} // Pass the entire product object
                />
              </Grid>
            ))}
      </Grid>
      <Stack spacing={2} sx={{ marginTop: '20px', alignItems: 'center' }}>
        <Pagination
          count={Math.ceil(filteredProducts.length / productsPerPage)}
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