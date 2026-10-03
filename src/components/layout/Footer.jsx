import { Link } from 'react-router-dom';
import { schoolInfo } from '../../data/schoolData.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4>{schoolInfo.shortName}</h4>
            <p>{schoolInfo.address}</p>
            <div className="footer-social">
              {/* <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter / X">x</a>
              <a href="#" aria-label="YouTube">yt</a> */}
            </div>
          </div>

          <div>
            <h4>Quick links</h4>
            <ul className="footer-links">
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/#academics">Academics</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/#news">News &amp; Events</Link></li>
              <li><Link to="/#gallery">Gallery</Link></li>
              <li><Link to="/library">Library</Link></li>
              <li><Link to="/donate">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h4>Community</h4>
            <ul className="footer-links">
              <li><Link to="/#alumni">Alumni</Link></li>
              <li><Link to="/#pta">PTA / SMC</Link></li>
              {/* <li><Link to="/student-portal">Student Portal</Link></li>
              <li><Link to="/parent-portal">Parent Portal</Link></li> */}
              <li><Link to="/#contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {schoolInfo.shortName}. All rights reserved.</span>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
