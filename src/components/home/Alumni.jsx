import SectionHeading from '../common/SectionHeading.jsx';
import { alumniInfo } from '../../data/schoolData.js';

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
      </div>
    </section>
  );
}
