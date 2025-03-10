// Import necessary dependencies and components
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/homepage1.jpg';

const Hero = () => {
    return (
        <>
            {/* Main hero section */}
            <div className="hero" id='hero'>
                {/* Navigation bar */}
                <div>
                    <NavBar />
                </div>

                {/* Main content section with animation */}
                <div className="m-auto overflow-hidden mx-4 mt-1 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">

                    {/* Layout: Text content on the left and image on the right */}
                    <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        
                        {/* Left side - Text content */}
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            {/* Main headline */}
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                                Fueling your day with delicious, affordable bites!
                            </h1>
                            {/* Subtitle */}
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                                Providing nutritious, delicious meals to fuel your busy university days with energy and satisfaction.
                            </div>
                            
                            {/* Call-to-action buttons */}
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                {/* Order a Meal button */}
                                <Link to="/order" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Order a Meal
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                                
                                {/* Ask Help From Mantixon button */}
                                <Link to="/mantixon" className="inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg text-white bg-gray-500 hover:bg-gray-400 shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Ask Help From Mantixon
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Right side - Image */}
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img alt="card img" className="rounded-t float-right duration-1000 w-full" src={heroImg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
