'use client';
import React,{useState} from 'react'
import {useFormContext} from '../../context/hooks/useContextHooks'
import styles from './Register.module.css'


function LegalAgreements() {
    
    const {data,dispatch} = useFormContext();

    const [legalAgreements, setLegalAgreements] = useState({
      dropshippingAgreement: '',
      confidentialityAgreements: '',
    });

    const [validationErrors, setValidationErrors] = useState({});

    const validateField = (fieldName, value) => {
      switch (fieldName) {
        case 'dropshippingAgreement':
          if (typeof value !== 'boolean') {
            return 'Invalid value for dropshipping agreement. Please provide a boolean value.';
          }
        case 'confidentialityAgreements':
          if (typeof value !== 'boolean') {
            return 'Invalid value for confidentiality agreements. Please provide a boolean value.';
          };
        default:
          return null;
      }
    };
  
    const validateFormData = () => {
      const errors = {};
  
      for (const key in legalAgreements) {
        const fieldError = validateField(key, legalAgreements[key]);
        if (fieldError) {
          errors[key] = fieldError;
        }
      }
  
      return errors;
    };
  
    const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;
      setLegalAgreements({
        ...legalAgreements,
        [name]: checked,
      });
    };

    const handleClickPrev = () => {
      
      dispatch({type:'CREATE_FORM',payload:{data,steps:data.steps-1}});
      
  
    }

    const handleSubmit = () => {
      const {formData,legalData,shippingFulfillmentData} = data;
      const { companyName,businessAddress,website,contactPerson,contactEmail,contactPhone }=formData;
      const {businessRegistrationNumber,taxIdentificationNumber,vatRegistration} =legalData;
      const {shippingPolicies,fulfillmentProcess,shippingCosts}=shippingFulfillmentData
      const {dropshippingAgreement,confidentialityAgreements}=legalAgreements
      //{formData,legalData,shippingFulfillmentData,legalAgreements}
      const errors = validateFormData();
      if (Object.keys(errors).length === 0) {
      console.log({
        companyName,
        businessAddress,
        website,
        contactPerson,
        contactEmail,
        contactPhone,
        businessRegistrationNumber,
        taxIdentificationNumber,
        vatRegistration,
        shippingPolicies,
        fulfillmentProcess,
        shippingCosts,
        dropshippingAgreement,
        confidentialityAgreements});
      }else{
        setValidationErrors(errors);
      }
    }
  return (
    <>
    <div className={styles.Container}>

<div>
<label htmlFor="dropshippingAgreement">Dropshipping Agreement (attach if available)</label>

        <input
          type="checkbox"
          id="dropshippingAgreement"
          name="dropshippingAgreement"
          checked={legalAgreements.dropshippingAgreement}
          onChange={handleCheckboxChange}
          style={{ borderColor: validationErrors.dropshippingAgreement ? 'red' : 'initial' }}
          />
          {validationErrors.dropshippingAgreement && <div style={{ color: 'red' }}>{validationErrors.dropshippingAgreement}</div>}
        </div>
      <div>
      <label htmlFor="confidentialityAgreements">Confidentiality Agreements (if applicable)</label>

        <input
          type="checkbox"
          id="confidentialityAgreements"
          name="confidentialityAgreements"
          checked={legalAgreements.confidentialityAgreements}
          onChange={handleCheckboxChange}
          style={{ borderColor: validationErrors.confidentialityAgreements ? 'red' : 'initial' }}
          />
          {validationErrors.confidentialityAgreements && <div style={{ color: 'red' }}>{validationErrors.confidentialityAgreements}</div>}
        </div>

<div className="footer">
{/* <button onClick={handleClickPrev}>Previous</button> */}
        <button onClick={handleSubmit}>Submit</button>
    </div>
    </div>
    </>
  )
}

export default LegalAgreements