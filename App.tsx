import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './translations';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Machinery from './components/Machinery';
import Products from './components/Products';
import Customers from './components/Customers';
import Contact from './components/Contact';
import Logo from './components/Logo';
import LegalModal from './components/LegalModal';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.ID);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy'
  });

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(prev => prev === Language.ID ? Language.EN : Language.ID);
  };

  const openLegal = (type: 'privacy' | 'terms') => {
    setLegalModal({ isOpen: true, type });
  };

  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header lang={lang} onToggle={toggleLanguage} t={t} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero t={t} />
        </section>
        
        <section id="about" className="py-20 bg-white">
          <About t={t} />
        </section>
        
        <section id="vision" className="py-20 bg-slate-50">
          <VisionMission t={t} />
        </section>

        <section id="machinery" className="py-20 bg-white">
          <Machinery t={t} />
        </section>
        
        <section id="products" className="py-20 bg-slate-900 text-white">
          <Products t={t} />
        </section>
        
        <section id="customers" className="py-20 bg-white overflow-hidden">
          <Customers t={t} />
        </section>
        
        <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
          <Contact t={t} lang={lang} />
        </section>
      </main>

      {/* Back to Top Button */}
      <button 
        onClick={() => scrollToTop()}
        className={`fixed bottom-8 right-8 z-[55] w-12 h-12 bg-white text-ita-purple rounded-full shadow-xl flex items-center justify-center border border-slate-100 transition-all duration-500 hover:scale-110 active:scale-95 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to Top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* AiAssistant is kept in the codebase but removed from UI for now */}
      {/* <AiAssistant lang={lang} /> */}

      <LegalModal 
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal(prev => ({ ...prev, isOpen: false }))}
        lang={lang}
        onToggleLanguage={toggleLanguage}
        title={t.legal[legalModal.type].title}
        content={t.legal[legalModal.type].content}
        closeText={t.legal.close}
      />

      <footer className="bg-slate-900 text-slate-400 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-6">
              <Logo className="w-16 h-16" />
              <div className="flex flex-col">
                <span className="font-black text-white tracking-widest text-xl uppercase">PT Indah Tjandra Abadi</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">Quality Adhesive Solutions</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <p className="text-sm font-medium">
                © {new Date().getFullYear()} PT Indah Tjandra Abadi. All rights reserved.
              </p>
              <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
                <button onClick={() => openLegal('privacy')} className="hover:text-ita-orange transition-colors uppercase">
                  {t.legal.privacy.title}
                </button>
                <button onClick={() => openLegal('terms')} className="hover:text-ita-orange transition-colors uppercase">
                  {t.legal.terms.title}
                </button>
                <button onClick={scrollToTop} className="text-ita-purple hover:text-white transition-colors uppercase tracking-widest">
                  Back to Top ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;