import React from 'react';
import { useParams } from 'react-router-dom';  // Import useParams to get the route parameters
import destinationsData from './destination.json';  // Import your data to display details for each destination

const DestinationDetail = () => {
    const { destinationName } = useParams();  // Get the destination name from the URL

    // Find the destination from your JSON data based on the name from the URL
    const destination = destinationsData.find(dest => 
        dest.name.toLowerCase().replace(/ /g, '-') === destinationName.toLowerCase()
    );

    // If the destination is not found, show a 404 or error message
    if (!destination) {
        return <h2>Destination not found!</h2>;
    }

    return (
        <div>
            <h1>Details for {destination.name}</h1>
            <p><strong>Location:</strong> {destination.location}</p>
            <p><strong>Rating:</strong> {destination.rating} stars</p>
            <p><strong>Price:</strong> ${destination.price}</p>

            {/* Add More Content */}
            <h3>About {destination.name}</h3>
            <p>{destination.content}</p>

            {/* You can add more detailed content here */}
            <h4>Activities</h4>
            <ul>
                <li>Rafting</li>
                <li>Hiking</li>
                <li>Wildlife Safari</li>
                {/* Add more activities as needed */}
            </ul>

            <h4>Additional Information</h4>
            <p>Here you can add more detailed information that is specific to each destination.</p>
            
            {/* You can also add more sections like reviews, photos, etc. */}
            <div className="destination-gallery">
                <h4>Gallery</h4>
                <img src={destination.image} alt={destination.name} />
                {/* Add more images here */}
            </div>
        </div>
    );
};

export default DestinationDetail;
