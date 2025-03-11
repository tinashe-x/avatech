import React from 'react';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './Pages/ProductPage';
import ContactPage from './Pages/ContactPage';
import CheckoutPage from './Pages/CheckoutPage';
import AdminDashboard from './Pages/Admin/AdminDashboard';

// function App() {

//   return (
//     <div className="home">
//       <HomePage />
//     </div>
//   );
// }

// export default App;
function App() {
  return (
    <Router>
      <div className="home">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Pages/HomePage" element={<HomePage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="checkout" element={<CheckoutPage />} />

          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;