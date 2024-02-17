import ImageCarousel from "./ImageCaresoul"
import ClothesCarousel from "./ClothesCarousel"
import About from "./About";
import '../../Css/Home/home.css';
import { Link } from "react-router-dom";
const Home=()=>{
   return(
    <>
     <div className="home">
     <div className="clothify-content"> 
        <h2 id="mainHeading">For People And Planet.</h2>
      </div>
      
      <ClothesCarousel></ClothesCarousel>
      <p style={{fontFamily:"Garamond",fontSize:"30px",paddingBlock:"50px",paddingLeft:"30px",paddingRight:"30px"}}>""The greatest threat to our planet is the belief that someone else will save it." - Robert Swan"</p>
      <pre>  
      <ImageCarousel></ImageCarousel>
      <p style={{fontFamily:"Garamond",fontSize:"30px",paddingBlock:"50px",paddingLeft:"30px",paddingRight:"30px"}}>"I like my money right where I can see it… hanging in my closet." - Carrie Bradshaw </p>
      </pre>
      <p style={{paddingLeft:"30px",paddingRight:"30px",paddingBottom:"80px"}}>
      <h2 style={{fontFamily:"sans-serif",fontSize:"30px",}}>Our Approach</h2>   
      <p style={{fontFamily:"Garamond",fontSize:"25px"}}>From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now.</p>
      </p>
      <div><About></About></div>
      <div ><Link to="/contact" style={{alignItems:"center",display:"flex",color:"red"}}>Contact us</Link></div>
     </div>
    </>
   )
}
export default Home