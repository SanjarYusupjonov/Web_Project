import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-1 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/">
                Home
            </HashLink>
             <HashLink className="px-1 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/about">
                About
            </HashLink>
            <HashLink className="px-1 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/service">
                Services
            </HashLink>
            <HashLink className="px-1 font-extrabold text-gray-500 hover:text-blue-900" to="/menu">
                Menu
            </HashLink>
            <HashLink className="px-1 font-extrabold text-gray-500 hover:text-blue-900" to="/blog">
                Blog
            </HashLink>
            <HashLink className="px-1 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#contact">
                Contact
            </HashLink>
            {/* <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-5 py-3 ml-0 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                Sign in
            </HashLink> */}
            {/* <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-5 py-3 mr-0 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                Sign Up
            </HashLink> */}
        </>
    )
}

export default NavLinks;
