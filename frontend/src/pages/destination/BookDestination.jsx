import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Destination.css';
import destinationsData from './bookdestination.json'; // Import destinations from the JSON file

const DestinationCard = ({ destination }) => (
    <div className="destination-card">
        <img src={destination.image} alt={destination.name} className="destination-image" />
        <div className="destination-info">
            <h3>{destination.name}</h3>
            <p>{destination.content}</p>
            {/* Link to the destination detail page */}
            <Link to={destination.link}>
                Explore More
            </Link>
        </div>
    </div>
);

const BookDestinations = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Calculate the new index when navigating through the destinations
    const goLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 3 + destinationsData.length) % destinationsData.length);
    };

    const goRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % destinationsData.length);
    };

    return (
        <div className="destinations-section">
            <div className="destinations-section-content">
                <div className="destinations-section-buttons">
                    <button className="arrow left" onClick={goLeft}>
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button className="arrow right" onClick={goRight}>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>
                <p>LET US PLAN<h2> YOUR DREAM SAFARI</h2></p>
            </div>
            <div className="slider">
                <div className="destinations-list">
                    {destinationsData.slice(currentIndex, currentIndex + 3).map((destination, index) => (
                        <DestinationCard key={index} destination={destination} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookDestinations;
