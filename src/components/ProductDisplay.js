import * as React from 'react'
import BasicButtons from '../styles/BasicButtons'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductDisplay() {
return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="The cover of Stubborn Attachments"
        height="140"
        image="https://i.imgur.com/EHyR2nP.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Page Deoderant
        </Typography>
        <Typography variant="body1" color="text.primary">
        This is the worlds strongest Deoderant meant for only the toughest jobs
        </Typography>
        <Typography variant="body2" color="text.secondary">
        $100.00
        </Typography>
      </CardContent>
      <CardActions>
      <form action="http://localhost:3001/create-checkout-session" method="POST">
      <BasicButtons label="Checkout" variant="contained" type="submit" />
      </form>
      </CardActions>
    </Card>
  );
};


