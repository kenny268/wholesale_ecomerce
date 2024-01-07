'use client';
import React,{useState} from 'react'
import {useFormContext} from '../../context/hooks/useContextHooks'

function ShippingFulfillmentData() {
    const {data,dispatch} = useFormContext();
    const [shippingFulfillmentData, setShippingFulfillmentData] = useState({
        shippingPolicies: '',
        fulfillmentProcess: '',
        shippingCosts: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingFulfillmentData({
          ...shippingFulfillmentData,
          [name]: value,
        });
      };


    const handleClick = () => {
        dispatch({type:'CREATE_FORM',payload:{formData:data.formData,legalData:data.legalData,shippingFulfillmentData,steps:data.steps+1}});
    }
    const handleClickPrev = () => {
      dispatch({type:'CREATE_FORM',payload:{data,steps:data.steps-1}});
    }

  return (
    <div>
        <div>
        <label htmlFor="shippingPolicies">Shipping Policies:</label>
        <textarea
          id="shippingPolicies"
          name="shippingPolicies"
          value={shippingFulfillmentData.shippingPolicies}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="fulfillmentProcess">Fulfillment Process:</label>
        <textarea
          id="fulfillmentProcess"
          name="fulfillmentProcess"
          value={shippingFulfillmentData.fulfillmentProcess}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="shippingCosts">Shipping Costs:</label>
        <input
          type="text"
          id="shippingCosts"
          name="shippingCosts"
          value={shippingFulfillmentData.shippingCosts}
          onChange={handleChange}
          required
        />
      </div>

      <div className="footer">
        <button onClick={handleClickPrev}>Previous</button>
        <button onClick={handleClick}>Next</button>
      </div>
    </div>
  )
}

export default ShippingFulfillmentData