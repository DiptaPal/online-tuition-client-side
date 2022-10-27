import React from 'react';
import { Link } from 'react-router-dom';

const LeftSide = ({title, id}) => {
    return (
        <Link to={`/course_detail/${id}`}>
            <h2  className=' bg-white hover:text-white hover:bg-navActive transition-all duration-500 shadow-md rounded-md text-xl font-bold py-4 w-full px-2 my-4'>{title}</h2>
        </Link>
    );
};

export default LeftSide;