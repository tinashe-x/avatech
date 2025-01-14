import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import DiscountOffer from './components/DiscountOffer';

function App() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <DiscountOffer /> 
    </div>
  );
}

export default App;
