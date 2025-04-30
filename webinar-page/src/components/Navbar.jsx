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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 260"
            role="img"
            aria-labelledby="title desc"
            width="40"
            height="40"
          >
            <title id="title">Cloud Tower-1 Logo</title>
            <desc id="desc">
              Two stylized towers with V-cutouts, a faint skyline behind, and “CLOUD TOWER-1” text.
            </desc>
            <g fill="#999" opacity="0.2">
              <rect x="10" y="160" width="30" height="60" rx="3" />
              <rect x="40" y="140" width="20" height="80" rx="3" />
              <rect x="170" y="150" width="25" height="70" rx="3" />
              <rect x="150" y="170" width="15" height="50" rx="3" />
              <rect x="130" y="155" width="18" height="65" rx="3" />
            </g>
            <g id="left-tower">
              <rect x="40" y="50" width="40" height="160" fill="#5BA9E1" rx="4" />
              <defs>
                <polygon id="vshape" points="0,0 10,-15 20,0" fill="#fff" />
              </defs>
              <g transform="translate(40,50)">
                <g fill="none">
                  <use href="#vshape" transform="translate(10,26.7)" />
                  <use href="#vshape" transform="translate(30,26.7)" />
                  <use href="#vshape" transform="translate(10,53.4)" />
                  <use href="#vshape" transform="translate(30,53.4)" />
                  <use href="#vshape" transform="translate(10,80.1)" />
                  <use href="#vshape" transform="translate(30,80.1)" />
                  <use href="#vshape" transform="translate(10,106.8)" />
                  <use href="#vshape" transform="translate(30,106.8)" />
                  <use href="#vshape" transform="translate(10,133.5)" />
                  <use href="#vshape" transform="translate(30,133.5)" />
                  <use href="#vshape" transform="translate(10,160.2)" />
                  <use href="#vshape" transform="translate(30,160.2)" />
                </g>
              </g>
            </g>
            <g id="right-tower">
              <rect x="100" y="50" width="40" height="160" fill="#122147" rx="4" />
              <g transform="translate(100,50)">
                <g fill="none">
                  <use href="#vshape" transform="translate(10,26.7)" />
                  <use href="#vshape" transform="translate(30,26.7)" />
                  <use href="#vshape" transform="translate(10,53.4)" />
                  <use href="#vshape" transform="translate(30,53.4)" />
                  <use href="#vshape" transform="translate(10,80.1)" />
                  <use href="#vshape" transform="translate(30,80.1)" />
                  <use href="#vshape" transform="translate(10,106.8)" />
                  <use href="#vshape" transform="translate(30,106.8)" />
                  <use href="#vshape" transform="translate(10,133.5)" />
                  <use href="#vshape" transform="translate(30,133.5)" />
                  <use href="#vshape" transform="translate(10,160.2)" />
                  <use href="#vshape" transform="translate(30,160.2)" />
                </g>
              </g>
            </g>
            <text
              x="100"
              y="240"
              font-family="Montserrat, sans-serif"
              font-size="18"
              font-weight="700"
              fill="#000"
              text-anchor="middle"
              letter-spacing="1"
            >
              CLOUD TOWER-1
            </text>
          </svg>
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
