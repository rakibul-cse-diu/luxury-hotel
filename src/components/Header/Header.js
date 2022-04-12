import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <header className=''>
            <div className="nav-container flex justify-between items-center">
                <div className='logo-wrapper px-3 py-2'>
                    <h3>Luxury
                        <span className='block'>Hotel</span></h3>
                </div>

                <nav className={`flex flex-col md:flex-row bg-orange-300 md:bg-transparent w-3/4 absolute top-0 md:static px-4 py-20 z-10 duration-500 ease-in ${toggle ? 'right-0' : 'right-[-300px]'}`}>

                    <Link to="/">Home</Link>
                    <Link to="/">Facilities</Link>
                    <Link to="/">Rooms</Link>
                    <Link to="/">Contact Us</Link>
                </nav>
                <button className='btn px-6 py-1 duration-500'>LogIn</button>
                <div className='block md:hidden text-4xl font-semibold p-2 text-white z-20' onClick={() => setToggle(!toggle)}>
                    {
                        toggle ?
                            <FontAwesomeIcon icon={faXmark} /> :
                            <FontAwesomeIcon icon={faBars} />
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;