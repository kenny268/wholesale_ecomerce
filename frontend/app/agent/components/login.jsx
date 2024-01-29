'use client'
import { useState } from 'react'
import React from 'react'
import styles from '@/app/agent/components/Login.module.css'


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input 
            type="email"
            name="email" 
            id="email" 
            value={email}
            // placeholder='Email...'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={password}
            // pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
            // placeholder='Password...'
            onChange={(e) => setPassword(e.target.value)}
            required
            />  
        </div>   

        <div>
          <button type="submit" className={`${styles.button}`}>Login</button>
        </div>
    </form>
  )
}

export default Login