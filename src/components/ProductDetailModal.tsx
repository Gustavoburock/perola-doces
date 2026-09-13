import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Product, SizeOption } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

const WHATSAPP_PHONE = '5511998640394';

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [selectedSize, setSelectedSize] = useState<SizeOption | null>(null);

  useEffect(() => {
    if (product) {
      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      } else {
        setSelectedSize(null);
      }
    }
  }, [product]);

  if (!product) return null;

  const currentPrice = selectedSize ? selectedSize.price : product.price;

  const handleWhatsAppInquiry = () => {
    const formattedPrice = currentPrice.toFixed(2).replace('.', ',');
    const priceText = selectedSize
      ? `R$ ${formattedPrice} (${selectedSize.label})`
      : `R$ ${formattedPrice}/${product.priceUnit}`;

    const message = `Olá, Pérola Doces! 🍰\n\nVim pelo site e tenho interesse no *${product.name}*.\n\n💰 *${priceText}*\n\nGostaria de saber sobre *disponibilidade e prazo de encomenda*. 💕`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
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
        <div className="w-full md:w-1/2 relative aspect-video md:aspect-auto min-h-[220px] md:min-h-full">
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
          </div>

          {/* WhatsApp Direct Action Button */}
          <div className="mt-6 pt-4 border-t border-beige-300/60">
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full py-4 px-6 rounded-full font-bold text-xs sm:text-sm tracking-wider inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-white shadow-md transition-all duration-200 cursor-pointer group leading-none"
            >
              <svg
                className="w-5 h-5 fill-current shrink-0 transition-transform duration-200 group-hover:scale-110"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.18-.48-.3z"/>
              </svg>
              <span className="translate-y-[0.5px]">ENCOMENDAR PELO WHATSAPP</span>
            </button>
            <p className="text-[11px] text-center text-cocoa-700 mt-2 font-sans">
              Você será direcionado para o WhatsApp para combinar todos os detalhes da encomenda.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
