// src/components/ProductComponent.js
import React from "react";
import "../styles/Product.css";
import { Link } from 'react-router-dom';

const ProductComponent = ({ title, description, includes, image, productId }) => {
  return (
    <div className="product-container">
      <div className="product-text">
        <h1 className="product-title">{title}</h1>
        <h3 className="product-includes-title">Description</h3>
        <p className="product-description">{description}</p>
        <h3 className="product-includes-title">Includes</h3>
        <ul className="product-includes">
          {includes.map((item, index) => (
            <li key={index} className="include-item">
              {item}
            </li>
          ))}
        </ul>
        <Link to={`/product/${productId}`}>View Details</Link>
      </div>
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ProductComponent;
