import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = ({ headerClass }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <header className={headerClass}>
            <div className="nav-container flex justify-between items-center">
                <div className='logo-wrapper px-3 py-2'>
                    <h3>Luxur
                        <span className='block'>Hotel</span></h3>
                </div>

                <nav className={`flex flex-col md:flex-row justify-center bg-orange-300 md:bg-transparent w-3/4 absolute left-0 md:static px-4 py-20 md:py-0 z-10 duration-500 ease-in ${toggle ? 'top-0' : 'top-[-400px]'}`}>

                    <Link to="/">Home</Link>
                    <Link to="/facilities">Facilities</Link>
                    <Link to="/rooms">Rooms</Link>
                    <Link to="/contact">Contact Us</Link>
                </nav>
                <button className='btn px-2 md:px-6 py-0 md:py-1 duration-500'>LogIn</button>
                <div className={`block md:hidden text-4xl font-semibold p-2 z-20 ${toggle ? 'absolute top-0 text-white' : 'static text-orange-300'}`} onClick={() => setToggle(!toggle)}>
                    {
                        toggle ?
                            <FontAwesomeIcon icon={faXmark} /> :
                            <FontAwesomeIcon icon={faBars} />
                    }
                </div>
            </div>
            <div className='flex flex-col justify-start items-start text-white my-2 md:my-10'>
                <h4 className='tracking-wider text-base md:text-xl font-thin leading-loose'>WELCOME TO</h4>
                <h1 className='text-2xl md:text-3xl font-bold'>LUXURY</h1>
                <h2 className='text-xl md:text-2xl font-semibold  leading-loose'>HOTEL</h2>
                <p className='text-sm font-thin'>Book your stay and enjoy Luxury <br />
                    redefined at the most affordable rates.</p>
            </div>
            <div className='flex justify-center items-end'>
                <button className='btn bg-orange-300 px-4 py-1 hover:bg-orange-400 font-medium duration-500'>BOOK NOW</button>
            </div>
        </header>
    );
};

export default Header;