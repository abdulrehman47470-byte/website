import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
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

// Lazy load pages
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const FAQ = lazy(() => import('./pages/FAQ'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Book = lazy(() => import('./pages/Book'));

// Prefetch every lazy page chunk once the browser is idle, so navigating
// to any page after the initial load resolves instantly instead of waiting
// on a fresh network fetch.
const prefetchPages = () => {
  import('./pages/HelpCenter');
  import('./pages/TermsOfService');
  import('./pages/PrivacyPolicy');
  import('./pages/FAQ');
  import('./pages/About');
  import('./pages/Contact');
  import('./pages/Book');
};

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple"></div>
  </div>
);

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
    const idleWindow = window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (idleWindow.requestIdleCallback) {
      const id = idleWindow.requestIdleCallback(prefetchPages);
      return () => idleWindow.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(prefetchPages, 1500);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
