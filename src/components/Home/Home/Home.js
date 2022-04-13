import React from 'react';
import Header from '../../Header/Header';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Header headerClass='home-header' />
            <Features />
        </div>
    );
};

export default Home;