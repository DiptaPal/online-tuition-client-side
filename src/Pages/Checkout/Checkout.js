import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsGoogle } from "react-icons/bs";
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Checkout = () => {
    const course = useLoaderData();
    const { _id, price, title, image_url, rating } = course
    return (
        <div className="flex justify-center items-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mb-28 mt-2">
            <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                <div className="flex flex-col justify-start items-start w-full space-y-9">
                    <div className="flex justify-start flex-col items-start space-y-2">
                        <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
                            <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <Link to={`/course_detail/${_id}`} className="text-sm leading-none">Back</Link>
                        </button>
                        <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Checkout</p>
                        <p className="text-base leading-normal sm:leading-4 text-gray-600">
                            <Link to='/home'>Home</Link> {">"} <Link to='/courses'>Course</Link> {">"} <Link to={`/course_detail/${_id}`}>Course Detail</Link> {">"} <Link>Checkout</Link>
                        </p>
                    </div>

                    <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                        <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center rounded-md bg-white py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                            <div className="flex flex-col justify-start items-start w-full space-y-4">
                                <p className="text-xl md:text-2xl font-semibold leading-normal text-gray-800">{title}</p>
                                <div className='flex items-center gap-2'>
                                    <FaStar className='text-orange-500'></FaStar>
                                    <p className="text-base font-semibold leading-none text-gray-600">
                                        {rating}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                <img src={image_url} className="rounded-md" alt={title} />
                            </div>
                        </div>

                        <form className="p-8 bg-white rounded-md flex flex-col lg:w-full xl:w-3/5">
                            <Link to="/courses">
                                <button onClick={() => {
                                    toast.info("Payment Successful !!!", { autoClose: 700 })
                                }} className="border border-transparent hover:border-navActive transition-colors duration-500 bg-navActive hover:bg-white text-white hover:text-navActive flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                                    <div>
                                        <BsGoogle></BsGoogle>
                                    </div>
                                    <div>
                                        <p className="text-base leading-4">Pay</p>
                                    </div>
                                </button>
                            </Link>

                            <div className="flex flex-row justify-center items-center mt-6">
                                <hr className="border w-full" />
                                <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">or pay with card</p>
                                <hr className="border w-full" />
                            </div>

                            <div className="mt-8">
                                <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name='email' placeholder="Email" required />
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Card details</label>
                            <div className="mt-2 flex-col">
                                <div>
                                    <input className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" name='card number' type="number" placeholder="0000 1234 6549 15151" required />
                                </div>
                                <div className="flex-row flex">
                                    <input className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" name='date' placeholder="MM/YY" />
                                    <input className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="number" name='card cvc' placeholder="CVC" required />
                                </div>
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Name on card</label>
                            <div className="mt-2 flex-col">
                                <div>
                                    <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" name='name' placeholder="Name on card" required />
                                </div>
                            </div>

                            <label className="mt-8 mb-3 text-base leading-4 text-gray-800">Country or region</label>

                            <input className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" name='country' required placeholder="Country" />
                            <input className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 mb-4" type="text" name='country' required placeholder="ZIP" />

                            <Link to="/courses">
                                <button type='submit' onClick={() => {
                                    toast.success("Payment Successful !!!", { autoClose: 700 })
                                }} className="border border-transparent hover:border-navActive transition-colors duration-500 bg-navActive hover:bg-white text-white hover:text-navActive flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                                    <div>
                                        <p className="text-base leading-4">Pay {price}</p>
                                    </div>
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Checkout;