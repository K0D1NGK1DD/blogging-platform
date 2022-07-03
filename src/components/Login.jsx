import React from 'react';
import '../styles/Login.css';

function Login() {
    return (
        <div className='login'>
                <h1>Login Form</h1>
                    <form className='login__form'>
                        <label for='email'>
                            <input type='email' placeholder='Enter email address' className='input'/>
                        </label>

                        <label for='password'>
                            <input type='password' placeholder='Enter password' className='input' />
                        </label>
                    </form> 

                    <button className='button'>Enter</button>
        </div>  
    )
}

export default Login;
