import React from 'react';
import './basket.css'; // We'll create this CSS file next

const Basket = ({ selectedDishes, onRemoveItem }) => {
  // Calculate total price
  const totalPrice = selectedDishes.reduce(
    (sum, dish) => sum + dish.price * dish.quantity,
    0
  );

  return (
    <div className="basket-container">
      <h2 className="basket-title">Your Basket</h2>
      
      {selectedDishes.length === 0 ? (
        <p className="empty-message">Your basket is empty</p>
      ) : (
        <>
          <div className="basket-items">
            {selectedDishes.map((dish, index) => (
              <div key={index} className="basket-item">
                <div className="item-details">
                  <h4>{dish.name}</h4>
                  <p>
                    ${dish.price.toFixed(2)} x {dish.quantity} = $
                    {(dish.price * dish.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => onRemoveItem(index)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            ))}
          </div>
          <div className="basket-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;