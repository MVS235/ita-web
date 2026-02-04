import React, { useState, useEffect, useRef } from 'react';
import { TranslationContent } from '../types';

interface CustomersProps {
  t: TranslationContent;
}

const Customers: React.FC<CustomersProps> = ({ t }) => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = window.innerWidth < 640 ? 3 : 6;
      if (newItemsPerPage !== itemsPerPage) {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(0);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerPage]);

  const allClients = t.customers.clientNames[0] || [];
  const totalPages = Math.ceil(allClients.length / itemsPerPage);
  
  const startIndex = currentPage * itemsPerPage;
  const displayedClients = allClients.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) nextPage();
    else if (distance < -minSwipeDistance) prevPage();
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 flex flex-col pt-1">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-[0.9] lg:leading-[1]">
            {t.customers.title}
          </h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">
            {t.customers.subtitle}
          </p>
          <div className="mt-12 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={prevPage}
                disabled={isAnimating}
                className="w-14 h-14 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:text-ita-purple hover:border-ita-purple hover:shadow-lg transition-all active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={nextPage}
                disabled={isAnimating}
                className="w-14 h-14 bg-ita-purple rounded-full flex items-center justify-center text-white hover:bg-ita-dark hover:shadow-lg transition-all active:scale-90 shadow-ita-purple/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between max-w-[120px]">
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                  Page {currentPage + 1} / {totalPages}
                </span>
              </div>
              <div className="w-32 h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-ita-purple transition-all duration-500" style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 relative overflow-hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          <div key={`${currentPage}-${itemsPerPage}`} className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-500 ease-out ${direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}>
            {displayedClients.map((name, idx) => {
              const globalIdx = startIndex + idx + 1;
              return (
                <div key={`${name}-${itemsPerPage}`} className="group flex items-center p-6 bg-white border border-slate-100 border-l-[6px] border-l-ita-purple rounded-2xl transition-all duration-300 hover:bg-ita-purple hover:border-ita-purple hover:shadow-[0_20px_40px_-15px_rgba(138,75,154,0.3)] hover:-translate-y-1 h-[120px]">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-ita-purple uppercase tracking-widest mb-2 group-hover:text-white/70 transition-colors">
                      Partner {globalIdx < 10 ? `0${globalIdx}` : globalIdx}
                    </span>
                    <h3 className="text-base font-black text-slate-800 uppercase tracking-tight leading-snug group-hover:text-white transition-colors">
                      {name}
                    </h3>
                  </div>
                  <div className="ml-auto flex-shrink-0 opacity-10 group-hover:opacity-100 transition-opacity">
                    <svg className="w-8 h-8 text-ita-purple group-hover:text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 lg:hidden flex justify-between items-center">
             <div className="flex gap-4">
                <button onClick={prevPage} disabled={isAnimating} className="p-4 bg-white border border-slate-200 rounded-xl active:scale-95 disabled:opacity-50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextPage} disabled={isAnimating} className="p-4 bg-ita-purple text-white rounded-xl active:scale-95 disabled:opacity-50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                </button>
             </div>
             <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{currentPage + 1} of {totalPages}</span>
                <span className="text-[8px] font-bold text-slate-300 uppercase tracking-tighter mt-1">Swipe to slide</span>
             </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        .animate-slide-in-right { animation: slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default Customers;