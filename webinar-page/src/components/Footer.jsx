import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">

        {/* Column 1: Get in Touch */}
        <div className="footer-column">
          <h3>Get In Touch</h3>
          <ul>
            <li><span>📍</span> Plaza No 3, Block B1 Ext, B-17 Islamabad, Pakistan</li>
            <li><span>📞</span> +92 348 111 5505</li>
            <li><span>📧</span> info@cloudservices.com.pk</li>
          </ul>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">News & Media</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Company Values */}
        <div className="footer-column">
          <h3>Core Values</h3>
          <ul>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer-Centricity</li>
            <li>Sustainability</li>
            <li>Excellence</li>
          </ul>
        </div>

        {/* Column 4: Location Map */}
        <div className="footer-column">
          <h3>Our Location</h3>
          <iframe
            src="https://maps.google.com/maps?q=Plaza%20No%203,%20Block%20B1%20Ext,%20B-17%20Islamabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="150"
            frameBorder="0"
            style={{ border: "0", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © 2024-2025 The Cloud Services. All rights reserved. Developed by Asad. Visit: 
          <a href="https://cloudservices.com.pk" target="_blank" rel="noopener noreferrer"> cloudservices.com.pk</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
