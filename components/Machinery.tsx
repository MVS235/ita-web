import React from 'react';
import { TranslationContent } from '../types';

interface MachineryProps {
  t: TranslationContent;
}

const Machinery: React.FC<MachineryProps> = ({ t }) => {
  const imageUrl = "https://res.cloudinary.com/dsrlyil1l/image/upload/v1770011897/Machinary_n3eevb.jpg";

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-12 gap-12 items-stretch">
        <div className="md:col-span-5 flex flex-col order-2 md:order-1 h-52 sm:h-64 md:h-auto">
          <div className="flex-grow rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
             <img 
               src={imageUrl} 
               alt="Factory Machinery" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        <div className="md:col-span-7 bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-slate-100 order-1 md:order-2">
          <div className="mb-12 border-l-4 border-ita-purple pl-6">
            <h3 className="text-3xl font-bold text-slate-900 tracking-tight uppercase mb-4">
              {t.machinery.title}
            </h3>
            <p className="text-xl md:text-2xl font-light text-slate-400 italic leading-tight uppercase tracking-tight">
              {t.machinery.quote}
            </p>
          </div>
          
          <p className="text-slate-600 text-lg mb-12 italic border-l-4 border-slate-100 pl-6 leading-relaxed">
            {t.machinery.intro}
          </p>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16 items-start">
            <div>
              <h4 className="text-xl font-extrabold text-ita-coral mb-6 uppercase tracking-widest border-b border-slate-100 pb-3 min-h-[64px] flex items-end">
                {t.machinery.production.title}
              </h4>
              <ul className="space-y-4">
                {t.machinery.production.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-center group">
                    <div className="w-3 h-3 bg-slate-800 flex-shrink-0 group-hover:bg-ita-coral transition-colors"></div>
                    <span className="text-slate-700 font-medium leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-extrabold text-ita-coral mb-6 uppercase tracking-widest border-b border-slate-100 pb-3 min-h-[64px] flex items-end">
                {t.machinery.supporting.title}
              </h4>
              <ul className="space-y-4">
                {t.machinery.supporting.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-center group">
                    <div className="w-3 h-3 bg-slate-800 flex-shrink-0 group-hover:bg-ita-coral transition-colors"></div>
                    <span className="text-slate-700 font-medium leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Machinery;