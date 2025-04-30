import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { WebinarContext } from '../context/WebinarContext'; // ✅ Get live data from context
import '../components/PopularWebinars.css';

function AllWebinars() {
  const { webinars } = useContext(WebinarContext); // ✅ dynamic data
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="popular-webinars-section">
        <div className="container">
          <h2>All Webinars</h2>

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
              <p style={{ marginTop: '2rem', color: '#888' }}>No webinars available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllWebinars;
