import React from 'react';
import '../styles/DiscountOffer.css';
import DiscountOfferImg from '../images/DiscountOfferImg.jpg';

function DiscountOffer() {
  return (
    <section className="discount-offer">
      <div className="offer-content">
        <h2>E-COMMERCE WEBSITE</h2>
        <h1>15% OFF</h1>
        <p>E-Commerce Websites are now 15% off for our AVA TECH opening sale.</p>
        <p>Purchase today and don’t miss out on great savings!</p>
        <button className="cta-button">View Package</button>
      </div>
      <div className="offer-image">
        <img src={DiscountOfferImg} alt="E-Commerce Offer" />
      </div>
    </section>
  );
}

export default DiscountOffer;
