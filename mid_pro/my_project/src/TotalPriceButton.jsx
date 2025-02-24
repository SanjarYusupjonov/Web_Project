import React from 'react';
import './TotalPriceButton.css';

const TotalPriceButton = ({ totalPrice }) => {
  return (
    <button className="total-price-btn">
      Total: ${totalPrice.toFixed(2)}
    </button>
  );
};

export default TotalPriceButton;
