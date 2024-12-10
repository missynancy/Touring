import React, { useState } from 'react';
import './Newsletter.css'

// Functional component for newsletter signup
const NewsletterSignup = () => {
  // State for handling the email and form submission
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  // Handle the email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic email validation
    if (!email) {
      setError('Email is required');
      return;
    }

    // Simple regex to check if the email format is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    // Clear error and simulate subscribing the user
    setError('');
    setIsSubscribed(true);
    console.log('Subscribed with email:', email);

    // Reset the email after successful submission
    setEmail('');
  };

  return (
    <div className="newsletter-signup">
      <h2>Subscribe to Our Newsletter</h2>

      {isSubscribed ? (
        <div className="success-message">
          <h3>Thank you for subscribing!</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
