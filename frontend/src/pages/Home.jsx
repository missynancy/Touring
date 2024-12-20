import React, { useState, useEffect } from 'react';
import { Hero } from '../components/hero/Hero';
import { Background } from '../components/hero/Background';
import image1 from '/images/safarifamily.jpg'
import image2 from '/images/camera-location-1.png'
import image3 from '/images/finance-protection.png'
import image4 from '/images/value-for-money-1.png'
import image5 from '/images/expert.png'
import Destinations from './destination/Homedestination';
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
      <div className="features">
        <h4>Why Choose Us</h4>
        <h5>Embarking on an East Africa safari is a once-in-a-lifetime experience, and we are here to make sure it's unforgettable. </h5>
        <div className="features-p">
          <div className="features-p-content">
            <img src={image2} alt="" />
            <h2>Diverse East Africa Destinations</h2>
            <p>Well selected cross border safaris to East Africa countries, Kenya ,Uganda, Tanzania and Rwanda</p>
          </div>
          <div className="features-p-content">
            <img src={image3} alt="" />
            <h2>Financial Protection</h2>
            <p>Best Safari Tours Rates financial Security and Assurance - bonded members of <a href="https://katokenya.org/">KATO</a></p>
          </div>
          <div className="features-p-content">
            <img src={image4} alt="" />
            <h2>Great Value for Money</h2>
            <p>The true worth of a safari is in its value for money, get a Fair price with huge range of trips to suit every travel style</p>
          </div>
          <div className="features-p-content">
            <img src={image5} alt="" />
            <h2>Africa Safari Expert</h2>
            The Directors collectively have over 40 years of experience in the hospitality and tourism industry...
          </div>
        </div>
      </div>
      <ReviewCarousel />
    </div>
  );
};

export default Home;
