import React from 'react';
import Header from '../../Header/Header';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header headerClass='home-header' />
            <Features />
            <Testimonial />
        </div>
    );
};

export default Home;