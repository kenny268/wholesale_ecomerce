'use client'
import React, { useState } from 'react';
import styles from './Checkout.module.css'
function MpesaForm() {
    const [mpesaDetails, setMpesaDetails] = useState({
        phoneNumber: '',
        amount: 0, // Set the default amount
      })
  return (
    <div className={styles.MpesaForm}>
    <h2>M-Pesa Payment Details</h2>
        <div>
            <label className={styles.inputLabelMpesa}>
                Phone Number:
            </label>
            <input
                type="text"
                value={mpesaDetails.phoneNumber}
                onChange={(e) => setMpesaDetails({ ...mpesaDetails, phoneNumber: e.target.value })}
            />

            <label className={styles.inputLabelMpesa}>
                Amount:
            </label>
            <input
                type="number"
                value={mpesaDetails.amount}
                onChange={(e) => setMpesaDetails({ ...mpesaDetails, amount: e.target.value })}
            />

        </div>
        <button>Pay</button>
  </div>
  )
}

export default MpesaForm