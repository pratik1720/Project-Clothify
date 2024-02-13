import React from 'react';
import "../Css/Aboutus.css";
import image1 from '../Images/Image1.jpg'
import image2 from '../Images/Image2.jpg'
import image3 from '../Images/Image3.jpg'
import image4 from '../Images/Image4.jpg'
const Aboutus = () => { 

    return (
   <div className="App">    
      <header className="hero">
        <img src={image1} alt="Header Image" />
      </header>

      <section className="clothify-content">
        <p> <b>Clothify powers millions of businesses worldwide. </b> <br/>
        <b>OUR MISSION :</b>

Making commerce better for everyone.We help people achieve independence by making it easier to start, run, and grow a business. <br/>
We believe the future of commerce has more voices, not fewer, so we’re reducing the barriers to business ownership to make commerce better for everyone.<br/>
The all-in-one commerce platform to start, run, and grow a business.</p>
      </section>

      <section className="creators">
        <div className="creator">
            <img src={ image1} alt="Creator 1" />
         
        </div>
        <div className="creator">
          <img src={image2} alt="Creator 2" />
          
        </div>
        <div className="creator">
          <img src={image3} alt="Creator 3" />
       
        </div>
        <div className="creator">
          <img src={image4} alt="Creator 4" />
          
        </div>
      </section>
    </div>

    )
}

export default Aboutus;