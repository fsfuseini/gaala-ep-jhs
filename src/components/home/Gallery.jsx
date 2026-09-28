import { useState } from 'react';
import SectionHeading from '../common/SectionHeading.jsx';
import { gallerySlides } from '../../data/images.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const total = gallerySlides.length;
  const current = gallerySlides[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <SectionHeading kicker="School life" title="Gallery" />

        <div className="slider" role="group" aria-roledescription="carousel" aria-label="School photo gallery">
          <figure className="slider__stage">
            <img src={current.photo.src} alt={current.photo.alt} />
            <figcaption>{current.caption}</figcaption>
          </figure>

          <div className="slider__controls">
            <button type="button" className="btn btn--ghost" onClick={prev} aria-label="Previous photo">
              Previous
            </button>
            <span className="slider__count" aria-live="polite">
              {index + 1} of {total}
            </span>
            <button type="button" className="btn btn--ghost" onClick={next} aria-label="Next photo">
              Next
            </button>
          </div>

          <ul className="slider__thumbs">
            {gallerySlides.map((slide, i) => (
              <li key={slide.caption}>
                <button
                  type="button"
                  className={i === index ? 'is-current' : ''}
                  onClick={() => setIndex(i)}
                  aria-label={`Show photo ${i + 1}: ${slide.caption}`}
                  aria-current={i === index}
                >
                  <img src={slide.photo.src} alt="" loading="lazy" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
