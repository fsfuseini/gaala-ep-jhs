import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollToHash from './components/common/ScrollToHash.jsx';
import Home from './pages/Home.jsx';
import Admissions from './pages/Admissions.jsx';
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
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/parent-portal" element={<ParentPortal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
