import React, { useState, useEffect } from 'react';
import { Hero } from '../components/hero/Hero';
import { Background } from '../components/hero/Background';
import image1 from '/images/safarifamily.jpg'
import Destinations from './destination/Destination';
import BookDestinations from './destination/BookDestination';
import ReviewCarousel from './reviews/Reviews';

const Home = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [isActive, setIsActive] = useState(true);  // State to toggle visibility

  const heroData = [
    { text: "Best Kenya Lodges Safaris" },
    { text: "Kenya Air Flight Safaris" },
    { text: "Tanzania Wildlife Safari Tours" },
    { text: "Kenya Tanzania Combined Safaris" },
    { text: "Wild Beast Herds Migration 2025-2026" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prevCount) => {
        const newCount = prevCount === 4 ? 0 : prevCount + 1;
        setIsActive(false); // Temporarily deactivate for transition effect
        setTimeout(() => setIsActive(true), 500);  // Reactivate after 500ms
        return newCount;
      });
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval);  // Cleanup interval on unmount
  }, []);

  return (
    <div className="home">
      <div className="landing-page">
        <Background heroCount={heroCount} isActive={isActive} />
        <div className={`hero ${isActive ? 'active' : ''}`}>
          <Hero
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
          />
        </div>
      </div>
      <Destinations/>
      {/* <div className="features">
        <div className="features-p">
          <p><i class="fa fa-check" aria-hidden="true"></i> 5-Star TripAdvisor Reviews</p>
          <p><i class="fa fa-check" aria-hidden="true"></i> Exemplary Services</p>
          <p><i class="fa fa-check" aria-hidden="true"></i> Value For Money</p>
          <p><i class="fa fa-check" aria-hidden="true"></i> Africa Safari Expert</p>
        </div>
      </div> */}
      <div className="home-packages">
        <div className="home-packages-content">
          <h3>Explore Unique Safari Packages in East Africa</h3>
          <p>
          Explore Unique Safari Packages in East Africa
          Welcome to Asili Adventure & Safaris Ltd – a 
          company built on Excellence, Integrity, and Passion 
          for Africa and its wildlife. We specialize in personalized, 
          affordable safaris tailored to your needs and budget, ensuring 
          high-quality experiences without compromise.
          Our commitment is to provide you with unforgettable trips through expert 
          guides, top-tier travel options, and the best accommodations. From luxury 
          safaris to budget-friendly tours, we offer a variety of experiences, 
          including Kenya wildlife safaris, beach vacations, walking safaris, mountain climbing, 
          family tours, and balloon safaris.
          </p>
          <h4>We cater to the varied needs of travelers from across the globe. 
            Allow us the opportunity to plan and organize your dream holiday safari in East Africa.
          </h4>
          <a href="">Read more</a>
        </div>
        <img src={image1} alt="family safari photo" />
      </div>
      <BookDestinations />
      <ReviewCarousel />
      {/* <div className="why-us">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum cum deserunt inventore! Sunt quas nesciunt perspiciatis dolorum quod accusamus unde recusandae magni architecto esse nemo totam nulla, aliquid doloremque.
      </div>  */}
    </div>
  );
};

export default Home;
