import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink from react-router-dom
import logo from '../assets/asili-adventure-logo.png';
import './Components.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="social-icons">
          <a href="https://api.whatsapp.com/send?phone=254722864021"><i className="fab fa-whatsapp"></i></a>
          <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="https://x.com/AsiliAdventure"><i className="fab fa-twitter"></i></a>
          <a href="https://www.tripadvisor.com/Attraction_Review-g294207-d318003-Reviews-Asili_Adventure_Safaris-Nairobi.html"><i className="fab fa-tripadvisor"></i></a>
          <a href="https://www.instagram.com/asiliadventuresafaris/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.pinterest.com/AsiliAdventureSafaris/_created/"><i className="fab fa-pinterest"></i></a>
          <a href="https://www.youtube.com/channel/UCVfOLqf5clpEevHFtNHHP6A"><i className="fab fa-youtube"></i></a>
        </div>
        
        {/* Search Bar Section */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        
        <div className="contact-info">
          <span>CALL +254 722864021</span>
          <button className="start-planning">START PLANNING</button>
          <a href="#email"><i className="fas fa-envelope"></i></a>
        </div>
      </div>

      <div className="navbar-bottom">
        <a href="/" className="logo" ><img src={logo} alt="Asili Adventure Logo" /></a>
        <div className="navbar-center">
            <ul className="nav-links">
            <li><NavLink to="/tours" activeClassName="active-link">TOURS AND SAFARIS<i class='bx bxs-down-arrow'></i></NavLink></li>
            <li><NavLink to="/experiences" activeClassName="active-link">EXPERIENCES<i class='bx bxs-down-arrow'></i></NavLink></li>
            <li><NavLink to="/about" activeClassName="active-link">ABOUT US<i class='bx bxs-down-arrow'></i></NavLink></li>
            <li><NavLink to="/offers" activeClassName="active-link">SPECIAL OFFERS<i class='bx bxs-down-arrow'></i></NavLink></li>
            <li><NavLink to="/info" activeClassName="active-link">TRAVEL INFORMATION<i class='bx bxs-down-arrow'></i></NavLink></li>
            <li><NavLink to="/blog" activeClassName="active-link">BLOG<i class='bx bxs-down-arrow'></i></NavLink></li>
            <li><NavLink to="/contact" activeClassName="active-link">CONTACT US<i class='bx bxs-down-arrow'></i></NavLink></li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
