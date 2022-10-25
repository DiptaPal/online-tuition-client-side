import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaAmazon } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8'>
            <footer className="bg-white pt-4 pb-8 xl:pt-8 rounded-t-md">
                <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
                    <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
                        <li className="w-1/2 md:w-1/3 lg:w-1/3">
                            <div className="text-center">
                                <h2 className="text-navActive font-bold text-md uppercase mb-4">
                                    About Us
                                </h2>
                                <ul>
                                    <li className="mb-4 font-medium text-black hover:text-navActive transition-colors duration-300">
                                        <Link to="#">
                                            Company
                                        </Link>
                                    </li>
                                    <li className="mb-4 font-medium text-black hover:text-navActive transition-colors duration-300">
                                        <Link to="#">
                                            Teams
                                        </Link>
                                    </li>
                                    <li className="mb-4 font-medium text-black hover:text-navActive transition-colors duration-300">
                                        <Link to="#">
                                            Profile
                                        </Link>
                                    </li>
                                    <li className="mb-4 font-medium text-black hover:text-navActive transition-colors duration-300">
                                        <Link to="#">
                                            Career
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="w-1/2 md:w-1/3 lg:w-1/3">
                            <div className="text-center">
                                <h2 className="text-navActive font-semibold text-md uppercase mb-4">
                                    Contacts
                                </h2>
                                <ul>
                                    <li className="mb-4 font-medium text-black hover:text-navActive transition-colors duration-300">
                                        <Link to="#">
                                            Github
                                        </Link>
                                    </li>
                                    <li className="mb-4 font-medium text-black hover:text-navActive transition-colors duration-300">
                                        <Link to="#">
                                            Facebook
                                        </Link>
                                    </li>
                                    <li className="mb-4 font-medium text-black hover:text-navActive transition-colors duration-300">
                                        <Link to="#">
                                            Twitter
                                        </Link>
                                    </li>
                                    <li className="mb-4 font-medium text-black hover:text-navActive transition-colors duration-300">
                                        <Link to="#">
                                            LinkedIn
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="w-1/2 md:w-1/3 lg:w-1/3">
                            <div className="text-center">
                                <h2 className="text-navActive font-semibold text-md uppercase mb-4">
                                    Courses
                                </h2>
                                <ul>
                                    <li className="mb-4 font-medium text-black hover:text-navActive transition-colors duration-300">
                                        <Link to="#">
                                            Design
                                        </Link>
                                    </li>
                                    <li className="mb-4 font-medium text-black hover:text-navActive transition-colors duration-300">
                                        <Link to="#">
                                            Development
                                        </Link>
                                    </li>
                                    <li className="mb-4 font-medium text-black hover:text-navActive transition-colors duration-300">
                                        <Link to="#">
                                            Marketing
                                        </Link>
                                    </li>
                                    <li className="mb-4 font-medium text-black hover:text-navActive transition-colors duration-300">
                                        <Link to="#">
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div className="pt-8 flex border-t border-navActive max-w-xs mx-auto items-center justify-between">
                        <a href="https://www.facebook.com/">
                            <BsFacebook className='text-2xl text-navActive'></BsFacebook>
                        </a>
                        <a href="https://twitter.com/">
                            <BsTwitter className='text-2xl text-navActive'></BsTwitter>
                        </a>
                        <a href="https://github.com/">
                            <BsGithub className='text-2xl text-navActive'></BsGithub>
                        </a>
                        <a href="https://www.linkedin.com/">
                            <BsLinkedin className='text-2xl text-navActive'></BsLinkedin>
                        </a>
                        <a href="https://www.amazon.com/">
                           <FaAmazon className='text-3xl text-navActive'></FaAmazon>
                        </a>
                    </div>
                    <div className="text-black font-normal pt-10 sm:pt-12">
                        <p>© 2022 Online Study. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;