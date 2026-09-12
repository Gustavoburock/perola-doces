import { useState, useMemo, useRef, useEffect } from 'react';
import { Sparkles, Star } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
}

type CategoryKey = 'todos' | 'bolos_festa' | 'ovos_colher' | 'copo_felicidade' | 'outras_sobremesas';

export default function ProductCatalog({ onSelectProduct }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('todos');
  const [isStuck, setIsStuck] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(65);
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Dynamically measure the header height to ensure 0px gap (glued) on desktop & mobile
  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.getElementById('main-header');
      if (header) {
        setHeaderHeight(Math.round(header.getBoundingClientRect().height));
      }
    };

    updateHeaderHeight();
    const header = document.getElementById('main-header');
    let resizeObserver: ResizeObserver | null = null;
    if (header) {
      resizeObserver = new ResizeObserver(updateHeaderHeight);
      resizeObserver.observe(header);
    }
    window.addEventListener('scroll', updateHeaderHeight, { passive: true });
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('scroll', updateHeaderHeight);
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      {
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0,
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [headerHeight]);

  const categories: { key: CategoryKey; label: string }[] = [
    { key: 'todos', label: 'Todo o Cardápio' },
    { key: 'bolos_festa', label: 'Bolos de Festa' },
    { key: 'ovos_colher', label: 'Ovos de Colher' },
    { key: 'copo_felicidade', label: 'Copo da Felicidade' },
    { key: 'outras_sobremesas', label: 'Outras Sobremesas' },
  ];

  const handleSelectCategory = (key: CategoryKey, targetBtn?: HTMLElement | null) => {
    setActiveCategory(key);
    const container = categoryScrollRef.current;
    if (container) {
      const btn = targetBtn || container.querySelector<HTMLElement>(`[data-category="${key}"]`);
      if (btn) {
        const containerLeft = container.getBoundingClientRect().left;
        const btnLeft = btn.getBoundingClientRect().left;
        const currentScroll = container.scrollLeft;
        const offset = btnLeft - containerLeft;

        container.scrollTo({
          left: currentScroll + offset,
          behavior: 'smooth',
        });
      }
    }

    // Return scroll back to the first product of the category if user has scrolled down into the list
    requestAnimationFrame(() => {
      const productsEl = document.getElementById('products-container');
      const controlsEl = document.getElementById('catalog-controls');
      if (productsEl) {
        const controlsHeight = controlsEl ? controlsEl.offsetHeight : 44;
        const targetScrollY = window.scrollY + productsEl.getBoundingClientRect().top - headerHeight - controlsHeight - 12;

        if (window.scrollY > targetScrollY + 10) {
          window.scrollTo({
            top: Math.max(0, targetScrollY),
            behavior: 'smooth',
          });
        }
      }
    });
  };

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by category
    if (activeCategory !== 'todos') {
      result = result.filter((p) => p.category === activeCategory);
    }

    return result;
  }, [activeCategory]);

  // Find the perfect item for Section 04 - "O bolo que rouba a cena."
  const heroProduct = useMemo(() => {
    return PRODUCTS.find((p) => p.id === 'bolo-para-festa-lambeth-classico') || (PRODUCTS.length > 0 ? PRODUCTS[0] : null);
  }, []);

  return (
    <div className="w-full">
      
      {/* SECTION 02 — Categorias ("Feito para adoçar os seus momentos.") */}
      <section id="categorias" className="py-20 bg-cream-100 border-y border-beige-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold-500 mb-2 block">
            Nossas Categorias
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-cocoa-900 mb-4">
            Feito para adoçar os seus momentos.
          </h2>
          <p className="font-sans text-base sm:text-lg text-cocoa-700 max-w-2xl mx-auto mb-12 leading-relaxed">
            Nossos doces são feitos sob medida para transformar reuniões íntimas e grandes festividades em memórias cheias de doçura.
          </p>

          {/* Quick category selection cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto" id="category-cards-grid">
            {categories.filter(c => c.key !== 'todos').map((cat) => {
              const isSelected = activeCategory === cat.key;
              
              // Get an iconic image for category card
              let catImage = '';
              if (cat.key === 'bolos_festa') catImage = '/products/bolo-morango.png';
              if (cat.key === 'ovos_colher') catImage = 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=500&auto=format&fit=crop&q=80';
              if (cat.key === 'copo_felicidade') catImage = 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80';
              if (cat.key === 'outras_sobremesas') catImage = 'https://images.unsplash.com/photo-1541795795328-f073b763494e?w=500&auto=format&fit=crop&q=80';

              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    handleSelectCategory(cat.key as CategoryKey);
                    // Smooth scroll to cardapio block to show items
                    document.getElementById('cardapio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`group relative h-40 rounded-2xl overflow-hidden border transition-all duration-300 text-left cursor-pointer focus:outline-none ${
                    isSelected ? 'border-rose-500 ring-2 ring-rose-300/40' : 'border-beige-300'
                  }`}
                >
                  <img
                    src={catImage}
                    alt={cat.label}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover brightness-[0.45] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <span className="text-white font-display text-lg sm:text-xl font-bold leading-none tracking-wide">
                      {cat.label}
                    </span>
                    <span className="text-[10px] text-rose-300 font-bold uppercase tracking-wider mt-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Explorar</span>
                      <span>→</span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 03 — Produtos em Destaque / Cardápio ("Qual vai ser a sua próxima tentação?") */}
      <section id="cardapio" className="py-20 sm:py-24 bg-cream-50 scroll-mt-16">
        <div className="w-full">
          
          {/* Title and Intro */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold-500 mb-2 block">
              Nosso Cardápio Completo
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-cocoa-900 mb-4">
              Qual vai ser a sua próxima tentação?
            </h2>
            <p className="font-sans text-sm sm:text-base text-cocoa-700 max-w-xl mx-auto leading-relaxed">
              Explore nossa seleção exclusiva de bolos macios e docinhos sofisticados. Clique no modelo desejado para ver detalhes e tirar dúvidas pelo WhatsApp.
            </p>
          </div>

          {/* Sentinel element to detect when catalog controls become sticky below header */}
          <div ref={sentinelRef} className="h-px w-full pointer-events-none opacity-0 -mb-px" aria-hidden="true" />

          {/* Sticky Category Bar - Seamless when resting, glued directly under header when stuck */}
          <div
            id="catalog-controls"
            style={{ top: `${Math.max(0, headerHeight - 1)}px` }}
            className={`sticky z-30 w-full py-2 sm:py-2.5 mb-8 sm:mb-10 transition-colors duration-200 rounded-none ${
              isStuck
                ? 'bg-cream-50/95 backdrop-blur-md border-y border-beige-300 shadow-[0_2px_12px_rgba(74,41,40,0.06)]'
                : 'bg-transparent border-y border-transparent shadow-none'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
              {/* Category Tabs with Horizontal Scroll */}
              <div
                ref={categoryScrollRef}
                className="w-full flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-0.5 no-scrollbar scroll-smooth"
                style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {categories.map((cat) => {
                  const isSelected = activeCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      data-category={cat.key}
                      onClick={(e) => handleSelectCategory(cat.key as CategoryKey, e.currentTarget)}
                      className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer focus:outline-none select-none ${
                        isSelected
                          ? 'bg-rose-500 text-white shadow-xs ring-1.5 ring-rose-300/50'
                          : 'bg-white text-cocoa-700 border border-beige-300 hover:border-rose-300 hover:text-rose-500'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Product Grid Container */}
          <div id="products-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white/70 rounded-3xl border border-dashed border-beige-300 p-8 shadow-xs">
                <span className="text-4xl">✨</span>
                <h3 className="font-display text-xl font-bold text-cocoa-900 mt-4 mb-2">Pronto para cadastrar seus doces reais</h3>
                <p className="text-xs sm:text-sm text-cocoa-700 max-w-md mx-auto">
                  Todos os produtos demonstrativos foram removidos. Envie a foto, o nome e o valor de cada doce para cadastrarmos seu cardápio oficial!
                </p>
              </div>
            ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="products-grid">
              {filteredProducts.map((product) => {
                // Determine display price
                const displayPrice = product.sizes && product.sizes.length > 0 
                  ? product.sizes[0].price 
                  : product.price;

                return (
                  <article
                    key={product.id}
                    className="group bg-white rounded-3xl overflow-hidden border border-beige-300/70 shadow-[0_4px_20px_rgba(74,41,40,0.04)] hover:shadow-[0_8px_30px_rgba(74,41,40,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    
                    {/* Photograph Container: occupies most of the card */}
                    <div className="relative aspect-square overflow-hidden bg-cream-100 cursor-pointer" onClick={() => onSelectProduct(product)}>
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          if (product.fallbackImage && e.currentTarget.src !== product.fallbackImage) {
                            e.currentTarget.src = product.fallbackImage;
                          }
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      {/* Delicate gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Floated Premium Tags */}
                      {product.tags && product.tags.length > 0 && (
                        <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                          <span className="text-[9px] uppercase tracking-wider font-bold bg-cream-50 text-cocoa-900 border border-beige-300 px-2 py-0.5 rounded-full">
                            {product.tags[0]}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Card Description */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3
                          onClick={() => onSelectProduct(product)}
                          className="font-display text-xl md:text-2xl font-bold text-cocoa-900 mb-2 hover:text-rose-500 transition-colors cursor-pointer"
                        >
                          {product.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-cocoa-700 leading-relaxed line-clamp-2 mb-4">
                          {product.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-beige-300/50 flex items-center justify-between">
                        {/* Price Area */}
                        <div>
                          <p className="text-[10px] text-cocoa-700 font-medium uppercase tracking-wider leading-none mb-1">
                            {product.sizes && product.sizes.length > 0 ? 'A partir de' : 'Preço'}
                          </p>
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-xs text-cocoa-900 font-semibold">R$</span>
                            <span className="font-display text-xl sm:text-2xl font-bold text-cocoa-900">
                              {displayPrice.toFixed(2)}
                            </span>
                            <span className="text-[10px] text-cocoa-700 ml-1">
                              / {product.sizes && product.sizes.length > 0 ? 'unidade' : product.priceUnit}
                            </span>
                          </div>
                        </div>

                        {/* Button: "SABER MAIS" */}
                        <button
                          onClick={() => onSelectProduct(product)}
                          className="px-5 py-2.5 bg-rose-500 text-white rounded-full text-xs font-bold tracking-wider hover:bg-rose-500/90 hover:scale-102 active:scale-98 transition-all duration-200 shadow-sm cursor-pointer"
                        >
                          SABER MAIS
                        </button>
                      </div>

                    </div>

                  </article>
                );
              })}
            </div>
          )}

          </div>
        </div>
      </section>

      {/* SECTION 04 — Produto Hero ("O bolo que rouba a cena.") */}
      {heroProduct && (
        <section className="py-24 bg-cream-100 border-t border-beige-300 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-3xl -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Image block left (takes 5 columns) */}
              <div className="lg:col-span-5 relative flex justify-center lg:order-last">
                <div className="relative w-full max-w-[420px] aspect-square">
                  
                  {/* Artistic background circular frame */}
                  <div className="absolute inset-0 bg-gold-500/10 rounded-full scale-105 animate-pulse" />
                  
                  <div className="w-full h-full rounded-full overflow-hidden shadow-[0_12px_40px_rgba(74,41,40,0.1)] border-4 border-white bg-cream-50">
                    <img
                      src={heroProduct.image}
                      alt="Bolo Destaque Pérola Suprema"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        if (heroProduct.fallbackImage && e.currentTarget.src !== heroProduct.fallbackImage) {
                          e.currentTarget.src = heroProduct.fallbackImage;
                        }
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  
                  {/* Small floating badge */}
                  <div className="absolute -bottom-2 right-4 bg-rose-500 text-white py-2 px-3 rounded-full shadow-md text-xs font-bold tracking-wide flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current text-gold-500 animate-spin-slow" />
                    <span>Alta Confeitaria</span>
                  </div>

                </div>
              </div>

              {/* Editorial Content Text (takes 7 columns) */}
              <div className="lg:col-span-7 text-left lg:pr-8">
                
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold-500 mb-2.5 block">
                  Destaque da Confeiteira
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-cocoa-900 leading-tight mb-4">
                  O bolo que rouba a cena.
                </h2>
                <p className="text-lg font-display text-rose-500 italic mb-4">
                  {heroProduct.name}
                </p>
                <p className="font-sans text-sm sm:text-base text-cocoa-700 leading-relaxed mb-6">
                  {heroProduct.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-3.5 py-1.5 bg-cream-50 border border-beige-300 rounded-full text-xs font-sans text-cocoa-700 font-medium">
                    ✓ Recheios Finos Selecionáveis
                  </span>
                  <span className="px-3.5 py-1.5 bg-cream-50 border border-beige-300 rounded-full text-xs font-sans text-cocoa-700 font-medium">
                    ✓ Ouro 24k Comestível
                  </span>
                  <span className="px-3.5 py-1.5 bg-cream-50 border border-beige-300 rounded-full text-xs font-sans text-cocoa-700 font-medium">
                    ✓ Buttercream Francês Leve
                  </span>
                </div>

                {/* CTA strictly with action-verb and pill structure */}
                <button
                  onClick={() => onSelectProduct(heroProduct)}
                  className="px-8 py-4 bg-rose-500 text-white rounded-full font-bold tracking-wider text-sm hover:bg-rose-500/90 active:scale-98 shadow-md transition-all duration-300 cursor-pointer"
                >
                  CONSULTAR ESTE MODELO
                </button>

              </div>

            </div>
          </div>
        </section>
      )}

    </div>
  );
}
