import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function BasicButtons({ label, to, variant = 'contained', type = 'button' }) {
  return (
    <Stack spacing={2} direction="row">
      {to ? (
        <Button component={Link} to={to} variant={variant}>
          {label}
        </Button>
      ) : (
        <Button type={type} variant={variant}>
          {label}
        </Button>
      )}
    </Stack>
  );
}

export default BasicButtons;
