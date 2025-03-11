import React from 'react';

const ProductList = ({ products, addToCart }) => (
  <div>
    {products.map(product => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

export default ProductList;
