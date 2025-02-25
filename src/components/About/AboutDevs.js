import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import pic1 from './../../images/pic1.avif';
import pic2 from './../../images/123.png';
import './../../style/about.css'; 

const DevelopersCard = () => {
  const chefs = [
    {
      name: 'Alice Johnson',
      title: 'Frontend Developer',
      image: pic1,
      description: 'Passionate about crafting beautiful and user-friendly interfaces. Specializes in React, Tailwind CSS, and JavaScript.',
      delay: '100'
    },
    {
      name: 'Michael Smith',
      title: 'Backend Engineer',
      image: pic2,
      description: 'Expert in Node.js, Python, and database management. Loves optimizing API performance and building scalable applications.',
      delay: '200'
    },
    {
      name: 'Sophia Lee',
      title: 'Full Stack Developer',
      image: pic1,
      description: 'Brings designs to life with seamless frontend and backend integration. Enthusiastic about MERN stack and cloud technologies.',
      delay: '300'
    },
  ];

  return (
    <section id="chefs" className="chefs section my-8">
        <div className="container section-title text-center" data-aos="fade-up">
            <h2 className="cheff text-lg uppercase tracking-wide text-gray-400">Developers</h2>
            <p className="mt-2">
            <span className="font-amatic text-gray-600 text-4xl font-light">Our</span>{' '}
            <span className="font-amatic redcolor text-red-500 text-5xl font-[Pacifico] tracking-wide">
                Professional Developers
            </span>
            </p>
        </div>

        <div className="container">
            <div className="row gy-4 my-5">
            {chefs.map((chef, index) => (
                <div 
                key={index}
                className="col-lg-4 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay={chef.delay}
                >
                <div className="team-member">
                    <div className="member-img position-relative">
                    <img src={chef.image} className="img-fluid w-100" alt={chef.name} />
                    
                    {/* SVG Wave - Fixed */}
                    <div className="wave-container">
                        <svg className="wave" viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" className="wave-fill"></path>
                        </svg>
                    </div>

                    <div className="social">
                        <a href="#"><i className="bi bi-twitter-x"></i></a>
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                    <div className="member-info">
                    <h4>{chef.name}</h4>
                    <span>{chef.title}</span>
                    <p>{chef.description}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  );
};

export default DevelopersCard;