import React from 'react';
import pic1 from './../../images/pic2.jpg';
import pic2 from './../../images/pic1.avif';
import pic3 from './../../images/pic3.jpg';
import '../../style/about.css';

const ChefsCard = () => {
  // Array containing chef details
  const chefs = [
    {
      name: 'Walter White',
      title: 'Master Chef',
      image: pic3, // Image for the chef
      description: 'Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.',
      delay: '100' // Animation delay for AOS
    },
    {
      name: 'Sarah Jhonson',
      title: 'Patissier',
      image: pic2,
      description: 'Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.',
      delay: '200'
    },
    {
      name: 'William Anderson',
      title: 'Cook',
      image: pic1,
      description: 'Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.',
      delay: '300'
    },
  ];

  return (
    <section id="chefs" className="chefs section my-3">
      {/* Section title */}
      <div className="container section-title text-center" data-aos="fade-up">
        <h2 className="cheff text-lg uppercase tracking-wide text-gray-400">CHEFS</h2>
        <p className="mt-2">
          <span className="font-amatic text-gray-600 text-4xl font-light">Our</span>{' '}
          <span className="font-amatic redcolor text-red-500 text-5xl font-[Pacifico] tracking-wide">
            Professional Chefs
          </span>
        </p>
      </div>

      <div className="container">
        <div className="row gy-4 my-5">
          {/* Loop through chefs array and render each chef */}
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={chef.delay}
            >
              <div className="team-member">
                {/* Chef image section */}
                <div className="member-img">
                  <img src={chef.image} className="img-fluid" alt={chef.name} />
                  
                  {/* SVG Wave Effect */}
                  <div className="wave-container">
                    <svg className="wave" viewBox="0 0 500 150" preserveAspectRatio="none">
                      <path
                        d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
                        className="wave-fill"
                      ></path>
                    </svg>
                  </div>

                  {/* Social Media Links */}
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>

                {/* Chef information */}
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

export default ChefsCard;
