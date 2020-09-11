const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_zN6DWdbXFUSaqyqe7gmVnHfr00WWObyokD');

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/payments/create', async (req, res) => {
	const total = req.query.total;

	console.log('Payment Request Received BOOM!!! for this amount - ', total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency
		currency: 'usd',
	});

	// OK - created something
	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// Listen command
exports.api = functions.https.onRequest(app);
