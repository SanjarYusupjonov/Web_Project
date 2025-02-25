// Import necessary dependencies and components
import React, { useState } from "react";
import "../style/mantixon.css";
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const Mantixon = () => {
  // State for storing user input food name
  const [food, setFood] = useState("");
  // State for storing calculated calories
  const [calories, setCalories] = useState(null);
  // State for storing user details (age, weight, activity level)
  const [userData, setUserData] = useState({ age: "", weight: "", activity: "" });
  // State for storing AI-generated food recommendations
  const [recommendation, setRecommendation] = useState("");

  // Database containing predefined food items and their calorie values
  const foodDatabase = {
    "apple": 95,
    "banana": 105,
    "chicken breast": 165,
    "rice": 200,
    "bread": 80,
    "manti": 250,
  };

  // Function to calculate and set calorie count for the entered food
  const calculateCalories = () => {
    const cal = foodDatabase[food.toLowerCase()] || "Unknown"; // Convert input to lowercase for consistency
    setCalories(cal);
  };

  // Function to generate dietary recommendations based on user activity level
  const generateRecommendation = () => {
    if (!calories || calories === "Unknown") {
      setRecommendation("Please enter a valid food item.");
      return;
    }
    if (userData.activity === "high") {
      setRecommendation("You have high activity! You may need more carbs and protein.");
    } else if (userData.activity === "low") {
      setRecommendation("Try to balance your meals with fiber-rich foods to stay full longer.");
    } else {
      setRecommendation("Maintain a balanced diet with proteins, fats, and carbs.");
    }
  };

  return (
    <>
      {/* Main wrapper for the page */}
      <div>
        {/* Navigation bar */}
        <NavBar />
        
        {/* Page section with background styling */}
        <div id="mantixon" className="bg-white py-12"></div>
        
        {/* Main content wrapper */}
        <div className="a p-1">
          <div className="mantixon-container" data-aos="zoom-in-down">
            
            {/* Image and title section */}
            <div className="mantixon-image-container">
              <img src="https://i.pinimg.com/736x/ef/2d/9a/ef2d9af8e99b4a15292f3e8f07730c39.jpg" alt="Mantixon AI" />
              <h2>🍽️ Mantixon - Your AI Food Assistant</h2>
            </div>

            {/* Input and output section */}
            <div className="chat-container">
              {/* Section for entering food name and getting calorie information */}
              <div className="input-section">
                <input
                  type="text"
                  placeholder="Enter food name..."
                  value={food}
                  onChange={(e) => setFood(e.target.value)}
                />
                <button onClick={calculateCalories}>Check Calories</button>
              </div>
              
              {/* Display calorie information */}
              {calories && <p>Calories: {calories !== "Unknown" ? calories + " kcal" : "Food not found"}</p>}
              
              {/* Section for entering user details and generating dietary recommendations */}
              <div className="user-section">
                <input
                  type="number"
                  placeholder="Age"
                  value={userData.age}
                  onChange={(e) => setUserData({ ...userData, age: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Weight (kg)"
                  value={userData.weight}
                  onChange={(e) => setUserData({ ...userData, weight: e.target.value })}
                />
                <select
                  value={userData.activity}
                  onChange={(e) => setUserData({ ...userData, activity: e.target.value })}
                >
                  <option value="">Select Activity Level</option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
                <button onClick={generateRecommendation}>Get Recommendation</button>
              </div>

              {/* Display AI-generated food recommendation */}
              {recommendation && <p className="recommendation">{recommendation}</p>}
            </div>
          </div>
        </div>

        {/* Footer section */}
        <Footer />
      </div>
    </>
  );
};

export default Mantixon;
