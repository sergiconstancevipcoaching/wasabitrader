import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CookieBanner from './components/CookieBanner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load components for better performance
const Features = lazy(() => import('./components/Features'));
const ComparisonSection = lazy(() => import('./components/ComparisonSection'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CTA = lazy(() => import('./components/CTA'));
const ComparisonForm = lazy(() => import('./components/ComparisonForm'));
const Footer = lazy(() => import('./components/Footer'));

// Import legal pages directly to avoid lazy loading issues
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <Suspense fallback={<LoadingSpinner />}>
      <Features />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <ComparisonSection />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <ServicesSection />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <Testimonials />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <CTA />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <ComparisonForm />
    </Suspense>
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/nuestro-equipo" element={<OurTeam />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;