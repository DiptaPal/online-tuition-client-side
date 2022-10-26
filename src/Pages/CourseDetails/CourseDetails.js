import React from 'react';
import { AiOutlineEye, AiOutlinePlaySquare } from 'react-icons/ai';
import { BiBook, BiTime, BiTrophy } from 'react-icons/bi';
import { BsCodeSlash, BsFolderSymlink, BsPeopleFill, BsPhone } from 'react-icons/bs';
import { RiBook2Fill, RiFilePaper2Line } from 'react-icons/ri';
import { TbWorld } from 'react-icons/tb';
import { MdLoop } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FiVideo } from 'react-icons/fi';


const CourseDetails = () => {
    const course = useLoaderData();
    const { _id, price, rating, lessons, lectures, title, total_student, language, teacher, image_url, thumbnail_url, time, durations, requirement, overview, details } = course
    return (
        <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mb-28 mt-10'>
            <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-12 order-2 lg:order-1 lg:col-span-8'>
                    <div className='max-w-[700px] mx-auto flex flex-col gap-4'>
                        <div>
                            <img src={thumbnail_url} className="rounded-md object-cover object-center w-full h-52 bg-gray-500" alt="" />
                        </div>
                        <div>
                            <div>
                                <h1 className='text-4xl text-left font-extrabold'>{title}</h1>
                            </div>
                            <div className='flex flex-col gap-2 mt-3'>
                                <p className='text-xl text-left'>Last Updated: {teacher.last_updated}</p>
                                <div className='flex items-center gap-5'>
                                    <div className='flex items-center gap-3'>
                                        <FaStar className='text-orange-400'></FaStar>
                                        <p className='text-base'>Rating: {rating}</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <TbWorld className='text-blue-700'></TbWorld>
                                        <p className='text-base'>{language}</p>
                                    </div>
                                </div>
                                <div className='flex items-center flex-wrap gap-6 font-semibold'>
                                    <div className='flex items-center gap-3'>
                                        <BiTime></BiTime>
                                        <p>Duration: {durations}</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <BiBook></BiBook>
                                        <p>{lessons}</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FiVideo></FiVideo>
                                        <p>{lectures}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-base text-left'>
                                        Total Students: <span className='font-semibold'>{total_student}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='text-left'>
                            <h2 className='text-3xl font-semibold underline'>Requirements:</h2>
                            <ul>
                                {
                                    requirement.map(r => <li className='text-base list-disc ml-10 mt-2'>{r}</li>)
                                }
                            </ul>
                        </div>
                        <div className='text-left'>
                            <h2 className='text-3xl font-semibold underline'>Overview:</h2>
                            <ul>
                                {
                                    overview.map(o => <li className='text-base list-decimal ml-10 mt-2'>{o}</li>)
                                }
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-3xl font-semibold underline text-left'>Description</h2>
                            <p className='text-justify'>{details}</p>
                        </div>
                        <div className='mt-4'>
                            <h2 className='text-3xl font-semibold underline'>Instructor</h2>
                            <div className='flex flex-col gap-2 mt-4 bg-white rounded-md p-4'>
                                <div>
                                    <img src={teacher.author_img} className="w-24 h-24 mx-auto rounded-full" alt="" />
                                    <p className='text-base font-bold'>{teacher.name}</p>
                                </div>
                                <div className='flex flex-wrap gap-6 justify-center'>
                                    <div className='flex items-center gap-3'>
                                        <FaStar className='text-orange-400'></FaStar>
                                        <p>{teacher.instructor_rating}</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <AiOutlineEye></AiOutlineEye>
                                        <p>{teacher.instructor_review}</p>
                                    </div>
                                </div>
                                <div className='flex gap-6 justify-center'>
                                    <div className='flex items-center gap-3'>
                                        <RiBook2Fill></RiBook2Fill>
                                        <p>{teacher.courses}</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <BsPeopleFill></BsPeopleFill>
                                        <p>{teacher.students}</p>
                                    </div>
                                </div>
                                <p className='text-justify'>{teacher.about}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-span-12 order-1 lg:order-2 lg:col-span-4 lg:px-0 w-full'>
                    <div className="rounded-md shadow-md bg-gray-50 text-gray-800">
                        <img src={image_url} alt="" className="object-cover object-center w-full h-72 bg-gray-500" />
                        <div className="p-3">
                            <p className='text-3xl my-3 text-left font-extrabold'>{price}</p>
                            <div className='flex flex-col gap-3 mb-1'>
                                <Link to="/checkout" className="w-full px-8 py-3 text-xl font-semibold bg-navActive text-white shadow-md border border-navActive rounded-md transition duration-200 hover:bg-orange-700 hover:border-navActive hover:text-white focus:shadow-outline focus:outline-none">Get Start</Link>
                                <Link to="/" className="w-full px-8 py-3 text-xl text-navActive font-semibold border border-navActive shadow-md rounded-md transition duration-200 hover:bg-gray-300 hover:text-navActive focus:shadow-outline focus:outline-none">Learn More</Link>
                            </div>
                            <div className='my-3 flex flex-col flex-wrap'>
                                <p className='font-bold text-left'>This course includes:</p>
                                <div className='flex items-center gap-4'>
                                    <AiOutlinePlaySquare></AiOutlinePlaySquare>
                                    <p>{time} hours on-demand video</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <RiFilePaper2Line></RiFilePaper2Line>
                                    <p>42 articles</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <BsFolderSymlink></BsFolderSymlink>
                                    <p>116 downloadable resources</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <BsCodeSlash></BsCodeSlash>
                                    <p>63 coding exercises</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <MdLoop></MdLoop>
                                    <p>Full lifetime access</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <BsPhone></BsPhone>
                                    <p>Access on mobile and TV</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <BiTrophy></BiTrophy>
                                    <p>Certificate of completion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;