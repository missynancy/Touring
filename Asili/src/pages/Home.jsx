import React, { useState, useEffect } from 'react';
import { Hero } from '../components/hero/Hero';
import { Background } from '../components/hero/Background';

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
    <div className="Home">
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
    </div>
  );
};

export default Home;
