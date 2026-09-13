import React, { useEffect } from 'react';
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
  useEffect(() => {
    // Load Instagram official embed script if not already present
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

    // Fallback timer to re-trigger process once DOM is ready
    const timer = setTimeout(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-cream-100 border-t border-beige-300 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18">
          <a
            href="https://www.instagram.com/perola__doces/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-widest text-gold-500 hover:text-rose-500 transition-colors mb-2.5 group"
          >
            <Instagram className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
            <span>@perola__doces</span>
          </a>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-cocoa-900 mb-4">
            Direto do nosso Instagram.
          </h2>
          <p className="font-sans text-sm sm:text-base text-cocoa-700 max-w-xl mx-auto leading-relaxed">
            Confira as postagens reais da Pérola Doces em tempo real. Curta, comente e acompanhe nosso dia a dia!
          </p>
        </div>

        {/* Official Instagram Embed Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start justify-center max-w-6xl mx-auto"
          id="instagram-grid"
        >
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="w-full flex justify-center bg-white rounded-2xl overflow-hidden border border-beige-300 shadow-xs hover:shadow-md transition-shadow p-2"
            >
              <blockquote
                className="instagram-media w-full"
                data-instgrm-permalink={post.postUrl}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '12px',
                  margin: '0 auto',
                  maxWidth: '540px',
                  minWidth: '280px',
                  padding: 0,
                  width: '100%',
                  boxShadow: 'none'
                }}
              >
                <div style={{ padding: '16px' }}>
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
                    <p style={{ margin: '8px 0 0 0', padding: '0 4px', fontSize: '13px', color: '#4A2928' }}>
                      {post.title ? `🍰 ${post.title}` : 'Ver postagem no Instagram'}
                    </p>
                  </a>
                </div>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Footer Call To Action */}
        <div className="text-center mt-14">
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
