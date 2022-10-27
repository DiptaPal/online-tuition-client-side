import React from 'react';
import { Link } from 'react-router-dom';
import heroLogo from '../../../assets/hero.json'
import Lottie from 'lottie-react'
import { BallTriangle } from  'react-loader-spinner'

const Hero = () => {
    return (
        <div>
            <section className="text-gray-800">
                <div className=" flex flex-col justify-center py-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div data-aos="fade-right" className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-2xl lg:text-left">
                        <h1 className="text-4xl font-bold leading-none sm:text-6xl">
                            <span>Find Your Course</span><br />
                            <span className="text-navActive block lg:inline"> & </span>
                            <span>Strong Your Knowledge</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Online Study is an online learning platform that offers various courses for you. We are providing the best courses. We also provide full time support in online platform
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to="/" className="px-8 py-3 text-lg font-semibold bg-white text-navActive shadow-md border border-white rounded-md transition duration-200 hover:bg-navActive hover:border-navActive hover:text-white focus:shadow-outline focus:outline-none">Get Start</Link>
                            <Link to="/" className="px-8 py-3 text-lg text-navActive font-semibold border border-navActive shadow-md rounded-md transition duration-200 hover:bg-navActive hover:text-white focus:shadow-outline focus:outline-none">Learn More</Link>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="flex items-center justify-center mt-8 lg:mt-0">
                        <div>
                            <Lottie className='h-[340px] sm:h-[500px] flex items-center xl:mr-28' animationData={heroLogo} loop={true} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;