'use client'
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';



const PaymentForm = () => {
  
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setState({ issuer });
    }
  };

  const handleInputFocus = ({ target }) => {
    setState({
      focused: target.name
    });
  };

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    setState({ [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { issuer } = state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    setState({ formData });
    form.reset();
  };

  return (
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form  >
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <small>E.g.: 49..., 51..., 36..., 37...</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>
            {/* <input type="hidden" name="issuer" value={issuer} /> */}
            <div className="form-actions">
              <button className="btn btn-primary btn-block">PAY</button>
            </div>
          </form>
    </div>
  );
}

export default PaymentForm;