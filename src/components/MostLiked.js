import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const MostLiked = () => {
  // Define the categories and their corresponding background images
  const categories = [
    { name: 'Cards', image: 'https://via.placeholder.com/300x200?text=Cards' },
    { name: 'Apparel', image: 'https://via.placeholder.com/300x200?text=Apparel' },
    { name: 'Toys', image: 'https://via.placeholder.com/300x200?text=Toys' },
    { name: 'Games', image: 'https://via.placeholder.com/300x200?text=Games' },
  ];

  return (
    <Container sx={{ marginTop: '20px' }}>
      <Grid container spacing={2} justifyContent="space-between">
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                height: 200,
                backgroundColor: '#f0f0f0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
                textAlign: 'center',
                padding: 2,
                backgroundImage: `url(${category.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                fontWeight: 'bold',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  padding: '5px 10px',
                  borderRadius: '5px',
                }}
              >
                {category.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MostLiked;
