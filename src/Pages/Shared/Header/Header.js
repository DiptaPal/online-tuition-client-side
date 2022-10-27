import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FiUserCheck } from 'react-icons/fi';
import ReactTooltip from 'react-tooltip';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const { user } = useContext(AuthContext);

    return (
        <div className='bg-bgColor px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8'>
            <div className="py-5">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center">
                        <NavLink
                            to="/"
                            aria-label="Company"
                            className="inline-flex items-center mr-8"
                        >
                            <img src={logo} className="h-auto w-16" alt="" />
                            <span className="ml-2 text-3xl font-extrabold tracking-wide text-navActive uppercase mr-6">
                                Online Study
                            </span>
                        </NavLink>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <NavLink
                                    to="/home"
                                    aria-label="Our product"
                                    className={({ isActive }) =>
                                        isActive ? "font-medium tracking-wide text-navActive hover:text-navColor transition-colors duration-300 text-xl" : "font-medium tracking-wide text-navColor hover:text-navActive transition-colors duration-300 text-xl"
                                    }>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/courses"
                                    aria-label="Our product"
                                    className={({ isActive }) =>
                                        isActive ? "font-medium tracking-wide text-navActive hover:text-navColor transition-colors duration-300 text-xl" : "font-medium tracking-wide text-navColor hover:text-navActive transition-colors duration-300 text-xl"
                                    }
                                >
                                    Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/faq"
                                    aria-label="Our product"
                                    className={({ isActive }) =>
                                        isActive ? "font-medium tracking-wide text-navActive hover:text-navColor transition-colors duration-300 text-xl" : "font-medium tracking-wide text-navColor hover:text-navActive transition-colors duration-300 text-xl"
                                    }
                                >
                                    FAQ
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    aria-label="Product pricing"
                                    className={({ isActive }) =>
                                        isActive ? "font-medium tracking-wide text-navActive hover:text-navColor transition-colors duration-300 text-xl" : "font-medium tracking-wide text-navColor hover:text-navActive transition-colors duration-300 text-xl"
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <div className="flex items-end">
                                <DarkModeToggle
                                    onChange={setIsDarkMode}
                                    checked={isDarkMode}
                                    size={70}
                                />
                            </div>
                        </li>
                        <li>               
                        {
                            user && user?.uid ?
                                <NavLink>
                                    {
                                        user?.photoURL ? 
                                        <div data-tip={user?.displayName}>
                                            <img className='w-12 p-1 h-12 mx-auto bg-white rounded-xl text-center' src={user?.photoURL} alt="" />
                                            <ReactTooltip place="bottom" type="error" effect="float"/>
                                        </div>
                                        :
                                        <div className='text-navActive' data-tip={user?.displayName}>
                                            <FiUserCheck className='w-12 p-1 h-12 mx-auto bg-white rounded-xl text-center'>
                                            </FiUserCheck>
                                            <ReactTooltip place="bottom" type="error" effect="float"/>
                                        </div>
                                    }
                                </NavLink> 
                                :
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive ? "inline-flex items-center justify-center h-8 px-6 font-medium tracking-wide bg-white text-navActive transition duration-200 rounded-xl shadow-md hover:bg-navActive hover:text-white focus:shadow-outline focus:outline-none text-xl" : "inline-flex items-center justify-center h-8 px-6 font-medium tracking-wide bg-navActive text-white transition duration-200 rounded-xl shadow-md hover:bg-white hover:text-navActive focus:shadow-outline focus:outline-none text-xl"
                                    }
                                    aria-label="Sign up"
                                >
                                    Login
                                </NavLink>
                        }


                    </li>
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-navActive" viewBox="0 0 20 20">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-bgColor border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <NavLink
                                            to="/"
                                            aria-label="Company"
                                            className="inline-flex items-center"
                                        >

                                            <img src={logo} className="h-auto w-16" alt="" />
                                            <span className="ml-2 text-3xl font-extrabold tracking-wide text-navActive uppercase">
                                                Online Study
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition text-navActive bg-white duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-navActive" viewBox="0 0 20 20">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <NavLink
                                                to="/courses"
                                                aria-label="courses"
                                                className={({ isActive }) =>
                                                    isActive ? "font-medium tracking-wide text-navActive hover:text-navColor transition-colors duration-300 text-xl" : "font-medium tracking-wide text-navColor hover:text-navActive transition-colors duration-300 text-xl"
                                                }
                                            >
                                                Courses
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/faq"
                                                aria-label="faq"
                                                className={({ isActive }) =>
                                                    isActive ? "font-medium tracking-wide text-navActive hover:text-navColor transition-colors duration-300 text-xl" : "font-medium tracking-wide text-navColor hover:text-navActive transition-colors duration-300 text-xl"
                                                }
                                            >
                                                FAQ
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/blog"
                                                aria-label="blog"
                                                className={({ isActive }) =>
                                                    isActive ? "font-medium tracking-wide text-navActive hover:text-navColor transition-colors duration-300 text-xl" : "font-medium tracking-wide text-navColor hover:text-navActive transition-colors duration-300 text-xl"
                                                }
                                            >
                                                Blog
                                            </NavLink>
                                        </li>
                                        <li>
                                            <div className="flex justify-center">
                                                <DarkModeToggle
                                                    onChange={setIsDarkMode}
                                                    checked={isDarkMode}
                                                    size={70}
                                                />
                                            </div>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/login"
                                                className={({ isActive }) =>
                                                    isActive ? "inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-white text-navActive transition duration-200 rounded-xl shadow-md hover:bg-navActive hover:text-white focus:shadow-outline focus:outline-none text-xl" : "inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-navActive text-white  transition duration-200 rounded-xl shadow-md hover:bg-white hover:text-navActive focus:shadow-outline focus:outline-none text-xl"
                                                }
                                                aria-label="login"
                                            >
                                                Login
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </div >
    );
};

export default Header;