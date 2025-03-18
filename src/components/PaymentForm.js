// src/components/PaymentForm.js
import React, { useState } from 'react';
import '../styles/PaymentForm.css';
import Navbar from './NavBar';
import Footer from './Footer';

const PaymentForm = ({ totalAmount, onPaymentSuccess, onPaymentError }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    // Create an order/payment object – you may extend this with more details
    const paymentDetails = {
      orderId: 'order-' + Date.now(), // For example, generate a unique order ID
      amount: totalAmount,
      itemName: 'Your Order Description', // You can adjust this accordingly
      customerEmail: 'customer@example.com', // Optionally capture customer email
      firstName: 'John', // Optionally capture customer's first name
      lastName: 'Doe',   // Optionally capture customer's last name
      // Include any additional fields needed by your backend/PayFast integration
    };

    try {
      // Call your backend endpoint to create the PayFast payment data
      const response = await fetch('https://your-backend-domain.com/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentDetails),
      });
      const { payfastUrl, payfastData } = await response.json();

      // Create a form dynamically and submit it to PayFast
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = payfastUrl;

      Object.keys(payfastData).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = payfastData[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error('Payment error:', error);
      if (onPaymentError) onPaymentError(error);
    }
  };

  return (
    <div>
      <Navbar />
      <form className="payment-form" onSubmit={handlePaymentSubmit}>
        <h2>Payment Details</h2>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder="123"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
      <Footer />
    </div>
  );
};

export default PaymentForm;
