import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function BasicButtons({ label, to, variant = 'contained', type = 'button', onClick }) {
  return (
    <Stack spacing={2} direction="row">
      {to ? (
        <Button component={Link} to={to} variant={variant} onClick={onClick}>
          {label}
        </Button>
      ) : (
        <Button type={type} variant={variant} onClick={onClick}>
          {label}
        </Button>
      )}
    </Stack>
  );
}

export default BasicButtons;
