// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// In-memory product store
let products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
];

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// POST add a new product
app.post('/api/products', (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update a product
app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  let product = products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  product = { ...product, ...req.body };
  products = products.map(p => (p.id === productId ? product : p));
  res.json(product);
});

// DELETE a product
app.delete('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  products = products.filter(p => p.id !== productId);
  res.json({ message: 'Product deleted' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
