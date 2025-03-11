// src/Pages/CheckoutPage.js
import React from 'react';
import Checkout from '../components/Checkout';
import Navbar from "../components/NavBar";
import Footer from '../components/Footer';


const CheckoutPage = () => {
  return (
    <div className="home">
      <Navbar />
      <Checkout />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
