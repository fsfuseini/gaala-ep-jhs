import SectionHeading from '../common/SectionHeading.jsx';
import { photos } from '../../data/images.js';
import { newsItems } from '../../data/schoolData.js';

export default function NewsEvents() {
  return (
    <section id="news" className="section">
      <div className="container">
        <SectionHeading kicker="Keep up to date" title="News &amp; announcements" />

        <ul className="news-list">
          {newsItems.map((item) => (
            <li className="news-item" key={item.title}>
              <time>{item.date}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                {item.image && (
                  <figure className="news-item__photo">
                    <img src={photos[item.image].src} alt={photos[item.image].alt} loading="lazy" />
                    {item.credit && <figcaption>{item.credit}</figcaption>}
                  </figure>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
