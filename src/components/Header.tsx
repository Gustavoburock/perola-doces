import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Gift, Sparkles, Heart } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onNavigateToSection: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ cart, onOpenCart, onNavigateToSection, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const menuItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Categorias', id: 'categorias' },
    { label: 'Cardápio', id: 'cardapio' },
    { label: 'Bastidores', id: 'bastidores' },
    { label: 'Ocasiões', id: 'ocasioes' },
    { label: 'Depoimentos', id: 'depoimentos' },
    { label: 'Contato', id: 'contato' },
  ];

  const handleItemClick = (id: string) => {
    onNavigateToSection(id);
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_4px_20px_rgba(74,41,40,0.06)] py-3 border-b border-beige-300'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <button
            onClick={() => handleItemClick('inicio')}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            id="logo-button"
          >
            <div className="relative w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center border border-rose-300 transition-transform duration-300 group-hover:scale-105">
              <span className="text-rose-500 font-display text-xl font-bold">P</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold-500 border border-white animate-pulse" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold tracking-wide text-cocoa-900 leading-none">
                Pérola Doces
              </h1>
              <p className="text-[10px] tracking-widest text-gold-500 font-medium uppercase mt-0.5">
                Confeitaria Fina
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-rose-500' : 'text-cocoa-700 hover:text-rose-500'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-rose-500" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions Block */}
          <div className="flex items-center gap-4" id="header-actions">
            {/* Elegant Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-cream-100 border border-beige-300 text-cocoa-900 hover:text-rose-500 hover:border-rose-300 transition-all duration-300 group cursor-pointer focus:outline-none"
              id="cart-trigger"
              aria-label="Ver sacola de compras"
            >
              <ShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white font-sans text-xs font-bold min-w-[20px] h-5 px-1.5 rounded-full flex items-center justify-center border-2 border-cream-50 animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full bg-cream-100 border border-beige-300 text-cocoa-900 md:hidden hover:border-rose-300 transition-all duration-200 cursor-pointer focus:outline-none"
              id="mobile-menu-toggle"
              aria-label="Abrir menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-cream-50/98 backdrop-blur-lg z-30 flex flex-col justify-between py-8 px-6 border-t border-beige-300 shadow-xl transition-all duration-300" id="mobile-drawer">
          <div className="flex flex-col gap-6">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-xl font-display font-medium text-left py-2 border-b border-beige-300/50 flex items-center justify-between cursor-pointer ${
                    isActive ? 'text-rose-500' : 'text-cocoa-900'
                  }`}
                >
                  <span>{item.label}</span>
                  <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-rose-500' : 'bg-transparent'}`} />
                </button>
              );
            })}
          </div>

          <div className="bg-cream-100 p-5 rounded-2xl border border-beige-300 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-rose-500 font-medium text-sm">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span>Sabor que transforma momentos</span>
            </div>
            <p className="text-xs text-cocoa-700 leading-relaxed">
              Agende seus bolos e doces pelo nosso WhatsApp com entrega rápida e segura em São Paulo.
            </p>
            <button
              onClick={() => handleItemClick('cardapio')}
              className="mt-2 w-full bg-rose-500 text-white py-3 rounded-full text-sm font-bold tracking-wider hover:bg-rose-500/90 active:scale-[0.98] transition-all duration-200 shadow-sm"
            >
              VER NOSSO CARDÁPIO
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
