import React from 'react';
import { useNavigate } from 'react-router-dom';

function PopularWebinars({ webinars = [] }) {
  const navigate = useNavigate();

  return (
    <div className="popular-webinars-section">
      <div className="container">
        <h2>Our Webinars</h2>

        <div className="webinars-grid">
          {webinars.map((webinar) => (
            <div className="webinar-card" key={webinar.id}>
              <div
                className="image-container"
                onClick={() => navigate(`/webinar/${webinar.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <img src={webinar.image} alt={webinar.title} />
                <div className="register-tag">Webinar: Register Now</div>
              </div>
              <div className="card-content">
                <button className="view-detail" onClick={() => navigate(`/webinar/${webinar.id}`)}>
                  View Detail
                </button>
                <h3>{webinar.title}</h3>
                <p className="city-name">{webinar.city}</p>
              </div>
            </div>
          ))}

          {webinars.length === 0 && (
            <p style={{ marginTop: '2rem', color: '#888' }}>No webinars found for your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PopularWebinars;
