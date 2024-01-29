import React from 'react'
import RegistrationForm from '../components/register'
import { FormContexProvider } from '../context/context';
import Navbar from '../components/forms/navbar';

function page() {
  const title = 'Registrations';
  const path = '/agent/login'
  const name = 'login';
  const options = {
    title,
    path,
    name
  }


 return (
  <div style={ {display:"block",padding:"1px 0px" }}>
  <FormContexProvider>
    <Navbar info={options}  />
    <RegistrationForm/>
  </FormContexProvider>
  </div>
  
    
  )
}

export default page