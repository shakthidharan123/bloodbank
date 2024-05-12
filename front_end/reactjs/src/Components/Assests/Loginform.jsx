import React from 'react'
import './Loginform.css';
import { FaUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function Loginform() {
  return (
    <div className='owrapper'>
    <div className='wrapper'>
        <h1>LOGIN</h1>
        <form action = ''>
            <div className='input-box'>
            <input  type='text' placeholder='Username' required></input> 
            <FaUserCircle  className='icon' />
            </div>
            <div className='input-box'>
            <input type='password' placeholder='Password' required></input>
            <FaLock  className='icon' />
            </div>
            <div className='remember-forgot'>
                <label><input type='checkbox'/>Remember me</label>
                <a href='#'>Forgot password</a>
            </div>
            <button type='submit'>Submit</button>
            <div className='register'>
            <p>Don't have an account <a href='#'>Register</a></p>
            </div>
            

        </form>
    </div>
    </div>
  )
}

export default Loginform