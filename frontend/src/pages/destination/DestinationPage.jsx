import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Destination.css';
import destinationsData from './destination.json'; // Import destinations from the JSON file
import image1 from '/images/mara.jpg'

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

const DestinationPage = () => (
    <div className="destinations-section destination-page">
        <div className="d-hero">
            <img src={image1} alt="masai mara" />
        </div>
        <div className="destinations-section-content dsc-2">
            <span>Experience Kenya & Tanzania Safaris</span>
            <h3> 2025-2026</h3>
        </div>
        <div className="slider">
            <div className="destinations-list">
                {destinationsData.map((destination, index) => (
                    <DestinationCard key={index} destination={destination} />
                ))}
            </div>
        </div>
    </div>
);

export default DestinationPage;
