import { useEffect, useState } from "react";
import axios from 'axios';
import {URL} from "../config"
import '../Css/DashBoard.css';


const DashBoard =()=>{
    const[Details,setuserDetails]=useState([]);

   useEffect(()=>{
    
    const fetchdata =async()=>{
    try {
     const response= await axios.get(`${URL}/userDetail`)
     console.log(response.data)
     setuserDetails(response.data)
    } catch (error) {
        
    }
}
fetchdata()
    
   },[])
    return(
          <div> 
             <h2 id="A">Admin Dashboard</h2>
      
      <br></br>
      <table className="dashboard">
        <thead>
          <tr>
            <th>Uid</th>
            <th>UserName</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Address</th>
            <th>Oid</th>
            <th>NoOfItems</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            Details.map((user) => (
            
             
            <tr key={user.uid}>
              <td>{user[0]}</td>
              <td>{user[1]}</td>
              <td>{user[2]}</td>
              <td>{user[3]}</td>
              <td>{user[4]}</td>
              <td>{user[5]}</td>
              <td>{user[6]}</td>
              <td>{user[7]}</td>
              <td>{user[8]}</td>
              <td>{user[9]}</td>
              
             
              
            </tr>
            
          ))}
          
        </tbody>
      </table>
        </div>
       
    )
}
export default DashBoard;