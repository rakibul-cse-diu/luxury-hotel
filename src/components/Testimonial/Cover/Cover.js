import React from 'react';

const Cover = ({ person }) => {
    return (
        <div className='flex flex-col justify-center items-center my-4'>
            <p className='text-sm md:text-lg leading-relaxed mb-1'>{person?.review}</p>
            <img className='rounded-full' src={person.img} alt="" height={30} width={30} />
            <h4 className='text-lg font-semibold'>{person?.name}</h4>
        </div>
    );
};

export default Cover;