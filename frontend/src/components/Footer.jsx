import React from 'react';
import NewsletterSignup from './Newsletter';
import './Components.css'; // Assuming styles are here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <NewsletterSignup />
        <div className="footer-container-links">
          <div className="footer-socials">
              <h1>Socials</h1>
            <a href="https://api.whatsapp.com/send?phone=254722864021"><i className="fab fa-whatsapp"></i><p>Whatsapp</p></a>
            <a href="#facebook"><i className="fab fa-facebook-f"></i><p>Facebook</p></a>
            <a href="https://x.com/AsiliAdventure"><i className="fab fa-twitter"></i><p>Twitter</p></a>
            <a href="https://www.tripadvisor.com/Attraction_Review-g294207-d318003-Reviews-Asili_Adventure_Safaris-Nairobi.html"><i className="fab fa-tripadvisor"></i><p>Tripadvisor</p></a>
            <a href="https://www.instagram.com/asiliadventuresafaris/"><i className="fab fa-instagram"></i><p>Instagram</p></a>
            <a href="https://www.pinterest.com/AsiliAdventureSafaris/_created/"><i className="fab fa-pinterest"></i><p>Pinterest</p></a>
            <a href="https://www.youtube.com/channel/UCVfOLqf5clpEevHFtNHHP6A"><i className="fab fa-youtube"></i>Youtube<p>Youtube</p></a>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-conditions">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-contact">
              <address>
                  5<sup>th</sup> Floor Rehema Hse,<br /> Standard Street<br /> Opp. The Stanley Hotel, Nairobi CBD.<br /> Tel:<br /> +254 722 864 021<br /> or:<br /> +254 707 225 892<br />
                  <a href="mailto:info@asiliadventures.com" className="email-link"><i className="fas fa-envelope"></i> Email Us</a>
              </address>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Asili Adventure. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
