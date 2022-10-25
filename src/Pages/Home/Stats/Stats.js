import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { BsFillPeopleFill, BsPencilSquare } from "react-icons/bs";
const Stats = () => {
    return (
        <div>
            <section className="py-6 my-20">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white shadow-md focus:shadow-outline">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-navActive">
                            <FiShoppingCart className='text-white text-4xl'></FiShoppingCart>
                        </div>
                        <div className="flex flex-col justify-center align-middle text-navActive">
                            <p className="text-3xl font-semibold leading-none">6072</p>
                            <p className="capitalize text-black">Purchase</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white shadow-md focus:shadow-outline">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-navActive">
                            <BsFillPeopleFill className='text-white text-4xl'></BsFillPeopleFill>
                        </div>
                        <div className="flex flex-col justify-center align-middle text-navActive">
                            <p className="text-3xl font-semibold leading-none">90K+</p>
                            <p className="capitalize text-black">Students</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white shadow-md focus:shadow-outline">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-navActive">
                            <BsPencilSquare className='text-white text-4xl'></BsPencilSquare>
                        </div>
                        <div className="flex flex-col justify-center align-middle text-navActive">
                            <p className="text-3xl font-semibold leading-none">1662</p>
                            <p className="capitalize text-black">Courses</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white shadow-md focus:shadow-outline">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-navActive">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-gray-100">
                                <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle text-navActive">
                            <p className="text-3xl font-semibold leading-none">4.8</p>
                            <p className="capitalize text-black">Ratings</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stats;