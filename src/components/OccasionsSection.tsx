import React, { useState, useRef, useEffect } from 'react';
import { Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OCCASIONS } from '../data';
import { Product } from '../types';

interface OccasionsSectionProps {
  onSelectProduct?: (product: Product) => void;
}

export default function OccasionsSection({ onSelectProduct }: OccasionsSectionProps) {
  const [activeOccasionIndex, setActiveOccasionIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next (folha vira pra esquerda), -1 = prev (folha volta da esquerda)
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const tabsScrollRef = useRef<HTMLDivElement>(null);

  const activeOccasion = OCCASIONS[activeOccasionIndex] || OCCASIONS[0];

  const handleSelectIndex = (index: number) => {
    if (index === activeOccasionIndex) return;
    setDirection(index > activeOccasionIndex ? 1 : -1);
    setActiveOccasionIndex(index);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveOccasionIndex((prev) => (prev + 1) % OCCASIONS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveOccasionIndex((prev) => (prev - 1 + OCCASIONS.length) % OCCASIONS.length);
  };

  // Auto-play interval: rotates to next occasion every 4.5 seconds (pauses on user hover/touch)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveOccasionIndex((prev) => (prev + 1) % OCCASIONS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Scroll active tab into view horizontally on mobile
  useEffect(() => {
    const container = tabsScrollRef.current;
    if (container) {
      const activeBtn = container.children[activeOccasionIndex] as HTMLElement;
      if (activeBtn) {
        const left = activeBtn.offsetLeft - container.offsetWidth / 2 + activeBtn.offsetWidth / 2;
        container.scrollTo({ left, behavior: 'smooth' });
      }
    }
  }, [activeOccasionIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) {
      setTimeout(() => setIsPaused(false), 4000);
      return;
    }
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      handleNext(); // swipe left -> next
    } else if (distance < -minSwipeDistance) {
      handlePrev(); // swipe right -> prev
    }

    // Resume auto-play after 4 seconds of inactivity
    setTimeout(() => setIsPaused(false), 4000);
  };

  const whatsappOccasionUrl = `https://wa.me/5511998640394?text=${encodeURIComponent(
    `Olá, Pérola Doces! 🍰\n\nVim pelo site e tenho interesse em uma encomenda personalizada para *${activeOccasion.name}*.\n\n🎈 Poderiam me enviar opções e orçamentos especiais? 💕`
  )}`;

  return (
    <section id="ocasioes" className="py-20 sm:py-24 bg-cream-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold-500 mb-2.5 block">
            Sob Medida Para Você
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-cocoa-900 mb-4">
            Tem um momento especial chegando?
          </h2>
          <p className="font-sans text-sm sm:text-base text-cocoa-700 max-w-2xl mx-auto leading-relaxed">
            Seja um brinde corporativo, casamentos memoráveis ou o aconchego de uma comemoração em família, criamos o doce perfeito para a sua ocasião.
          </p>
        </div>

        {/* Occasions Horizontal Scrollable Bar */}
        <div className="relative max-w-4xl mx-auto mb-6 sm:mb-10">
          
          <div
            ref={tabsScrollRef}
            className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-2 px-2 scroll-smooth justify-start sm:justify-center"
            id="occasions-selector-tabs"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {OCCASIONS.map((occ, idx) => {
              const isActive = activeOccasionIndex === idx;
              return (
                <button
                  key={occ.id}
                  onClick={() => {
                    handleSelectIndex(idx);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 5000);
                  }}
                  className={`px-5 py-3 rounded-full text-xs font-bold tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shrink-0 focus:outline-none select-none ${
                    isActive
                      ? 'bg-rose-500 text-white shadow-md scale-102 font-semibold'
                      : 'bg-white text-cocoa-700 border border-beige-300 hover:border-rose-300 hover:text-rose-500'
                  }`}
                >
                  <Gift className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-rose-400'}`} />
                  <span className="whitespace-nowrap">{occ.name}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Selected Occasion Showcase Block with 3D Page Turn / Flip Transition */}
        <div
          className="bg-white rounded-3xl sm:rounded-[32px] border border-beige-300/80 overflow-hidden shadow-[0_8px_30px_rgba(74,41,40,0.06)] p-6 sm:p-10 lg:p-12 transition-all duration-300 relative max-w-5xl mx-auto select-none"
          id="occasion-showcase"
          style={{ perspective: '1200px' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Animated 3D Page Flip Transition */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeOccasion.id}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  rotateY: dir > 0 ? 55 : -55,
                  x: dir > 0 ? 70 : -70,
                  opacity: 0,
                  scale: 0.94,
                  transformOrigin: dir > 0 ? 'right center' : 'left center',
                  filter: 'brightness(0.92)'
                }),
                center: {
                  rotateY: 0,
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  filter: 'brightness(1)',
                  transition: {
                    duration: 0.55,
                    ease: [0.25, 1, 0.5, 1]
                  }
                },
                exit: (dir: number) => ({
                  rotateY: dir > 0 ? -55 : 55,
                  x: dir > 0 ? -70 : 70,
                  opacity: 0,
                  scale: 0.94,
                  transformOrigin: dir > 0 ? 'left center' : 'right center',
                  filter: 'brightness(0.92)',
                  transition: {
                    duration: 0.45,
                    ease: [0.5, 0, 0.75, 0]
                  }
                })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center will-change-transform"
            >
              
              {/* Image Cover */}
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-16/10 border border-beige-300 shadow-xs bg-cream-50 group">
                <img
                  src={activeOccasion.image}
                  alt={activeOccasion.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/40 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-beige-300 shadow-2xs">
                  <span className="text-xs font-sans font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1.5">
                    <Gift className="w-3.5 h-3.5" />
                    {activeOccasion.name}
                  </span>
                </div>
              </div>

              {/* Editorial copy and direct CTA */}
              <div className="lg:col-span-6 flex flex-col justify-center text-left">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-gold-500 mb-2">
                  PERSONALIZADO PARA A SUA FESTA
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-cocoa-900 mb-3 leading-tight">
                  {activeOccasion.tagline}
                </h3>
                <p className="font-sans text-sm sm:text-base text-cocoa-700 leading-relaxed mb-6">
                  {activeOccasion.description}
                </p>

                {/* Action Button matching primary CTA color with official WhatsApp logo */}
                <div className="pt-2">
                  <a
                    href={whatsappOccasionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-rose-500 hover:bg-rose-500/90 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2.5 shadow-[0_8px_30px_rgba(201,130,135,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Encomendar para {activeOccasion.name}</span>
                  </a>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator at the bottom */}
          <div className="flex items-center justify-center gap-1.5 mt-8 pt-4 border-t border-beige-300/40">
            {OCCASIONS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  handleSelectIndex(idx);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 5000);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeOccasionIndex === idx ? 'w-6 bg-rose-500' : 'w-1.5 bg-beige-300 hover:bg-rose-300'
                }`}
                aria-label={`Ir para ocasião ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
