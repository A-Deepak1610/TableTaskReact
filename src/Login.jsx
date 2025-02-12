import React from 'react'
import { useState } from 'react';
import './Login.css'
import { useNavigate } from "react-router-dom"
import  { useEffect } from 'react';
export default function Login() {
    const navigate = useNavigate()
    const [login,setLogin ] =useState(false);
    const [username,setUsername ] =useState('');
    const [password,setPassword ] =useState('');
    const [error,setError ] =useState('');
    useEffect(() => {
        console.log("Component Reloaded!");
        myFunction();
    }, []);
    function myFunction() {
        alert("USERNAME: admin\nPASSWORD: admin");
    }
    function handleSubmit(event) {
        if (username === 'admin' && password === 'admin') {
            navigate('/TableTaskReact/marks')
        } else {
            setError('Invalid Username or Password')
            event.preventDefault(); 
        }
    }
  return (
    <div>
        <div className="main">
            <div className="logincontent">
                <h1>LOGIN</h1>
                <div className="loginform"></div>
                <form onSubmit={handleSubmit}>
                    <i className="fa-solid fa-user"></i>
                    <input className='username' type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} required /><br/>
                    <i className="fa-solid fa-lock"></i>
                    <input className='password' type="password" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}} /><br/>
                    <p className='error'>{error}</p>
                    <button className='sumbitbutton' type="submit">Login</button>    
                </form>
            </div>
        </div>
    </div>
  )
}
