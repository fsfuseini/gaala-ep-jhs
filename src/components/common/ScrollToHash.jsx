import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Lets nav links like "/#about" work from any page: after navigation,
// if the URL carries a hash, scroll smoothly to that section id.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
