import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Eligibility from './pages/Eligibility';

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
    const timeoutId = window.setTimeout(() => {
      const img = new Image();
      img.src = '/images/book/cover.avif';
    }, 2000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/eligibility" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="/eligibility" element={<Eligibility />} />
      </Routes>
    </Router>
  );
}

export default App;
