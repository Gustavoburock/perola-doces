import React, { useEffect, useRef, useState } from 'react';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default function InstagramGrid() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Load and process Instagram Embeds
  useEffect(() => {
    const loadInstagramEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        return;
      }

      const existingScript = document.getElementById('instagram-embed-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'instagram-embed-script';
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        script.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        };
        document.body.appendChild(script);
      } else {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      }
    };

    loadInstagramEmbed();

    const timer = setTimeout(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Update scroll navigation states
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 340;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-cream-100 border-t border-beige-300 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <a
              href="https://www.instagram.com/perola__doces/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-widest text-gold-500 hover:text-rose-500 transition-colors mb-2.5 group"
            >
              <Instagram className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
              <span>@perola__doces</span>
            </a>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-900 mb-3">
              Direto do nosso Instagram.
            </h2>
            <p className="font-sans text-sm sm:text-base text-cocoa-700 leading-relaxed">
              Deslize para navegar pelas publicações, vídeos e bastidores reais da Pérola Doces!
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2.5 self-start md:self-end shrink-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Voltar postagens"
              className="w-11 h-11 rounded-full border border-beige-300 bg-white flex items-center justify-center text-cocoa-900 shadow-2xs hover:bg-cream-50 hover:border-rose-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Avançar postagens"
              className="w-11 h-11 rounded-full border border-beige-300 bg-white flex items-center justify-center text-cocoa-900 shadow-2xs hover:bg-cream-50 hover:border-rose-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swipeable Instagram Carousel Container */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div
            ref={scrollContainerRef}
            id="instagram-grid"
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none pb-6 pt-2 snap-x snap-mandatory scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {INSTAGRAM_POSTS.map((post) => (
              <div
                key={post.id}
                className="w-[290px] sm:w-[330px] md:w-[350px] shrink-0 snap-center bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-beige-300/80 shadow-[0_4px_20px_rgba(74,41,40,0.05)] hover:shadow-[0_8px_30px_rgba(74,41,40,0.1)] transition-all duration-300 p-2 sm:p-3 flex flex-col justify-start"
              >
                <blockquote
                  className="instagram-media w-full"
                  data-instgrm-permalink={post.postUrl}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '16px',
                    margin: '0 auto',
                    maxWidth: '100%',
                    minWidth: '260px',
                    padding: 0,
                    width: '100%',
                    boxShadow: 'none'
                  }}
                >
                  <div style={{ padding: '12px' }}>
                    <a
                      href={post.postUrl}
                      style={{
                        background: '#FFFFFF',
                        lineHeight: 0,
                        padding: '0 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%'
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p style={{ margin: '8px 0 0 0', padding: '0 4px', fontSize: '13px', color: '#4A2928', fontWeight: 600 }}>
                        {post.title ? `🍰 ${post.title}` : 'Ver postagem no Instagram'}
                      </p>
                    </a>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Call To Action */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/perola__doces/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-beige-300 hover:border-rose-400 text-xs font-bold text-cocoa-900 hover:text-rose-500 uppercase tracking-widest cursor-pointer shadow-2xs hover:shadow-xs transition-all duration-300 group"
          >
            <Instagram className="w-4 h-4 text-rose-500" />
            <span>Seguir perfil no instagram</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
