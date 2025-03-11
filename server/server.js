// server/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware to allow cross-origin requests
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

// Payment processing endpoint
app.post('/api/process-payment', async (req, res) => {
  const { firstName, lastName, email, phone, address, amount } = req.body;
  
  // Basic validation – expand this as needed
  if (!firstName || !lastName || !email || !phone || !address || !amount) {
    return res.status(400).json({ error: 'Missing required payment details.' });
  }
  
  try {
    // TODO: Integrate with PayFast API using your credentials.
    // For now, simulate a successful payment response.
    const transactionId = 'SIMULATED_TXN_12345'; // Replace with real transaction ID
    return res.json({ status: 'success', transactionId });
  } catch (error) {
    console.error('Payment processing error:', error);
    return res.status(500).json({ error: 'Payment processing failed.' });
  }
});

// Start the server on port 5000 or the port defined in .env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
