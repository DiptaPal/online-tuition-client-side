import React from 'react';

const Other = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-between gap-4 items-center my-10'>
                <div data-aos="fade-left" className='flex flex-col md:flex-row justify-between items-center gap-2 py-4 md:py-0 my-10 h-[530px] md:h-96 px-8 rounded-md shadow shadow-navActive'>
                    <div className='w-full mx-auto h-full flex justify-center items-center'>
                        <img className='bg-cover' src="https://i.ibb.co/ys4vMjw/RST32.png" alt="" />
                    </div>
                    <div className='w-full mx-auto'>
                        <div className=''>
                            <h2 className='text-2xl font-semibold '>
                                Become An Instructor of Our Platform.
                            </h2>
                            <p className='text-base font-normal py-2 md:py-4'>
                                Become an instructor in Online Study and start your career in teaching profession. We are giving you the best opportunity to become a teacher.
                            </p>
                            <button className='px-8 py-2 text-lg font-semibold bg-navActive text-white shadow-md rounded-md transition duration-200 hover:bg-white hover:text-navActive focus:shadow-outline focus:outline-none'>
                                Start Teaching
                            </button>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-right" className='flex flex-col md:flex-row justify-between items-center gap-2 py-4 md:py-0 my-10 h-[580px] md:h-96 px-8 rounded-md shadow shadow-navActive'>
                    <div className='w-full mx-auto h-full flex justify-center items-center'>
                        <img className='bg-cover' src="https://i.ibb.co/VjQRYDb/SOMV747.png" alt="" />
                    </div>
                    <div className='w-full mx-auto'>
                        <div className=''>
                            <h2 className='text-2xl font-semibold '>
                                Become A Partner of Our Platform.
                            </h2>
                            <p className='text-base font-normal py-4'>
                                We have got the solution, world class training and development programs developed by top universities ‘and companies. All on Online Study for business.
                            </p>
                            <button className='px-8 py-2 text-lg font-semibold bg-navActive text-white shadow-md rounded-md transition duration-200 hover:bg-white hover:text-navActive focus:shadow-outline focus:outline-none'>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" className='my-10 bg-navActive py-10 rounded-md flex flex-col justify-between gap-4'>
                <h2 className='text-white text text-2xl sm:text-4xl font-semibold'>Subscribe To Our Newsletter</h2>
                <div>
                    <input className='shadow-md py-2 w-28 sm:w-64 text-sm sm:text-lg outline-none pl-2 rounded-l-lg text-navActive' type="email" placeholder='Enter Your Email Address' />
                    <button className='px-4 sm:px-8 py-2 text-sm sm:text-lg border-none font-semibold bg-gray-700 text-navActive shadow-md rounded-r-md transition duration-200 hover:bg-white hover:text-navActive focus:shadow-outline focus:outline-none'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
};

export default Other;