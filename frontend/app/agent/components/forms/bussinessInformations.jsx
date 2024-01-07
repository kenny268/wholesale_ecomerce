'use client';
import React,{useState} from 'react'
import {useFormContext} from '../../context/hooks/useContextHooks'


function Page1() {
    
  const {data,dispatch} = useFormContext();

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

  

  const handleClick = () => {
      dispatch({type:'CREATE_FORM',payload:{formData,steps:data.steps+1}});
  }

  return (
    <div>
         <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
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
        />
      </div>
      <div>
        <label htmlFor="website">Website:</label>
        <input
          type="text"
          id="website"
          name="website"
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
        />
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
        />
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
        />
      </div>

      <div className="footer">
        <button onClick={handleClick}>Next</button>
      </div>
    </div>
  )
}

export default Page1
