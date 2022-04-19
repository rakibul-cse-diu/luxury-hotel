import React from 'react';
import Header from '../Header/Header';
import gym from '../../images/gym.png';
import bar from '../../images/pool-side-bar.png';
import spa from '../../images/spa.png';
import pool from '../../images/swimming-pool.png';
import restuarant from '../../images/restaurant.png';
import laundry from '../../images/laundry.png';
import Testimonial from '../Testimonial/Testimonial';

const Facilities = () => {
    return (
        <div>
            <Header headerClass='facilities-header' />
            <h2 className='text-3xl font-bold text-center mt-8'>Facilities</h2>
            <div className='flex flex-col justify-center items-center my-14'>
                <div className='flex flex-col justify-center items-center mb-12'>
                    <div className='flex flex-col relative w-3/4 md:w-2/4'>
                        <img className='w-full' src={gym} alt="" />
                        <h2 className='text-xl px-10 rounded py-1 font-bold bg-white text-black absolute bottom-0 left-[23%] md:left-[33%] lg:left-[40%]'>The Gym</h2>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center my-12'>
                    <div className='flex flex-col relative w-3/4 md:w-2/4'>
                        <img className='w-full' src={bar} alt="" />
                        <h2 className='text-xl px-10 rounded py-1 font-bold bg-white text-black absolute bottom-0 left-[14%] md:left-[26%] lg:left-[36%]'>Pool Side Bar</h2>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center my-12'>
                    <div className='flex flex-col relative w-3/4 md:w-2/4'>
                        <img className='w-full' src={spa} alt="" />
                        <h2 className='text-xl px-10 rounded py-1 font-bold bg-white text-black absolute bottom-0 left-[23%] md:left-[33%] lg:left-[40%]'>The Spa</h2>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center my-5'>
                    <div className='flex flex-col relative w-3/4 md:w-2/4'>
                        <img className='w-full' src={pool} alt="" />
                        <h2 className='text-xl px-10 rounded py-1 font-bold bg-white text-black absolute bottom-0 left-[10%] md:left-[23%] lg:left-[35%]'>Swimming Pool</h2>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center my-5'>
                    <div className='flex flex-col relative w-3/4 md:w-2/4'>
                        <img className='w-full' src={restuarant} alt="" />
                        <h2 className='text-xl px-10 rounded py-1 font-bold bg-white text-black absolute bottom-0 left-[18%] md:left-[30%] lg:left-[37%]'>Restuarant</h2>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center my-5'>
                    <div className='flex flex-col relative w-3/4 md:w-2/4'>
                        <img className='w-full' src={laundry} alt="" />
                        <h2 className='text-xl px-10 rounded py-1 font-bold bg-white text-black absolute bottom-0 left-[23%] md:left-[33%] lg:left-[39%]'>Laundry</h2>
                    </div>
                </div>
            </div>
            <Testimonial />
        </div>
    );
};

export default Facilities;