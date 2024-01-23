// src/Footer.js
import React from 'react';
import "./Footer.css"; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h4>Contact Us</h4>
            <address>
              <p>Email: contact@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h4>Follow Us</h4>
            <div className="social-icons">
              {/* Add your social media icons or links here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

