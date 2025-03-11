// src/components/CartPopup.js
import React from 'react';
import { useCart } from '../contexts/CartContext';
import '../styles/CartPopup.css';

const CartPopup = ({ onClose }) => {
  const { cart, removeItem } = useCart();

  return (
    <div className="cart-popup-overlay" onClick={onClose}>
      <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.name}</span> - <span>${item.price}</span>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartPopup;
