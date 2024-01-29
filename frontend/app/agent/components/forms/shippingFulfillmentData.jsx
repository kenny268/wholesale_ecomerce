'use client';
import React,{useState} from 'react'
import {useFormContext} from '../../context/hooks/useContextHooks'
import styles from './Register.module.css'


function ShippingFulfillmentData() {
    const {data,dispatch} = useFormContext();
    const [shippingFulfillmentData, setShippingFulfillmentData] = useState({
        shippingPolicies: '',
        fulfillmentProcess: '',
      });
    
    const [validationErrors, setValidationErrors] = useState({});
    const validateField = (fieldName, value) => {
      switch (fieldName) {
        case 'shippingPolicies':
          return value.trim() !== '' ? null : 'Shipping Policy is required';
        case 'fulfillmentProcess':
          return value.trim() !== '' ? null : 'Fulfilment process is required';
    
        default:
          return null;
      }
    };
  
    const validateFormData = () => {
      const errors = {};
  
      for (const key in shippingFulfillmentData) {
        const fieldError = validateField(key, shippingFulfillmentData[key]);
        if (fieldError) {
          errors[key] = fieldError;
        }
      }
  
      return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingFulfillmentData({
          ...shippingFulfillmentData,
          [name]: value,
        });
      };


    const handleClick = () => {
      const errors = validateFormData();
      if (Object.keys(errors).length === 0) {
        dispatch({type:'CREATE_FORM',payload:{formData:data.formData,legalData:data.legalData,shippingFulfillmentData,steps:data.steps+1}});
      }else{
        setValidationErrors(errors);
      }
    }
    // const handleClickPrev = () => {
    //   dispatch({type:'CREATE_FORM',payload:{data,steps:data.steps-1}});
    // }

  return (
    <>
      <div className={styles.Container}>
        <div>
        <label htmlFor="shippingPolicies">Shipping Policies:</label>
        <textarea
          id="shippingPolicies"
          name="shippingPolicies"
          value={shippingFulfillmentData.shippingPolicies}
          onChange={handleChange}
          required
          style={{ borderColor: validationErrors.shippingPolicies ? 'red' : 'initial' }}
          />
          {validationErrors.shippingPolicies && <div style={{ color: 'red' }}>{validationErrors.shippingPolicies}</div>}
        </div>
      <div>
        <label htmlFor="fulfillmentProcess">Fulfillment Process:</label>
        <textarea
          id="fulfillmentProcess"
          name="fulfillmentProcess"
          value={shippingFulfillmentData.fulfillmentProcess}
          onChange={handleChange}
          required
          style={{ borderColor: validationErrors.fulfillmentProcess ? 'red' : 'initial' }}
          />
          {validationErrors.fulfillmentProcess && <div style={{ color: 'red' }}>{validationErrors.fulfillmentProcess}</div>}
        </div>
    

      <div className="footer">
        {/* <button onClick={handleClickPrev}>Previous</button> */}
        <button onClick={handleClick}>Next</button>
      </div>
    </div>
    </>
  )
}

export default ShippingFulfillmentData