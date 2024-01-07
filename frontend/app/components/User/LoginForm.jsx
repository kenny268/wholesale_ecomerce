"use client"
//Import React Modules
import React,{useState} from 'react'
import Link from 'next/link';
import axios from 'axios';

//import user define modules
import styles from '@/app/components/Login.module.css'


function LoginForm() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [error,setError]=useState({ email: '', password: '' })

    const handleSubmit = async (e) => {
        e.preventDefault();

       // Check if email is there
       if (!email) {
            setError((prevError) => ({ ...prevError, email: 'Please Enter Email' }));
            return;
        }

        // Check if password is there
        if (!password) {
            setError((prevError) => ({ ...prevError, password: 'Please Enter Password' }));
            return;
        }


        try {
            // Add your login logic here
            const data = { email, password };

            // Example: Make a POST request to the server
            const response = await axios.post('http://localhost:4000/user/login', data);

            // Assuming the server responds with a success message
            const successMessage = response.data.message;
            
            // Set success state to true and clear errors

            setError({ email: '', password: '' });

            console.log(successMessage); // You can log or handle the success message

            // Continue with the rest of your logic...
        } catch (error) {
            // Handle login error
            setError({ email: 'Invalid email or password. Please try again.', password: '' });
           
            console.error('Login failed:', error.message);
        }

    }

  return ( 
    <div className={styles.container}> 
        
            <form method="post" className={styles.loginForm} onSubmit={handleSubmit}>

                <h2 className={styles.title}>Sign In</h2>

                <input 
                    type="email" 
                    placeholder="Email" 
                    id="email"
                    name="email"
                    value={email}
                    className={`${styles.input} ${error.email && styles.inputError}`} 
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setError((prevError) => ({ ...prevError, email: '' }));             
                    }}
                     />

                {error.email && <p className={styles.errorMessage}>{error.email}</p>}

                <input 
                    type="password" 
                    placeholder="Password" 
                    className={`${styles.input} ${error.password && styles.inputError} `}
                    id="password"
                    name="password"
                    value={password}  
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError((prevError) => ({ ...prevError, password: '' }));                    
                    }}    
                    />

                {error.password && <p className={styles.errorMessage}>{error.password}</p>}

                <button 
                    type="submit" 
                    className={styles.button} 
                    >Login</button>

                <div className={styles.links}>
                    <Link href="#" className={styles.link}>forgot password?</Link>
                    <p className={styles.p}>Create an account<Link href="/user/signup" className={styles.link}>Sign Up</Link></p>
                </div>

            </form>
        
    </div>
  )
}

export default LoginForm
