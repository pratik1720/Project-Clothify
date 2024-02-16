import { Link } from "react-router-dom";
const Login =()=>{
    // 
    
    // 
    return(
        <div style={{height:"620px",border:"2px solid black",alignItems:"center",justifyContent:"around" ,display:"flex"}}>
          <img src="./auth.svg" style={{height:"400px", width:"400px"}}/>
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