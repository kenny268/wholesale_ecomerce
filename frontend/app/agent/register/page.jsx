import React from 'react'
import RegistrationForm from '../components/register'
import { FormContexProvider } from '../context/context';

function page() {
 return (
  <FormContexProvider>
    <RegistrationForm/>
  </FormContexProvider>
    
  )
}

export default page