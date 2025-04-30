import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">

        {/* Logo (left) */}
        <Link to="/" className="navbar-logo no-underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64">
            <path
              d="M32 12a12 12 0 0 0-11.31 8.09A10 10 0 0 0 22 50h26a10 10 0 0 0 1.31-19.91A12 12 0 0 0 32 12z"
              fill="lightblue"
            />
          </svg>
          <h1>Cloud Services WEBINAR</h1>
        </Link>

        {/* Navigation Links (right) */}
        <div className="navbar-actions">
          <nav className="navbar-links">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/webinars" className={location.pathname === '/webinars' ? 'active' : ''}>Webinars</Link>
            <Link to="/admin/webinars" className={location.pathname === '/admin/webinars' ? 'active' : ''}>Admin</Link>
          </nav>

          <button className="login-btn">Login/Signup</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
