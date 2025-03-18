// server/app.js
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Use body-parser middleware for form data and JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mount PayFast routes
const payfastRoutes = require('./routes/payfast');
app.use('/payfast', payfastRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
