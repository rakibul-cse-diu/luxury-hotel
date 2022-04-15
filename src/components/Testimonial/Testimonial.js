import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Cover from './Cover/Cover';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState({});
    let newData;

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const handleReviewDec = () => {
        if (count < reviews.length && count !== 0) {
            setCount(count - 1);
        }
        else if (count < 1) {
            setCount(reviews.length - 1)
        }
        newData = reviews[count];
        setPerson(newData);
    }

    const handleReviewInc = () => {
        if (count < reviews.length) {
            setCount(count + 1);
        }
        else if (count > reviews.length - 1) {
            setCount(0);
        }
        newData = reviews[count];
        setPerson(newData);
    }

    return (
        <div className='flex flex-col justify-center items-center w-full mb-8'>
            <h2 className='text-xl font-medium italic'>Testimonial</h2>
            {
                person?.id ? <Cover person={person} /> :
                    <div className='flex flex-col justify-center items-center my-4'>
                        <p className='text-sm md:text-lg leading-relaxed mb-1'>{reviews[0]?.review}</p>
                        <img className='rounded-full' src={reviews[0]?.img} alt="" height={30} width={30} />
                        <h4 className='text-lg font-semibold'>{reviews[0]?.name}</h4>
                    </div>
            }
            <div>
                <button className='btn px-3 py-0 mx-2 text-white bg-orange-300 hover:bg-orange-400' onClick={handleReviewDec}><FontAwesomeIcon icon={faAngleLeft} /></button>
                <button className='btn px-3 py-0 mx-2 text-white bg-orange-300 hover:bg-orange-400' onClick={handleReviewInc}><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
        </div >
    );
};

export default Testimonial;