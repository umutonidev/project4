import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import method1 from '../assets/all.jpg';
/*import method2 from '../assets/method2.jpg';
import method3 from '../assets/method3.jpg';
import method4 from '../assets/method4.png';
import method5 from '../assets/method5.jpg';*/


import "../styles/style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h3>Stay up to date</h3>
        <p>Subscribe to our newsletter and get a 20% discount on your first order.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Submit</button>
      </div>

      <div className="footer-sections">
        <div className="shop">
          <h4>SHOP</h4>
          <ul>
            <li>Body Lotion</li>
            <li>Computer Gadgets</li>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>General</li>
            <li>Shoes</li>
            <li>Sports</li>
            <li>Watches</li>
            <li>Women's Clothes</li>
          </ul>
        </div>

        <div className="company">
          <h4>COMPANY</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Help</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="about">
          <h4>ABOUT</h4>
          <ul>
            <li>Who We Are</li>
            <li>Reviews</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="contact">
          <h4>Happy to Help</h4>
          <p>1279 Thorn Street, NY</p>
          <p>Phone: 307-549-2480</p>
          <p>Email: demo@gmail.com</p>
          <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
           
            
            
        
          </div>
        </div>

        <div className="payments">
          <h4>ACCEPT FOR</h4>
          <div className="payment-icons">
          <img src={method1}alt="payment1"/>
           {/* <img src={method2} alt="payment2"/> */}
            {/* <img src={method3} alt="payment2"/> */}
            {/* <img src={method4} alt="payment2"/> */}
            {/* <img src={method5} alt="payment2"/> */}
            
            
            
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;