import { ArrowRight, Sparkles, Star } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onCtaClick, onExploreClick }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] md:min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50"
    >
      {/* Decorative Elegant Shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-rose-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl -z-10" />
      
      {/* Editorial layout: 12-column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block: occupies 7 columns on desktop */}
          <div className="lg:col-span-7 flex flex-col items-start text-left" id="hero-text-block">
            
            {/* Elegant Badge (No uppercase hero eyebrows - we make it a delicate badge) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 border border-rose-300/30 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="text-xs font-semibold text-cocoa-900 tracking-wider font-sans">
                Confeitaria Artesanal Premium
              </span>
            </div>

            {/* Display Typography Title */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-cocoa-900 leading-[1.05] tracking-tight mb-6">
              Qualidade e sabor que <span className="text-rose-500 italic font-normal">encantam</span>.
            </h1>

            {/* Subheading Body Text */}
            <p className="font-sans text-lg sm:text-xl text-cocoa-700 leading-relaxed max-w-2xl mb-8">
              Bolos e doces finos feitos com carinho artesanal para transformar seus aniversários, casamentos e momentos especiais em memórias inesquecíveis.
            </p>

            {/* Dynamic CTAs - strictly respecting verb rule and 2x horizontal padding */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto" id="hero-cta-group">
              <button
                onClick={onCtaClick}
                className="px-8 py-4 bg-rose-500 text-white rounded-full font-bold tracking-wider text-sm hover:bg-rose-500/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-[0_8px_30px_rgba(201,130,135,0.2)] cursor-pointer flex items-center justify-center gap-2 group"
                id="hero-primary-cta"
              >
                <span>FAZER MEU PEDIDO</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreClick}
                className="px-8 py-4 bg-transparent text-cocoa-900 border-2 border-cocoa-900 hover:bg-cocoa-900 hover:text-cream-50 rounded-full font-bold tracking-wider text-sm transition-all duration-300 cursor-pointer flex items-center justify-center"
                id="hero-secondary-cta"
              >
                VER CARDÁPIO ONLINE
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-beige-300/60 w-full lg:max-w-lg" id="hero-trust-indicators">
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-cocoa-900">100%</span>
                <span className="text-xs text-cocoa-700 font-medium font-sans">Ingredientes Naturais</span>
              </div>
              <div className="w-px h-8 bg-beige-300" />
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 text-gold-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-xs text-cocoa-700 font-medium font-sans mt-1">Avaliações 5 Estrelas</span>
              </div>
              <div className="w-px h-8 bg-beige-300" />
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-cocoa-900">Jardim da Luz</span>
                <span className="text-xs text-cocoa-700 font-medium font-sans">Retirada ou Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Product Image: occupies 5 columns on desktop */}
          <div className="lg:col-span-5 relative flex justify-center" id="hero-image-block">
            
            {/* Elegant Double border framing for photo (artistic overlap) */}
            <div className="relative w-full max-w-[400px] aspect-[4/5] z-10 group">
              
              {/* Outer decorative gold/beige frame */}
              <div className="absolute -inset-4 rounded-[24px] border border-gold-500/40 -rotate-3 transition-transform duration-500 group-hover:rotate-0" />
              
              {/* Image Container with shadow and rounded corners */}
              <div className="w-full h-full rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(74,41,40,0.12)] border-4 border-cream-50 bg-cream-100">
                <img
                  id="hero-chef-image"
                  src="/confeiteira.jpg"
                  alt="Confeiteira Pérola com bolo decorado artesanal - Pérola Doces"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Floating micro accent badge */}
              <div className="absolute bottom-6 -left-6 bg-cream-50/95 backdrop-blur-sm border border-beige-300 py-3 px-4 rounded-2xl shadow-[0_8px_30px_rgba(74,41,40,0.08)] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 text-sm">
                  ✨
                </div>
                <div>
                  <p className="text-[10px] text-cocoa-700 leading-none">Feito com Amor</p>
                  <p className="font-display font-bold text-cocoa-900 text-sm">Pérola Doces</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
