const stripe = require('stripe')('sk_test_51PlDV7BiccO5TC0vkqb9gggPYzZkoCBsCy40Kjc8z7akzugBw1CRMt1Yq5BAVxpX7yOth6rTHyUpYZs4Ei8qv4xj00gU74FsXo');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const YOUR_DOMAIN = 'http://localhost:3000';

app.use(express.static('public'));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Adjust this if needed
  methods: ['GET', 'POST'],
}));


app.get('/test', (req, res) => {
  res.send('Server is working!');
});

app.post('/create-checkout-session', async (req, res) => {
  try {
    const { cartItems } = req.body;
    console.log('Received cartItems:', cartItems);

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({ error: 'Cart items are required' });
    }

    const lineItems = cartItems.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
          images: [item.images[0]], // use the first image
        },
        unit_amount: Math.round(item.price * 100), // Convert price to cents and round
      },
      quantity: item.quantity,
    }));

    console.log('Stripe lineItems:', lineItems);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/failure`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


//set this to take in my products in the shopping cart
//set the prices of the products in the line: https://docs.stripe.com/payments/accept-a-payment?platform=web&ui=stripe-hosted#create-product-prices-upfront

