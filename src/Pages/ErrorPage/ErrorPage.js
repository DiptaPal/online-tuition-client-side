import React from 'react';
import { Link } from "react-router-dom";
import errorLogo  from "../../assets/error.json"
import Lottie from 'lottie-react'

const ErrorPage = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <section className="flex items-center h-full sm:p-16 text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                    <Lottie animationData={errorLogo} loop={true} />
                    <p className="text-3xl">Looks like our services are currently offline</p>
                    <Link to="/" className="text-2xl px-8 py-3 font-semibold rounded bg-navActive shadow-md hover:text-navActive hover:bg-white text-gray-50">Back to homepage</Link>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;