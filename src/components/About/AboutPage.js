import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for styling
import img2 from "../../images/about-2.jpg"; // Import image for the first section
import img1 from "../../images/about.jpg"; // Import image for the second section
import "../../style/about.css"; // Import custom CSS for additional styling

const AboutPage = () => {
  return (
    <div className="container my-5" data-aos="zoom-in">
      <div className="row mt-8">
        {/* First column with an image */}
        <div className="col-lg-6">
          <img 
            src={img2}
            alt="Delicious Food" 
            className="img-fluid rounded shadow w-48 hover-scale" 
          />
        </div>
        {/* Second column with text content */}
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
      </div>

      <div className="row mt-5">
        {/* Left column with a list of features */}
        <div className="col-lg-6">
          <h2 className="text-success display-5">Why Choose Us?</h2>
          <ul className="list-group list-group-flush fs-5">
            <li className="list-group-item">Fresh and locally sourced ingredients</li>
            <li className="list-group-item">Affordable student-friendly prices</li>
            <li className="list-group-item">A cozy and modern ambiance</li>
            <li className="list-group-item">Fast service with a smile</li>
            <li className="list-group-item">Special discounts for students and faculty</li>
            <li className="list-group-item">Fast service with a smile</li> {/* Duplicate item */}
          </ul>
        </div>
        {/* Right column with another image */}
        <div className="col-lg-6">
          <img 
            src={img1}
            alt="Restaurant Interior" 
            className="img-fluid rounded shadow hover-scale" 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
