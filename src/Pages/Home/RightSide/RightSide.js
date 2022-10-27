import React from 'react';
import { BiBook } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RightSide = ({ course }) => {
    const { _id, like, rating, lessons, title, total_student, teacher, image_url, short_details } = course
    return (
        <Link data-aos="zoom-in" to={`/course_detail/${_id}`}>
            <div className="rounded-md shadow-md w-auto max-h-[600px] sm:max-h-[500px] md:max-h-[580px] bg-gray-50 text-gray-800">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src={teacher.author_img} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-300" />
                        <div className="-space-y-1 text-left">
                            <h2 className="text-sm font-semibold leading-none">{teacher.name}</h2>
                            <span className="inline-block text-xs leading-none text-gray-600">Last Updated: {teacher.last_updated}</span>
                        </div>
                    </div>
                    <button title="Open options" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                            <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                            <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                        </svg>
                    </button>
                </div>
                <img src={image_url} alt="" className="object-cover object-center w-full h-52 bg-gray-500" />
                <div className="p-4">
                    <div className="flex items-center justify-between my-1">
                        <button type="button" title="Like" className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current hover:text-navActive">
                                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                            </svg>
                        </button>
                        <button type="button" title="Bookmark post" className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current hover:text-navActive">
                                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className='text-left'>
                        <div className="mb-2">
                            <p className="text-xl truncate ... font-semibold">
                                {title}
                            </p>
                        </div>
                        <div className='max-h-20 sm:h-14 md:h-[70px] '>
                            <p className="text-sm font-semibold">
                                {short_details}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2 sm:gap-0 justify-around sm:justify-between items-start sm:items-center my-3'>
                        <div className='flex justify-between items-center'>
                            <BiBook className=''></BiBook>
                            <p className='sm:pl-1 md:pl-0 lg:pl-1'>{lessons}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <FaUserAlt></FaUserAlt>
                            <p className='sm:pl-1 md:pl-0 lg:pl-1'>{total_student} Students</p>
                        </div>
                        <div className='flex justify-around sm:justify-between items-center'>
                            <BsStarFill className='text-orange-400'></BsStarFill>
                            <p className='sm:pl-1 md:pl-0 lg:pl-1'>{rating}</p>
                        </div>
                    </div>
                    <div className="flex justify-center sm:justify-between flex-wrap items-center">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0  items-center sm:space-x-2">
                            <div className="flex -space-x-1">
                                <img alt="" className="w-5 h-5 border rounded-full bg-gray-500 border-gray-100" src="https://source.unsplash.com/40x40/?portrait?1" />
                                <img alt="" className="w-5 h-5 border rounded-full bg-gray-500 border-gray-100" src="https://source.unsplash.com/40x40/?portrait?2" />
                                <img alt="" className="w-5 h-5 border rounded-full bg-gray-500 border-gray-100" src="https://source.unsplash.com/40x40/?portrait?3" />
                            </div>
                            <span className="text-sm">Liked by <span className="font-semibold">{like.name}</span> and <span className="font-semibold">{like.total_likes}others</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default RightSide;