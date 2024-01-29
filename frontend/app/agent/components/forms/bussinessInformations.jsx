'use client';
import React,{useState} from 'react'
import {useFormContext} from '../../context/hooks/useContextHooks'
import styles from './Register.module.css'
import Navbar from './navbar';


function Page1() {
    
  const {data,dispatch} = useFormContext();
  const [validationErrors, setValidationErrors] = useState({});

  const [formData, setFormData] = useState({
    companyName: '',
    businessAddress: '',
    website: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'companyName':
        return value.trim() !== '' ? null : 'Company name is required';
      case 'businessAddress':
        return value.trim() !== '' ? null : 'Business address is required';
      case 'contactPerson':
        return value.trim() !== '' ? null : 'Name is required';
      case 'contactEmail':
        return value.trim() !== '' ? null : 'Email address is required';
      case 'contactPhone':
        return value.trim() !== '' ? null : 'Phone Number is required';
      default:
        return null;
    }
  };

  const validateFormData = () => {
    const errors = {};

    for (const key in formData) {
      const fieldError = validateField(key, formData[key]);
      if (fieldError) {
        errors[key] = fieldError;
      }
    }

    return errors;
  };

  const handleClick = (e) => {
      e.preventDefault()

      const errors = validateFormData();
      if (Object.keys(errors).length === 0) {
      dispatch({type:'CREATE_FORM',payload:{formData,steps:data.steps+1}});
    }else{
      setValidationErrors(errors);
    }
  }

  return (
    <>
    <form className={styles.Container}>
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
          style={{ borderColor: validationErrors.companyName ? 'red' : 'initial' }}
        />
        {validationErrors.companyName && <div style={{ color: 'red' }}>{validationErrors.companyName}</div>}
      </div>

      <div>
        <label htmlFor="businessAddress">Business Address:</label>
        <input
          type="text"
          id="businessAddress"
          name="businessAddress"
          value={formData.businessAddress}
          onChange={handleChange}
          required
          style={{ borderColor: validationErrors.businessAddress ? 'red' : 'initial' }}
          />
          {validationErrors.businessAddress && <div style={{ color: 'red' }}>{validationErrors.businessAddress}</div>}
        </div>
        
      <div>
        <label htmlFor="website">Website:</label>
        <input
          type="text"
          id="website"
          name="website"
          placeholder='Optional'
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="contactPerson">Contact Person:</label>
        <input
          type="text"
          id="contactPerson"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={handleChange}
          required
          style={{ borderColor: validationErrors.contactPerson ? 'red' : 'initial' }}
          />
          {validationErrors.contactPerson && <div style={{ color: 'red' }}>{validationErrors.contactPerson}</div>}
        </div>

      <div>
        <label htmlFor="contactEmail">Contact Email:</label>
        <input
          type="email"
          id="contactEmail"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
          required
          style={{ borderColor: validationErrors.contactEmail ? 'red' : 'initial' }}
          />
          {validationErrors.contactEmail && <div style={{ color: 'red' }}>{validationErrors.contactEmail}</div>}
        </div>

      <div>
        <label htmlFor="contactPhone">Contact Phone:</label>
        <input
          type="tel"
          id="contactPhone"
          name="contactPhone"
          value={formData.contactPhone}
          onChange={handleChange}
          required
          style={{ borderColor: validationErrors.contactPhone ? 'red' : 'initial' }}
          />
          {validationErrors.contactPhone && <div style={{ color: 'red' }}>{validationErrors.contactPhone}</div>}
        </div>

      <div className="footer">
        <button onClick={handleClick}>Next</button>
      </div>
    </form>
    </>
  )
}

export default Page1
