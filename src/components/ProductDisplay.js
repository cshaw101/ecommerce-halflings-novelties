import * as React from 'react';
import BasicButtons from '../styles/BasicButtons';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ProductDisplay({ name, description, price, imageUrl }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <form action="http://localhost:3001/create-checkout-session" method="POST">
          <BasicButtons label="Checkout" variant="contained" type="submit" />
        </form>
      </CardActions>
    </Card>
  );
}
