import React, { useState, useRef, useEffect } from 'react';
import { Language, TranslationContent, LocationDetail } from '../types';
import Logo from './Logo';

interface ContactProps {
  t: TranslationContent;
  lang: Language;
}

const CopyableItem: React.FC<{ text: string; children: React.ReactNode; className?: string }> = ({ text, children, className }) => {
  const [showToast, setShowToast] = useState(false);
  const timerRef = useRef<number | null>(null);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  const handleClick = () => { if (!isTouchDevice.current) copyToClipboard(); };
  const handleTouchStart = () => {
    timerRef.current = window.setTimeout(() => {
      copyToClipboard();
      timerRef.current = null;
    }, 700);
  };
  const handleTouchEnd = () => { if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; } };

  return (
    <div 
      className={`relative group cursor-pointer select-none active:opacity-70 transition-opacity ${className}`}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      title="Copy to clipboard"
    >
      {children}
      {showToast && (
        <div className="absolute -top-8 left-0 bg-slate-900 text-white text-[10px] font-black px-2 py-1 rounded shadow-lg animate-in fade-in zoom-in slide-in-from-bottom-2 duration-300 z-50">
          COPIED!
        </div>
      )}
    </div>
  );
};

const LocationSection: React.FC<{ detail: LocationDetail; isActive: boolean }> = ({ detail, isActive }) => (
  <div className={`mb-8 p-6 rounded-2xl transition-all duration-500 border-l-4 ${isActive ? 'bg-ita-purple/5 border-ita-purple shadow-sm' : 'bg-transparent border-transparent'}`}>
    <h3 className="text-xl font-extrabold text-slate-900 pb-2 mb-6 tracking-tight uppercase flex items-center gap-3">
      <span className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${isActive ? 'bg-ita-purple animate-pulse' : 'bg-slate-300'}`}></span>
      {detail.title}
    </h3>
    <div className="space-y-5">
      <div className="flex items-start gap-4">
        <svg className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors duration-500 ${isActive ? 'text-ita-purple' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p className="text-slate-600 font-medium leading-relaxed">{detail.address}</p>
      </div>

      {detail.phone && (
        <CopyableItem text={detail.phone} className="flex items-start gap-4">
          <svg className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          <p className="text-slate-600 font-bold hover:text-ita-purple transition-colors">{detail.phone}</p>
        </CopyableItem>
      )}

      {detail.fax && (
        <CopyableItem text={detail.fax} className="flex items-start gap-4">
          <svg className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 18h7M14 14h6M15 10h5M8 20V10a2 2 0 012-2h9a2 2 0 012 2v10M2 12c0-1.1.9-2 2-2h4v8c0 1.1-.9 2-2 2H4a2 2 0 01-2-2V12z" />
          </svg>
          <p className="text-slate-600 font-bold hover:text-ita-purple transition-colors">{detail.fax}</p>
        </CopyableItem>
      )}

      <div className="space-y-3">
        {detail.wa.map((num, i) => (
          <CopyableItem key={i} text={num} className="flex items-start gap-4">
            <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <p className="text-slate-600 font-bold hover:text-green-600 transition-colors">{num}</p>
          </CopyableItem>
        ))}
      </div>

      <div className="space-y-3">
        {detail.email.map((mail, i) => (
          <CopyableItem key={i} text={mail} className="flex items-start gap-4">
            <svg className="w-5 h-5 text-ita-coral mt-1 flex-shrink-0 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <p className="text-slate-600 font-medium hover:text-ita-purple transition-colors">{mail}</p>
          </CopyableItem>
        ))}
      </div>
    </div>
  </div>
);

const Contact: React.FC<ContactProps> = ({ t }) => {
  const [selectedLocKey, setSelectedLocKey] = useState<'headquarter' | 'branch'>('headquarter');
  const activeLocation = t.contact.locations[selectedLocKey];
  const query = `PT Indah Tjandra Abadi ${activeLocation.address}`;
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(query)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-6 mb-12">
            <Logo className="w-24 h-24" />
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tighter uppercase leading-tight">PT. INDAH TJANDRA ABADI</h2>
              <div className="flex items-center gap-3 mt-1">
                <span className="bg-ita-purple text-white text-[9px] font-black px-2 py-0.5 rounded tracking-widest">EST. 2017</span>
                <span className="text-slate-400 font-bold text-xs tracking-widest">MANUFACTURING EXCELLENCE</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <LocationSection detail={t.contact.locations.headquarter} isActive={selectedLocKey === 'headquarter'} />
            <LocationSection detail={t.contact.locations.branch} isActive={selectedLocKey === 'branch'} />
          </div>
        </div>
        <div className="lg:col-span-5 relative flex flex-col h-full">
          <div className="mb-6">
            <label htmlFor="location-select" className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 ml-1">Switch Map View</label>
            <div className="relative group">
              <select 
                id="location-select" value={selectedLocKey}
                onChange={(e) => setSelectedLocKey(e.target.value as 'headquarter' | 'branch')}
                className="w-full appearance-none bg-white border-2 border-slate-200 text-slate-800 font-black py-4 px-6 rounded-2xl focus:outline-none focus:border-ita-purple transition-all cursor-pointer shadow-sm hover:shadow-md pr-12"
              >
                <option value="headquarter">{t.contact.locations.headquarter.title}</option>
                <option value="branch">{t.contact.locations.branch.title}</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-slate-400 group-focus-within:text-ita-purple transition-colors">
                <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="relative flex-grow rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[500px] border-8 border-white bg-slate-100 group">
             <div className="absolute top-4 left-4 right-4 z-10">
                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-slate-100 flex justify-between items-center animate-in slide-in-from-top-2 duration-500">
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 bg-ita-orange rounded-full animate-pulse"></span>
                     <span className="text-[10px] font-black text-slate-900 uppercase tracking-wider">Exact Location Pin</span>
                   </div>
                   <a href={externalMapUrl} target="_blank" rel="noopener noreferrer" className="text-[9px] font-black text-ita-purple hover:text-ita-dark uppercase tracking-wider flex items-center gap-1">
                     Directions <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                   </a>
                </div>
             </div>
             <iframe src={mapEmbedUrl} className="w-full h-full grayscale-[0.1] contrast-[1.05] saturate-[0.9]" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Map showing ${query}`}></iframe>
             <div className="absolute bottom-6 left-6 z-10">
                <div className="bg-slate-900/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white/10">
                   <Logo className="w-8 h-8 brightness-0 invert" />
                   <div><p className="text-[10px] font-black text-white leading-none tracking-wider">PT ITA</p><p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Verified Factory Site</p></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;