"use client"
import React,{useState} from 'react'

function LoginForm() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        const data = { email, password }

        

    }

  return ( 
    <div>
        <form method="post">
            <input type="email" onChange={(e)=>e.target.value} />
            <input type="password" onChange={(e)=>e.target.value}/>
            <button type="submit" onSubmit={handleSubmit}>Login</button>
        </form>
    </div>
  )
}

export default LoginForm