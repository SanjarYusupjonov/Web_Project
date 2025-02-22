import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Payment from "./Payment";
import Contact from "./Contact";

function HomePage() {
  return (
    <div className="page-container">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="Home">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



