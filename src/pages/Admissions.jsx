import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { admissionSources } from '../data/schoolData.js';

const steps = [
  {
    title: 'Contact the school office',
    detail: 'Visit or call the headteacher\u2019s office at Tilagbeni to confirm the current admission window for the academic year.',
  },
  {
    title: 'Bring your child\u2019s records',
    detail: 'Primary school completion records (or transfer records for pupils from other schools) are required at registration.',
  },
  {
    title: 'Complete registration',
    detail: 'The school registers new JHS 1 pupils and any eligible transfer students, in line with the admission sources below.',
  },
  {
    title: 'Register for the Capitation Grant',
    detail: 'Enrolled pupils are covered under the Capitation Grant Scheme, which the school has participated in since the 2004/05 academic year.',
  },
];

export default function Admissions() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <p className="page-header__crumb"><Link to="/">Home</Link> / Admissions</p>
          <h1>Admissions</h1>
          <p>How Gaala E.P. JHS admits students, and how to apply for a place.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <SectionHeading
            kicker="Who we admit"
            title="Admission policy"
            lede="The school draws its intake from three sources, in these approximate proportions each year."
          />
          <div className="admission-sources">
            {admissionSources.map((source) => (
              <div className="admission-source" key={source.label}>
                <div className="admission-source__share">
                  {source.share}<span>%</span>
                </div>
                <div>
                  <h3>{source.label}</h3>
                  <p>{source.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading kicker="How to apply" title="Application steps" />
          <ol className="admission-steps">
            {steps.map((step) => (
              <li key={step.title}>
                <div>
                  <strong>{step.title}</strong>
                  <span>{step.detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
