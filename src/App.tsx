import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import ProductDetailModal from './components/ProductDetailModal';
import OccasionsSection from './components/OccasionsSection';
import Bastidores from './components/Bastidores';
import Testimonials from './components/Testimonials';
import InstagramGrid from './components/InstagramGrid';
import LocationBlock from './components/LocationBlock';
import Footer from './components/Footer';
import { Product } from './types';

const WHATSAPP_ORDER_URL = 'https://wa.me/5511998640394?text=Ol%C3%A1%2C%20P%C3%A9rola%20Doces!%20Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido.';
const WHATSAPP_HELP_URL = 'https://wa.me/5511998640394?text=Ol%C3%A1%2C%20P%C3%A9rola%20Doces!%20Vim%20pelo%20site%20e%20queria%20tirar%20umas%20d%C3%BAvidas%20sobre%20os%20bolos%20e%20encomendas.';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeSection, setActiveSection] = useState('inicio');

  // Section highlighting on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'categorias', 'cardapio', 'bastidores', 'ocasioes', 'depoimentos', 'contato'];
      const scrollPosition = window.scrollY + 120; // offset for sticky header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation action
  const handleNavigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleOpenWhatsApp = () => {
    window.open(WHATSAPP_ORDER_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-cream-50 font-sans text-cocoa-900 selection:bg-rose-300 selection:text-cocoa-900 relative">
      
      {/* 1. Sticky Navigation Header */}
      <Header
        onNavigateToSection={handleNavigateToSection}
        activeSection={activeSection}
      />

      {/* 2. Main Sections */}
      <main className="relative">
        
        {/* Section 01: Hero Header */}
        <Hero
          onCtaClick={handleOpenWhatsApp}
          onExploreClick={() => handleNavigateToSection('cardapio')}
        />

        {/* Section 02 & 03 & 04: Categories, Dynamic Menu & Product Hero */}
        <ProductCatalog onSelectProduct={setSelectedProduct} />

        {/* Section 05: Bastidores */}
        <Bastidores />

        {/* Section 06: Ocasiões */}
        <OccasionsSection onSelectProduct={setSelectedProduct} />

        {/* Section 07: Depoimentos */}
        <Testimonials />

        {/* Section 08: Instagram Grid */}
        <InstagramGrid />

        {/* Section 09: Localização */}
        <LocationBlock />

      </main>

      {/* 3. Footer with Section 10 */}
      <Footer
        onCtaClick={handleOpenWhatsApp}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* 4. Overlay Modal for Product WhatsApp Inquiry */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* 5. Persistent Floating Elements */}
      
      {/* WhatsApp Quick Button with clean outer speech bubble tag */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-3">
        {/* Subtle Outer Speech Bubble */}
        <div className="hidden sm:flex items-center bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-beige-300 shadow-[0_4px_16px_rgba(74,41,40,0.08)] animate-fade-in relative">
          <span className="text-xs font-sans font-bold text-cocoa-900 tracking-tight whitespace-nowrap">
            Precisa de ajuda?
          </span>
          {/* Small pointer tail pointing towards the button */}
          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-t border-r border-beige-300" />
        </div>

        {/* Clean Circular WhatsApp Action Icon */}
        <a
          href={WHATSAPP_HELP_URL}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] hover:scale-108 active:scale-95 text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all duration-300 group cursor-pointer relative"
          aria-label="Precisa de ajuda? Fale pelo WhatsApp"
          id="floating-whatsapp"
        >
          {/* Ping pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-60" />
          
          {/* Official WhatsApp Vector Logo */}
          <svg
            className="w-7 h-7 fill-current relative z-10 transition-transform duration-300 group-hover:rotate-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.18-.48-.3z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
