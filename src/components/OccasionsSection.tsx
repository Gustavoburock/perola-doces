import { useState } from 'react';
import { Gift, ChevronRight, Star } from 'lucide-react';
import { OCCASIONS, PRODUCTS } from '../data';
import { Product } from '../types';

interface OccasionsSectionProps {
  onSelectProduct: (product: Product) => void;
}

export default function OccasionsSection({ onSelectProduct }: OccasionsSectionProps) {
  const [activeOccasionId, setActiveOccasionId] = useState(OCCASIONS[0].id);

  const activeOccasion = OCCASIONS.find((o) => o.id === activeOccasionId) || OCCASIONS[0];

  const recommendedProducts = PRODUCTS.filter((p) =>
    activeOccasion.recommendedProductIds.includes(p.id)
  );

  return (
    <section id="ocasioes" className="py-24 bg-cream-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold-500 mb-2.5 block">
            Sugestões Sob Medida
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-cocoa-900 mb-4">
            Tem um momento especial chegando?
          </h2>
          <p className="font-sans text-sm sm:text-base text-cocoa-700 max-w-2xl mx-auto leading-relaxed">
            Seja um brinde corporativo, casamentos memoráveis ou o aconchego de uma comemoração em casa, nós sabemos exatamente o doce que combina.
          </p>
        </div>

        {/* Occasions Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" id="occasions-selector-tabs">
          {OCCASIONS.map((occ) => {
            const isActive = activeOccasionId === occ.id;
            return (
              <button
                key={occ.id}
                onClick={() => setActiveOccasionId(occ.id)}
                className={`px-6 py-3.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'bg-cream-100 text-cocoa-700 border border-beige-300 hover:border-rose-300'
                }`}
              >
                <Gift className="w-4 h-4" />
                <span>{occ.name.toUpperCase()}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Occasion Showcase Block */}
        <div className="bg-white rounded-[32px] border border-beige-300/70 overflow-hidden shadow-[0_8px_30px_rgba(74,41,40,0.06)] p-6 sm:p-10 lg:p-12" id="occasion-showcase">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Aspect Ratio 4:3 Image Cover */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-video lg:aspect-square border border-beige-300 shadow-sm bg-cream-50">
              <img
                src={activeOccasion.image}
                alt={activeOccasion.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/40 via-transparent to-transparent" />
            </div>

            {/* Editorial copy and recommendations */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-gold-500 mb-2">
                RECOMENDADO PARA VOCÊ
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-cocoa-900 mb-3">
                {activeOccasion.tagline}
              </h3>
              <p className="font-sans text-sm text-cocoa-700 leading-relaxed mb-8 max-w-xl">
                {activeOccasion.description}
              </p>

              <h4 className="text-[11px] font-sans font-bold uppercase tracking-wider text-cocoa-900 mb-4 block">
                Sugestões da nossa Chef Confeiteira:
              </h4>

              {/* Grid of Recommended Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendedProducts.map((p) => {
                  const displayPrice = p.sizes && p.sizes.length > 0 ? p.sizes[0].price : p.price;
                  return (
                    <div
                      key={p.id}
                      onClick={() => onSelectProduct(p)}
                      className="group p-4 rounded-2xl border border-beige-300 hover:border-rose-300 hover:bg-cream-100/40 bg-white transition-all duration-300 cursor-pointer flex items-center gap-3 shadow-2xs"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-12 h-12 rounded-xl object-cover border border-beige-300"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs font-bold text-cocoa-900 truncate group-hover:text-rose-500 transition-colors">
                          {p.name}
                        </h5>
                        <p className="text-[10px] text-cocoa-700 mt-0.5">
                          A partir de <span className="font-semibold text-cocoa-900">R$ {displayPrice.toFixed(2)}</span>
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-cocoa-700 group-hover:translate-x-1 transition-transform" />
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
