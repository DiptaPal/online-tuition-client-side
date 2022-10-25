import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay} from "swiper";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side-dipta-pal.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='my-20'>
            <div className='flex flex-col lg:flex-row justify-between mb-6 px-4'>
                <div className='flex flex-col gap-4 justify-start lg:items-start'>
                    <h2 className='text-4xl font-bold text-navActive'>Explore Categories</h2>
                    <p className='text-xl'>Explore popular and leading courses for you.</p>
                    <p className='text-xl'>It's very helpful for the beginner to know about that</p>
                </div>
                <div className='flex items-end justify-center'>
                    <button className=" px-8 py-3 mt-4 lg:mt-0 text-lg bg-white text-navActive font-semibold  shadow-md rounded-md transition duration-200 hover:bg-navActive hover:text-white focus:shadow-outline focus:outline-none">
                        View All Category
                    </button>
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
                modules={[Autoplay]}
            >
                {
                    categories.map(category =>
                        <SwiperSlide key={category._id}>
                            <Category
                                category={category}
                            ></Category>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Categories;