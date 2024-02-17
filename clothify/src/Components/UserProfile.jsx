import { useState } from "react"
import '../Css/Profile.css';
import AllotedCoupons from "./AllocatedCoupons";
import { cilAlignCenter } from "@coreui/icons";
export default function UserProfile(){
    const[isSidebarOpen,setisSidebarOpen]=useState(false)
    
    const toggleSidebar=()=>{
        setisSidebarOpen(!isSidebarOpen)
    }
    return (

        <div className="profile">
<<<<<<< HEAD
            <div >
       
=======
            <div style={{display:"flex",justifyContent:"center"}} >
        {/* Profile icon in the navbar */}
>>>>>>> b45763672842b9eeaee7a54459db36ae3b2d131e
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? 'Close Profile' : 'Open Profile'}
        </button>
      </div>

<<<<<<< HEAD
    
=======

>>>>>>> b45763672842b9eeaee7a54459db36ae3b2d131e
      {isSidebarOpen && (
        <div className="profile-sidebar" >
          <h2 style={{fontFamily:"Helvetica",fontSize:"40px",color:"red"}}>User Profile</h2>
          <p>User Id: <b>{ sessionStorage['uid']  }</b></p>
          <p>Email: <b>{ sessionStorage['email']  }</b></p>
          <p>Role: <b>{ sessionStorage['role']  }</b></p>
          <p>User Name: <b>{ sessionStorage['username']  }</b></p>
          
          
              <AllotedCoupons></AllotedCoupons>

              <div className="text-left mt-3" style={{alignItems:"center"}}>
                <a href="/changePassword" className="forgot-password-link" alignItems="center">
                  Change Password?
                </a>
              </div>
         
          {/* <button onClick={toggleSidebar}>Close</button> */}
        </div> )}
        
        </div>
    
    )
}