import React from 'react';

const Reason = () => {
    return (
        <div className='flex flex-col xl:flex-row gap-12 bg-white py-12 rounded-md items-center px-12'>
            <div className='flex flex-col justify-center'>
                <div className='mx-4'>
                    <h2 className='text-4xl font-bold text-navActive'>What Make Us Different</h2>
                    <p className='text-2xl p-4'>
                        See what make us different from any other online learning platform. We are giving the best to our students
                    </p>
                </div>
            </div>
            <div className=''>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col gap-4 sm:gap-0 sm:flex-row justify-around sm:w-[530px] mx-auto'>
                        <div data-aos="fade-down-right" className='h-60 w-60 text-left p-4 rounded-md shadow shadow-navActive'>
                            <img className='h-20 w-20' src="https://i.ibb.co/60kPCNt/education.png" alt="" />
                            <div>
                                <h3 className='text-sm py-1 font-medium'>Personalized learning</h3>
                                <p className='text-xs'>
                                    Students practice at their own pace, first filing in gaps in their understanding and then acceleration their learning.
                                </p>
                            </div>
                        </div>
                        <div  className='h-60 w-60 text-left p-4 rounded-md shadow shadow-navActive'>
                            <img className='h-20 w-20' src="https://i.ibb.co/TkGXcg9/document.png" alt="" />
                            <div>
                                <h3 className='text-sm py-1 font-medium'>Trusted content</h3>
                                <p className='text-xs'>
                                    Created by experts, Online Study’s library of trusted practice and lessons covers web, mobile and more. Always free for them.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 sm:gap-0 sm:flex-row justify-around mt-4 sm:mt-6 sm:w-[530px] mx-auto'>
                        <div  className='h-60 w-60 text-left p-4 rounded-md shadow shadow-navActive'>
                            <img className='h-20 w-20' src="https://i.ibb.co/0f9LQLS/settings.png" alt="" />
                            <div>
                                <h3 className='text-sm py-1 font-medium'>Tools to empower teachers</h3>
                                <p className='text-xs'>
                                    With Online Study, teachers can identify gaps in students understanding taller instructions and meet the needs.
                                </p>
                            </div>
                        </div>
                        <div  className='h-60 w-60 text-left p-4 rounded-md shadow shadow-navActive'>
                            <img className='h-20 w-20' src="https://i.ibb.co/N3YMVMv/code.png" alt="" />
                            <div>
                                <h3 className='text-sm py-1 font-medium'>Life Programs</h3>
                                <p className='text-xs'>
                                    Life programs educator has them to perform a task requiring, has them to performs a task requiring.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reason;