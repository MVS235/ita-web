import React, { useState, useEffect } from 'react';
import { Language, TranslationContent } from '../types';
import Logo from './Logo';

interface HeaderProps {
  lang: Language;
  onToggle: () => void;
  t: TranslationContent;
}

const Header: React.FC<HeaderProps> = ({ lang, onToggle, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      const headerOffset = isScrolled ? 70 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.vision, href: '#vision' },
    { name: t.nav.machinery, href: '#machinery' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.customers, href: '#customers' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-md border-b border-slate-200' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => handleNavClick(e as any, '#home')}>
          <Logo className="w-10 h-10" />
          <span className={`font-black text-xl tracking-tight hidden sm:block transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
            PT INDAH TJANDRA ABADI
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xs uppercase tracking-widest font-bold transition-colors hover:text-ita-orange ${isScrolled ? 'text-slate-600' : 'text-slate-200 hover:text-white drop-shadow-sm'}`}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={onToggle}
            className={`flex items-center justify-center min-w-[40px] px-3 py-1 rounded-full border text-xs font-bold transition-all duration-300 ${
              isScrolled 
              ? 'border-ita-purple/30 text-ita-purple hover:bg-ita-purple/5' 
              : 'border-white/30 text-white hover:bg-white/10'
            }`}
          >
            {lang === Language.ID ? 'ID' : 'EN'}
          </button>
        </nav>

        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={onToggle}
            className={`flex items-center justify-center px-2 py-1 rounded-full border text-[10px] font-bold ${
              isScrolled ? 'border-ita-purple/30 text-ita-purple' : 'border-white/30 text-white'
            }`}
          >
            {lang === Language.ID ? 'ID' : 'EN'}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${isScrolled ? 'text-slate-900' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden glass border-b border-slate-200 absolute w-full left-0 py-4 shadow-xl max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-6 py-3 text-slate-700 font-bold uppercase text-xs tracking-widest border-b border-slate-100 last:border-0 hover:bg-ita-purple/5 hover:text-ita-purple transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;