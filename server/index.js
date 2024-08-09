const stripe = require('stripe')('sk_test_51PlDV7BiccO5TC0vkqb9gggPYzZkoCBsCy40Kjc8z7akzugBw1CRMt1Yq5BAVxpX7yOth6rTHyUpYZs4Ei8qv4xj00gU74FsXo');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const YOUR_DOMAIN = 'http://localhost:3000';

app.use(express.static('public'));
app.use(express.json());

app.get('/test', (req, res) => {
  res.send('Server is working!');
});

app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: 'price_1PlbyfBiccO5TC0vJ5jlOkPc',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/?success=true`,
      cancel_url: `${YOUR_DOMAIN}/?canceled=true`,
    });

    res.redirect(303, session.url);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
