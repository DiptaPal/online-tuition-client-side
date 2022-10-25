import React from 'react';
import CourseCategory from '../CourseCategory/CourseCategory';
import Hero from '../Hero/Hero';
import Other from '../Others/Other';
import Reason from '../Reason/Reason';
import Stats from '../Stats/Stats';
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Reason></Reason>
            <Stats></Stats>
            <CourseCategory></CourseCategory>
            <Other></Other>
        </div>
    );
};

export default Home;