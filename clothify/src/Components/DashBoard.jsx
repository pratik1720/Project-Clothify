import { useEffect, useState } from "react";
import axios from 'axios';

import {URL} from "../config"
import '../Css/DashBoard.css';
import { useNavigate } from "react-router-dom";

const DashBoard =()=>{
    const[Details,setuserDetails]=useState([]);
     const navigate=useNavigate()

     const addPickup =()=>{navigate("/addPickup")}
   useEffect(()=>{
    
    const fetchdata =async()=>{
    try {
     const response= await axios.get(`${URL}/orderDetails`)
     console.log(response.data)
     setuserDetails(response.data)
    } catch (error) {
        
    }
}
fetchdata()
    
   },[])
    return(
          <div style={{height:"620px"}}> 
             <h2 id="A">Admin Dashboard</h2>
      
      <br></br>
                  <button style={{marginLeft:"600px"}} onClick={addPickup}> Add PickUp Person</button>
      <table className="dashboard" >
        <thead>
          <tr>
            <th>Uid</th>
            <th>UserName</th>
            <th>Name</th>
            <th>Coupon Brand</th>
            <th>Validity</th>
           
          </tr>
        </thead>
        <tbody>
         {
           Details.map((user)=>{
            return (
              <tr key={user.uid}>
              <td>{user[0]}</td>
              <td>{user[1]}</td>
              <td>{user[2]}</td>
              <td>{user[3]}</td>
              <td>{user[4]}</td>
            </tr>
            )
            
           })
         }
          
        </tbody>
      </table>
        </div>
       
    )
}
export default DashBoard;