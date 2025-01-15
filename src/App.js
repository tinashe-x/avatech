import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import DiscountOffer from './components/DiscountOffer';
import Banner from './components/Banner';
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import ComingSoon from './components/CommingSoon';
import TemplateShowcase from './components/TemplateShowcase';
import Footer from './components/Footer';


function App() {

  const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
  // Simulate a delay for loading resources (e.g., 3 seconds)
  const timeout = setTimeout(() => {
    setIsLoading(false); // Hide preloader after the delay
  }, 5000);

  return () => clearTimeout(timeout); // Cleanup the timeout
}, []);


  return (
    <div className="home">
      {isLoading ? <Preloader /> : null} 
      <Navbar />
      <Hero />
      <DiscountOffer />
      <Banner />
      <TemplateShowcase />
      <ComingSoon />
      <Footer />
    </div>
  );
}

export default App;
