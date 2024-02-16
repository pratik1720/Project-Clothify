import { useEffect, useState } from "react";
import  axios from "axios";
import {URL} from "../config.js"
const PickUpPersonfeedback =()=>{
     const[pickUpPersons,setPickUpPersons]=useState([{}])
     const [pickupDate, setpickupDate] = useState(new Date());
     const [pickupDescription, setpickupDescription] = useState('');
     const [noOfItems, setnoOfItems] = useState(0);
     const [uid, setuid] = useState({uid:sessionStorage['uid']});
 
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
     useEffect(()=>{
        try {
              axios.get(`${URL}/getPickUPPersons`).then((response)=>{
                console.log(response.data)
                setPickUpPersons(response.data)
              })
        } catch (error) {
            
        }
     },[])
    return(
        <div >
        <div className="app-box app-feedback-form  "  style={{alignSelf:'center',margin:'auto',marginTop:'10px',marginBottom:"10px"}}>
                <h2 className="app-heading1"></h2><br></br><br></br>
                    <form onSubmit={handleSubmit} className="app-feed-form"> 
                   
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
                    
                    <select>
                   { pickUpPersons.map((user) => (
  <option value={user.name}>{user.name}</option>
                    ))}
</select>
                    <center><button type="submit" className="button">Order Now</button></center>
                </form> 
                
            
                
            
                </div>
                </div>
    )
}
export default PickUpPersonfeedback;