import React, { useState } from "react";
import "./../style/payment.css";
import NavBar from "../components/Navbar/NavBar"; 
import Footer from "../components/Footer";

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); 
    value = value.replace(/(.{4})/g, "$1 ").trim(); 
    if (value.length <= 19) {
      setCardNumber(value);
    }
  };

  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); 
    if (value.length > 4) return; 
    if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,2})/, "$1/$2"); 
    }
    setExpiryDate(value);
  };

  const handleCvvChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); 
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    
    const cleanCardNumber = cardNumber.replace(/\s/g, "");
    const cleanExpiryDate = expiryDate.replace(/\//g, "");

    if (!cleanCardNumber || !cleanExpiryDate || !cvv) {
      setError("Please fill in all fields correctly.");
      return;
    }

    if (cleanCardNumber.length !== 16) {
      setError("Card number must be 16 digits.");
      return;
    }

    if (cleanExpiryDate.length !== 4) {
      setError("Expiry date must be in MM/YY format.");
      return;
    }

    if (cvv.length !== 3) {
      setError("CVV must be 3 digits.");
      return;
    }

    setError(""); 
    alert("Payment Successful!");
  };

  return (
    <>
    <div>
        <NavBar />
    </div>
    <div className="payment-container">
      <h2>Enter Payment Details</h2>
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handlePayment}>
        <div className="input-group">
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9101 1121"
            maxLength="19"
            required
          />
        </div>

        <div className="input-row">
          <div className="input-group">
            <label>Expiry Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              placeholder="MM/YY"
              maxLength="5"
              required
            />
          </div>

          <div className="input-group">
            <label>CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={handleCvvChange}
              placeholder="123"
              maxLength="3"
              required
            />
          </div>
        </div>

        <button type="submit" className="pay-button">Pay Now</button>
      </form>
    </div>
    <Footer />
    </>
  );
}

export default Payment;
