import { Link } from "react-router-dom";
import React, { useState } from 'react';
import clothifyLogo from '../Images/Clogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../Css/Footer.css';
const Footer =()=>{
  return(
    <>
      <div className="footer" style={{height:"160px",bottom:0}} >
      
        <div className="d-flex justify-content-around">
          
          <img src={clothifyLogo} alt="Clothify Logo" className="logo" width={300} height={80} /> 
          <div>
          <p>This site is copyright-protected and is property of Clothify</p>
          <p>&copy; Clothify Pvt. Ltd.</p>

          </div>
         
        <div className="footer-social" style={{display:"flex",flexDirection:"row",marginBlockEnd:"100px", width:"50px", marginRight:"50px"}}>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faYoutube}color="black" /> 
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faInstagram} color="black"/> 
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faFacebook}color="black" /> 
          </a>
        </div>
         
        
        
        </div>
        <div style={{top:0}} >
         {/*  */}
        
         </div>
        
    </div>
    </>
  )
}

export default Footer;