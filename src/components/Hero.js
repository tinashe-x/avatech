import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1>WELCOME TO AVATECH.</h1>
        <h3>Building The Future</h3>
        <p>
          We're here to help! At AVATECH, we understand that every project is unique,
          and we're committed to providing you with tailored solutions to meet your needs.
        </p>
        <p>
          Looking to get a quote for your upcoming project or have an inquiry about our services?
          We're here to help! At avatechinfosystems@gmail.com
        </p>
        <button className="shop-now">Shop Now</button>
      </div>
    </div>
  );
}

export default Hero;
