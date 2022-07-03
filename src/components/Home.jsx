import React from 'react';
import "../styles/Home.css"
import logo from '../assets/images/space-ladder-mars.jpg';

function Home() {
    return (
        <div className='Home'>
            <div className='home__body'>
                    <img className="home__image"
                    src={logo}
                    alt='Logo'
                    />
            </div>

                <div className='home__para'>
                    <h1>A Blogging Platform by K0D1NG K1DD</h1>
                </div>
        </div>
    )
}

export default Home;
