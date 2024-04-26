import React, { useEffect, useState } from 'react'
import "../RegisterPage/RegisterPage.css"
import {AiOutlineUser} from "react-icons/ai"
import {FiMail} from "react-icons/fi"
import {RiLockPasswordLine} from "react-icons/ri"
import { Link, useNavigate } from 'react-router-dom'
import validation from './Validation'
import axios from 'axios';

const SignUp = () => {

    const navigate =useNavigate()
    const [error,setError] =useState({})
    const [submit,setSubmit] =useState(false)
  
    const [data,setData] =useState({
        name:"",
        email:"",
        password:"",
    })

    const handleChange=(e)=>{
        const newObj={...data,[e.target.name]:e.target.value}
        setData(newObj)
        console.log(newObj)
    }
 
    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(validation(data));
        setSubmit(true);
        
        try {
          
          if (Object.keys(error).length === 0) {
            const response = await axios.post('http://localhost:8000/api/user', data);
            console.log(response.data); // Handle success response
            navigate('/home');
          }
        } catch (error) {
          console.error('Error:', error.response.data); // Handle error response
        }
      };

    useEffect(()=>{
        if(Object.keys(error).length === 0 && submit){
            navigate("/home")
        }
    },[error])


  return (
    <div className="container">
    <div className="container-form">
        <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <p>Please fill the input below here.</p>

            <div className="inputBox">
                <AiOutlineUser className='fullName'/>
                <input type='text' 
                        name="name" 
                        id="name" 
                        onChange={handleChange}
                        placeholder='Full Name'
                /> 
            </div>
            {error.fullname && <span style={{color:"red",display:"block",marginTop:"5px"}}>{error.fullname}</span>}

            <div className="inputBox">
                <FiMail className='mail'/>
                <input type="email"
                        name="email" 
                        id="email" 
                        onChange={handleChange}
                        placeholder='Email'
                /> 
            </div>
            {error.email && <span style={{color:"red",display:"block",marginTop:"5px"}}>{error.email}</span>}
            
            <div className="inputBox">
                <RiLockPasswordLine className='password'/>
                <input type="password" 
                        name="password" 
                        id="password" 
                        onChange={handleChange}
                        placeholder='Password'
                />
            </div>
            {error.password && <span style={{color:"red",display:"block",marginTop:"5px"}}>{error.password}</span>}

            
            <div className="inputBox">
                <RiLockPasswordLine className='password'/>
                <input type="password" 
                        name="confirmpassword" 
                        id="confirmPassword" 
                        placeholder='Confirm Password'
                />
            </div>
            {error.confirmpassword && <span style={{color:"red",display:"block",marginTop:"5px"}}>{error.confirmpassword}</span>}

            

            <div className='divBtn'>
                <small className='FG'>Forgot Password?</small>
                <button className='loginBtn'>SIGN UP</button>
            </div>
            
        </form>

        <div className='dont'>
            <p>Already have a account? <Link to="/"><span>Sign in</span></Link></p>
        </div>
    </div>
</div>
  )
}

export default SignUp