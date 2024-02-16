import { Link } from "react-router-dom";
const Login =()=>{
    // 
    
    // 
    return(
        <div style={{height:"620px",border:"2px solid black",textAlign:"center"}}>
            <div>
      <a href="/userlogin">
        <button style={{margin:"10px",color:"white",backgroundColor:"#e63843"}}>User Login</button>
      </a>
    </div>
    <div>
      <a href="/pickupPersonLogin">
        <button style={{margin:"10px",color:"white",backgroundColor:"#e63843"}} >PickUpPerson Login</button>
      </a>
    </div>    
           
        </div>
    )
}
export default Login;