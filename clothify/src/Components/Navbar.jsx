import { Link } from "react-router-dom";
import React, { useState } from 'react';
import clothifyLogo from '../Images/clothify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../Css/Navbar.css';
export default  function Navbar ()
{
  const[isLoggedIn,setisloggedin]=useState(false)
     const handleLogout=()=>{
      setisloggedin(false)
     }
    const handleLogin=()=>{
      setisloggedin(true)
    }
    
    const [name,setname]=useState(sessionStorage['userName'])
  return(
    <nav className="navbar">
    <div className="nav-left">
      <span className="website-name">Clothify</span>
      <img src={clothifyLogo} alt="Clothify Logo" className="logo" width={100} />
    </div>
    <ul className="nav-list">
    <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/order">Order Now!</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/cart">Cart</Link></li>
   
      {isLoggedIn ? <b>{ sessionStorage['username']  }</b>:""}
      <li className="dropdown">
        <span className="account-link">Account</span>
        <div className="dropdown-content">
          {!isLoggedIn? (
            <div>
            <Link to="/login" onClick={handleLogin}>User Login</Link>
            <Link to="/pickupPerson" onClick={handleLogin}>PickupPerson Login</Link>
            </div>
          ) : (
            <>
              <Link to="/profile">
                Profile <FontAwesomeIcon icon={faUser} className="profile-icon" />
              </Link>
              <Link to="/appfeedback">Feedback</Link>
              <Link to="/signout" onClick={handleLogout}>
                Sign Out
              </Link>
            </>
          )}
        </div>
      </li>
    </ul>
  </nav>
    
  )
}