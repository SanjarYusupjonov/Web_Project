import React from "react";
import img from "./assets/react.svg"
import ChefsCard from "./AboutCooks";
import DevelopersCard from "./AboutDevs";
import AboutPage from "./AboutPage";
// import AboutUs from "./AboutUs";
import DishesCard from "./DishesCard";
const App = () => {
    return (
        <div className="container mt-5 d-flex justify-content-center">
           
            {/* <ChefsCard/> */}
            {/* <AboutPage /> */}
           {/* <DevelopersCard/>  */}
           <DishesCard/>
        </div>
    );
};

export default App;
