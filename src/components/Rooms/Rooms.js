import React from 'react';
import Header from '../Header/Header';
import Testimonial from '../Testimonial/Testimonial';
import single from '../../images/single-room.png';
import double from '../../images/double-room.png';
import twin from '../../images/twin-room.png';

const Rooms = () => {
    return (
        <div>
            <Header headerClass='rooms-header' />
            <h2 className='text-3xl font-bold text-center mt-8'>Rooms</h2>
            <div className='flex flex-col justify-center items-center mt-5'>
                <p className='font-light w-3/4 text-center'>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes,
                    comfort isn't our only objective, we also value good design, sleek contemporary furnishing complemented
                    by the rich tones of nature's palette as visible from our rooms' sea-view windows and terraces. </p>
            </div>
            <div className='flex flex-col justify-center items-center my-14'>
                <div className='flex flex-col justify-center items-center mb-12'>
                    <div className='flex flex-col relative w-3/4 md:w-2/4 rounded-b-[15px] border-[1px] border-[#14274A] hover:scale-105 duration-700'>
                        <img className='w-full' src={single} alt="" />
                        <h2 className='text-2xl text-center w-full py-2 font-bold bg-[#14274A] text-white relative bottom-0'>SINGLE ROOM</h2>
                        <div className='px-16 py-14 grid grid-cols-2 gap-5'>
                            <button className='px-4 py-2 text-lg font-semibold duration-700 text-[#14274A]'>VIEW ROOM DETAILS</button>
                            <button className='px-4 py-2 text-lg rounded-[3px] font-semibold bg-orange-300 duration-700 hover:bg-orange-400 text-black'>$147  Avg/night</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center my-12'>
                    <div className='flex flex-col relative w-3/4 md:w-2/4 rounded-b-[15px] border-[1px] border-[#14274A] hover:scale-105 duration-700'>
                        <img className='w-full' src={double} alt="" />
                        <h2 className='text-2xl text-center w-full py-2 font-bold bg-[#14274A] text-white relative bottom-0'>DOUBLE ROOM</h2>
                        <div className='px-16 py-14 grid grid-cols-2 gap-5'>
                            <button className='px-4 py-2 text-lg font-semibold duration-700 text-[#14274A]'>VIEW ROOM DETAILS</button>
                            <button className='px-4 py-2 text-lg rounded-[3px] font-semibold bg-orange-300 duration-700 hover:bg-orange-400 text-black'>$147  Avg/night</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center my-12'>
                    <div className='flex flex-col relative w-3/4 md:w-2/4 rounded-b-[15px] border-[1px] border-[#14274A] hover:scale-105 duration-700'>
                        <img className='w-full' src={twin} alt="" />
                        <h2 className='text-2xl text-center w-full py-2 font-bold bg-[#14274A] text-white relative bottom-0'>TWIN ROOM</h2>
                        <div className='px-16 py-14 grid grid-cols-2 gap-5'>
                            <button className='px-4 py-2 text-lg font-semibold duration-700 text-[#14274A]'>VIEW ROOM DETAILS</button>
                            <button className='px-4 py-2 text-lg rounded-[3px] font-semibold bg-orange-300 duration-700 hover:bg-orange-400 text-black'>$147  Avg/night</button>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial />
        </div>
    );
};

export default Rooms;