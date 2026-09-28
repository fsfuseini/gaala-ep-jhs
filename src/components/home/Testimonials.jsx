import SectionHeading from '../common/SectionHeading.jsx';
import { testimonials } from '../../data/schoolData.js';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section--tight">
      <div className="container">
        <SectionHeading
          kicker="Sample content"
          title="What our community says"
          lede="Placeholder quotes, shown to demonstrate layout. Replace with real, attributed quotes from students, parents and alumni before launch."
        />

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <figure key={t.name}>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
