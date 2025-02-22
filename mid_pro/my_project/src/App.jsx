import React from "react";
import img from "./assets/react.svg"
import ChefsCard from "./AboutCooks";
import DevelopersCard from "./AboutDevs";
const App = () => {
    return (
        <div className="container mt-5 d-flex justify-content-center">
           <ChefsCard/>
           <DevelopersCard/>
        </div>
    );
};

export default App;
