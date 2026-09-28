import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container not-found">
      <h1>404</h1>
      <p>We couldn&rsquo;t find that page.</p>
      <Link to="/" className="btn btn--primary">Back to home</Link>
    </div>
  );
}
