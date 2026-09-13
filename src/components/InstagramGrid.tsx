import React, { useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';
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

  return (
    <section className="py-24 bg-cream-100 border-t border-beige-300 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
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
            Deslize para o lado para navegar pelas publicações, vídeos e bastidores reais da Pérola Doces!
          </p>
        </div>

        {/* Swipeable / Scrollable Instagram Carousel Container */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div
            ref={scrollContainerRef}
            id="instagram-grid"
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none pb-6 pt-2 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
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
            className="relative inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-rose-500 hover:bg-rose-500/90 active:scale-98 text-white text-xs font-bold uppercase tracking-wider shadow-[0_8px_30px_rgba(201,130,135,0.35)] hover:shadow-[0_12px_35px_rgba(201,130,135,0.45)] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
          >
            {/* Ping pulse ring matching the pulse effect from the floating action */}
            <span className="absolute -inset-1 rounded-full bg-rose-500/30 animate-ping pointer-events-none opacity-60" />

            <Instagram className="w-4 h-4 text-white relative z-10 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
            <span className="relative z-10">Seguir perfil no Instagram</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
