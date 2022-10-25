import React from 'react';
import { useLoaderData } from 'react-router-dom';
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
                className="mySwiper my-36"
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
            <Stats></Stats>
            <Categories></Categories>
            <Other></Other>
        </div>
    );
};

export default Home;