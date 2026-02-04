import React from 'react';
import { TranslationContent } from '../types';

interface HeroProps {
  t: TranslationContent;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      const headerOffset = window.scrollY > 20 ? 70 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const imageUrl = "https://res.cloudinary.com/dsrlyil1l/image/upload/v1770011895/Header_czrbod.jpg";

  return (
    <div className="relative min-h-[90vh] flex items-center pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
        <img 
          src={imageUrl} 
          alt="Manufacturing" 
          className="w-full h-full object-cover scale-110 animate-[zoom_20s_ease-in-out_infinite]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 text-white w-full">
        <div className="max-w-2xl">
          <div className="inline-block px-3 py-1 bg-ita-orange text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-6">
            Leading Manufacturer
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed mb-10">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products" 
              onClick={(e) => scrollToSection(e, '#products')}
              className="px-8 py-4 bg-ita-purple hover:bg-ita-dark text-white font-semibold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg text-center"
            >
              {t.hero.cta}
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-md border border-white/20 transition-all text-center"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Hero;