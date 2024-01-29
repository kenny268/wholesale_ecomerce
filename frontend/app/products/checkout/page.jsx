'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PaymentForm from './paymentForm';

const Checkout = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [mpesaDetails, setMpesaDetails] = useState({
    phoneNumber: '',
    amount: 0, // Set the default amount
  })

  const handlePayment = () => {
    // Perform payment processing logic based on the selected payment method
    // For demo purposes, just log the selected method
    console.log(`Payment method selected: ${paymentMethod}`);

    // Redirect to a success page or perform further actions
    router.push('/checkout/success');
  };

  const renderPaymentForm = () => {
    if (paymentMethod === 'mpesa') {
      return (
        <div>
        <h2>M-Pesa Payment Details</h2>
        <label>
          Phone Number:
          <input
            type="text"
            value={mpesaDetails.phoneNumber}
            onChange={(e) => setMpesaDetails({ ...mpesaDetails, phoneNumber: e.target.value })}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={mpesaDetails.amount}
            onChange={(e) => setMpesaDetails({ ...mpesaDetails, amount: e.target.value })}
          />
        </label>
      </div>
      );
    } else if (paymentMethod === 'card') {
      return (
        <PaymentForm/>
      );
    }

    return null; // Render nothing if no payment method selected
  };

  return (
    <div>
      <h1>Checkout</h1>

      <form>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={() => setPaymentMethod('card')}
          />
          Pay with Card
        </label>

        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="mpesa"
            checked={paymentMethod === 'mpesa'}
            onChange={() => setPaymentMethod('mpesa')}
          />
          Pay with M-Pesa
        </label>

        <button type="button" onClick={handlePayment}>
          Proceed to Pay
        </button>
      </form>

      {renderPaymentForm()}
    </div>
  );
};

export default Checkout;
