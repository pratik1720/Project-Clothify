import { Link } from "react-router-dom";
import React, { useState } from 'react';
import clothifyLogo from '../Images/Clogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../Css/Footer.css';
const Footer =()=>{
  return(
    <>
      <footer className="footer"style={{height:"170px"}} >
      <div className="footer-content">
        <div className="footer-logo">
          <img src={clothifyLogo} alt="Clothify Logo" className="logo" width={220} height={70} />
          
        </div>
        <center>This site is copyright-protected and is property of Clothify</center>
        <div className="footer-social">
            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faYoutube} /> 
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faInstagram} /> 
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faFacebook} /> 
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Clothify Pvt. Ltd.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer;