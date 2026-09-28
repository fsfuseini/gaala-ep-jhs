import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import { schoolInfo } from '../../data/schoolData.js';
import { photos } from '../../data/images.js';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <p className="hero__eyebrow">
            <span className="dot" aria-hidden="true" />
            Tilagbeni, Saboba District · Est. {schoolInfo.founded}
          </p>
          <h1>Empowering students through education, discipline, and innovation</h1>
          <p className="hero__lede">{schoolInfo.tagline}</p>
          <div className="hero__ctas">
            <Link to="/admissions" className="btn btn--primary">Apply now</Link>
            <Link to="/#academics" className="btn btn--ghost">Explore programs</Link>
          </div>
        </div>

        <div className="hero__figure">
          <div className="hero__photo">
            <img src={photos.schoolBlockFront.src} alt={photos.schoolBlockFront.alt} />
            <img src={logo} alt="Gaala E.P. JHS crest: The Sky is the Limit" className="hero__crest" />
          </div>
          <p className="hero__years">
            30
            <span>years of Gaala E.P. JHS, 1995 to 2025</span>
          </p>
        </div>
      </div>
      <div className="divider-quad" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
    </section>
  );
}
