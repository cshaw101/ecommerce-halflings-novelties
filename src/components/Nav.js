import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


export default function ButtonAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
            <Typography variant="h4" component="div">
              Halflings Novelties
            </Typography>
          </Link>
            <Button href='/store' color="inherit">Shop</Button>
            <Button href='/about' color="inherit">About</Button>
            <Button href='shoppingcart' color="inherit"><ShoppingCartIcon/></Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }