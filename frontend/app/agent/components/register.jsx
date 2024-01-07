'use client'
// pages/index.js
import Page1 from '@/app/agent/components/forms/bussinessInformations'
import Page2 from '@/app/agent/components/forms/legalData'
import Page3 from '@/app/agent/components/forms/shippingFulfillmentData'
import Page4 from '@/app/agent/components/forms/legalAgreements'
import Dashboard from '@/app/agent/dashboard/page';
import {useFormContext} from '../context/hooks/useContextHooks'


const RegistrationForm = () => {
    const {data} = useFormContext();
    const step =data.steps;

    //console.log("step",steps);
    //console.log(data);

    if(step==0){
        return (
            <>
             <Page1 />
            </>
            
         );
        
    }else if(step==1){    
        return (
            <>
            <Page2 /> 
            </>
            
        );
        
    }else if(step==2){    
        return (
            <>
            <Page3 /> 
            </>
            
        );    
    }else if(step == 3){
        return (
            <>
            <Page4 /> 
            </>
            
        );

    }else if(step==4){    
        return (
            <>
            <Dashboard /> 
            </>
            
        );
    }        
}
  
export default RegistrationForm;
