import React from 'react';
import { Language } from '../types';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onToggleLanguage: () => void;
  title: string;
  content: string;
  closeText: string;
}

const LegalModal: React.FC<LegalModalProps> = ({ 
  isOpen, onClose, lang, onToggleLanguage, title, content, closeText 
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in" onClick={onClose} />
      <div className="relative bg-white w-full max-w-2xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in slide-in-from-bottom-8">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h2 className="text-lg font-black text-slate-800 tracking-tight uppercase">{title}</h2>
          <div className="flex items-center gap-4">
            <div className="flex bg-slate-200 p-1 rounded-lg">
              <button onClick={() => lang !== Language.ID && onToggleLanguage()} className={`px-3 py-1 text-[10px] font-black rounded-md transition-all ${lang === Language.ID ? 'bg-white text-ita-purple shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>ID</button>
              <button onClick={() => lang !== Language.EN && onToggleLanguage()} className={`px-3 py-1 text-[10px] font-black rounded-md transition-all ${lang === Language.EN ? 'bg-white text-ita-purple shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>EN</button>
            </div>
            <button onClick={onClose} className="p-1.5 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-600"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M6 18L18 6M6 6l12 12" /></svg></button>
          </div>
        </div>
        <div className="p-8 overflow-y-auto text-slate-600 leading-relaxed space-y-5">
          {content.split('\n\n').map((paragraph, idx) => (<p key={idx} className="whitespace-pre-line text-sm md:text-base">{paragraph}</p>))}
        </div>
        <div className="px-6 py-4 border-t border-slate-100 flex justify-end bg-slate-50/30">
          <button onClick={onClose} className="px-8 py-2.5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-ita-purple transition-all hover:shadow-lg active:scale-95">{closeText}</button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;