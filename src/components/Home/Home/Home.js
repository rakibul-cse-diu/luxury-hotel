import React from 'react';
import Header from '../../Header/Header';
import Testimonial from '../../Testimonial/Testimonial';
import Features from '../Features/Features';

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