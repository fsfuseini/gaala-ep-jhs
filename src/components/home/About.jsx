import SectionHeading from '../common/SectionHeading.jsx';
import { photos } from '../../data/images.js';
import { welcomeMessage, mission, vision, headmasters } from '../../data/schoolData.js';

const currentHead = headmasters[headmasters.length - 1];

export default function About() {
  const paragraphs = welcomeMessage.trim().split('\n\n');

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading kicker="Since 1995" title="Welcome to Gaala E.P. Junior High School" />

        <figure className="wide-photo">
          <img src={photos.studentsStaffGroup.src} alt={photos.studentsStaffGroup.alt} loading="lazy" />
          <figcaption>Students, teachers and guests on the school compound</figcaption>
        </figure>

        <div className="two-col">
          <div className="about-copy">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="rule" aria-hidden="true" />

          <dl className="mission-vision">
            <div>
              <dt>Mission</dt>
              <dd>{mission}</dd>
            </div>
            <div>
              <dt>Vision</dt>
              <dd>{vision}</dd>
            </div>
          </dl>
        </div>

        <div className="headteacher-note">
          <p className="eyebrow">A note from the Headteacher</p>
          <blockquote>
            [Placeholder: add a short welcome message here in the Headteacher&rsquo;s own words. This
            space is reserved for {currentHead.name}, who has led the school since {currentHead.period.split('–')[0].trim()}.]
          </blockquote>
          <cite>{currentHead.name}, Headteacher (in office since {currentHead.period.split('–')[0].trim()})</cite>
        </div>
      </div>
    </section>
  );
}
