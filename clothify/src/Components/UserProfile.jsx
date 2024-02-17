import { useState } from "react"
import '../Css/Profile.css';
export default function UserProfile(){
    const[isSidebarOpen,setisSidebarOpen]=useState(false)
    
    const toggleSidebar=()=>{
        setisSidebarOpen(!isSidebarOpen)
    }
    return (

        <div className="profile">
            <div >
       
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? 'Close Profile' : 'Open Profile'}
        </button>
      </div>

    
      {isSidebarOpen && (
        <div className="profile-sidebar" >
          <h2>Profile</h2>
          <p>User Id: <b>{ sessionStorage['uid']  }</b></p>
          <p>Email: <b>{ sessionStorage['email']  }</b></p>
          <p>Role: <b>{ sessionStorage['role']  }</b></p>
          <p>User Name: <b>{ sessionStorage['username']  }</b></p>
          <div className="text-center mt-3">
                <a href="/changePassword" className="forgot-password-link">
                  Change Password?
                </a>
              </div>
         
          {/* <button onClick={toggleSidebar}>Close</button> */}
        </div> )}
        
        </div>
    
    )
}