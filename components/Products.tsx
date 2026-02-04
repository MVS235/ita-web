import React from 'react';
import { TranslationContent } from '../types';
import Logo from './Logo';

interface ProductsProps {
  t: TranslationContent;
}

const Products: React.FC<ProductsProps> = ({ t }) => {
  const imageUrl = "https://res.cloudinary.com/dsrlyil1l/image/upload/v1770011895/Product_2_d5yhno.jpg";

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5 order-2 md:order-1">
           <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
             <img 
               src={imageUrl} 
               alt="BOPP Tape Products" 
               className="w-full h-auto rounded-2xl object-cover"
             />
           </div>
           
           <div className="mt-12 hidden md:block">
              <div className="w-full h-px bg-slate-700 mb-8"></div>
              <p className="text-slate-400 italic text-sm leading-relaxed max-w-xs">
                {t.products.footer}
              </p>
           </div>
        </div>

        <div className="md:col-span-7 py-4 order-1 md:order-2">
          <h2 className="text-3xl font-extrabold text-white mb-10 tracking-tight flex items-center gap-4">
            <span className="w-8 h-1 bg-ita-orange"></span>
            {t.products.title}
          </h2>

          <div className="space-y-12">
            <div>
              <p className="text-ita-orange font-bold mb-4 text-lg uppercase tracking-wider">{t.products.label}</p>
              <ul className="space-y-2">
                {t.products.items.map((item, idx) => (
                  <li key={idx} className="text-slate-200 text-xl font-medium flex items-center gap-3">
                    <span className="text-ita-purple font-bold">-</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-slate-400 mb-2 leading-relaxed font-medium">{t.products.specs.width.label}</p>
                <p className="text-white text-lg font-bold">{t.products.specs.width.value}</p>
              </div>
              <div>
                <p className="text-slate-400 mb-2 leading-relaxed font-medium">{t.products.specs.thickness.label}</p>
                <p className="text-white text-lg font-bold">{t.products.specs.thickness.value}</p>
              </div>
              <div>
                <p className="text-slate-400 mb-2 leading-relaxed font-medium">{t.products.specs.length.label}</p>
                <p className="text-white text-lg font-bold underline decoration-ita-purple decoration-4 underline-offset-8">
                  {t.products.specs.length.value}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 opacity-10 select-none pointer-events-none text-right hidden md:block">
             <div className="inline-block transform scale-[3] origin-right grayscale brightness-200">
                <Logo className="w-24 h-24" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;