import React, { useState } from 'react';
import '../styles/PaymentForm.css';
import Navbar from './NavBar';
import Footer from './Footer';

const PaymentForm = ({ totalAmount, onPaymentSuccess, onPaymentError }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  // Uncomment and implement when integrating payment processing
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Process payment logic here
  //   // On success: onPaymentSuccess(result);
  //   // On error: onPaymentError(error);
  // };

  return (
    <div>
      <Navbar />
      <form className="payment-form" /* onSubmit={handleSubmit} */>
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
