import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Mantixon from './components/Mantixon';
import Service from './pages/Services';
import Menu from './pages/Menu';
import About from './pages/About';
import Order from './pages/DishCard';
import Payment from './pages/Payment';

// Import custom hooks & utilities
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Initialize AOS animation on page load
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', aos_init);
  }, []);

  // Set document title
  useDocTitle("New Uzbekistan University Canteen");

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/mantixon" element={<Mantixon />} /> 
          <Route path="/service" element={<Service />} /> 
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />  
          <Route path="/order" element={<Order />} />  
          <Route path="/payment" element={<Payment />} />  
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
