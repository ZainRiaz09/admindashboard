const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (req, res) => {
    try {
        const { amount, currency = 'usd' } = req.body;

        // Validate amount
        if (!amount || amount < 50) { // Minimum amount in cents
            return res.status(400).json({ error: 'Invalid amount' });
        }

        // Create a PaymentIntent
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method_types: ['card'],
            metadata: {
                userId: req.user.id, // Assuming you have authentication middleware
                description: 'Feasibility Project Payment'
            }
        });

        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id
        });
    } catch (error) {
        console.error('Payment Intent Error:', error);
        res.status(500).json({ error: 'Unable to create payment intent' });
    }
};

const confirmPayment = async (req, res) => {
    try {
        const { paymentIntentId } = req.body;

        // Retrieve the PaymentIntent
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

        // Check payment status
        if (paymentIntent.status === 'succeeded') {
            // Save payment details to your database
            // You might want to create a payment record here
            res.status(200).json({
                success: true,
                message: 'Payment successful',
                paymentDetails: {
                    id: paymentIntent.id,
                    amount: paymentIntent.amount,
                    currency: paymentIntent.currency
                }
            });
        } else {
            res.status(400).json({ 
                success: false, 
                message: 'Payment not completed' 
            });
        }
    } catch (error) {
        console.error('Payment Confirmation Error:', error);
        res.status(500).json({ error: 'Unable to confirm payment' });
    }
};

module.exports = {
    createPaymentIntent,
    confirmPayment
};
