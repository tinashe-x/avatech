import React, { useState } from 'react';
import { processPayment } from '../services/payfastService';

const PaymentForm = ({ totalAmount, onPaymentSuccess, onPaymentError }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    // Add more fields as necessary
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const paymentData = {
        ...formData,
        amount: totalAmount,
        // Include any other required fields by PayFast here
      };
      const result = await processPayment(paymentData);
      setLoading(false);
      onPaymentSuccess(result);
    } catch (error) {
      setLoading(false);
      onPaymentError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div>
        <label>First Name</label>
        <input name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>Last Name</label>
        <input name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone</label>
        <input name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Address</label>
        <input name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default PaymentForm;
