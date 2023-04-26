import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { authContext } from '../provider/Provider';

const Header = () => {
    const { user, loading, signOutUser } = useContext(authContext);
    if (user) {
        console.log(user);
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-links'>
                <Link to={'/'}>Home</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={'/inventory'}>Inventory</Link>
                {
                    user ? <>
                        <div className='signdin'>
                            <Link to={'/acount'}>{ user.displayName}</Link>
                            <button className='sign-out-btn' onClick={signOutUser}>sign out</button>
                        </div>
                    </> : <>

                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </>
                }

            </div>
        </nav>
    );
};

export default Header;