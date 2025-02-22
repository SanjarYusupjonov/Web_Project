import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="event-card">
        <div className="image-container">
          <img src="/canteen.png" alt="Canteen" />
        </div>

        <div className="text-container">
          <h2 className="contact-title"> NEW UZBEKISTAN CANTEEN</h2>
          <p>Do you have any questions?!</p>
          <p>Feel free to come and ask them personally 😊</p>
          <p>
            Daily working hours: <strong>09:00 AM - 6:00 PM</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

