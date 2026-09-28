import SectionHeading from '../common/SectionHeading.jsx';
import { academicPrograms, coCurricular } from '../../data/schoolData.js';

export default function Academics() {
  return (
    <section id="academics" className="section">
      <div className="container">
        <SectionHeading
          kicker="Forms 1 – 3"
          title="Academic and co-curricular programs"
          lede="A national JHS curriculum, taught by a small and dedicated staff, with room to compete beyond the classroom."
        />

        <div className="program-grid">
          {academicPrograms.map((program) => (
            <div className="card" key={program.title}>
              <h3>{program.title}</h3>
              <p>{program.detail}</p>
            </div>
          ))}
        </div>

        <div className="co-curricular">
          {coCurricular.map((item) => (
            <div className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
