import React from 'react';
import { Link } from 'react-router-dom';

import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import twitter from '../../images/twitter.svg';

const Footer = () => {
    return (
        <footer>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
                <div>
                    <h2>LUXURY</h2>
                    <h4>HOTEL</h4>
                    <span>497 Evergreen Rd. Roseville, CA 95673</span>
                    <span>+44 345 678 903</span>
                    <span>luxury_hotels@gmail.com</span>
                </div>
                <div>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div>
                    <a className='flex items-center' href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img className='mx-2' src={facebook} alt="" height={30} width={30} />
                        Facebook</a>
                    <a className='flex items-center' href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img className='mx-2' src={instagram} alt="" height={30} width={30} />
                        Instagram</a>
                    <a className='flex items-center' href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img className='mx-2' src={twitter} alt="" height={30} width={30} />
                        Twitter</a>
                </div>
                <div>
                    <span>Subscribe to our newsletter</span>
                    <input type="email" name="" id="" />
                    <button>Subscribe</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;