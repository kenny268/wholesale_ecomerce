'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PaymentForm from './cardForm';
import styles from './Checkout.module.css'
import MpesaForm from './mpesaForm';

const Checkout = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('');
  

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
       <MpesaForm/>
      );
    } else if (paymentMethod === 'card') {
      return (
        <PaymentForm/>
      );
    }

    return null; // Render nothing if no payment method selected
  };

  return (
    <div className={styles.Overview}>
      <h1>Checkout</h1>

      <form className={styles.Form}>
        <div>
        <label className={styles.inputLabel}>
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            
            checked={paymentMethod === 'card'}
            onChange={() => setPaymentMethod('card')}
          />
          Pay with Card
        </label>

        <label className={styles.inputLabel}>
          <input
            type="radio"
            name="paymentMethod"
            value="mpesa"
            checked={paymentMethod === 'mpesa'}
            onChange={() => setPaymentMethod('mpesa')}
          />
          Pay with M-Pesa
        </label>
        </div>

        {/* <button type="button" onClick={handlePayment}>
          Proceed to Pay
        </button> */}
      </form>

      {renderPaymentForm()}
    </div>
  );
};

export default Checkout;
