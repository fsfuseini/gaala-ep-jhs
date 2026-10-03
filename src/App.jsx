import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollToHash from './components/common/ScrollToHash.jsx';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home.jsx';
import Admissions from './pages/Admissions.jsx';
import Donate from './pages/Donate.jsx';
import Library from './pages/Library.jsx';
import StudentPortal from './pages/StudentPortal.jsx';
import ParentPortal from './pages/ParentPortal.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <ScrollToHash />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/library" element={<Library />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/parent-portal" element={<ParentPortal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
