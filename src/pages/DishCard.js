import React, { useState } from 'react';
import pic1 from './../images/f3.png';
import pic2 from './../images/f2.png';
import pic3 from './../images/f1.png';
import TotalPriceButton from '../components/TotalPriceButton';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import './../style/dish.css';

const DishesCard = () => {
  // Array of dish objects
  const dishes = [
    {
      name: 'Margherita Pizza',
      price: 12.99,
      rating: 4.5,
      image: pic1,
      description: 'Classic pizza with fresh tomatoes and mozzarella',
    },
    {
      name: 'Pasta Carbonara',
      price: 15.50,
      rating: 4.8,
      image: pic2,
      description: 'Creamy pasta with pancetta and parmesan',
    },
    {
      name: 'Grilled Salmon',
      price: 18.99,
      rating: 4.7,
      image: pic3,
      description: 'Fresh salmon with lemon herb sauce',
    },     
  ];

  // State to track quantity of each dish
  const [quantities, setQuantities] = useState(dishes.map(() => 0));

  // Calculate total price
  const totalPrice = dishes.reduce((sum, dish, index) => {
    return sum + dish.price * quantities[index];
  }, 0);

  // Handle quantity increase
  const handleIncrease = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  // Handle quantity decrease
  const handleDecrease = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };

  return (
    <>
    <div>
        <NavBar />
    </div>
    <section id="order" className="dishes section my-5">
      <div className="container section-title text-center" data-aos="fade-up">
        <h2 className="dishes text-sm uppercase tracking-wide text-gray-400">MENU</h2>
        <p className="mt-2">
          <span className="font-amatic text-gray-600 text-4xl font-light">Our</span>{' '}
          <span className="font-amatic redcolor text-red-500 text-5xl font-[Pacifico] tracking-wide">
            Delicious Dishes
          </span>
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="dish-card">
                <div className="dish-img">
                  <img src={dish.image} className="img-fluid" alt={dish.name} />
                </div>
                <div className="dish-info">
                  <h4>{dish.name}</h4>
                  <p>{dish.description}</p>
                  <div className="dish-details">
                    <span className="price">${dish.price.toFixed(2)}</span>
                    <span className="rating">
                      <i className="bi bi-star-fill"></i> {dish.rating}/5
                    </span>
                  </div>
                  <div className="quantity-controls">
                    <button 
                      className="btn btn-minus"
                      onClick={() => handleDecrease(index)}
                      disabled={quantities[index] === 0}
                    >
                      <i className="bi bi-dash"></i>
                    </button>
                    <span className="quantity">{quantities[index]}</span>
                    <button 
                      className="btn btn-plus"
                      onClick={() => handleIncrease(index)}
                    >
                      <i className="bi bi-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Price Button */}
        <div className="text-center">
          <TotalPriceButton totalPrice={totalPrice} />
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default DishesCard;