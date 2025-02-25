import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/newuu-logo.png"; // Assuming this is your logo path
import NavLinks from "./NavLinks"; // Assuming this is your navigation links component
import "./NavBar.css"; // Use a separate CSS file for clarity

const NavBar = () => {
  const [top, setTop] = useState(!window.scrollY);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

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
        <div className="menu-container">
          <button className="menu-toggle" onClick={handleClick}>
            <svg
              className="menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
          <div className="desktop-links">
            <NavLinks />
          </div>
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