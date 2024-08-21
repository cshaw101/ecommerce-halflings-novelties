import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import TextField from '@mui/material/TextField';
import { useSearch } from '../context/SearchContext';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function ButtonAppBar() {
  const { cartItems } = useCart();
  const { setSearchTerm } = useSearch();
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to control search bar visibility

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Trigger search on Enter key press and clear the search field after submission
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setSearchTerm(localSearchTerm); // Trigger global search
      setLocalSearchTerm(''); // Clear search input
    }
  };

  // Handle search button click and clear the search field after submission
  const handleSearchClick = () => {
    if (isSearchOpen) {
      setSearchTerm(localSearchTerm); // Trigger global search if already open
      setLocalSearchTerm(''); // Clear search input
    }
    setIsSearchOpen(!isSearchOpen); // Toggle search bar visibility
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo (Left-aligned) */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h4" component="div">
              Halflings Novelties
            </Typography>
          </Link>

          {/* Centered Navigation Links */}
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            <Button component={Link} to="/" color="inherit">Home</Button>
            <Button component={Link} to="/store" color="inherit">Shop</Button>
            <Button component={Link} to="/about" color="inherit">About</Button>
          </Box>

          {/* Search and Cart Icons (Right-aligned) */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Search Bar (appears when search is toggled) */}
            <Box
              sx={{
                display: isSearchOpen ? 'flex' : 'none', // Conditionally display search bar
                width: isSearchOpen ? '200px' : '0px', // Define search bar size
                transition: 'width 0.5s ease',
                overflow: 'hidden', // Prevent content overflow during transition
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                value={localSearchTerm}
                onChange={(e) => setLocalSearchTerm(e.target.value)} // Update local state
                onKeyPress={handleKeyPress} // Listen for Enter key press
                sx={{ width: '100%' }}
              />
              <IconButton
                onClick={handleSearchClick} // Close search on click
                color="inherit"
                aria-label="close-search"
              >
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Search Icon (always visible when search is closed) */}
            {!isSearchOpen && (
              <IconButton
                onClick={handleSearchClick} // Toggle search bar visibility on click
                color="inherit"
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            )}

            {/* Cart Icon */}
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
                    fontSize: '12px',
                  }}
                >
                  {totalItems}
                </span>
              )}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
