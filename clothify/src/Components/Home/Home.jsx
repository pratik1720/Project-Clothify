import ImageCarousel from "./ImageCaresoul"
import '../../Css/Home/home.css';
const Home=()=>{
   return(
    <>
     <div className="home">
     <div className="clothify-content"> 
        <h1 id="mainHeading">Welcome to Our Store!</h1>
        <h2 id="green">Discover New Exchnge  Opportunities</h2>
        <p>
          Explore a wide range of clothes exchnage opportunities resources to help you get discount coupons.
        </p>
      </div>
      <ImageCarousel></ImageCarousel>
     </div>
    </>
   )
}
export default Home