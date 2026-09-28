import { Link } from 'react-router-dom';

export default function ParentPortal() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <p className="page-header__crumb"><Link to="/">Home</Link> / Parent Portal</p>
          <h1>Parent Portal</h1>
          <p>Follow your child&rsquo;s attendance, fees, and school updates.</p>
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
              The parent portal is not yet connected to a records system. The form below is a placeholder,
              ready to be wired up once the school chooses a management system.
            </p>
            <form className="portal-form" onSubmit={(e) => e.preventDefault()}>
              <label>
                Parent / Guardian phone number
                <input type="tel" name="phone" placeholder="e.g. 024 XXX XXXX" />
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
