import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = ({ heroData, heroCount, setHeroCount }) => {
  // Define paths corresponding to each hero text
  const heroPaths = [
    '/kenya-lodges',  // Path for "Best Kenya Lodges Safaris"
    '/kenya-air',     // Path for "Kenya Air Flight Safaris"
    '/tanzania-tours', // Path for "Tanzania Wildlife Safari Tours"
    '/kenya-tanzania', // Path for "Kenya Tanzania Combined Safaris"
    '/wildebeest-migration' // Path for "Wild Beast Herds Migration 2025-2026"
  ];

  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text}</p>
      </div>
      {/* Dynamically set the path for "Explore" */}
      <Link to={heroPaths[heroCount]} className="hero-link">
        <p>Explore</p>
        <i className='bx bx-right-arrow-circle'></i>
      </Link>
      <div className="dots">
        <ul className='hero-dots'>
          {[0, 1, 2, 3, 4].map((dotIndex) => (
            <li
              key={dotIndex}
              onClick={() => setHeroCount(dotIndex)}
              className={heroCount === dotIndex ? "hero-dot orange" : "hero-dot plain"}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};
