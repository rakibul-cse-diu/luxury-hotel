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
        setPerson(newData)
        console.log(person)

    }

    return (
        <div>
            <h2>Testimonial</h2>
            {
                <p className='h-36'>{person?.name}</p>
            }

            <button className='btn' onClick={handleReviewDec}><FontAwesomeIcon icon={faAngleLeft} /></button>
            <button><FontAwesomeIcon icon={faAngleRight} /></button>
        </div >
    );
};

export default Testimonial;