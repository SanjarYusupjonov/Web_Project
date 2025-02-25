import React, { useState } from 'react';
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
        <span className={`chevron-icon ${isExpanded ? 'rotate' : ''}`}>▼</span>
      </button>
      <div className={`category-items ${isExpanded ? 'expanded' : ''}`}>
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="item-image">
              <img 
                src={require(`./images/${item.imageName}`)} 
                alt={item.name} 
                className="food-image" 
              />
              {item.vegetarian && (
                <span className="vegetarian-badge-overlay">
                  <span className="leaf-icon">🌿</span>
                </span>
              )}
            </div>
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
  // Sample menu data with image paths
  const menuData = {
    mainCourse: [
      {
        name: "Plov",
        description: "Traditional Uzbek rice dish cooked with tender meat, carrots, and a blend of authentic spices.",
        price: 25000,
        vegetarian: false,
        imageName: "plov1.jpg"
      },
      {
        name: "Vegetable Soup",
        description: "Fresh seasonal vegetables in a light herb broth, served with homemade bread.",
        price: 20000,
        vegetarian: true,
        imageName: "vege_soup1.png"
      },
      {
        name: "Grilled Chicken Salad",
        description: "Tender grilled chicken breast on a bed of mixed greens with our house dressing.",
        price: 22000,
        vegetarian: false,
        imageName: "chick_salad.png"
      }
    ],
    appetizers: [
      {
        name: "Samsa",
        description: "Flaky pastry filled with seasoned meat and onions, baked to golden perfection.",
        price: 10000,
        vegetarian: false,
        imageName: "samsa2.jpg"
      },
      {
        name: "Vegetable Spring Rolls",
        description: "Crispy rolls filled with fresh vegetables and served with sweet chili sauce.",
        price: 12000,
        vegetarian: true,
        imageName: "spring_rolls1.png"
      }
    ],
    desserts: [
      {
        name: "Honey Cake",
        description: "Layers of honey-infused cake with sweet cream, a university favorite!",
        price: 18000,
        vegetarian: true,
        imageName: "honey_cake.png"
      },
      {
        name: "Fresh Fruit Platter",
        description: "Selection of seasonal fruits, perfect for a light dessert option.",
        price: 15000,
        vegetarian: true,
        imageName: "fruit_platter.jpg"
      }
    ],
    beverages: [
      {
        name: "Fresh Mint Tea",
        description: "Brewed with fresh mint leaves, served hot or iced.",
        price: 8000,
        vegetarian: true,
        imageName: "milt_tea.png"
      },
      {
        name: "Fruit Smoothie",
        description: "Blended seasonal fruits with yogurt and a touch of honey.",
        price: 12000,
        vegetarian: true,
        imageName: "fruit_smoothie.jpg"
      }
    ]
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <div className="utensils-icon">🍽️</div>
        <h1>University Canteen Menu</h1>
        <p className="menu-subtitle">Delicious and nutritious meals to fuel your studies</p>
      </div>
      
      <div className="menu-promotions">
        <div className="promo-card">
          <div className="promo-content">
            <h3>Student Special</h3>
            <p>Show your student ID to get 10% off on any main course!</p>
          </div>
          <div className="promo-badge">10% OFF</div>
        </div>
        <div className="promo-card">
          <div className="promo-content">
            <h3>Meal Plan</h3>
            <p>Subscribe to our weekly meal plan for better rates and nutrition planning.</p>
          </div>
          <div className="promo-badge">SAVE</div>
        </div>
      </div>
      
      <div className="menu-content">
        <MenuCategory title="Appetizers" items={menuData.appetizers} />
        <MenuCategory title="Main Courses" items={menuData.mainCourse} />
        <MenuCategory title="Desserts" items={menuData.desserts} />
        <MenuCategory title="Beverages" items={menuData.beverages} />
      </div>
      
      <div className="menu-footer">
        <p>Menu items and availability may change based on seasonal ingredients.</p>
        <p>Please inform our staff of any allergies or dietary requirements.</p>
      </div>
    </div>
  );
};

export default Menu;