import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest, faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='first'>
        <div className="footer-logo">  <h1>Foodish</h1> </div>
        <p>Continue Foodish 2023 all rights reserved</p>

        <h1>Follow Us On</h1>
        <div className='icons'>
        <FontAwesomeIcon icon={faPinterest} />
         <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
         <FontAwesomeIcon icon={faFacebookF} />

        </div>
        </div>
       
        <div className="men">
            <h2>Menu</h2>
            <p>Home</p>
            <p>Offers</p>
            <p>Services</p>
            <p>About Us</p>
        </div>

        <div className='information'>
            <h2>Information</h2>
            <p>Menu</p>
            <p>Quality</p>
            <p>Make a Choice</p>
            <p>Salad With Vegetable</p>
            <p>Fast Delivery</p>
            <p>Subscribe</p>

        </div>

        <div className='contact'>
            <h2>Contact</h2>
            <p>+123 456 789</p>
            <p>Explore</p>
            <p>info@Foodish.Com</p>
            <p>1234, New York, USA</p>

        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
