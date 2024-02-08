'use client'
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from './Checkout.module.css';



const PaymentForm = () => {
  
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange= (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };


  const handleSubmit = e => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    setState({ formData });
    form.reset();
  };

  console.log('',state)

  return (
    <div className={styles.card}>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
        styles = {{width:'100%'}}
      />

      <div className={styles.cardForm}>
      <form onSubmit={handleSubmit} >
            <div className={styles.formGroup}>
              <input
                type="number"
                name="number"
                className={styles.formControl}
                placeholder="Card Number"
                required
                pattern="[\d| ]{16,22}"
                onChange={handleInputChange}
              />

             <p><small>E.g.: 49..., 51..., 36..., 37...</small></p> 
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                className={styles.formControl}
                placeholder="Name"
                required
                onChange={handleInputChange}
                
              />
            </div>
            <div className={styles.row}>
              <div className={styles.col6}>
                <input
                  type="tel"
                  name="expiry"
                  className={styles.formControl}
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.col6}>
                <input
                  type="tel"
                  name="cvc"
                  className={styles.formControl}
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* <input type="hidden" name="issuer" value={issuer} /> */}
            <div className={styles.formActions}>
              <button className={styles.btn}>PAY</button>
            </div>
      </form>
      
      </div>
    </div>
  );
}

export default PaymentForm;