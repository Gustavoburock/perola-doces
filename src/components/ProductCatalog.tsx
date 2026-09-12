import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, Sparkles, Star } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
}

type CategoryKey = 'todos' | 'bolos_festa' | 'docinhos' | 'combos';

export default function ProductCatalog({ onSelectProduct }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'name'>('default');

  const categories = [
    { key: 'todos', label: 'Todo o Cardápio' },
    { key: 'bolos_festa', label: 'Bolos de Festa' },
    { key: 'docinhos', label: 'Docinhos Finos' },
    { key: 'combos', label: 'Combos para Festa' },
  ];

  // Filtering & Sorting Logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // 1. Filter by category
    if (activeCategory !== 'todos') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // 2. Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }

    // 3. Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => {
        const pA = a.sizes && a.sizes.length > 0 ? a.sizes[0].price : a.price;
        const pB = b.sizes && b.sizes.length > 0 ? b.sizes[0].price : b.price;
        return pA - pB;
      });
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => {
        const pA = a.sizes && a.sizes.length > 0 ? a.sizes[0].price : a.price;
        const pB = b.sizes && b.sizes.length > 0 ? b.sizes[0].price : b.price;
        return pB - pA;
      });
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  // Find the perfect item for Section 04 - "O bolo que rouba a cena."
  const heroProduct = useMemo(() => {
    return PRODUCTS.find((p) => p.id === 'bolo-perola-dourada') || PRODUCTS[0];
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto" id="category-cards-grid">
            {categories.filter(c => c.key !== 'todos').map((cat) => {
              const isSelected = activeCategory === cat.key;
              
              // Get an iconic image for category card
              let catImage = '';
              if (cat.key === 'bolos_festa') catImage = '/assets/bolo_sinuca.png';
              if (cat.key === 'docinhos') catImage = 'https://images.unsplash.com/photo-1541795795328-f073b763494e?w=300&auto=format&fit=crop&q=80';
              if (cat.key === 'combos') catImage = 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=300&auto=format&fit=crop&q=80';

              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key as CategoryKey);
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
      <section id="cardapio" className="py-24 bg-cream-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold-500 mb-2 block">
              Nosso Cardápio Completo
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-cocoa-900 mb-4">
              Qual vai ser a sua próxima tentação?
            </h2>
            <p className="font-sans text-sm sm:text-base text-cocoa-700 max-w-xl mx-auto leading-relaxed">
              Explore nossa seleção exclusiva de bolos macios e docinhos sofisticados. Escolha e faça sua encomenda com poucos toques.
            </p>
          </div>

          {/* Filtering, Searching, and Sorting Controls Panel */}
          <div className="bg-cream-100 border border-beige-300 rounded-3xl p-4 sm:p-6 mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between" id="catalog-controls">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cocoa-700" />
              <input
                type="text"
                placeholder="Buscar bolo ou docinho..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-xs sm:text-sm font-sans text-cocoa-900 pl-11 pr-4 py-3 rounded-full border border-beige-300 focus:outline-none focus:border-rose-500 placeholder-cocoa-700/60"
              />
            </div>

            {/* Sorting & Category Tabs combined */}
            <div className="flex flex-wrap items-center gap-3">
              
              {/* Category Dropdown/Selector for denser layouts, or direct buttons */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const isSelected = activeCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => setActiveCategory(cat.key as CategoryKey)}
                      className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer focus:outline-none ${
                        isSelected
                          ? 'bg-rose-500 text-white shadow-sm'
                          : 'bg-white text-cocoa-700 border border-beige-300 hover:border-rose-300'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Sort Selector */}
              <div className="relative flex items-center gap-1 bg-white border border-beige-300 rounded-full px-3 py-1.5">
                <ArrowUpDown className="w-3.5 h-3.5 text-cocoa-700" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-xs font-bold font-sans text-cocoa-900 focus:outline-none pr-2 cursor-pointer"
                >
                  <option value="default">Ordenação padrão</option>
                  <option value="price-asc">Menor Preço</option>
                  <option value="price-desc">Maior Preço</option>
                  <option value="name">Nome (A - Z)</option>
                </select>
              </div>

            </div>

          </div>

          {/* Active Filter Indicator */}
          {searchQuery && (
            <div className="mb-6 flex items-center gap-2 text-xs text-cocoa-700">
              <span>Buscando por: <strong>"{searchQuery}"</strong></span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-rose-500 underline font-semibold hover:text-rose-500/80 cursor-pointer"
              >
                Limpar busca
              </button>
            </div>
          )}

          {/* Product Grid - Desktop 3 columns, Tablet 2 columns, Mobile 1 column */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-cream-100 rounded-3xl border border-beige-300 p-8">
              <span className="text-4xl">🧁</span>
              <h3 className="font-display text-xl font-bold text-cocoa-900 mt-4 mb-2">Nenhum doce encontrado</h3>
              <p className="text-xs sm:text-sm text-cocoa-700 max-w-md mx-auto">
                Experimente alterar sua busca ou selecionar outra categoria. Nossa cozinha está sempre pronta para criar o doce dos seus sonhos!
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

                        {/* Button: "VER OPÇÕES" */}
                        <button
                          onClick={() => onSelectProduct(product)}
                          className="px-5 py-2.5 bg-rose-500 text-white rounded-full text-xs font-bold tracking-wider hover:bg-rose-500/90 hover:scale-102 active:scale-98 transition-all duration-200 shadow-sm cursor-pointer"
                        >
                          VER OPÇÕES
                        </button>
                      </div>

                    </div>

                  </article>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* SECTION 04 — Produto Hero ("O bolo que rouba a cena.") */}
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
                Uma verdadeira obra de arte comestível. Nosso Bolo Clássico Pérola Dourada é esculpido com buttercream leve de merengue suíço, decorado artesanalmente com delicadas pérolas de açúcar de tamanhos graduados e finalizado com folhas autênticas de ouro comestível de 24 quilates. Uma joia para a sua comemoração.
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
                CUSTOMIZAR MEU BOLO
              </button>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
