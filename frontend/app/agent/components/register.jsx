'use client'
// pages/index.js
import Page1 from '@/app/agent/components/forms/bussinessInformations'
import Page2 from '@/app/agent/components/forms/legalData'
import Page3 from '@/app/agent/components/forms/shippingFulfillmentData'
import Page4 from '@/app/agent/components/forms/legalAgreements'
import Dashboard from '@/app/agent/dashboard/page';
import {useFormContext} from '../context/hooks/useContextHooks'
import Navbar from './forms/navbar'


const RegistrationForm = () => {
    const {data} = useFormContext();
    const step =data.steps;
    
    return (
        <div >
        {/* <Navbar/> */}
        {step==0 && <Page1 />}
        {step==1 && <Page2 />}
        {step==2 && <Page3 />}
        {step==3 && <Page4 />}
        {step==4 && <Dashboard /> }
        </div>
    )
}
  
export default RegistrationForm;
