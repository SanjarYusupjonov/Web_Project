import React from 'react';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from './Services';
import AboutPage from '../components/About/AboutPage';
import DishesCard from './DishCard';
const Home = () => {
    return (
        <>
            <Hero />
            {/* <Intro /> */}
            <AboutPage />
            {/* <Services /> */}
            {/* <Portfolio /> */}
            {/* <Clients /> */}
            <Cta/>
            <Footer />
            {/* <DishesCard/> */}
        </>

    )
}

export default Home;

