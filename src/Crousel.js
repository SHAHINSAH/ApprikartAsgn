import React, { useState } from 'react'
import "./Crousel.css";

function Crousel({ images }) {
    console.log(images);
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='CrouselBody'>
            <div className='CrouselNav'>
                {images.map((image, index) => (
                    <img
                        src={image}
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={currentIndex === index ? 'active' : ''}
                    />
                ))}
            </div>
            <div className='CrouselMainView'>
                <h1 onClick={goToPreviousSlide}>&#60;</h1>
                <img src={images[currentIndex]} alt="carousel-image" />
                <h1 onClick={goToNextSlide}>&#62;</h1>
            </div>
            <div className='responsiveCrouselNav'>
                {images.map((image, index) => (
                    <img
                        src={image}
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={currentIndex === index ? 'active' : ''}
                    />
                ))}
            </div>
        </div>
    )
}

export default Crousel