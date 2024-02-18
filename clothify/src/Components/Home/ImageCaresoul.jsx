import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../Images/handm.png';  
import image2 from '../../Images/Zara.avif';
import image3 from '../../Images/West.jpg';
import image4 from '../../Images/Pantaloons.png';
import image5 from '../../Images/Max.png';
import image6 from '../../Images/Levi.png';
import image7 from '../../Images/Ucbb.png';
 import '../../Css/Home/ImageCaresoul.css';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';

const ImageCarousel =()=>{
    const images=[
        {src:image1},
    {src:image2},
    {src:image3},{src:image4},{src:image5},{src:image6},{src:image7}
]
return (
    <div>
      
<div className="image-carousel-container">
<Carousel
  showStatus={false}
  showThumbs={false}
  infiniteLoop={true}
  autoPlay={true}
  interval={2000}
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
export default ImageCarousel;