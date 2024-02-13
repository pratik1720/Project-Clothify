import { useState } from "react"
import axios from 'axios';
import {URL} from "../config.js"
import { useNavigate } from "react-router-dom";
export default function ChangePassword(){
    
    const[password,setpasssword]=useState("");
    const[newpassword,setnewpasssword]=useState("");
    const navigate=useNavigate();
    const ChangePass =(e)=>{
      e.preventDefault();
      const body={password}
       axios.post(`${URL}/check`,body).then((response)=>{
        console.log(response.data)
        if(response.status===200){
            console.log(newpassword)
           const uid=response.data.uid

            const body1={password:newpassword,uid}
            axios.post(`${URL}/change`,body1).then((response1)=>{
                console.log(response1.data)
                const update=response1.data
                if(update>0){
                    navigate("/profile")
                }
            });
           
        }
       })
    }
return(
    <div>
    <div>
         <b>Old Password: </b>
                 <br></br>
                 <input
                  type="password"
                  className="form-control"
                  placeholder="**************"
                   value={password}
                onChange={(e) => setpasssword(e.target.value)} required
                />

               <br></br>
               <b>New Password: </b>
                 <br></br>
                 <input
                  type="password"
                  className="form-control"
                  placeholder="**************"
                   value={newpassword}
                 onChange={(e) => setnewpasssword(e.target.value)} required
                />

               <br></br>
              </div>
             <center> <button className="btn btn-primary" onClick={ChangePass} >Reset Password</button></center>
              
    </div>
)
}