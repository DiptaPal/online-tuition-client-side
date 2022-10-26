import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Course from '../Course/Course';
import Hero from '../Hero/Hero';
import Other from '../Others/Other';
import Reason from '../Reason/Reason';
import Stats from '../Stats/Stats';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

const Home = () => {
    const courses = useLoaderData();
    return (
        <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8'>
            <Hero></Hero>
            <Reason></Reason>
            <div className='my-28'>
                <div className='flex flex-col lg:flex-row justify-between mb-6 px-4'>
                    <div className='flex flex-col gap-4 justify-start lg:items-start'>
                        <h2 className='text-4xl font-bold text-navActive'>Explore Courses</h2>
                        <p className='text-xl'>
                            Research shows that hands on interactive learning is more effective.
                        </p>
                        <p className='text-xl'>
                            We are providing the best courses fo our students.
                        </p>
                    </div>
                    <div className='flex items-end justify-center'>
                        <Link to='/courses'>
                            <button className=" px-8 py-3 mt-4 lg:mt-0 text-lg bg-white text-navActive font-semibold  shadow-md rounded-md transition duration-200 hover:bg-navActive hover:text-white focus:shadow-outline focus:outline-none">
                                View All Courses
                            </button>
                        </Link>
                    </div>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                    navigation={true}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {
                        courses.map(course =>
                            <SwiperSlide key={course._id}>
                                <Course
                                    course={course}
                                ></Course>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
            <Stats></Stats>
            <Categories></Categories>
            <Other></Other>
        </div>
    );
};

export default Home;