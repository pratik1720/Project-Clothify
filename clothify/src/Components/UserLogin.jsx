import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {URL} from "../config";
const UserLogin= ()=>{
   const[username,setUserName]=useState("");
   const[password,setPassword]=useState("");
   const[userLogin,setUserLogin]=useState("");
   const navigate=useNavigate();

   const CheckCredential =(e)=>{
    e.preventDefault();
    if(username.length==0){
        console.log("ynrn");
        toast.warning("egwrh")
    }
    else if(password.length==0){
        toast.warning("egwrh")
    }
    else{
          const body={username,password}
          try {
            axios.post(`${URL}/login`,body).then((response)=>{
              console.log(response.data)
              const{uid,username ,name ,email,phone_no,password,address,role,pid}=response.data;
              if(response.status==200){
                sessionStorage['username']=username;
                sessionStorage['uid']=uid;
                sessionStorage['email']=email;
                sessionStorage['role']=role;
                sessionStorage['loginStatus']=1;
                toast.success("welcome to clothify...");
               
                if(role=="admin"){
                  navigate("/dashBoard")
                }
                else {
                  navigate("/")
                }
              }
              else{
                navigate("/login")
              }
            }).catch() 
          } catch (e) {
            
          }
         
    }
   };
    return(
    <div className="container mt-5 " style={{width:"800px" ,margin:"auto" ,marginTop:"20px",marginBottom:"20px",padding:"10px",display:"flex",justifyContent:"space-around",alignItems:"center"
}} >
  <img  src="./login.svg" width="500px" height="500px"/>
    <div className="row justify-content-center">
    
      <div className="col-md-6">
     
          <div className="card-body box">
            <form className="login-form p-5">
              <h2 className="text-center login-heading">Login</h2>
              <div className="form-group">
               <b> <label htmlFor="username" className="font-weight-bold">Username:</label></b>
               
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
              <b> <label htmlFor="password" className="font-weight-bold">Password:</label></b>
                
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
              <div className="text-center mt-3">
                <a href="/forgetpassword" className="forgot-password-link">
                  Forgot Password?
                </a>
              </div>
              <p className="text-center mt-3 new-user">
                New user? <a href="/registration">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
   
  </div>
    )
}
export default UserLogin