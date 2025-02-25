import React from "react";
import { Link } from "react-router-dom";

const TotalPriceButton = ({ totalPrice }) => {
  return (
    <Link
      to={totalPrice > 0 ? "/payment" : "#"}
      className={`text-white inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 ${
        totalPrice > 0 ? "bg-blue-900 hover:bg-blue-800" : "bg-gray-500 cursor-not-allowed"
      }`}
      onClick={(e) => totalPrice === 0 && e.preventDefault()} 
    >
      {totalPrice > 0 ? (
        <>
          Total: ${totalPrice.toFixed(2)}
          <svg
            className="w-4 h-4 ml-1"
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
        "You haven’t ordered yet"
      )}
    </Link>
  );
};

export default TotalPriceButton;