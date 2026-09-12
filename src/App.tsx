import { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import OccasionsSection from './components/OccasionsSection';
import Bastidores from './components/Bastidores';
import Testimonials from './components/Testimonials';
import InstagramGrid from './components/InstagramGrid';
import LocationBlock from './components/LocationBlock';
import Footer from './components/Footer';
import { Product, CartItem, SizeOption } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 1. Load cart from Local Storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('perola_doces_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Erro ao carregar a sacola de compras:', e);
      }
    }
  }, []);

  // 2. Save cart to Local Storage on update
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('perola_doces_cart', JSON.stringify(newCart));
  };

  // 3. Scroll top tracker and section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Toggle scroll to top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Highlight active section
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

  // 4. Cart actions
  const handleAddToCart = (product: Product, quantity: number, selectedSize: SizeOption | null, customText?: string) => {
    // Generate unique ID for cart line item to distinguish same product with different sizes or texts
    const sizeHash = selectedSize ? selectedSize.sizeId : 'default';
    const textHash = customText ? encodeURIComponent(customText) : 'none';
    const lineId = `${product.id}-${sizeHash}-${textHash}`;

    const existingIndex = cart.findIndex((item) => item.id === lineId);
    let newCart = [...cart];

    if (existingIndex > -1) {
      newCart[existingIndex].quantity += quantity;
    } else {
      newCart.push({
        id: lineId,
        product,
        quantity,
        selectedSize,
        customText,
      });
    }

    saveCart(newCart);
  };

  const handleUpdateQuantity = (lineId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(lineId);
      return;
    }
    const newCart = cart.map((item) => (item.id === lineId ? { ...item, quantity: newQuantity } : item));
    saveCart(newCart);
  };

  const handleRemoveItem = (lineId: string) => {
    const newCart = cart.filter((item) => item.id !== lineId);
    saveCart(newCart);
  };

  const handleClearCart = () => {
    saveCart([]);
  };

  // 5. Navigation actions
  const handleNavigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  return (
    <div className="min-h-screen bg-cream-50 font-sans text-cocoa-900 selection:bg-rose-300 selection:text-cocoa-900 relative">
      
      {/* 1. Sticky Navigation Header */}
      <Header
        cart={cart}
        onOpenCart={handleOpenCart}
        onNavigateToSection={handleNavigateToSection}
        activeSection={activeSection}
      />

      {/* 2. Main Sections */}
      <main className="relative">
        
        {/* Section 01: Hero Header */}
        <Hero
          onCtaClick={handleOpenCart}
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
        onCtaClick={handleOpenCart}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* 4. Overlay Modals and Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 5. Persistent Floating Elements */}
      
      {/* WhatsApp Quick Button */}
      <a
        href="https://wa.me/5511998640394?text=Olá,%20Pérola%20Doces!%20Gostaria%20de%20tirar%20algumas%20dúvidas%20sobre%20encomendas."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-30 p-4 bg-rose-500 hover:bg-rose-500/90 hover:scale-105 active:scale-95 text-white rounded-full shadow-[0_8px_30px_rgba(201,130,135,0.4)] transition-all duration-300 group flex items-center gap-2 cursor-pointer"
        aria-label="Falar pelo WhatsApp"
        id="floating-whatsapp"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold tracking-wider uppercase">
          Falar pelo WhatsApp
        </span>
        <MessageSquare className="w-5 h-5 fill-current text-white" />
      </a>

      {/* Scroll Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-30 p-3 bg-cream-100 border border-beige-300 text-cocoa-900 rounded-full shadow-md hover:text-rose-500 hover:border-rose-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          aria-label="Ir para o topo"
          id="scroll-to-top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
