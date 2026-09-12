import { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Sparkles } from 'lucide-react';
import { Product, SizeOption } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, selectedSize: SizeOption | null, customText?: string) => void;
}

export default function ProductDetailModal({ product, onClose, onAddToCart }: ProductDetailModalProps) {
  const [selectedSize, setSelectedSize] = useState<SizeOption | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [customText, setCustomText] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      } else {
        setSelectedSize(null);
      }
      setQuantity(1);
      setCustomText('');
      setIsAdded(false);
    }
  }, [product]);

  if (!product) return null;

  const currentPrice = selectedSize ? selectedSize.price : product.price;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedSize, product.customizable ? customText : undefined);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cocoa-900/40 backdrop-blur-sm" id="product-detail-modal">
      <div
        className="relative bg-cream-50 w-full max-w-2xl rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(74,41,40,0.15)] border border-beige-300 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-cream-50/80 backdrop-blur-sm hover:bg-rose-100 hover:text-rose-500 rounded-full border border-beige-300/60 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Panel */}
        <div className="w-full md:w-1/2 relative aspect-video md:aspect-auto min-h-[200px] md:min-h-full">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={(e) => {
              if (product.fallbackImage && e.currentTarget.src !== product.fallbackImage) {
                e.currentTarget.src = product.fallbackImage;
              }
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-cream-50/10 pointer-events-none" />
          
          {/* Tags floating on image */}
          {product.tags && product.tags.length > 0 && (
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
              {product.tags.slice(0, 2).map((tag, i) => (
                <span key={i} className="text-[10px] uppercase tracking-wider font-bold bg-rose-500 text-white px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Content Panel */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between max-h-[60vh] md:max-h-[90vh]">
          
          <div>
            {/* Category Breadcrumb */}
            <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-gold-500 mb-1 block">
              {product.category === 'bolos_festa' && 'Bolo de Festa'}
              {product.category === 'ovos_colher' && 'Ovo de Colher'}
              {product.category === 'copo_felicidade' && 'Copo da Felicidade'}
              {product.category === 'outras_sobremesas' && 'Outras Sobremesas'}
            </span>

            {/* Title */}
            <h3 className="font-display text-2xl md:text-3xl font-bold text-cocoa-900 leading-tight mb-2">
              {product.name}
            </h3>

            {/* Price tag */}
            <div className="flex items-baseline gap-1.5 mb-4">
              <span className="text-sm font-sans font-medium text-cocoa-700">R$</span>
              <span className="text-3xl font-display font-bold text-cocoa-900">
                {currentPrice.toFixed(2)}
              </span>
              <span className="text-xs text-cocoa-700 font-medium">
                / {selectedSize ? 'unidade' : product.priceUnit}
              </span>
            </div>

            {/* Divider */}
            <div className="h-px bg-beige-300 w-full mb-4" />

            {/* Description */}
            <p className="text-sm font-sans text-cocoa-700 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Sizing options selector if exists */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="text-xs font-sans font-bold uppercase tracking-wider text-cocoa-900 block mb-2.5">
                  Selecione o tamanho / quantidade:
                </label>
                <div className="flex flex-col gap-2">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize?.sizeId === size.sizeId;
                    return (
                      <button
                        key={size.sizeId}
                        onClick={() => setSelectedSize(size)}
                        className={`w-full text-left p-3 rounded-xl border text-xs font-sans transition-all duration-200 cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'border-rose-500 bg-rose-100/30 text-cocoa-900 shadow-sm font-semibold'
                            : 'border-beige-300 bg-white hover:border-rose-300 text-cocoa-700'
                        }`}
                      >
                        <span>{size.label}</span>
                        <span className="font-bold">R$ {size.price.toFixed(2)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Custom text for personalized cakes */}
            {product.customizable && (
              <div className="mb-6 animate-fade-in">
                <label className="text-xs font-sans font-bold uppercase tracking-wider text-cocoa-900 flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                  <span>Escreva a mensagem do bolo (opcional):</span>
                </label>
                <textarea
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="Ex: 'Parabéns Maria, 30 anos!' ou 'Ana & Pedro'"
                  maxLength={60}
                  className="w-full p-3 text-xs font-sans border border-beige-300 rounded-xl bg-white focus:outline-none focus:border-rose-500 text-cocoa-900 resize-none h-16"
                />
                <span className="text-[10px] text-cocoa-700 float-right">
                  {60 - customText.length} caracteres restantes
                </span>
              </div>
            )}
          </div>

          {/* Quantity & Buy Footer */}
          <div className="mt-8 pt-4 border-t border-beige-300/60">
            <div className="flex items-center justify-between gap-4">
              
              {/* Quantity Counter (Touch target friendly >44px) */}
              <div className="flex items-center border border-beige-300 rounded-full bg-cream-100 p-1">
                <button
                  onClick={handleDecrement}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-cocoa-700 hover:bg-cream-50 hover:text-rose-500 transition-colors cursor-pointer focus:outline-none"
                  aria-label="Diminuir quantidade"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm font-bold text-cocoa-900 font-sans">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-cocoa-700 hover:bg-cream-50 hover:text-rose-500 transition-colors cursor-pointer focus:outline-none"
                  aria-label="Aumentar quantidade"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to basket CTA button */}
              <button
                onClick={handleAdd}
                disabled={isAdded}
                className={`flex-1 py-3.5 px-6 rounded-full font-bold text-sm tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  isAdded
                    ? 'bg-green-600 text-white'
                    : 'bg-rose-500 text-white hover:bg-rose-500/90 active:scale-[0.98] shadow-sm'
                }`}
              >
                {isAdded ? (
                  <span>ADICIONADO! ✓</span>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADICIONAR À SACOLA</span>
                  </>
                )}
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
