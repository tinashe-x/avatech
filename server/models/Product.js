// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  includes: { type: [String], required: true },
  image: { type: String, default: '' },
  price: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
