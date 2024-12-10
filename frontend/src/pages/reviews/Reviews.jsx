import React, { useState, useEffect } from "react";
import reviews from "./reviews.json";  // Importing the review data from the JSON file
import "./Reviews.css";

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll function to move to the next review every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();  // Automatically go to the next review
    }, 3000);  // Change the interval time (in milliseconds) as per your requirement (3000 ms = 3 seconds)

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);  // Loop back to the start
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length  // Loop back to the end
    );
  };

  // Create an array of the 3 reviews to be displayed
  const displayedReviews = [
    reviews[(currentIndex + 0) % reviews.length],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];
  // Create an array of the 2 reviews to be displayed
  const displayedReviews2 = [
    reviews[(currentIndex + 0) % reviews.length],
    reviews[(currentIndex + 1) % reviews.length],
  ];
  // Create an array of the 2 reviews to be displayed
  const displayedReviews3 = [
    reviews[(currentIndex + 0) % reviews.length],
  ];

  return (
    <div className="carousel-container">
        <h2>Customer reviews</h2>
        <a href="https://www.tripadvisor.com/Attraction_Review-g294207-d318003-Reviews-Asili_Adventure_Safaris-Nairobi.html">View more</a>
      <div className="carousel-content">
        {displayedReviews.map((reviewItem, index) => (
          <div key={index} className="review">
            <img className="review-image" src={reviewItem.image} alt={`reviewer-${index}`} />
            <p className="review-text">"{reviewItem.review}"</p>
            <p className="review-author">- {reviewItem.name}</p>
            <p className="review-rating">{"⭐".repeat(reviewItem.rating)}</p>
          </div>
        ))}
        
      </div>
      <div className="carousel-content c-2">
        {displayedReviews2.map((reviewItem, index) => (
          <div key={index} className="review">
            <img className="review-image" src={reviewItem.image} alt={`reviewer-${index}`} />
            <p className="review-text">"{reviewItem.review}"</p>
            <p className="review-author">- {reviewItem.name}</p>
            <p className="review-rating">{"⭐".repeat(reviewItem.rating)}</p>
          </div>
        ))}
        
      </div>
      <div className="carousel-content c-3">
        {displayedReviews3.map((reviewItem, index) => (
          <div key={index} className="review">
            <img className="review-image" src={reviewItem.image} alt={`reviewer-${index}`} />
            <p className="review-text">"{reviewItem.review}"</p>
            <p className="review-author">- {reviewItem.name}</p>
            <p className="review-rating">{"⭐".repeat(reviewItem.rating)}</p>
          </div>
        ))}
        
      </div>

      <div className="carousel-navigation">
        <button className="nav-button" onClick={prevReview}>
          Prev
        </button>
        <button className="nav-button" onClick={nextReview}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
