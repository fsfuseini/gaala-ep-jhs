import { Link } from 'react-router-dom';

export default function StudentPortal() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <p className="page-header__crumb"><Link to="/">Home</Link> / Student Portal</p>
          <h1>Student Portal</h1>
          <p>Check your results, timetable, and school announcements.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="portal-panel">
            <div className="divider-quad" aria-hidden="true">
              <span /><span /><span /><span />
            </div>
            <h2>Coming soon</h2>
            <p>
              The student portal is not yet connected to a results or timetable system. The form below is a
              placeholder, ready to be wired up to a school management system.
            </p>
            <form className="portal-form" onSubmit={(e) => e.preventDefault()}>
              <label>
                Student ID
                <input type="text" name="studentId" placeholder="e.g. GEJ-2025-014" />
              </label>
              <label>
                PIN
                <input type="password" name="pin" />
              </label>
              <button type="submit" className="btn btn--primary" disabled>
                Log in (coming soon)
              </button>
            </form>
            <p className="portal-note">Need help? Reach the school office through the <Link to="/#contact">contact page</Link>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
