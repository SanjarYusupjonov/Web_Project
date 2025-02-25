import React from 'react';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import AboutPage from '../components/About/AboutPage';

const Home = () => {
    return (
        <>
            {/* Main wrapper for the entire page */}
            <div>
                {/* Hero section for the homepage */}
                <Hero />

                {/* General about information section */}
                <AboutPage />

                {/* Call-to-action component */}
                <Cta />

                {/* Footer component */}
                <Footer />
            </div>
        </>
    );
};

export default Home;