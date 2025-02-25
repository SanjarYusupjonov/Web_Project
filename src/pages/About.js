import React from "react";
import AboutPage from "../components/About/AboutPage";
import AboutChefs from "../components/About/AboutChefs";
import AboutDevs from "../components/About/AboutDevs";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const About = () => {
    return (
      <>
        {/* Main wrapper for the entire page */}
        <div>
          {/* Navigation bar component */}
          <NavBar />

          {/* About section header */}
          <div id="about" className="my-4 py-4 justify-center items-center mt-14 w-full bg-white py-12 lg:py-24" data-aos="zoom-in-down">
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">About US</h2>
            <div className='flex justify-center'>
              <div className='w-24 border-b-4 border-blue-900'></div>
            </div>
            <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
              Fueling your day with delicious, affordable bites!            </h2>
          </div>

          {/* Component for general about information */}
          <AboutPage />

          {/* Component showcasing the chefs */}
          <AboutChefs />

          {/* Component showcasing the developers */}
          <AboutDevs />

          {/* Footer component */}
          <Footer />
        </div>
      </>
    );
};

export default About;