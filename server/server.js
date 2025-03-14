const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product'); // Import the Product model

// Connect to MongoDB
mongoose.connect('mongodb+srv://avatechinfosystems:440Hz01$@avatech-cluster.4rxu1.mongodb.net/?retryWrites=true&w=majority&appName=AvaTech-Cluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Configure storage for image uploads
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

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// GET all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a product by productId
app.get('/api/products/:productId', async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findOne({ productId });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create a new product (with image upload)
app.post('/api/products', upload.single('image'), async (req, res) => {
  const { title, description, includes, price } = req.body;
  
  // Validate required fields
  if (!title || !description || !includes || !price) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const newProduct = new Product({
    productId: Date.now().toString(), // Generate a unique productId as a string
    title,
    description,
    includes: includes.split(',').map(item => item.trim()),
    image: req.file ? `http://localhost:5000/uploads/${req.file.filename}` : '',
    price: parseFloat(price)
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update a product by productId
app.put('/api/products/:productId', async (req, res) => {
  const productId = req.params.id;
  const { title, description, includes, image, price } = req.body;
  
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { productId },
      {
        title,
        description,
        // Only update includes if provided (and split into an array)
        ...(includes && { includes: includes.split(',').map(item => item.trim()) }),
        image,
        price
      },
      { new: true, runValidators: true }
    );
    if (!updatedProduct) return res.status(404).json({ error: 'Product not found' });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a product by productId
app.delete('/api/products/productId', async (req, res) => {
  const productId = req.params.id;
  
  try {
    const deletedProduct = await Product.findOneAndDelete({ productId });
    if (!deletedProduct) return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
