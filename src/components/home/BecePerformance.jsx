import SectionHeading from '../common/SectionHeading.jsx';
import { becePerformance, becePerformanceNote } from '../../data/schoolData.js';

const maxRate = 100;
const hundredPercentYears = becePerformance.filter((row) => row.rate === 100).length;
const latest = becePerformance[becePerformance.length - 1];
const totalCandidates = becePerformance.reduce((sum, row) => sum + row.candidates, 0);

export default function BecePerformance() {
  return (
    <section id="results" className="section">
      <div className="container">
        <SectionHeading
          kicker="1998 – 2025"
          title="BECE performance, in the school ledger"
          lede="Every recorded year of Basic Education Certificate Examination results, from the first cohort in 1998 to today."
        />

        <div className="ledger-summary">
          <div className="card">
            <strong>{latest.rate}%</strong>
            <span>Pass rate in {latest.year}, {latest.passed} of {latest.candidates} candidates</span>
          </div>
          <div className="card">
            <strong>{hundredPercentYears}</strong>
            <span>Years the school has recorded a 100% pass rate (1998 and 2024)</span>
          </div>
          <div className="card">
            <strong>{totalCandidates.toLocaleString()}</strong>
            <span>Total BECE candidates presented across all recorded years</span>
          </div>
        </div>

        <div className="bece-chart">
          <div className="bece-chart__inner">
            {becePerformance.map((row) => (
              <div className="bece-bar" key={row.year} title={`${row.year}: ${row.rate}% (${row.passed}/${row.candidates})`}>
                <div
                  className={`bece-bar__fill ${row.rate === 100 ? 'bece-bar--peak' : ''}`}
                  style={{ height: `${(row.rate / maxRate) * 100}%` }}
                />
                <span className="bece-bar__year">{row.year}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bece-legend">
          <span><i className="swatch-blue" /> Pass rate</span>
          <span><i className="swatch-red" /> 100% pass rate</span>
        </div>
        <p className="bece-chart__note">{becePerformanceNote}</p>
      </div>
    </section>
  );
}
