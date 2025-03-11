// src/services/payfastService.js
export const processPayment = async (paymentData) => {
    try {
      const response = await fetch('http://localhost:5000/api/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
      });
      if (!response.ok) {
        throw new Error('Payment processing failed');
      }
      return await response.json();
    } catch (error) {
      console.error('Error processing payment:', error);
      throw error;
    }
  };
  