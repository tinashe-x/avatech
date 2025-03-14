import React from 'react';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from './Pages/ContactPage';
import CheckoutPage from './Pages/CheckoutPage';
import AllProducts from './Pages/AllProducts';
import ProductDetails from './Pages/ProductDetails';
import AdminDashboard from './Pages/Admin/AdminDashboard';
// import { getProducts } from './services/productService';

function App() {

  // const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const data = await getProducts();
  //     setProduct(data);
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <Router>
      <div className="home">
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;