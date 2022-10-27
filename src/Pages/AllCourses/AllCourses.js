import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RightSide from '../Home/RightSide/RightSide';
import LeftSide from '../Home/LeftSide/LeftSide';

const AllCourses = () => {
    const courses = useLoaderData();
    return (
        <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mb-28'>
            <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-12 lg:col-span-3'>
                    {
                        courses.map(course => <LeftSide
                            key={course._id}
                            id={course._id}
                            title={course.title}
                        ></LeftSide>)
                    }
                </div>
                <div className='col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 my-4'>
                        {
                            courses.map(course => <RightSide
                                key={course._id}
                                course={course}
                            ></RightSide>)
                        }
                </div>
            </div>
        </div>
    );
};

export default AllCourses;