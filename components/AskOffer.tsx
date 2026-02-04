import React, { useState } from 'react';
import { TranslationContent } from '../types';

interface AskOfferProps {
  t: TranslationContent;
}

const AskOffer: React.FC<AskOfferProps> = ({ t }) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) return;

    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const message = `Halo PT Indah Tjandra Abadi, saya ${name}. Saya ingin meminta penawaran harga spesial untuk produk BOPP Tape. Silakan hubungi saya kembali di nomor WhatsApp ini: ${whatsapp}. Terima kasih.`;
    const encodedMessage = encodeURIComponent(message);
    
    // Using the first HQ WhatsApp number as the target
    const targetPhone = "6281703181000";
    const waUrl = `https://wa.me/${targetPhone}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
      setIsSubmitting(false);
      setName('');
      setWhatsapp('');
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-gradient-to-br from-ita-purple to-ita-dark rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group">
        {/* Abstract Background Elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-ita-orange/10 transition-colors duration-700"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-ita-coral/10 rounded-full blur-3xl"></div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6 border border-white/20">
               <span className="w-2 h-2 bg-ita-orange rounded-full animate-pulse"></span>
               <span className="text-[10px] font-black text-white uppercase tracking-widest">Special Discounts Available</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
              {t.askOffer.title}
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
              {t.askOffer.subtitle}
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  Full Name / Company
                </label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.askOffer.namePlaceholder}
                  required
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-ita-purple transition-all text-slate-800 font-bold placeholder:text-slate-300 shadow-inner"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  WhatsApp Number
                </label>
                <input 
                  type="tel" 
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder={t.askOffer.waPlaceholder}
                  required
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-ita-purple transition-all text-slate-800 font-bold placeholder:text-slate-300 shadow-inner"
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-5 bg-ita-orange hover:bg-ita-orange/90 text-white font-black text-sm uppercase tracking-[0.15em] rounded-2xl transition-all shadow-lg hover:shadow-ita-orange/30 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.askOffer.successMessage}
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    {t.askOffer.buttonText}
                  </>
                )}
              </button>
            </form>
            <p className="text-center text-[9px] font-black text-slate-300 uppercase tracking-widest mt-6">
              Your details are protected by our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskOffer;