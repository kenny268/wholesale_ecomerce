'use client';
import React,{useState} from 'react'
import {useFormContext} from '../../context/hooks/useContextHooks'

function LegalAgreements() {
    
    const {data,dispatch} = useFormContext();

    const [legalAgreements, setLegalAgreements] = useState({
      dropshippingAgreement: false,
      confidentialityAgreements: false,
    });
  
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
    }
  return (
    <div>

<div>
        <input
          type="checkbox"
          id="dropshippingAgreement"
          name="dropshippingAgreement"
          checked={legalAgreements.dropshippingAgreement}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="dropshippingAgreement">Dropshipping Agreement (attach if available)</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="confidentialityAgreements"
          name="confidentialityAgreements"
          checked={legalAgreements.confidentialityAgreements}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="confidentialityAgreements">Confidentiality Agreements (if applicable)</label>
      </div>

<div className="footer">
<button onClick={handleClickPrev}>Previous</button>
        <button onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  )
}

export default LegalAgreements