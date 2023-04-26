import React, { useContext, useState } from 'react';
import './register.css'
import { Link } from 'react-router-dom';
import { authContext } from '../provider/Provider';
import { updateCurrentUser, updateProfile } from 'firebase/auth';
const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { auth, createEmailAcount } = useContext(authContext)
    const createUser = (e) => {
        e.preventDefault()
        let name = document.getElementById('name').value
        let email = document.getElementById('email')
        let password = document.getElementById('password')
        createEmailAcount(email.value, password.value)
            .then(user => {
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then().catch(err => console.log(err.code))
            }).catch(err => console.log(err.code))
    }
    const showPass = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className='form-container'>
            <h2>Register</h2>
            <form onSubmit={createUser} className='form'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className='form-placeholder' placeholder='enter your name' required />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className='form-placeholder' placeholder='enter your email' required />
                <label htmlFor="password">Password</label>
                <input type={!showPassword ? 'password' : 'text'} name="password" id="password" className='form-placeholder' placeholder='enter your password' required />
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><input type="checkbox" onClick={() => showPass()} id='showpass' />show password</span>
                <button type='submit' className='logbtn'>Register</button>

            </form>
            <div className="other-log-type">
                <p>Allready have a acount ? <Link to={'/login'}> Login</Link></p>
                <p>or</p>
                <button className='logbtn'>
                    continue with google
                </button>
            </div>
        </div>
    );
};

export default Register;