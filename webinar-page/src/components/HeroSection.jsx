import ImageSlider from './ImageSlider';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Find and <span style={{ color: "#007BFF" }}>Register</span> for <span style={{color: "#007BFF"}}>Live Webinars</span></h1>
          <p>Discover global real estate investment opportunities from the comfort of your home or office.</p>
          <button className="more-about-us">More about us</button>        </div>
        <div className="hero-slider">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
