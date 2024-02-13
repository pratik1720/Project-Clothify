
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function SingOut() {
  const navigate=useNavigate()
    const[showConfirmation,setShowConfirmation]=useState(false)
    const handleSignOut=()=>{
      sessionStorage.clear()
      navigate("/");
    }
  return (
    <div className="signout-page">
    <h1>Sign Out</h1>
    {!showConfirmation ? (
      <>
        <p>Are you sure you want to sign out?</p>
        <button onClick={() => setShowConfirmation(true)}>Yes</button>
        <button onClick={() => navigate('/')}>No</button>
      </>
    ) : (
      <>
        <p>Are you really sure you want to sign out?</p>
        <button onClick={handleSignOut}>Confirm Sign Out</button>
        <button onClick={() => setShowConfirmation(false)}>Cancel</button>
      </>
    )}
  </div>
  )
}
