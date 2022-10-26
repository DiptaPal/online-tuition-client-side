import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { _id, price, like, rating, lessons, title, total_student, teacher, image_url, thumbnail_url, short_details } = course
    return (
        <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mb-28'>
            <div className='grid grid-cols-12'>
                <div className='col-span-9'>

                </div>
                <div className='col-span-3'>
                    <div className="rounded-md shadow-md sm:w-96 bg-gray-50 text-gray-800">
                        <img src={image_url} alt="" className="object-cover object-center w-full h-72 bg-gray-500" />
                        <div className="p-3">
                            <p className='text-3xl my-3 text-left font-extrabold'>{price}</p>
                            <div className='flex flex-col gap-3'>
                                <Link to="/checkout" className="w-full px-8 py-3 text-xl font-semibold bg-navActive text-white shadow-md border border-navActive rounded-md transition duration-200 hover:bg-orange-700 hover:border-navActive hover:text-white focus:shadow-outline focus:outline-none">Get Start</Link>
                                <Link to="/" className="w-full px-8 py-3 text-xl text-navActive font-semibold border border-navActive shadow-md rounded-md transition duration-200 hover:bg-gray-300 hover:text-navActive focus:shadow-outline focus:outline-none">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;