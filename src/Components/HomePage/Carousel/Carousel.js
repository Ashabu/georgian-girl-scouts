import React, { useState } from 'react';
import './carousel.scss';

const Carousel = (props) => {
    const { slideImages } = props;
    const [slideImage, setSlideImage] = useState(slideImages?.[0]);

    let slideIndex = 1;

    const handleSetActiveImage = (n) => {
        setSlideImage(slideImages[n]);
    };


    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName("slideshow");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length){
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
      }


    console.log(slideImage)
    return (
        <div className = 'slideshow-container'>
            <div className = 'slideshow fade'>
                <div className = 'number-text'>
                    <span>1/{slideImages?.length}</span>
                </div>
                <img src = {slideImage?.imgUrl} alt = 'img' />
                <div className = 'caption-text'>
                    <span>Caption Text</span>
                </div>
                <span className = 'prev' style = {{left: 0}}>
                    &#10094;
                </span>
                <span className = 'next' style = {{right: 0}}>
                    &#10095;
                </span>
            </div>
            <div className = 'pagination-dots'>
            {slideImages?.map((_, index) =>(
                <span key = {index} className = 'dot' onClick = {() => handleSetActiveImage(index)}></span>
            ))}
             </div>
        </div>
    );
};

export default Carousel;