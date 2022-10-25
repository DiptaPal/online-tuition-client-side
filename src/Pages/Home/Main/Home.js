import React from 'react';
import Categories from '../Categories/Categories';
import Hero from '../Hero/Hero';
import Other from '../Others/Other';
import Reason from '../Reason/Reason';
import Stats from '../Stats/Stats';
const Home = () => {
    return (
        <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8'>
            <Hero></Hero>
            <Reason></Reason>
            <Stats></Stats>
            <Categories></Categories>
            <Other></Other>
        </div>
    );
};

export default Home;