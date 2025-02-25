import React from "react";
import AboutPage from "../components/About/AboutPage";
import AboutChefs from "../components/About/AboutChefs";
import AboutDevs from "../components/About/AboutDevs";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const About = ()=> {
    return (
      <>
      <div>
          <NavBar />
      </div>
      <div id="about"  className="my-4 py-4 justify-center items-center mt-14 w-full bg-white py-12 lg:py-24" data-aos="zoom-in-down">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">About US</h2>
          
          <div className='flex justify-center'>
              <div className='w-24 border-b-4 border-blue-900'></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
      </div>
      <AboutPage />
      <AboutChefs/>
      <AboutDevs />
      <Footer />
      </>
    );
  }
export default About;