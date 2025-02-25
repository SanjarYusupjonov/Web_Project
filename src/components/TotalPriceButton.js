import React from "react";
import { Link } from "react-router-dom";

// Component to display a button showing total price and linking to payment
const TotalPriceButton = ({ totalPrice }) => {
  return (
    // Link component for navigation, styled as a button
    <Link
      to={totalPrice > 0 ? "/payment" : "#"} // Directs to payment page if totalPrice > 0, otherwise stays on current page
      className={`text-white inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 ${
        totalPrice > 0 
          ? "bg-blue-900 hover:bg-blue-800" // Active styling when there’s a total
          : "bg-gray-500 cursor-not-allowed" // Disabled styling when total is 0
      }`}
      onClick={(e) => totalPrice === 0 && e.preventDefault()} // Prevents navigation if totalPrice is 0
    >
      {totalPrice > 0 ? (
        // Display total price and arrow icon when there’s an order
        <>
          Total: ${totalPrice.toFixed(2)} {/* Shows formatted total price */}
          <svg
            className="w-4 h-4 ml-1" // Small arrow icon for visual cue
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </>
      ) : (
        // Display message when no order has been placed
        "You haven’t ordered yet"
      )}
    </Link>
  );
};

export default TotalPriceButton;