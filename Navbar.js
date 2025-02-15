import React, { useState } from "react";
import logo from "./newuu-logo.png";
import LoginSignup from "./login-sign";
import "./App.css";

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="University Logo" className="logo" />
      <div className="nav-buttons">
        <button className="nav-button" onClick={() => setShowPopup(true)}>
          Login / Sign Up
        </button>
      </div>
      {showPopup && <LoginSignup closePopup={() => setShowPopup(false)} />}
    </nav>
  );
}

export default Navbar;


