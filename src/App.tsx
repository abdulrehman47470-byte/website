import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import BrandLogos from './sections/BrandLogos';
import Transform from './sections/Transform';
import Courses from './sections/Courses';
import Grow from './sections/Grow';
import Testimonials from './sections/Testimonials';
import Stats from './sections/Stats';
import Footer from './sections/Footer';
import { SEO } from './components/SEO';
import HelpCenter from './pages/HelpCenter';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';
import Book from './pages/Book';

// Home Page Component
const HomePage = () => (
  <>
    <SEO
      title="BioCareer - Bridging Biology & Data Science"
      description="Transform your biology career with data science skills. Expert guidance from Abd-Ur-Rehman Munir on bioinformatics, computational biology, and career development."
      path="/"
      image="/images/hero-instructor.jpg"
    />
    <Header />
    <main>
      <Hero />
      <BrandLogos />
      <Transform />
      <Courses />
      <Grow />
      <Testimonials />
      <Stats />
    </main>
    <Footer />
  </>
);

function App() {
  useEffect(() => {
    // Page components are already bundled into the main chunk, so the only
    // remaining "cold click" gap is route-specific image bytes for visitors
    // who tap without ever hovering (mobile, or a fast first click). Warming
    // the book cover here — after idle, so it never competes with the
    // current page's own images — means it's usually already cached by the
    // time a first-time visitor taps through to /book.
    const timeoutId = window.setTimeout(() => {
      const img = new Image();
      img.src = '/images/book/cover.avif';
    }, 2000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;
