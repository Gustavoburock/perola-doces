import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onNavigateToSection: (sectionId: string) => void;
  activeSection: string;
}

const WHATSAPP_URL = `https://wa.me/5511998640394?text=${encodeURIComponent('Olá, Pérola Doces! Vim pelo site e queria tirar algumas dúvidas sobre os bolos e encomendas.')}`;

export default function Header({ onNavigateToSection, activeSection }: HeaderProps) {
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

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
        isOpen || isScrolled
          ? 'bg-cream-50 shadow-[0_4px_20px_rgba(74,41,40,0.06)] py-3 border-b border-beige-300'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <button
            onClick={() => handleItemClick('inicio')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            id="logo-button"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-rose-300 shadow-sm transition-transform duration-300 group-hover:scale-105 bg-rose-100 flex-shrink-0">
              <img
                src="/logo.png"
                alt="Pérola Doces Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-display text-xl sm:text-2xl font-bold tracking-wide text-cocoa-900 leading-none">
                Pérola Doces
              </h1>
              <p className="text-[10px] tracking-widest text-gold-500 font-bold uppercase mt-1">
                Confeitaria e Bolos
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
          <div className="flex items-center gap-3" id="header-actions">
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
        <div
          className="md:hidden fixed inset-x-0 bottom-0 top-[60px] bg-cream-50 z-50 flex flex-col justify-between py-6 px-6 border-t border-beige-300 shadow-2xl overflow-y-auto"
          id="mobile-drawer"
        >
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-lg font-display font-medium text-left py-2.5 border-b border-beige-300/60 flex items-center justify-between cursor-pointer active:text-rose-500 ${
                    isActive ? 'text-rose-500 font-bold' : 'text-cocoa-900'
                  }`}
                >
                  <span>{item.label}</span>
                  <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-rose-500' : 'bg-transparent'}`} />
                </button>
              );
            })}
          </div>

          <div className="bg-cream-100 p-5 rounded-2xl border border-beige-300 flex flex-col gap-3 mt-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Pérola Doces" className="w-10 h-10 rounded-full border border-rose-300 shadow-xs" />
              <div>
                <span className="font-display font-bold text-cocoa-900 block leading-tight">Pérola Doces</span>
                <span className="text-[10px] text-rose-500 font-bold uppercase">Feito com amor</span>
              </div>
            </div>
            <p className="text-xs text-cocoa-700 leading-relaxed">
              Tire suas dúvidas ou faça seu pedido diretamente pelo nosso WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full bg-[#25D366] text-white py-3 rounded-full text-sm font-bold tracking-wider hover:bg-[#20bd5a] text-center flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>FALEM CONOSCO NO WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
