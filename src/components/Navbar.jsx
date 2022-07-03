import React from 'react';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
            <div className='navbar'>
                <h2>K0D1NG K1DD</h2>
            
                <div className='navbar__list'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Register">Sign-Up</Link>
                        </li>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        
                        <li>
                            <Link to="/AllPost">Write Now</Link>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Navbar
