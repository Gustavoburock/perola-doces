import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data';

export default function InstagramGrid() {
  return (
    <section className="py-24 bg-cream-100 border-t border-beige-300 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
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
            Um pouquinho da Pérola todos os dias.
          </h2>
          <p className="font-sans text-sm sm:text-base text-cocoa-700 max-w-xl mx-auto leading-relaxed">
            Siga-nos nas redes para ver bastidores deliciosos, lançamentos exclusivos e dicas especiais diretamente da nossa confeitaria.
          </p>
        </div>

        {/* Instagram Post Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto" id="instagram-grid">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/perola__doces/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden border border-beige-300 shadow-2xs block cursor-pointer"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark Hover Mask overlay */}
              <div className="absolute inset-0 bg-cocoa-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider bg-rose-500 text-cream-50 self-start px-2 py-0.5 rounded-full">
                  Instagram
                </span>
                
                <p className="text-[11px] leading-relaxed line-clamp-3 text-cream-100 font-sans">
                  {post.caption}
                </p>

                <div className="flex items-center gap-4 text-xs font-semibold pt-2 border-t border-white/20">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-current text-rose-500" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="text-[10px] text-cream-100 font-normal ml-auto">
                    {post.date}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Subtle follow call-to-action */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/perola__doces/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-rose-500 hover:text-rose-700 uppercase tracking-widest cursor-pointer group"
          >
            <span>Seguir no Instagram (@perola__doces)</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
