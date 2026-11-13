import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { GiftListDrawer } from './components/gift-list/GiftListDrawer';
import { GiftListProvider } from './context/GiftListContext';
import { GiftWrapperCurtainSplash } from './components/ui/GiftWrapperCurtainSplash';
import { Home } from './pages/Home';
import { CustomisedGifts } from './pages/CustomisedGifts';
import { Photography } from './pages/Photography';
import { CorporateGifts } from './pages/CorporateGifts';
import { StudioServices } from './pages/StudioServices';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Checkout } from './pages/Checkout';
import { Terms, Privacy, NotFound } from './pages/LegalPages';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [splashFinished, setSplashFinished] = useState(false);

  return (
    <GiftListProvider>
      {/* Theatrical Curtain Opening + 3D Gift Unwrapping Splash Screen */}
      {!splashFinished && (
        <GiftWrapperCurtainSplash onComplete={() => setSplashFinished(true)} />
      )}

      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#191919]">
          <Header />
          <main className="flex-1 pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/customised-gifts" element={<CustomisedGifts />} />
              <Route path="/photography" element={<Photography />} />
              <Route path="/corporate-gifts" element={<CorporateGifts />} />
              <Route path="/studio-services" element={<StudioServices />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <GiftListDrawer />
        </div>
      </Router>
    </GiftListProvider>
  );
}

export default App;
