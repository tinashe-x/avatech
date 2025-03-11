import React from 'react';
import { useCart } from '../contexts/CartContext';
import PaymentForm from './PaymentForm';
import '../styles/Checkout.css'; 

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const totalAmount = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

  const handlePaymentSuccess = (result) => {
    console.log('Payment Successful:', result);
    clearCart();
    // Optionally, redirect to a confirmation page or display a success message.
  };

  const handlePaymentError = (error) => {
    console.error('Payment Error:', error);
    // Optionally, show an error message to the user.
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-body">
      <div className="order-summary">
        {cart.map(item => (
          <div key={item.id} className="order-item">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))}
        <hr />
        <div className="order-total">
          <strong>Total: R{totalAmount.toFixed(2)}</strong>
        </div>
      </div>
      <PaymentForm 
        totalAmount={totalAmount} 
        onPaymentSuccess={handlePaymentSuccess} 
        onPaymentError={handlePaymentError} 
      />
      </div>
    </div>

  );
};

export default Checkout;
