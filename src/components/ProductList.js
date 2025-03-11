// src/components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ product = [] }) => {
  return (
    <div>
      {product.map(p => (
        <div key={p.id}>
          <h2>{p.title}</h2>
          <Link to={`/product/${p.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
