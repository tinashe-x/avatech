// src/components/CartPopup.js
import React from 'react';
import { useCart } from '../contexts/CartContext';
import '../styles/CartPopup.css';
import { BiCart } from 'react-icons/bi';

const CartPopup = ({ onClose }) => {
  const { cart, removeItem } = useCart();

  return (
    <div className="cart-popup-overlay" onClick={onClose}>
      <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
        <h2>My Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <BiCart className="cart-icon" />                <span>{item.title}</span> : <span>R{item.price}</span>
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
