import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">ESSEN</div>
          <div className="right">
            <p>Kochi, Kerala</p>
            <p>Open: 06:00 PM - 12:00 AM</p>
            <p>Phone:9898989898</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By Vaishnav S Chandran</p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/vaishnav-s-chandran-374b241bb/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
