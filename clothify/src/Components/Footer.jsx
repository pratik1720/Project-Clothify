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
      <footer className="footer"style={{height:"140px"}} >
      <div className="footer-content">
        <div className="footer-logo">
          <img src={clothifyLogo} alt="Clothify Logo" className="logo" width={280} height={70} />
          
        </div>
        <center>This site is copyright-protected and is property of Clothify</center>
        <div className="footer-social" style={{display:"flex",flexDirection:"row"}}>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faYoutube}color="black" /> 
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faInstagram} color="black"/> 
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faFacebook}color="black" /> 
          </a>
          <div className="footer-bottom">
        
      </div>
      
        </div>
      </div>
      <p>&copy; Clothify Pvt. Ltd.</p>
      
    </footer>
    </>
  )
}

export default Footer;