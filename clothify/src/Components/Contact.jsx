import { useState } from "react";
import { toast,Bounce } from 'react-toastify';
import "../Css/Contact.css";
import { useNavigate } from "react-router-dom";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact=()=>{
      const[Name,setName]=useState("");
      const[Email,setEmail]=useState("");
      const[Message,setMessage]=useState("");
      const navigate=useNavigate()
      const form = useRef();
   const handlecontact=(e)=>{
    e.preventDefault();
    if(sessionStorage['uid']===undefined){
      toast.warning("Please Login First")
    }
    else{
      emailjs
      .sendForm('service_tbldeww', 'template_fvkpwhj', form.current, {
        publicKey: 'QCTCNbApK-wTCXPis',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },);
       console.log(Name,Email,Message)
       toast.success("Will Get In Touch With You")
     navigate("/")
    }
   
   }
    return (
      <div className="contact">
        <img src="./contact.svg" style={{width:"500px",marginLeft:"50px"}}/>
        <div className="container mt-5" style={{width:"600px" ,margin:"auto"}}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card" style={{width:"400px"}}>
              <div className="card-body">
                <h2 align="center" className="card-title">Contact Us</h2>
                <br></br>
                <form  ref={form} onSubmit={handlecontact}>
                 
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
                      name="email"
                      placeholder="abc@gmail.com"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="meassage" className="form-label"><b>Message:</b></label>
                    <input
                      type="text"
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Enter Message"
                     value={Message}
                     onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                    
                  <div className="d-grid">
                    <button
                      type="submit"
                    //   className="btn btn-primary btn-lg"
                    
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Contact;