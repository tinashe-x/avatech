import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => (
  
  <div>
    {cartItems.map(item => (
      <div key={item.id}>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    ))}
  </div>
);

export default Cart;
