import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cart, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, quantity);
    }
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleProceed = () => {
    if (cart.length > 0) {
      navigate('/payment');
    } else {
      alert('Your cart is empty. Please add items to your cart before proceeding to payment.');
    }
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-header">Checkout</h1>
      <div className="checkout-body">
        <div className="order-summary">
          {cart.map(item => (
            <div key={item.id} className="order-item">
              <span>{item.title}</span>
              <span>R {item.price.toFixed(2)}</span>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                min="1"
              />
              <span>Subtotal: R {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="order-total">
            Total: R {totalAmount.toFixed(2)}
          </div>
        </div>
        <div className="payment-summary">
          <h2>Payment Details</h2>
          <p>Please review your order carefully. When you’re ready, click below to proceed to our secure payment gateway.</p>
          {/* Additional payment or billing information can be inserted here if needed */}
        </div>
      </div>
      <button className="proceed-button" onClick={handleProceed}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default Checkout;
