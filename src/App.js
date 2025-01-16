import React from 'react';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './Pages/ProductPage';
import ContactPage from './Pages/ContactPage';

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
          <Route path="/Pages/ProductPage" element={<ProductPage />} />
          <Route path="/Pages/ContactPage" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;