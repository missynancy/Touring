import React, { useState, useEffect } from 'react'; // Add useEffect here
import { NavLink } from 'react-router-dom';
import logo from '../assets/asili-adventure-logo.png';
import './Components.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);  // State to toggle the menu
  const [subMenuOpen, setSubMenuOpen] = useState(false); // State to toggle submenus
  const [scrolling, setScrolling] = useState(false); // State to track if the page is scrolled

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  // Check the scroll position and update the state
  const handleScroll = () => {
    if (window.scrollY > 100) {  // If the page is scrolled more than 100px
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Attach the scroll event listener on component mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>  {/* Add class when scrolling */}
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
        <a href="/" className="logo"><img src={logo} alt="Asili Adventure Logo" /></a>

        {/* Hamburger Icon for small screens */}
        <button className="hamburger" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i> {/* Change icon when menu is open */}
        </button>

        <div className={`navbar-center`}>
         <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li onClick={toggleSubMenu}>
                <NavLink onClick={toggleSubMenu} activeClassName="active-link">TOURS AND SAFARIS<i className='bx bxs-down-arrow'></i><i className='bx bxs-right-arrow'></i></NavLink>
                {subMenuOpen && (
                  <div className="navLinks-categories">
                    <div className="navLinks-categories-1">
                        <ul>
                            <h5>Top Popular Safaris</h5>
                            <li><a href="">safarisBest kenya lodges </a></li>
                            <hr />
                            <li><a href="">Kenya air flights safaris</a></li>
                            <hr />
                            <li><a href="">Tanzania wildlife safari tours</a></li>
                            <hr />
                            <li><a href="">Wild beast herds migration 2025-2026 safari packages</a></li>
                            <hr />
                        </ul>
                    </div>
                    <div className="navLinks-categories-1">
                        <ul>
                            <h5>Top Popular Safaris</h5>
                            <li><a href="">safarisBest kenya lodges </a></li>
                            <hr />
                            <li><a href="">Kenya air flights safaris</a></li>
                            <hr />
                            <li><a href="">Tanzania wildlife safari tours</a></li>
                            <hr />
                            <li><a href="">Wild beast herds migration 2025-2026 safari packages</a></li>
                            <hr />
                        </ul>
                    </div>
                    <div className="navLinks-categories-1">
                        <ul>
                            <h5>Top Popular Safaris</h5>
                            <li><a href="">safarisBest kenya lodges </a></li>
                            <hr />
                            <li><a href="">Kenya air flights safaris</a></li>
                            <hr />
                            <li><a href="">Tanzania wildlife safari tours</a></li>
                            <hr />
                            <li><a href="">Wild beast herds migration 2025-2026 safari packages</a></li>
                            <hr />
                        </ul>
                    </div>
                  </div>
                )}
            </li>
            <li onClick={toggleSubMenu}>
                <NavLink onClick={toggleSubMenu} activeClassName="active-link">EXPERIENCES<i className='bx bxs-down-arrow'></i><i className='bx bxs-right-arrow'></i></NavLink>
                {subMenuOpen && (
                  <div className="navLinks-categories">
                    <div className="navLinks-categories-1 cat-2">
                        <ul>
                            <li><a href="">Africa family safari </a></li>
                            <hr />
                            <li><a href="">Africa Photography safari</a></li>
                            <hr />
                            <li><a href="">Affordable safari packages</a></li>
                            <hr />
                            <li><a href="">Wild beast herds migration 2025-2026 safari</a></li>
                            <li><a href="">2026 safari packages</a></li>
                            <hr />
                        </ul>
                    </div>
                    
                  </div>
                )}
            </li>
            <li onClick={toggleSubMenu}>
              <NavLink onClick={toggleSubMenu} activeClassName="active-link">TRAVEL INFORMATION<i className='bx bxs-down-arrow'></i><i className='bx bxs-right-arrow'></i>
              {subMenuOpen && (
                  <div className="navLinks-categories">
                    <div className="navLinks-categories-1 cat-3">
                        <ul>
                            <li><a href="">Important Travel Information </a></li>
                            <hr />
                            <li><a href="">Travel Guide</a></li>
                            <hr />
                            <li><a href="">Accommodation</a></li>
                            <hr />
                            <li><a href="">Parks & Reserves</a></li>
                            <li><a href="">Safari FAQ</a></li>
                            <hr />
                        </ul>
                    </div>
                    
                  </div>
                )}
            </NavLink></li>
            <li><NavLink to="/about" activeClassName="active-link">ABOUT US</NavLink></li>
            <li><NavLink to="/offers" activeClassName="active-link">SPECIAL OFFERS</NavLink></li>
            <li><NavLink to="/blog" activeClassName="active-link">BLOG</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active-link">CONTACT US</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
