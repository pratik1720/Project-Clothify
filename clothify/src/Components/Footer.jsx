import { Link } from "react-router-dom";
import React, { useState } from 'react';
import clothifyLogo from '../Images/clothify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../Css/Footer.css';
const Footer =()=>{
  return(
    <>
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={clothifyLogo} alt="Clothify Logo" className="logo" width={100} /><h2>Clothify</h2>
          <p>You Will Get Good Deals</p>
        </div>
        <center>ALL TRADE MARKS BELONG TO THE CLOTHIFY.</center>
        <div className="footer-social">
            <a href="https://www.gmail.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} /> 
        </a><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faFacebook} /> 
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faTwitter} /> 
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faInstagram} /> 
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Uniguide. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer;