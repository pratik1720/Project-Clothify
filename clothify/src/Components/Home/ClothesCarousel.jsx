import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../Images/Clothes5.png';  
import image2 from '../../Images/clothes1.png';
import image3 from '../../Images/Clothes4.png';
import image4 from '../../Images/Clothes2.png';
import image5 from '../../Images/Clothes3.png';
 import '../../Css/Home/ImageCaresoul.css';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';

const ClothesCarousel =()=>{
    const images=[
        {src:image1},
    {src:image2},
    {src:image3},{src:image4},{src:image5}
]
return (
    <div>
      
<div className="image-carousel-container">
<Carousel
  showStatus={false}
  showThumbs={false}
  infiniteLoop={true}
  autoPlay={true}
  interval={3000}
  transitionTime={500}
  showIndicators={false}
>
  
    {images.map((image, index) => (
        <div key={index}>
           <img src={image.src} alt={`Image ${index + 1}`} />
         <h3> <p  className="carousel-text">{image.text}</p></h3>
        </div>
      ))}
        </Carousel>
    </div>
    </div>
)
}
export default ClothesCarousel;