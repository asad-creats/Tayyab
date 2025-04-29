import { useState, useEffect } from 'react';
import './ImageSlider.css'; // Make sure to create this CSS file

// Import images correctly
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

const images = [image1, image2, image3];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <div 
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div 
            key={index}
            className="slide"
            aria-hidden={index !== currentIndex}
          >
            <img 
              src={img} 
              alt={`Slide ${index + 1}`} 
              className="slide-image"
            />
          </div>
        ))}
      </div>
      
      <div className="slider-buttons">
        <button 
          className="prev" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button 
          className="next" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;