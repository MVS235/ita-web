import React from 'react';
import { TranslationContent } from '../types';

interface VisionMissionProps {
  t: TranslationContent;
}

const VisionMission: React.FC<VisionMissionProps> = ({ t }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-slate-400 leading-tight uppercase tracking-[0.3em] mb-4">
          {t.visionMission.introSlogan}
        </h2>
        <div className="h-1 w-24 bg-ita-purple mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        <div className="relative group">
          <div className="relative bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] h-full flex flex-col text-slate-900 border border-slate-100 transition-transform duration-500 hover:-translate-y-2">
            <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tighter uppercase flex items-center gap-5">
              <span className="w-12 h-1.5 bg-ita-purple rounded-full"></span>
              {t.visionMission.vision.title}
            </h3>
            <div className="space-y-8 flex-grow">
              {t.visionMission.vision.items.map((item, idx) => (
                <div key={idx} className="flex gap-6 group/item">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-ita-purple/5 flex items-center justify-center text-ita-purple group-hover/item:bg-ita-purple group-hover/item:text-white transition-all duration-300 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-semibold text-lg leading-snug pt-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-slate-50 opacity-40">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Future Perspective</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="relative bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] h-full flex flex-col text-slate-900 border border-slate-100 transition-transform duration-500 hover:-translate-y-2">
            <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tighter uppercase flex items-center gap-5">
              <span className="w-12 h-1.5 bg-ita-orange rounded-full"></span>
              {t.visionMission.mission.title}
            </h3>
            <div className="space-y-8 flex-grow">
              {t.visionMission.mission.items.map((item, idx) => (
                <div key={idx} className="flex gap-6 group/item">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-ita-orange/5 flex items-center justify-center text-ita-orange group-hover/item:bg-ita-orange group-hover/item:text-white transition-all duration-300 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-slate-600 font-medium text-base leading-relaxed pt-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-slate-50 opacity-40 text-right">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Strategic Action</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;