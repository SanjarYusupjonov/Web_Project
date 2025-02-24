import React, { useState } from "react";
import "./Mantixon.css";


const Mantixon = () => {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState(null);
  const [userData, setUserData] = useState({ age: "", weight: "", activity: "" });
  const [recommendation, setRecommendation] = useState("");

  const foodDatabase = {
    "apple": 95,
    "banana": 105,
    "chicken breast": 165,
    "rice": 200,
    "bread": 80,
    "manti": 250,
  };

  const calculateCalories = () => {
    const cal = foodDatabase[food.toLowerCase()] || "Unknown";
    setCalories(cal);
  };

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
    <div className="mantixon-container">
      
      {/* Image Container */}
      <div className="mantixon-image-container">
        <img src="https://i.pinimg.com/736x/ef/2d/9a/ef2d9af8e99b4a15292f3e8f07730c39.jpg" alt="Mantixon AI" />
        <h2>🍽️ Mantixon - Your AI Food Assistant</h2>
      </div>

      {/* Chat & Input Section */}
      <div className="chat-container">
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter food name..."
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
          <button onClick={calculateCalories}>Check Calories</button>
        </div>
        {calories && <p>Calories: {calories !== "Unknown" ? calories + " kcal" : "Food not found"}</p>}
        
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
        {recommendation && <p className="recommendation">{recommendation}</p>}
      </div>
    </div>
  );
};

export default Mantixon;