import React from 'react';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from './Pages/ContactPage';
import CheckoutPage from './Pages/CheckoutPage';
import AllProducts from './Pages/AllProducts';
import ProductDetails from './Pages/ProductDetails';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import CartProvider from './contexts/CartContext';
import { ToastContainer } from 'react-toastify';
import PaymentPage from './Pages/PaymentPage';
// import { getProducts } from './services/productService';

function App() {
  // app.js (in project root)

  return (
    <CartProvider>
    <Router>
      <div className="home">
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;