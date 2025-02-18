import React, { useState } from 'react';
import { ChevronDown, UtensilsCrossed } from 'lucide-react';
import './Menu.css';

const MenuCategory = ({ title, items }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="menu-category">
      <button 
        className="category-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2>{title}</h2>
        <ChevronDown 
          className={`icon ${isExpanded ? 'rotate' : ''}`} 
          size={20} 
        />
      </button>
      <div className={`category-items ${isExpanded ? 'expanded' : ''}`}>
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p className="description">{item.description}</p>
            </div>
            <div className="item-price">
              <span>${item.price.toFixed(2)}</span>
              {item.vegetarian && (
                <span className="vegetarian-badge">Veg</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Menu = () => {
  const menuData = {
    mainCourse: [
      {
        name: "Plov",
        description: "Best plov experience",
        price: 25000,
        vegetarian: false
      },
      {
        name: "Soup",
        description: "Best soup experience",
        price: 20000,
        vegetarian: true
      }
      // more items yet to come 
    ],
    desserts: [
      {
        name: "Cake",
        description: "Best cake experience",
        price: 22000,
        vegetarian: false
      }
      // more items will be added once we get the real menu from the canteen
    ]
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <UtensilsCrossed size={32} />
        <h1>Our Menu</h1>
      </div>
      <div className="menu-content">
        <MenuCategory title="Main Course" items={menuData.mainCourse} />
        <MenuCategory title="Desserts" items={menuData.desserts} />
      </div>
    </div>
  );
};

export default Menu;