import SectionHeading from '../common/SectionHeading.jsx';
import { alumniInfo, alumniLeadership } from '../../data/schoolData.js';
import { photos } from '../../data/images.js';

export default function Alumni() {
  return (
    <section id="alumni" className="section section--tight">
      <div className="container">
        <SectionHeading kicker="Old students" title="Alumni" />
        <div className="community-grid">
          <div>
            <h3>Leadership</h3>
            <p>{alumniInfo.leadership}</p>
          </div>
          <div>
            <h3>Activities</h3>
            <ul>
              {alumniInfo.activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="leadership-grid">
          {alumniLeadership.map((person, i) => {
            const photo = person.photo ? photos[person.photo] : null;
            return (
              <div className="leadership-card" key={person.name || `placeholder-${i}`}>
                <div className="leadership-card__photo">
                  {photo ? (
                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                  ) : (
                    <span aria-hidden="true">Photo pending</span>
                  )}
                </div>
                <strong>{person.name || 'Name pending'}</strong>
                <span className="leadership-card__role">{person.role}</span>
                {person.bio && <p>{person.bio}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
