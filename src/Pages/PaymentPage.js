// src/pages/PaymentPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentForm from '../components/PaymentForm';
import { useCart } from '../contexts/CartContext';

const PaymentPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePaymentSuccess = (result) => {
    console.log('Payment Successful:', result);
    clearCart();
    navigate.push('/confirmation'); // Redirect to confirmation page
  };

  const handlePaymentError = (error) => {
    console.error('Payment Error:', error);
  };

  return (
    <div className="payment-page-container">
      <h1>Payment</h1>
      <PaymentForm
        totalAmount={totalAmount}
        onPaymentSuccess={handlePaymentSuccess}
        onPaymentError={handlePaymentError}
      />
    </div>
  );
};

export default PaymentPage;
