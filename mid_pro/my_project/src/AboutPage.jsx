import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./assets/about.jpg"
import img2 from "./assets/about-2.jpg"
import "./main.css"
const AboutPage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="display-4 text-primary">Welcome to UniBites</h1>
          <p className="lead">
            Located in the heart of the university campus, UniBites offers a 
            vibrant dining experience with a variety of delicious meals to suit 
            every student's taste. From quick snacks to full-course meals, we 
            have something for everyone.
          </p>
          <p>
            Our mission is to provide fresh, healthy, and affordable food in a 
            comfortable and welcoming environment. Whether you're looking for a 
            place to relax, study, or grab a bite with friends, UniBites is the 
            perfect spot.
          </p>
        </div>
        <div className="col-lg-6">
          <img 
            src={img1}
            alt="Restaurant Interior" 
            className="img-fluid rounded shadow hover-scale" 
          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-6">
          <img 
            src={img2}
            alt="Delicious Food" 
            className="img-fluid rounded shadow w-48 hover-scale" 
          />
        </div>
        <div className="col-lg-6">
          <h2 className="text-success display-5">Why Choose Us?</h2>
          <ul className="list-group list-group-flush fs-5">
            <li className="list-group-item">Fresh and locally sourced ingredients</li>
            <li className="list-group-item">Affordable student-friendly prices</li>
            <li className="list-group-item">A cozy and modern ambiance</li>
            <li className="list-group-item">Fast service with a smile</li>
            <li className="list-group-item">Special discounts for students and faculty</li>
            <li className="list-group-item">Fast service with a smile</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
