import React from 'react'
import Login from '../components/login'
import Navbar from '../components/forms/navbar';

function page() {
  const  name= 'Registrations';
  const path = '/agent/register'
  const title = 'login';
  const options = {
    title,
    path,
    name
  }
  return (
    <div style={ {display:"block",padding:"1px 0px" }}>
      <Navbar info={options}/>
      <Login/>
    </div>
  )
}

export default page