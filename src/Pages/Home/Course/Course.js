import React from 'react';
import { Link } from 'react-router-dom';
import { BiBook } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const Course = ({ course }) => {
    const { rating, total_student, title, teacher, price, lessons, image_url} = course
    return (
        <Link to="/courses" className="block max-h-[550px] sm:h-[490px] rounded-lg p-4 bg-white shadow-sm shadow-indigo-100">
            <img
                alt="Home"
                src={image_url}
                className="h-56 w-full rounded-md object-cover"
            />
            <div className="mt-2">
                <div>
                    <div className='flex justify-around sm:justify-between items-center my-2'>
                        <div className='flex justify-between items-center'>
                            <BiBook className='text-navActive'></BiBook>
                            <p className='pl-1'>{lessons}</p>
                        </div>
                        <div className='flex justify-around sm:justify-between items-center'>
                            <BsStarFill className='text-orange-400'></BsStarFill>
                            <p className='pl-1'>{rating}</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-medium text-3xl text-clip">{title}</p>
                    </div>
                </div>

                <div className="mt-6">
                    <div className='flex justify-around sm:justify-between items-center'>
                        <div className='flex items-center'>
                            <img className='h-12 w-12 rounded-full' src={teacher.author_img} alt="" />
                            <p className='pl-1'>{teacher.name}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <FaUserAlt></FaUserAlt>
                            <p className='pl-1'>{total_student} Students</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-around sm:justify-between items-center mt-6'>
                    <p>{price}</p>
                    <div className='flex items-center text-navActive'>
                        <p>Know Details</p>
                        <AiOutlineArrowRight className='pl-1'></AiOutlineArrowRight>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Course;