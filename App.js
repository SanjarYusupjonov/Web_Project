import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Payment from "./Payment";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

