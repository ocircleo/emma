import React, { useContext, useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import '../../assets/google.svg'
import { authContext } from '../provider/Provider';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { loginWithEmail } = useContext(authContext);
    const showPass = () => {
        setShowPassword(!showPassword)
    }
    const emailLogin = (e) => {
        e.preventDefault()
        let email = document.getElementById('email')
        let password = document.getElementById('password')
        loginWithEmail(email.value, password.value)
            .then(user => {
                console.log(user.user)
            }).catch(err => console.log(err.code))

    }

    return (
        <div className='form-container'>
            <h2>Login</h2>
            <form onSubmit={emailLogin} className='form'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className='form-placeholder' placeholder='enter your email' />
                <label htmlFor="password">Password</label>
                <input type={!showPassword ? 'password' : 'text'} name="password" id="password" className='form-placeholder' placeholder='enter your password' required />
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><input type="checkbox" onClick={() => showPass()} id='showpass' />show password</span>
                <button type='submit' className='logbtn'>login</button>
            </form>
            <div className="other-log-type">
                <p>new to ema john <Link to={'/register'}>create new acount ?</Link></p>
                <p>or</p>
                <button className='logbtn'>
                    continue with google
                </button>
            </div>
        </div>
    );
};

export default Login;