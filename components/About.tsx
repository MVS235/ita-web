import React from 'react';
import { TranslationContent } from '../types';

interface AboutProps {
  t: TranslationContent;
}

const About: React.FC<AboutProps> = ({ t }) => {
  const imageUrl = "https://res.cloudinary.com/dsrlyil1l/image/upload/v1770011896/VisionMission_lnroqe.jpg";

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col gap-12">
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-[400px] md:h-[500px]">
          <img 
            src={imageUrl} 
            alt="Corporate Vision" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
            <div className="bg-ita-coral text-white px-12 py-6 shadow-2xl transform transition-all duration-500">
               <span className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
                 {t.about.historyLabel}
               </span>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mt-8">
          <div className="flex flex-col justify-center">
            <div className="bg-slate-100 p-8 md:p-12 rounded-2xl border-l-8 border-ita-purple">
              <h2 className="text-3xl md:text-4xl font-extrabold text-ita-purple/80 leading-[1.1] uppercase tracking-tight italic">
                {t.about.slogan}
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 uppercase tracking-wide">
              {t.about.title}
            </h3>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              {t.about.content.map((p, i) => (
                <p key={i} className={i === 1 ? "font-medium text-slate-700 italic border-l-4 border-ita-orange/30 pl-4" : ""}>
                  {p}
                </p>
              ))}
            </div>
            
            <div className="mt-10 flex gap-4">
               <div className="bg-ita-purple text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-widest">
                 Established 2017
               </div>
               <div className="bg-slate-200 text-slate-700 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest">
                 Sidoarjo, Indonesia
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;