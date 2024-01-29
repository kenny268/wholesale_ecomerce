'use client';
import React,{useState} from 'react'
import {useFormContext} from '../../context/hooks/useContextHooks'
import styles from './Register.module.css'


function Page2() {
  
    
    const {data,dispatch} = useFormContext();
    
    const [legalData, setLegalData] = useState({
        businessRegistrationNumber: '',
        taxIdentificationNumber: '',
        vatRegistration: '',
      });
    
    const [validationErrors, setValidationErrors] = useState({});

    const validateField = (fieldName, value) => {
      switch (fieldName) {
        case 'businessRegistrationNumber':
          return value.trim() !== '' ? null : 'Business registration number is required';
        case 'taxIdentificationNumber':
          return value.trim() !== '' ? null : 'Tax identification number is required';
        case 'vatRegistration':
          return value.trim() !== '' ? null : 'Vat registration is required';
        default:
          return null;
      }
    };
  
    const validateFormData = () => {
      const errors = {};
  
      for (const key in legalData) {
        const fieldError = validateField(key, legalData[key]);
        if (fieldError) {
          errors[key] = fieldError;
        }
      }
  
      return errors;
    };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setLegalData({
          ...legalData,
          [name]: value,
        });
      };

    const handleClick = () => {

      const errors = validateFormData();
      if (Object.keys(errors).length === 0) {
        dispatch({type:'CREATE_FORM',payload:{formData:data.formData,legalData,steps:data.steps+1}});
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
        <label htmlFor="businessRegistrationNumber">Business Registration Number:</label>
        <input
          type="text"
          id="businessRegistrationNumber"
          name="businessRegistrationNumber"
          value={legalData.businessRegistrationNumber}
          onChange={handleChange}
          required
          style={{ borderColor: validationErrors.businessRegistrationNumber ? 'red' : 'initial' }}
          />
          {validationErrors.businessRegistrationNumber && <div style={{ color: 'red' }}>{validationErrors.businessRegistrationNumber}</div>}
        </div>
      <div>
        <label htmlFor="taxIdentificationNumber">Tax Identification Number (TIN):</label>
        <input
          type="text"
          id="taxIdentificationNumber"
          name="taxIdentificationNumber"
          value={legalData.taxIdentificationNumber}
          onChange={handleChange}
          required
          style={{ borderColor: validationErrors.taxIdentificationNumber ? 'red' : 'initial' }}
          />
          {validationErrors.taxIdentificationNumber && <div style={{ color: 'red' }}>{validationErrors.taxIdentificationNumber}</div>}
        </div>
      <div>
        <label htmlFor="vatRegistration">VAT Registration (if applicable):</label>
        <input
          type="text"
          id="vatRegistration"
          name="vatRegistration"
          value={legalData.vatRegistration}
          onChange={handleChange}
          style={{ borderColor: validationErrors.vatRegistration ? 'red' : 'initial' }}
          />
          {validationErrors.vatRegistration && <div style={{ color: 'red' }}>{validationErrors.vatRegistration}</div>}
        </div>
      <div className="footer">
        {/* <button onClick={handleClickPrev}>Previous</button> */}
        <button onClick={handleClick}>Next</button>
      </div>
    </div>
    </>
  )
}

export default Page2


