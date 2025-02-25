import React, { useState } from 'react';
import "../style/menu.css";
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

// Component for rendering a collapsible menu category
const MenuCategory = ({ title, items }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="menu-category">
      {/* Button to toggle category expansion */}
      <button 
        className="category-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2>{title}</h2>
        <span className={`chevron-icon ${isExpanded ? 'rotate' : ''}`}>▼</span>
      </button>
      {/* List of menu items, shown when expanded */}
      <div className={`category-items ${isExpanded ? 'expanded' : ''}`}>
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p className="description">{item.description}</p>
            </div>
            <div className="item-price">
              <span>{(item.price / 1000).toFixed(3)} UZS</span>
              {item.vegetarian && (
                <span className="vegetarian-badge">
                  <span className="leaf-icon">🌿</span> Vegetarian
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Menu = () => {
  // Sample menu data for different categories
  const menuData = {
    mainCourse: [
      {
        name: "Plov",
        description: "Traditional Uzbek rice dish cooked with tender meat, carrots, and a blend of authentic spices.",
        price: 25000,
        vegetarian: false
      },
      {
        name: "Vegetable Soup",
        description: "Fresh seasonal vegetables in a light herb broth, served with homemade bread.",
        price: 20000,
        vegetarian: true
      },
      {
        name: "Grilled Chicken Salad",
        description: "Tender grilled chicken breast on a bed of mixed greens with our house dressing.",
        price: 22000,
        vegetarian: false
      }
    ],
    appetizers: [
      {
        name: "Samsa",
        description: "Flaky pastry filled with seasoned meat and onions, baked to golden perfection.",
        price: 10000,
        vegetarian: false
      },
      {
        name: "Vegetable Spring Rolls",
        description: "Crispy rolls filled with fresh vegetables and served with sweet chili sauce.",
        price: 12000,
        vegetarian: true
      }
    ],
    desserts: [
      {
        name: "Honey Cake",
        description: "Layers of honey-infused cake with sweet cream, a university favorite!",
        price: 18000,
        vegetarian: true
      },
      {
        name: "Fresh Fruit Platter",
        description: "Selection of seasonal fruits, perfect for a light dessert option.",
        price: 15000,
        vegetarian: true
      }
    ],
    beverages: [
      {
        name: "Fresh Mint Tea",
        description: "Brewed with fresh mint leaves, served hot or iced.",
        price: 8000,
        vegetarian: true
      },
      {
        name: "Fruit Smoothie",
        description: "Blended seasonal fruits with yogurt and a touch of honey.",
        price: 12000,
        vegetarian: true
      }
    ]
  };

  return (
    <>
      {/* Main wrapper for the entire page */}
      <div>
        {/* Navigation bar component */}
        <NavBar />

        {/* Menu page content */}
        <div className="menu-page" data-aos="zoom-in-down">
          {/* Header section for the menu */}
          <div className="menu-header">
            <div className="utensils-icon">🍽️</div>
            <h1>University Canteen Menu</h1>
            <p className="menu-subtitle">Delicious and nutritious meals to fuel your studies</p>
          </div>
          
          {/* Container for menu categories */}
          <div className="menu-content">
            <MenuCategory title="Appetizers" items={menuData.appetizers} />
            <MenuCategory title="Main Courses" items={menuData.mainCourse} />
            <MenuCategory title="Desserts" items={menuData.desserts} />
            <MenuCategory title="Beverages" items={menuData.beverages} />
          </div>
          
          {/* Footer section with additional menu information */}
          <div className="menu-footer">
            <p>Menu items and availability may change based on seasonal ingredients.</p>
            <p>Please inform our staff of any allergies or dietary requirements.</p>
          </div>
        </div>

        {/* Footer component */}
        <Footer />
      </div>
    </>
  );
};

export default Menu;