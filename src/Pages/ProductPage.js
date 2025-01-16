import React from "react";
import ProductComponent from "../components/Product";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/Product.css";
import DiscountOfferImg from '../images/DiscountOfferImg.jpg';

const ProductPage = () => {
  const productDetails = {
    title: "E-Commerce Web Package",
    description:
      `Description Our e-commerce web package is the perfect solution for businesses looking to establish a strong online presence.\nWith our easy-to-use platform, you can quickly and easily create a professional website to showcase your products and services.`,
    includes: [
      "Customizable Website Template",
      "Add Your Branding",
      "Secure Payment Options",
      "Card/PayPal",
      "Shopping Cart & Online Store Functionality",
      "E-Commerce Features",
    ],
    image: DiscountOfferImg, // Replace with your image URL
  };

  return (
    <div>
      <Navbar />
      <ProductComponent
        title={productDetails.title}
        description={productDetails.description}
        includes={productDetails.includes}
        image={productDetails.image}
      />
      <Footer />
    </div>
  );
};

export default ProductPage;
