import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className=''>
            <div className="nav-container flex justify-between items-center">
                <div className='logo-wrapper px-3 py-2'>
                    <h3>Luxury
                        <span className='block'>Hotel</span></h3>
                </div>
                <nav className=''>
                    <Link to="/">Home</Link>
                    <Link to="/">Facilities</Link>
                    <Link to="/">Rooms</Link>
                    <Link to="/">Contact Us</Link>
                </nav>
                <button className='btn'>LogIn</button>
            </div>
        </header>
    );
};

export default Header;