// server/server.js

const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Create a unique file name with the original extension
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });
const express = require('express');
const cors = require('cors');
const app = express();

app.use('/uploads', express.static('uploads'));

app.use(cors());
app.use(express.json());



// In-memory product store
// server/server.js

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Example in server/server.js
app.post('/api/products', upload.single('image'), (req, res) => {

  const { title, description, includes, price } = req.body;
  
  // Validate required fields (image is optional if you want)
  if (!title || !description || !includes || !price) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  // Create a new product object with the uploaded image path
  const newProduct = {
    id: Date.now(),
    title,
    description,
    includes: includes.split(',').map(item => item.trim()),
    image: req.file ? `http://localhost:5000/uploads/${req.file.filename}` : '',
    price: parseFloat(price),
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});



// PUT update a product
app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  let product = products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ error: 'Product not found' });

  // Update each field as needed
  const { title, description, includes, image, price } = req.body;
  product = { 
    ...product, 
    title: title || product.title, 
    description: description || product.description, 
    includes: includes || product.includes, 
    image: image || product.image, 
    price: price || product.price 
  };

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
