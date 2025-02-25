import React from 'react';
import '../style/service.css'; 
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const ServiceCard = ({ icon, title, description }) => {
    return (
      <div className="service-card">
        <div className="service-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
  
  const ServiceInfoItem = ({ icon, title, children }) => {
    return (
      <div className="info-item">
        <div className="info-icon">{icon}</div>
        <div className="info-content">
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    );
  };
  
  const Service = () => {
    const services = [
      {
        icon: "☕",
        title: "Daily Meal Service",
        description: "Enjoy our freshly prepared meals three times a day, with vegetarian options always available."
      },
      {
        icon: "👥",
        title: "Group Reservations",
        description: "Reserve tables for student groups, faculty meetings, or special campus events."
      },
      {
        icon: "📅",
        title: "Catering Services",
        description: "Full catering services for university events, conferences, and celebrations."
      },
      {
        icon: "🏆",
        title: "Nutrition Consultation",
        description: "Free nutrition advice from our expert staff to help maintain a balanced diet."
      }
    ];
  
    const faqs = [
      {
        question: "Do you accommodate dietary restrictions?",
        answer: "Yes, we offer vegetarian options daily and can accommodate other dietary needs with advance notice. Please speak with our staff or email us for special requirements."
      },
      {
        question: "Can I pay with my student ID card?",
        answer: "Yes! Student and faculty ID cards are accepted for payment. You can add funds to your card through the university portal or at the service desk."
      },
      {
        question: "How can I provide feedback about the food or service?",
        answer: "We welcome your feedback! You can fill out a comment card at the canteen, email us, or use the QR code displayed in the dining area to access our online feedback form."
      }
    ];

    return (
        <>
        <NavBar />
        <div id="service" className="bg-gray-100" >
          <div className="service-page" data-aos="zoom-in-down">
            {/* Header */}
            <div className="service-header">
                <div className="coffee-icon">☕</div>
                <h1>Our Services</h1>
                <p className="service-subtitle">Providing quality food and exceptional service to our university community</p>
            </div>

            {/* Services Grid */}
            <div className="services-section">
                <h2>What We Offer</h2>
                <div className="services-grid">
                {services.map((service, index) => (
                    <ServiceCard 
                    key={index} 
                    icon={service.icon} 
                    title={service.title} 
                    description={service.description} 
                    />
                ))}
                </div>
            </div>

            {/* Hours and Information */}
            <div className="info-section">
                <h2>Hours & Information</h2>
                
                <div className="info-grid">
                <div className="info-column">
                    <ServiceInfoItem icon="🕒" title="Operating Hours">
                    <ul className="hours-list">
                        <li><span className="bold">Breakfast:</span> 7:30 AM - 10:00 AM</li>
                        <li><span className="bold">Lunch:</span> 11:30 AM - 2:30 PM</li>
                        <li><span className="bold">Dinner:</span> 5:00 PM - 8:00 PM</li>
                        <li><span className="bold">Weekend:</span> 8:00 AM - 7:00 PM</li>
                    </ul>
                    </ServiceInfoItem>

                    <ServiceInfoItem icon="📍" title="Location">
                    <p>
                        Main Campus Building (MATH), Basement<br />
                        Movarounnahr street 1, 100000
                    </p>
                    </ServiceInfoItem>
                </div>

                <div className="info-column">
                    <ServiceInfoItem icon="📞" title="Contact Us">
                    <p>
                        Phone: +998 (71) 202-41-11<br />
                        Extension: 1234 (from university phones)
                    </p>
                    </ServiceInfoItem>

                    <ServiceInfoItem icon="📧" title="Reservations & Inquiries">
                    <p>
                        For group reservations or catering services:<br />
                        <span className="email">canteen@newuu.uz</span>
                    </p>
                    </ServiceInfoItem>
                </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                
                <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                    <div className="faq-question">
                        <h3>{faq.question}</h3>
                    </div>
                    <div className="faq-answer">
                        <p>{faq.answer}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Sustainability Note */}
            <div className="sustainability-section">
                <h3>Our Commitment to Sustainability</h3>
                <p>
                We're proud to use locally-sourced ingredients where possible and have implemented 
                comprehensive recycling and composting programs. Our to-go containers are made from 
                biodegradable materials as part of our university-wide green initiative.
                </p>
            </div>

            {/* Footer note */}
            <div className="service-footer">
                <p>Service hours may vary during holidays and exam periods.</p>
                <p>For special accommodations, please contact us at least 24 hours in advance.</p>
            </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Service;