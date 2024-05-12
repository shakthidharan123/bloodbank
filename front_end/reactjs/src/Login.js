import React from 'react'
import './login.css';
function Login() {
  return (
    <div className='maindiv'>
        <form>
            <div className='innerdiv'>
                <label>Username:</label>
                <input className='box' type="text" placeholder="Ussername"></input>
            </div>
            <div className='innerdiv'>
                <label>Password:</label>
                <input type="password" className ='box'placeholder='password'></input>
            </div>
            <button className='but'type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login