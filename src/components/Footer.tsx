import { Heart, Sparkles, MessageSquare, Instagram } from 'lucide-react';

interface FooterProps {
  onCtaClick: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function Footer({ onCtaClick, onNavigateToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const officialPhone = '5511998640394';
  const whatsappUrl = `https://wa.me/${officialPhone}?text=${encodeURIComponent('Olá, Pérola Doces! 🍰\n\nVim pelo site e gostaria de fazer um *pedido de bolo ou doces*.\n\n✨ Poderiam me ajudar a escolher os sabores e agendar a data? 💕')}`;

  return (
    <footer className="relative bg-cream-100 border-t border-beige-300 overflow-hidden" id="main-footer">
      
      {/* Decorative Gold Rings */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      
      {/* SECTION 10 — CTA Final ("Seu momento merece um doce à altura.") */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10 relative">
        <div className="max-w-3xl mx-auto">
          
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold-500 mb-3 block flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENCOMENDE COM ANTECEDÊNCIA</span>
          </span>

          <h2 className="font-display text-5xl sm:text-6xl font-bold text-cocoa-900 leading-tight mb-6">
            Seu momento merece um doce à altura.
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-cocoa-700 leading-relaxed max-w-xl mx-auto mb-10">
            Fale com a gente pelo WhatsApp para escolher sabores, definir tamanhos personalizados e agendar a entrega segura do seu bolo ou doces finos.
          </p>

          {/* Primary Action Button (Verb CTA) */}
          <button
            onClick={onCtaClick}
            className="px-10 py-4.5 bg-rose-500 hover:bg-rose-500/90 text-white rounded-full font-bold tracking-widest text-sm hover:scale-103 active:scale-97 transition-all duration-300 shadow-[0_8px_30px_rgba(201,130,135,0.25)] cursor-pointer flex items-center justify-center gap-2.5 mx-auto group"
            id="footer-primary-cta"
          >
            <svg
              className="w-5 h-5 fill-current transition-transform duration-300 group-hover:rotate-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.18-.48-.3z"/>
            </svg>
            <span>FAZER MEU PEDIDO</span>
          </button>

        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-beige-300/60 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Column (takes 4 cols) */}
          <div className="md:col-span-4 text-left flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Pérola Doces Logo"
                className="w-12 h-12 rounded-full border-2 border-rose-300 shadow-sm object-cover"
              />
              <div>
                <h3 className="font-display text-xl font-bold text-cocoa-900 leading-none">Pérola Doces</h3>
                <span className="text-[10px] text-gold-500 font-bold uppercase tracking-wider">Confeitaria e Bolos</span>
              </div>
            </div>
            <p className="text-xs text-cocoa-700 leading-relaxed font-sans mt-1">
              Confeitaria artesanal sofisticada baseada em São Paulo, transformando ingredientes nobres em momentos inesquecíveis feitos com amor.
            </p>
            <p className="text-[10px] text-rose-500 font-bold uppercase tracking-widest mt-0.5">
              "Feito com Amor • Qualidade e sabor que encantam"
            </p>
          </div>

          {/* Quick links directory (takes 3 cols) */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cocoa-900 mb-4 block">Navegação</h4>
            <div className="flex flex-col gap-2">
              {['inicio', 'categorias', 'cardapio', 'bastidores', 'ocasioes', 'depoimentos'].map((sec) => (
                <button
                  key={sec}
                  onClick={() => onNavigateToSection(sec)}
                  className="text-xs text-cocoa-700 hover:text-rose-500 text-left capitalize transition-colors cursor-pointer"
                >
                  {sec === 'inicio' ? 'Início' : sec}
                </button>
              ))}
            </div>
          </div>

          {/* Categories directory (takes 3 cols) */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cocoa-900 mb-4 block">Cardápio</h4>
            <div className="flex flex-col gap-2 text-xs text-cocoa-700">
              <button onClick={() => onNavigateToSection('categorias')} className="text-left hover:text-rose-500 cursor-pointer">Bolos de Festa</button>
              <button onClick={() => onNavigateToSection('categorias')} className="text-left hover:text-rose-500 cursor-pointer">Docinhos Finos</button>
              <button onClick={() => onNavigateToSection('categorias')} className="text-left hover:text-rose-500 cursor-pointer">Bolos Personalizados</button>
              <button onClick={() => onNavigateToSection('categorias')} className="text-left hover:text-rose-500 cursor-pointer">Combos Festivos</button>
            </div>
          </div>

          {/* Contact directory (takes 2 cols) */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cocoa-900 mb-4 block">Atendimento</h4>
            <div className="flex flex-col gap-2 text-xs text-cocoa-700 font-sans">
              <span className="font-bold text-cocoa-900">(11) 99864-0394</span>
              <span>Rua Soledade, 33</span>
              <span>Jardim da Luz — SP</span>
              <a
                href="https://www.instagram.com/perola__doces/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-rose-500 hover:text-rose-600 font-medium transition-colors pt-1"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@perola__doces</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & credits bar */}
        <div className="mt-12 pt-8 border-t border-beige-300/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-cocoa-700 font-sans">
          <p>© {currentYear} Pérola Doces. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com carinho e</span>
            <Heart className="w-3 h-3 text-rose-500 fill-current" />
            <span>para momentos especiais.</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
