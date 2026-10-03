import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { donationInfo, schoolInfo } from '../data/schoolData.js';

export default function Donate() {
  const hasMomo = Boolean(donationInfo.momoNumber);

  return (
    <>
      <header className="page-header">
        <div className="container">
          <p className="page-header__crumb"><Link to="/">Home</Link> / Donate</p>
          <h1>Support Gaala E.P. JHS</h1>
          <p>{donationInfo.note}</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <SectionHeading kicker="Give directly" title="Mobile Money" />

          {hasMomo ? (
            <div className="card donate-card">
              <dl>
                <dt>Network</dt>
                <dd>{donationInfo.momoNetwork}</dd>
                <dt>Number</dt>
                <dd>{donationInfo.momoNumber}</dd>
                <dt>Registered name</dt>
                <dd>{donationInfo.momoName}</dd>
              </dl>
            </div>
          ) : (
            <div className="card donate-card donate-card--pending">
              <p>
                Mobile Money details are being set up by the alumni committee and will appear here
                shortly. In the meantime, reach the committee through the{' '}
                <Link to="/#contact">contact page</Link> to arrange a contribution.
              </p>
            </div>
          )}

          {donationInfo.bankDetails && (
            <div className="card donate-card">
              <h3>Bank transfer</h3>
              <p>{donationInfo.bankDetails}</p>
            </div>
          )}

          <p className="form-note">
            Every contribution supports alumni-led projects at {schoolInfo.shortName}: infrastructure,
            learning materials, and the school&rsquo;s 30th anniversary activities.
          </p>
        </div>
      </section>
    </>
  );
}
