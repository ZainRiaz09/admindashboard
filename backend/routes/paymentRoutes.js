const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const auth = require('../middleware/auth');

// Create payment intent (requires authentication)
router.post('/create-payment-intent', auth, paymentController.createPaymentIntent);

// Confirm payment (requires authentication)
router.post('/confirm-payment', auth, paymentController.confirmPayment);

module.exports = router;
