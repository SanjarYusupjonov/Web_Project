import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            {/* Navigation links using HashLink for smooth scrolling */}
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
        </>
    );
}

export default NavLinks;
