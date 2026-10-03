import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import { schoolInfo } from '../../data/schoolData.js';

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <Link to="/#top" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Gaala E.P. JHS crest" className="brand__crest" />
          <span className="brand__text">
            <span className="brand__name">{schoolInfo.shortName}</span>
            <span className="brand__place">Saboba District</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav id="main-nav" className={`main-nav ${open ? 'is-open' : ''}`}>
          <ul className="main-nav__list">
            <li><Link to="/#top" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/#about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/#academics" onClick={closeMenu}>Academics</Link></li>
            <li><Link to="/admissions" onClick={closeMenu}>Admissions</Link></li>
            <li><Link to="/#news" onClick={closeMenu}>News &amp; Events</Link></li>
            <li><Link to="/library" onClick={closeMenu}>Library</Link></li>
            {/* <li><Link to="/student-portal" onClick={closeMenu}>Student Portal</Link></li>
            <li><Link to="/parent-portal" onClick={closeMenu}>Parent Portal</Link></li> */}
            <li><Link to="/#contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
          <span className="main-nav__ctas">
            <Link to="/donate" className="btn btn--ghost" onClick={closeMenu}>
              Donate
            </Link>
            <Link to="/admissions" className="btn btn--primary" onClick={closeMenu}>
              Apply now
            </Link>
          </span>
        </nav>
      </div>
    </header>
  );
}
