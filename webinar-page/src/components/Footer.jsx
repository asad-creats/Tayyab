import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">

        {/* Column 1: Get in Touch */}
        <div className="footer-column">
          <h3>Get In Touch</h3>
          <ul>
            <li><span>📍</span> 471 Old Walnut Cir, Gurnee, IL 60031, United States</li>
            <li><span>📞</span> WhatsApp: +1 847-323-4703, +1 407-946-4000</li>
            <li><span>📧</span> support@insidewebinar.com</li>
          </ul>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">My Webinars</a></li>
            <li><a href="#">Login/Signin</a></li>
          </ul>
        </div>

        {/* Column 3: More Links */}
        <div className="footer-column">
          <h3>More Links</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Partner Agents</a></li>
          </ul>
        </div>

        {/* Column 4: Location */}
        <div className="footer-column">
          <h3>Our Location</h3>
          <iframe
            src="https://maps.google.com/maps?q=471%20Old%20Walnut%20Cir,%20Gurnee,%20IL%2060031&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
        <p>Cloud Services Webinar, Copyright © 2024-2025. All Rights Reserved. Designed & Developed by Asad</p>
      </div>
    </footer>
  );
}

export default Footer;
