
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Css/signout.css';
export default function SingOut() {
  const navigate=useNavigate()
    const[showConfirmation,setShowConfirmation]=useState(false)
    const handleSignOut=()=>{
      sessionStorage.clear()
      navigate("/");
    }
  return (
    <div className="signout-page">
      <div className="box">
    <h1 className="out">Sign Out</h1>
    {!showConfirmation ? (
      <>
        <p>Are you sure you want to sign out?</p>
        <button id='btn' onClick={() => setShowConfirmation(true)}>Yes</button>
        <button  id='btn' onClick={() => navigate('/')}>No</button>
      </>
    ) : (
      <>
        <p>Are you really sure you want to sign out?</p>
        <button id="btn" onClick={handleSignOut}>Confirm Sign Out</button>
        <button id="btn" onClick={() => setShowConfirmation(false)}>Cancel</button>
      </>
    )}
    </div>
  </div>
  )
}
