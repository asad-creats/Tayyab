import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">

        {/* Left: Logo and Title */}
        <div className="navbar-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64">
            <path
              d="M32 12a12 12 0 0 0-11.31 8.09A10 10 0 0 0 22 50h26a10 10 0 0 0 1.31-19.91A12 12 0 0 0 32 12z"
              fill="lightblue"
            />
          </svg>
          <h1>Cloud Services WEBINAR</h1>
        </div>

        {/* Right: Actions */}
        <div className="navbar-actions">
          <button className="login-btn">Login/Signup</button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
