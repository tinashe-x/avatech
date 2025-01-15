import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import DiscountOffer from './components/DiscountOffer';
import Banner from './components/Banner';
// import WebsiteTemplates from './components/WebsiteTemplates';

function App() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <DiscountOffer />
      <Banner />
      {/* <WebsiteTemplates /> */}
    </div>
  );
}

export default App;
