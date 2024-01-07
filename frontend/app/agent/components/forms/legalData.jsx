'use client';
import React,{useState} from 'react'
import {useFormContext} from '../../context/hooks/useContextHooks'


function Page2() {
  
    
    const {data,dispatch} = useFormContext();
    
      const [legalData, setLegalData] = useState({
        businessRegistrationNumber: '',
        taxIdentificationNumber: '',
        vatRegistration: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setLegalData({
          ...legalData,
          [name]: value,
        });
      };

    const handleClick = () => {
        dispatch({type:'CREATE_FORM',payload:{formData:data.formData,legalData,steps:data.steps+1}});
    }
    const handleClickPrev = () => {
      dispatch({type:'CREATE_FORM',payload:{data,steps:data.steps-1}});
    }
    
  return (
    <div>
      <div>
        <label htmlFor="businessRegistrationNumber">Business Registration Number:</label>
        <input
          type="text"
          id="businessRegistrationNumber"
          name="businessRegistrationNumber"
          value={legalData.businessRegistrationNumber}
          onChange={handleChange}
          required
        />
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
        />
      </div>
      <div>
        <label htmlFor="vatRegistration">VAT Registration (if applicable):</label>
        <input
          type="text"
          id="vatRegistration"
          name="vatRegistration"
          value={legalData.vatRegistration}
          onChange={handleChange}
        />
      </div>
      <div className="footer">
        <button onClick={handleClickPrev}>Previous</button>
        <button onClick={handleClick}>Next</button>
      </div>
    </div>
  )
}

export default Page2


