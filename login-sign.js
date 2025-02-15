import React, { useState } from "react";

function LoginSignup({ closePopup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields!");
      return; // Stop form submission if fields are empty
    }

    alert("Form submitted!");
    closePopup(); // Close the popup only on successful submission
  };

  return (
    <div className="popup">
      <h2>Welcome!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="button-group">
          <button type="submit" className="popup-button">Login</button>
          <button type="submit" className="popup-button">Sign Up</button>
          <button type="button" className="popup-button" onClick={closePopup}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginSignup;


