import React from 'react';

function PopularWebinars() {
  return (
    <div className="popular-webinars-section">
      <div className="container">{/* New container wrapper */}

        <h2>Most Popular Webinars</h2>

        <div className="webinars-grid">
          {/* Card 1 */}
          <div className="webinar-card">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1560347876-aeef00ee58a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                alt="Webinar 1"
              />
              <div className="register-tag">Webinar: Register Now</div>
            </div>
            <div className="card-content">
              <button className="view-detail">View Detail</button>
              <h3>DUBAI - Real Estate Agents Training</h3>
              <p className="city-name">Dubai</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="webinar-card">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                alt="Webinar 2"
              />
              <div className="register-tag">Webinar: Register Now</div>
            </div>
            <div className="card-content">
              <button className="view-detail">View Detail</button>
              <h3>Verdana Dubai Investment Park</h3>
              <p className="city-name">Dubai Investment Park</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="webinar-card">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                alt="Webinar 3"
              />
              <div className="register-tag">Webinar: Register Now</div>
            </div>
            <div className="card-content">
              <button className="view-detail">View Detail</button>
              <h3>BT Properties - Bahria Town Dubai</h3>
              <p className="city-name">Dubai South</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PopularWebinars;
