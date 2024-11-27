import React from 'react';
import './hero.css';
import img1 from '/images/safari.jpg';
import img2 from '/images/safariair.jpg';
import img3 from '/images/tanzaniatour.jpg';
import img4 from '/images/kenyatanzania.jpg';
import img5 from '/images/Wildebeest.jpg';

export const Background = ({ heroCount }) => {
  if (heroCount === 0) {
    return <img src={img1} className='back' alt="Safari" />;
  } else if (heroCount === 1) {
    return <img src={img2} className='back' alt="Kenya Air Safari" />;
  } else if (heroCount === 2) {
    return <img src={img3} className='back' alt="Tanzania Wildlife Tour" />;
  } else if (heroCount === 3) {
    return <img src={img4} className='back' alt="Kenya Tanzania Combined Safari" />;
  } else if (heroCount === 4) {
    return <img src={img5} className='back' alt="Wildebeest Migration" />;
  }
  return null;
};
