import React from 'react';

const Category = ({ category }) => {
    const { name, image } = category;
    return (
        <div   className="max-w-xs rounded-md border border-white hover:border-navActive transition-colors  shadow-md cursor-pointer duration-500 bg-white text-gray-800 mx-auto">
            <img src={image} alt="" className="border-b hover:border-navActive duration-500 transition-colors object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8 h-32">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Category;