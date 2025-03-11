import React, { useState, useEffect } from 'react';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './Pages/ProductPage';
import ContactPage from './Pages/ContactPage';
import CheckoutPage from './Pages/CheckoutPage';
// import ProductList from './Pages/ProductList';
import ProductDetails from './Pages/AllProductDetails';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import { getProducts } from './services/productService';

function App() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProduct(data);
    };
    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="home">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />	
          <Route path="/products" element={<ProductDetails />} />
          <Route path="/products/:id" element={<ProductDetails products={product} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;