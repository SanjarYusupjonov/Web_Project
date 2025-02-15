import React, { useState } from "react";

function LoginSignup({ closePopup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    closePopup(); // Close popup after submission
  };

  return (
    <div className="popup">
      <h2>Welcome!</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />

        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          placeholder="Enter your password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />

        {/* ✅ Buttons inside a flex container */}
        <div className="button-group">
          <button type="submit" className="popup-button">Login</button>
          <button type="submit" className="popup-button">Sign Up</button>
          <button type="button" className="popup-button cancel" onClick={closePopup}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default LoginSignup;

