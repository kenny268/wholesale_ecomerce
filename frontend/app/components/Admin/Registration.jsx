'use client'
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    
    const history = useHistory();
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
        fetch('/api/v1/registrations', {
        method: 'POST',
        body: JSON.stringify({
            user: {
            username,
            password,
            password_confirmation: passwordConfirmation,
            },
        }),
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        }).then((resp) => {
        if (resp.ok) {
            return resp.json();
        }
        throw new Error('Network response was not ok.');
        }).then(() => {
        history.push('/');
        }).catch((err) => {
        console.log(err);
        });
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <label>
            Username:
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
        </label>
        <br />
        <label>
            Password:
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </label>
        <br />
        <label>
            Password Confirmation:
            <input type="password" value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)} />
        </label>
        <br />
        <button type="submit">Register</button>
        </form>
    );
    }
export default Registration;