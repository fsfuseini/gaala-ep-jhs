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
            <p>Welcome to the official website of Gaala EP JHS. This platform serves as a source of information about our academic programs, school activities, achievements, and important announcements.</p>

            <p>Our school is dedicated to promoting high standards of teaching and learning while fostering integrity, discipline, respect, and lifelong learning.</p>

            <p>We are committed to ensuring that every student receives the support needed to excel academically and socially.</p>

            <p>We appreciate the continued support of parents, guardians, community leaders, and education stakeholders.</p>

            <p>Together, we can create an enriching educational experience for all learners.</p>

            <p>Kisak Daniel</p>
            <p>HeadteacherGaala EP JHS</p>
          </blockquote>
          <cite>{currentHead.name}, Headteacher (in office since {currentHead.period.split('–')[0].trim()})</cite>
        </div>
      </div>
    </section>
  );
}
