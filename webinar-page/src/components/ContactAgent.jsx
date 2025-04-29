import React from 'react';

function ContactAgent() {
  return (
    <div className="contact-agent-section">
      <div className="container">{/* New container wrapper */}

        <div className="contact-container">
          {/* Left - Image */}
          <div className="contact-image">
            <img
              src="https://images.pexels.com/photos/3775535/pexels-photo-3775535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Certified Agent"
            />
          </div>

          {/* Right - Text and Button */}
          <div className="contact-text">
            <h2>Contact With Our Certified Agent</h2>
            <p>
              Invest in Dubai with confidence with PHOREE and REMAX PAKISTAN. 
              We manage our clients properties for free.
            </p>
            <button className="contact-button">Contact Us</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactAgent;
