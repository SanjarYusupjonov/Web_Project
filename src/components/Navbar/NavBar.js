import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/newuu-logo.png"; // Assuming this is your logo path
import NavLinks from "./NavLinks"; // Importing the navigation links component
import "./../../style/NavBar.css"; // Importing the CSS file for styling

const NavBar = () => {
  // State to track whether the navbar is at the top of the page
  const [top, setTop] = useState(!window.scrollY);
  // State to manage the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu open/close state
  function handleClick() {
    setIsOpen(!isOpen);
  }

  // Effect to change navbar style based on scroll position
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav className={`navbar ${!top && "navbar-scrolled"}`}>
      <div className="navbar-content">
        {/* Logo section */}
        <div className="logo-container px-4 pr-3">
          <HashLink smooth to="/#hero">
            <img
              src={logo}
              alt="Logo"
              className="logo"
              style={{
                filter:
                  "invert(20%) sepia(150%) hue-rotate(90deg) saturate(500%) contrast(100%)",
              }}
            />
          </HashLink>
        </div>

        {/* Navigation menu */}
        <div className="menu-container">
          {/* Mobile menu toggle button */}
          <button className="menu-toggle" onClick={handleClick}>
            <svg
              className="menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen && (
                // Close (X) icon for the open mobile menu
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                // Hamburger icon for the closed mobile menu
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>

          {/* Desktop navigation links */}
          <div className="desktop-links">
            <NavLinks />
          </div>

          {/* Mobile navigation menu */}
          <div
            className={`mobile-menu ${
              isOpen ? "mobile-menu-open" : "mobile-menu-closed"
            }`}
          >
            <div className="mobile-links">
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
