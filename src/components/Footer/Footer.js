import React from 'react';
import { Link } from 'react-router-dom';

import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import twitter from '../../images/twitter.svg';

const Footer = () => {
    return (
        <footer className='bg-[#14274A] text-white p-8 min-h-[250px] flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2 justify-items-center'>
                <div className='flex flex-col justify-center items-center md:items-start pb-3 pb:mb-0 border-b-[1px] md:border-0 border-gray-200'>
                    <h2 className='text-xl font-bold'>LUXURY</h2>
                    <h4 className='text-lg font-light'>HOTEL</h4>
                    <span className='text-sm font-thin'>497 Evergreen Rd. Roseville, CA 95673</span>
                    <span className='text-sm font-thin'>+44 345 678 903</span>
                    <span className='text-sm font-thin'>luxury_hotels@gmail.com</span>
                </div>
                <div className='flex flex-col justify-center items-center md:items-start pb-3 pb:mb-0 border-b-[1px] md:border-0 border-gray-200 font-light'>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/">Trems and conditions</Link>
                </div>
                <div className='flex flex-col justify-center items-center md:items-start pb-3 pb:mb-0 border-b-[1px] md:border-0 border-gray-200 font-light'>
                    <a className='flex items-center mb-2' href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img className='mx-2' src={facebook} alt="" height={25} width={25} />
                        Facebook</a>
                    <a className='flex items-center mb-2' href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img className='mx-2' src={instagram} alt="" height={25} width={25} />
                        Instagram</a>
                    <a className='flex items-center' href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img className='mx-2' src={twitter} alt="" height={25} width={25} />
                        Twitter</a>
                </div>
                <div className='flex flex-col justify-center items-center md:items-start font-light'>
                    <span>Subscribe to our newsletter</span>
                    <div className='flex border-[1px] border-orange-300 p-0 w-fit h-fit mt-3'>
                        <input className='md:w-1/2 lg:w-full m-0 pl-2 bg-transparent text-white font-thin border-0 outline-none' type="email" name="" id="" placeholder='Email address' />
                        <button className='m-0 px-4 py-1 bg-orange-300 text-black font-medium'>Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;