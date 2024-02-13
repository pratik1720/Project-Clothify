import React, { useState } from 'react';
import axios from 'axios';
import { URL } from '../config';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import "../Css/Order.css";
const Order=()=>{
    const [pickupDate, setpickupDate] = useState(new Date());
    const [pickupDescription, setpickupDescription] = useState('');
    const [noOfItems, setnoOfItems] = useState(0);
    const [uid, setuid] = useState({uid:0});

    const uidHandler=(e)=>{
        const { name, value } = e.target;
        setuid((prev) => ({
          ...prev,
          [name]:value
        }));
    }
    const handleSubmit =async(e)=>{
     
     e.preventDefault();
     console.log(pickupDate,pickupDescription,noOfItems,uid)
        const body={pickupDate,pickupDescription,noOfItems,uid}
        try {
          axios.post(`${URL}/order`,body).then((response)=>{
            console.log(response.data)
          }).catch() 
        } catch (e) {
          
        }
       
  }
    
    
   return(
        
        <div className="app-box app-feedback-form " style={{alignSelf:'center',margin:'auto',marginTop:'10px',marginBottom:"10px"}}>
                <h2 className="app-heading1">Order Now</h2><br></br><br></br>
                    <form onSubmit={handleSubmit} className="app-feed-form"> 
                    <label className="label">
                    Pickup Date:
                    <input
                        type="date"
                        name="pickupDate"
                        autoComplete="off"
                        //  value={fromDate.getFullYear().toString()+"-"+(fromDate.getMonth()+1).toString().padStart(2,0)
                        //  +"-"+(fromDate.getDate()).toString().padStart(2,0)+"-"}
                         value={pickupDate}
                         onChange={(e) => setpickupDate(e.target.value)}
                        className={pickupDate.length ? '': 'error'}
                         
                        required 
                    />
                    </label>
                    <br />
                    <label>
                    Description About Clothes:
                    <textarea
                        name="pickupDescription"
                        value={pickupDescription}
                        onChange={(e) => setpickupDescription(e.target.value)}
                        className={pickupDate.length ? '': 'error'}
                        required 
                    />
                    </label>
                    <br />
                    <label className="label">
                    <label>
                    No of Items:
                    <input
                        type="number"
                        name="noOfItems"
                        value={noOfItems}
                        onChange={(e) => setnoOfItems(e.target.value)}
                        className={noOfItems.length ? '': 'error'}
                        required 
                    />
                    </label>
                    </label>
                    <br />
                    
                    <label className="label">
                    User ID:
                    <input
                        type="text"
                        name="uid"
                         value={uid.uid}
                         onChange={uidHandler}
                         className={uid.uid.length ? '': 'error'}
                        required 
                    />
                    </label>
                    <center><button type="submit" className="button">Order Now</button></center>
                </form> 
                
            
                
            
                </div>
   ) }

export default Order