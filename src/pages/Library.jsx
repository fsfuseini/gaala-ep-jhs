import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading.jsx';

const resourceCategories = [
  'Research papers and articles by alumni',
  'Career guidance and further-study resources',
  'Past BECE questions and revision notes',
  'School reports, photos and historical documents',
];

export default function Library() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <p className="page-header__crumb"><Link to="/">Home</Link> / Library</p>
          <h1>Library &amp; Learning Resources</h1>
          <p>
            A shared space for alumni to contribute research and resources, and for students to access
            learning materials online.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <SectionHeading
            kicker="For alumni"
            title="Alumni resource library"
            lede="A place for old students to share research, articles and career resources with the school and each other."
          />

          <ul className="resource-categories">
            {resourceCategories.map((cat) => (
              <li key={cat}>{cat}</li>
            ))}
          </ul>

          <div className="portal-panel portal-panel--wide">
            <div className="divider-quad" aria-hidden="true">
              <span /><span /><span /><span />
            </div>
            <h2>Coming soon</h2>
            <p>
              Uploading and browsing resources isn&rsquo;t connected yet. This section is ready to be wired
              up to a file storage service once the committee decides how submissions should be reviewed.
            </p>
            <form className="portal-form" onSubmit={(e) => e.preventDefault()}>
              <label>
                Title
                <input type="text" name="title" placeholder="e.g. Guide to applying for teacher training college" />
              </label>
              <label>
                Your name
                <input type="text" name="name" />
              </label>
              <label>
                File
                <input type="file" name="file" disabled />
              </label>
              <button type="submit" className="btn btn--primary" disabled>
                Submit (coming soon)
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            kicker="For students"
            title="Student e-library"
            lede="Digital learning materials for current students, organised by subject."
          />

          <div className="portal-panel portal-panel--wide">
            <div className="divider-quad" aria-hidden="true">
              <span /><span /><span /><span />
            </div>
            <h2>Coming soon</h2>
            <p>
              The e-library will hold notes and past questions for core subjects. It isn&rsquo;t populated
              yet. Reach the school office through the <Link to="/#contact">contact page</Link> if you have
              materials to contribute.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
