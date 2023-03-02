import React from "react";
import Slider from "react-slick";


export default function Slides () {
    const settings = {
        dots: true ,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1 , 
        autoplay : true  ,
        
        arrows: false,
      };
    return (
       <Slider {...settings} className = "Slider">
      <div className="nav-slide"> 
<img src = "images/slider-badag.jpg" alt = "slide-img"  className="slide-img"/>
</div>
<div className="nav-slide"> 
<img src = "images/slider-scales.jpg" alt = "slide-img" className="slide-img"/>
</div>
<div className="nav-slide"> 
<img src = "images/slider-scale.jpg" alt = "slide-img"  className="slide-img"/>
</div>
<div className="nav-slide"> 
<img src = "images/slider-badging.jpg" alt = "slide-img"  className="slide-img"/>
</div> 

       </Slider>
    )
} 