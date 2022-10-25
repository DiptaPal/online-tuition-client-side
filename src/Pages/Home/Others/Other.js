import React from 'react';

const Other = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between gap-4 items-center my-10'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-2 py-4 md:py-0 my-10 h-[530px] md:h-96 px-8 rounded-md shadow shadow-navActive'>
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
            <div>
                <div className='flex flex-col md:flex-row justify-between items-center gap-2 py-4 md:py-0 my-10 h-[580px] md:h-96 px-8 rounded-md shadow shadow-navActive'>
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
        </div>
    );
};

export default Other;