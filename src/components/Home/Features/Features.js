import React from 'react';

import feature1 from '../../../images/home-feature-image-1.png';
import feature2 from '../../../images/home-feature-image-2.png';

const Features = () => {
    return (
        <div className='my-8 px-10 md:px-20 flex flex-col justify-center'>
            <p className='text-center'>All our room types are including complementary breakfast</p>
            <div className='my-10'>
                <div className='grid grid-cols-1 gap-4'>
                    <div className='p-3 flex flex-col-reverse md:flex-row border-2 border-gray-200/40 rounded-md'>
                        <div className='m-2  flex flex-col justify-center'>
                            <h3 className='text-xl font-semibold leading-loose'>Luxury redefined</h3>
                            <p>Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.</p>
                        </div>
                        <div>
                            <img src={feature1} alt="" />
                        </div>
                    </div>
                    <div className='p-3 flex flex-col-reverse md:flex-row border-2 border-gray-200/40 rounded-md my-8'>
                        <div className='m-2 flex flex-col justify-center'>
                            <h3 className='text-xl font-semibold leading-loose'>Leave your worries in the sand</h3>
                            <p>We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean.</p>
                        </div>
                        <div>
                            <img src={feature2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;