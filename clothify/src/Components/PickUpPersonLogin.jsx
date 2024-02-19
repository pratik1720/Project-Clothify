import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';

import "react-toastify/dist/ReactToastify.css";
import {URL} from "../config";


const PickUpPersonLogin=()=>{

    const[username,setUserName]=useState("");
   const[password,setPassword]=useState("");
   const[userLogin,setUserLogin]=useState("");
   const navigate=useNavigate();

   const CheckCredential =(e)=>{
    e.preventDefault();
     if(username.length==0){
         console.log("ynrn");
         toast.warning("Please Enter UserName")
     }
     else if(password.length==0){
         toast.warning("Please Enter Password")
     }
     else{
           const body={username,password}
           try {
             axios.post(`${URL}/pickUplogin`,body).then((response)=>{
               console.log(response.data)
               const{pid,username ,name ,email,phone_no,password,address,isActive}=response.data;
               if(response.status==200){
                 toast.success("pickup person login successfully");
                 sessionStorage['username']=username;
                 sessionStorage['pid']=pid;
                 sessionStorage['email']=email;
                 sessionStorage['isActive']=isActive;
                 sessionStorage['loginStatus']=1;
                
                 navigate("/pickupPerson")
                
           }
          else{
            toast.warning("Wrong Credential")
          }}).catch() 
           } catch (e) {
             
           }
          
     }
    };
   
  return(
    <div className="container mt-5 " style={{width:"800px" ,margin:"auto" ,marginTop:"20px",marginBottom:"20px",padding:"10px",display:"flex",justifyContent:"space-around",alignItems:"center"}} >
       <img  src="./PickUpLogin.svg" width="700px" height="500px"/>
    <div className="row justify-content-center ">
      <div className="col-md-6">
     
          <div className="card-body box">
            <form className="login-form">
           <h2 className="text-center login-heading">Pick Up Person Login</h2>
           <br></br>
               <br></br>
              <div className="form-group">
              {/* <b  style={{marginLeft:"100px"}}> PickUpPerson </b> <br/> */}
              <b> <label htmlFor="username" className="font-weight-bold"> Username:</label></b>
              
                <input
                  type="text"
                  className="form-control"
                  placeholder="abc1717"
                  value={username}
                 onChange={(e) => setUserName(e.target.value) } name="username"
                />
              </div>
              <br />
              <div className="form-group">
              <b> <label htmlFor="password" className="font-weight-bold"> Password:</label></b>
                
                <input
                  type="password"
                  className="form-control"
                  placeholder="**********"
                   value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center mt-4">
                <button className="btn btn-danger" onClick={CheckCredential} >Login</button>
              </div>
              <br />
              
              
            </form>
          </div>
        </div>
      </div>
   
  </div>
  )
  }
export default PickUpPersonLogin;