import SectionHeading from '../common/SectionHeading.jsx';
import { ptaInfo } from '../../data/schoolData.js';

export default function Pta() {
  return (
    <section id="pta" className="section section--tight">
      <div className="container">
        <SectionHeading kicker="Parents & community" title="PTA / SMC" />
        <div className="community-grid">
          <div>
            <h3>Leadership</h3>
            <p>{ptaInfo.leadership}</p>
          </div>
          <div>
            <h3>Membership &amp; meetings</h3>
            <p>{ptaInfo.membership}</p>
            <p>{ptaInfo.meetings}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
