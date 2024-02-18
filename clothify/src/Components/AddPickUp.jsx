import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {URL} from "../config";
export default function AddPickup(){
    const[username,setUsername]=useState("")
    const[emailId,setEmail]=useState("")
    const[Name,setName]=useState("")
    const[phone,setPhone]=useState("")
    const[password,setPassword]=useState("")
    const[address,setAddress]=useState("")
     const navigate=useNavigate();
  function handleRegistration(e){
    e.preventDefault();
    if(username.length==0){
        console.log("ynrn");
        toast.warning("egwrh")
    }
    else if(password.length==0){
        toast.warning("egwrh")
    }
    else{
      console.log(Name,phone,emailId)
          const body={username,email:emailId,name:Name,phone_no:phone,password,address}
          try {
            axios.post(`${URL}/addPickup`,body).then((response)=>{
              console.log(response.data)
               navigate("/dashBoard")
            }).catch() 
          } catch (e) {
            
          }
         
    }
   };
return(
   

<div className="container mt-5" style={{width:"900px" ,margin:"auto"}}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 align="center" className="card-title" >Register</h2>
                <br></br>
                <form>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label"><b>Username:</b></label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter username"
                      value={username}
                     onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label"><b>Name:</b></label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="abc"
                     value={Name}
                     onChange={(e) => setName(e.target.value)}
                      required
                    />
                   
                  </div>
                  <div className="mb-3">
                    <label htmlFor="emailId" className="form-label"><b>Email Address:</b></label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailId"
                      placeholder="abc@gmail.com"
                     value={emailId}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                    <div className="mb-3">
                    <label htmlFor="phone_no" className="form-label"><b>phone_no:</b></label>
                    <input
                      type="number"
                      className="form-control"
                      id="phone_no"
                      placeholder="4578912345"
                     value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label"><b>Password:</b></label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="************"
                      value={password}
                     onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                 <div className="mb-3">
                    <label htmlFor="address" className="form-label"><b>Address:</b></label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="From Nagpur"
                      value={address}
                    onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                  
  
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-danger btn-lg"
                     onClick={handleRegistration}
                     style={{backgroundColor:"red"}}
                    >
                      Add PickUpPerson
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
   
)
}