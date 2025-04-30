import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ImageSlider from './ImageSlider';

function HeroSection() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div
      className="hero-section"
      style={{
        background: 'linear-gradient(135deg, #e0f7ff, #b3e5fc)',
        padding: '80px 20px',
      }}
    >
      <div
        className="hero-content"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          className="hero-text"
          style={{
            flex: 1,
            paddingRight: '40px',
          }}
        >
          <h1
            className="hero-title"
            style={{
              fontSize: '3rem',
              color: '#003366',
              marginBottom: '30px',
              lineHeight: 1.2,
            }}
          >
            Find and{' '}
            <span style={{ color: '#007BFF' }}>Register</span> for{' '}
            <span style={{ color: '#007BFF' }}>Live Webinars</span>
          </h1>
          <p
            className="hero-subtitle"
            style={{
              fontSize: '1.4rem',
              color: '#555555',
              marginBottom: '30px',
              lineHeight: 1.6,
            }}
          >
            Discover global real estate investment opportunities from the comfort
            of your home or office.
          </p>
          <button
            className="call-to-action"
            style={{
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              fontSize: '1.1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onClick={() => navigate('/webinars')} // Navigate to the webinars page
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007BFF')}
          >
            Explore Webinars
          </button>
        </div>
        <div
          className="hero-slider"
          style={{
            flex: 1,
            marginLeft: '20px',
          }}
        >
          <ImageSlider />
        </div>
      </div>

      {/* Basic inline styles for responsiveness (can be improved with more complex logic) */}
      <style>
        {`
          @media (max-width: 768px) {
            .hero-content {
              flex-direction: column;
              text-align: center;
            }

            .hero-text {
              padding-right: 0;
              margin-bottom: 30px;
            }

            .hero-slider {
              margin-left: 0;
              width: 100%;
            }

            .hero-title {
              font-size: 2.2rem;
            }

            .hero-subtitle {
              font-size: 1.2rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default HeroSection;