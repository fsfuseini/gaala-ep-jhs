import SectionHeading from '../common/SectionHeading.jsx';
import { growthTimeline } from '../../data/schoolData.js';

export default function Timeline() {
  return (
    <section id="history" className="section section--tight">
      <div className="container">
        <SectionHeading
          kicker="1995 – 2025"
          title="Three decades of growth"
          lede="From a single stream of 79 students to a full three-form school of 285, here is how Gaala E.P. JHS has grown."
        />

        <ol className="timeline">
          {growthTimeline.map((event, i) => (
            <li key={event.year}>
              <span className="timeline__year">{event.year}</span>
              <span className="timeline__rail" aria-hidden="true">
                <span className="timeline__dot" />
                {i < growthTimeline.length - 1 && <span className="timeline__line" />}
              </span>
              <span>
                <span className="timeline__title">{event.title}</span>
                <p className="timeline__detail">{event.detail}</p>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
