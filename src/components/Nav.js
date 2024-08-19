import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import TextField from '@mui/material/TextField';
import { useSearch } from '../context/SearchContext'; // Adjust path as necessary

export default function ButtonAppBar() {
  const { cartItems } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term); // Update global search term
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
            <Typography variant="h4" component="div">
              Halflings Novelties
            </Typography>
          </Link>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/store" color="inherit">Shop</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ marginLeft: 2, marginRight: 2, flexGrow: 1 }}
          />
          <Button component={Link} to="/shoppingcart" color="inherit" style={{ position: 'relative' }}>
            <ShoppingCartIcon />
            {totalItems > 0 && (
              <span 
                style={{ 
                  position: 'absolute', 
                  top: '-8px', 
                  right: '-8px', 
                  background: 'red', 
                  color: 'white', 
                  borderRadius: '50%', 
                  padding: '2px 6px', 
                  fontSize: '12px' 
                }}
              >
                {totalItems}
              </span>
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}