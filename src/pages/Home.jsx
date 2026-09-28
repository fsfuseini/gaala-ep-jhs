import Hero from '../components/home/Hero.jsx';
import QuickLinks from '../components/home/QuickLinks.jsx';
import About from '../components/home/About.jsx';
import Timeline from '../components/home/Timeline.jsx';
import BecePerformance from '../components/home/BecePerformance.jsx';
import Academics from '../components/home/Academics.jsx';
import NewsEvents from '../components/home/NewsEvents.jsx';
import Alumni from '../components/home/Alumni.jsx';
import Pta from '../components/home/Pta.jsx';
import Gallery from '../components/home/Gallery.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import Contact from '../components/home/Contact.jsx';

export default function Home() {
  return (
    <div id="top">
      <Hero />
      <QuickLinks />
      <About />
      <Timeline />
      <BecePerformance />
      <Academics />
      <NewsEvents />
      <Alumni />
      <Pta />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}
