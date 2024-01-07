'use client'
//Import React Modules
import React,{useState} from 'react'
import Link from 'next/link';
import axios from 'axios';

//import user define modules
import styles from '@/app/components/Registration.module.css'

function Registration() {
    const [fname,setFname] = useState('')
    const [lname,setLname]= useState('')
    const [email, setEmail] = useState(''); 
    const [adress,setAdress] = useState('')
    const [phone,setPhone] = useState('')
    const [password, setPassword] = useState('');
    const [c_password, setCPassword] = useState('');
    const [error,setError]=useState({ email: '', password: '',c_password:'',fname:'',lname:'',adress:'',phone:'',match:'' })

    const handleSubmit = async (e) => {
        e.preventDefault();

        //check if Firsname is there 
        if (!fname) {
            setError((prevError) => ({ ...prevError, fname: 'Please Enter Firstname' }));
            return;
        }

        //check if lastname is there
        if (!lname) {
            setError((prevError) => ({ ...prevError, lname: 'Please Enter Lastname' }));
            return;
        }

        // Check if email is there
        if (!email) {
        setError((prevError) => ({ ...prevError, email: 'Please Enter Email' }));
        return;
        }

        //check if adress is there
        if(!adress){
            setError((prevError) => ({ ...prevError, adress: 'Please Enter Your Location....' }));
            return; 
        }

        //check if phone number is there
        if(!phone){
            setError((prevError) => ({ ...prevError, phone: 'Please Enter PhoneNumber' }));
            return; 
        }

         // Check if password is there
         if (!password) {
            setError((prevError) => ({ ...prevError, password: 'Please Enter Password' }));
            return;
        }
        
        //check if password match
        if(password !== c_password){
            setError((prevError) => ({ ...prevError, match: 'Password does not match' }));
            return;  
        }

        // try {
        //     // Add your login logic here
        //     const data = { fname,lname,email,adress,phone,password };

        //     // Example: Make a POST request to the server
        //     const response = await axios.post('http://localhost:4000/user', data);

        //     // Assuming the server responds with a success message
        //     const successMessage = response.data.message;
            
        //     // Set success state to true and clear errors

        //     setError({ email: '', password: '' });

        //     console.log(successMessage); // You can log or handle the success message

        //     // Continue with the rest of your logic...
        // } catch (error) {
        //     // Handle login error
        //     setError({ email: 'Invalid email or password. Please try again.', password: '' });
           
        //     console.error('Login failed:', error.message);
        // }

    }

    const handleConfirmPasswordChange = (e) => {
        const confirmPasswordValue = e.target.value;

        // Check if password matches confirmation password
        if (password !== confirmPasswordValue) {
            setError((prevError) => ({ ...prevError, match: 'Password does not match' }));
        } else {
            setError((prevError) => ({ ...prevError, match: '' }));
        }

        // Update confirmation password state
        setCPassword(confirmPasswordValue);
    }
  return ( 
    <div className={styles.container}> 
        
            <form method="post" className={styles.loginForm} onSubmit={handleSubmit}>

                <h2 className={styles.title}>Sign Up</h2>

                <input 
                    type="text" 
                    placeholder="First Name" 
                    id="fname"
                    name="fname"
                    value={fname}
                    className={`${styles.input} ${error.fname && styles.inputError}`} 
                    onChange={(e) => {
                        setFname(e.target.value);
                        setError((prevError) => ({ ...prevError, fname: '' }));             
                    }}
                     />

                {error.fname && <p className={styles.errorMessage}>{error.fname}</p>}

                <input 
                    type="text" 
                    placeholder="Last Name" 
                    id="lname"
                    name="lname"
                    value={lname}
                    className={`${styles.input} ${error.lname && styles.inputError}`} 
                    onChange={(e) => {
                        setLname(e.target.value);
                        setError((prevError) => ({ ...prevError, lname: '' }));             
                    }}
                     />
                
                {error.lname && <p className={styles.errorMessage}>{error.lname}</p>}

      
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
                    type="text" 
                    placeholder="Phone Number" 
                    id="phone"
                    name="phone"
                    value={phone}
                    className={`${styles.input} ${error.phone && styles.inputError}`} 
                    onChange={(e) => {
                        setPhone(e.target.value);
                        setError((prevError) => ({ ...prevError, phone: '' }));             
                    }}
                     />
                         
                {error.phone && <p className={styles.errorMessage}>{error.phone}</p>}

                <input 
                    type="text" 
                    placeholder="Your Location..." 
                    id="adress"
                    name="adress"
                    value={adress}
                    className={`${styles.input} ${error.adress && styles.inputError}`} 
                    onChange={(e) => {
                        setAdress(e.target.value);
                        setError((prevError) => ({ ...prevError, adress: '' }));             
                    }}
                     />

                {error.adress && <p className={styles.errorMessage}>{error.adress}</p>}

                <input 
                    type="password" 
                    placeholder="Password" 
                    className={`${styles.input} ${error.password && styles.inputError} `}
                    id="password"
                    name="password"
                    value={password}  
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError((prevError) => ({ ...prevError, password: '' ,match:''}));                    
                    }}    
                    />

                {error.password && <p className={styles.errorMessage}>{error.password}</p>}
                {error.match && <p className={styles.errorMessage}>{error.match}</p>}

                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    className={`${styles.input} ${error.c_password && styles.inputError} `}
                    id="c_password"
                    name="c_password"
                    value={c_password}  
                    onChange={(e) => {
                        handleConfirmPasswordChange(e);
                        setError((prevError) => ({ ...prevError, c_password: '' }));                    
                    }}    
                    />

                {error.c_password && <p className={styles.errorMessage}>{error.c_password}</p>}
                {error.match && <p className={styles.errorMessage}>{error.match}</p>}

                <button 
                    type="submit" 
                    className={styles.button} 
                    >Sign Up</button>

                <p className={styles.p} >Have an account<Link href="/user/login" className={styles.link}>Login</Link></p>

            </form>
        
    </div>
  )
  
}

export default Registration