import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function BasicButtons({ label, to, variant = 'contained' }) {
  return (
    <Stack spacing={2} direction="row">
      <Button component={Link} to={to} variant={variant}>
        {label}
      </Button>
    </Stack>
  );
}

export default BasicButtons;
