import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./newuu-logo.png";
import "./App.css";

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (!email || !password) {
      setError("Please fill in all fields!");
      return; // Keep popup open if fields are empty
    }

    setShowPopup(false); // Close popup only if fields are filled
    alert("Login/Signup successful!");
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="University Logo" className="logo" />
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/payment" className="nav-link">Payment</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <button className="nav-button" onClick={() => setShowPopup(true)}>Login / Sign Up</button>
      </div>

      {showPopup && (
        <div className="popup">
          <h2>Welcome!</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="popup-buttons">
              <button type="submit">Login</button>
              <button type="submit">Sign Up</button>
              <button type="button" onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </nav>
  );
}

export default Navbar;







