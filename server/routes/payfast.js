// server/routes/payfast.js
const express = require('express');
const router = express.Router();
const crypto = require('crypto');

// Your PayFast credentials from environment variables
const PAYFAST_PASSPHRASE = process.env.PAYFAST_PASSPHRASE || '';

// Helper function to generate a signature hash (as in your create-payment endpoint)
const generateSignature = (data) => {
  const filteredData = Object.keys(data)
    .filter(key => data[key] !== '' && key !== 'signature')
    .sort()
    .map(key => `${key}=${encodeURIComponent(data[key]).replace(/%20/g, '+')}`)
    .join('&');

  const dataString = PAYFAST_PASSPHRASE
    ? `${filteredData}&passphrase=${encodeURIComponent(PAYFAST_PASSPHRASE).replace(/%20/g, '+')}`
    : filteredData;

  return crypto.createHash('md5').update(dataString).digest('hex');
};

// Success URL – when payment is completed
router.post('/payment-success', (req, res) => {
  const receivedData = req.body; // Or req.query if PayFast sends data via query string

  // Validate signature
  const generatedSignature = generateSignature(receivedData);
  if (generatedSignature === receivedData.signature) {
    // Payment is verified; update your order status in your database accordingly
    res.send('Payment Successful! Thank you for your purchase.');
  } else {
    res.status(400).send('Payment verification failed.');
  }
});

// Cancel URL – when the user cancels the payment
router.get('/payment-cancel', (req, res) => {
  // You can log this event and notify the user
  res.send('Payment Cancelled. You can try again or contact support.');
});

// Notify URL – for handling PayFast IPN (Instant Payment Notification)
router.post('/payfast-ipn', (req, res) => {
  const receivedData = req.body;

  // Validate the IPN data
  const generatedSignature = generateSignature(receivedData);
  if (generatedSignature === receivedData.signature) {
    // IPN verified – update order status accordingly in your database
    // For example:
    // updateOrderStatus(receivedData.m_payment_id, 'Paid');
    res.status(200).send('IPN Received and Verified');
  } else {
    res.status(400).send('IPN Verification Failed');
  }
});

module.exports = router;
