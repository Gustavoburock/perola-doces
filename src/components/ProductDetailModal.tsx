import { useState, useEffect } from 'react';
import { X, MessageSquare, Send } from 'lucide-react';
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
    let message = `Olá, Pérola Doces! Vim pelo site e gostaria de saber mais informações sobre o *${product.name}*`;

    if (selectedSize) {
      message += ` (Opção/Tamanho: ${selectedSize.label} - R$ ${currentPrice.toFixed(2)})`;
    } else {
      message += ` (Valor: R$ ${currentPrice.toFixed(2)} / ${product.priceUnit})`;
    }

    message += `\n\nPoderia me passar mais detalhes sobre disponibilidade e prazos de encomenda?`;

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
              className="w-full py-4 px-6 rounded-full font-bold text-sm tracking-wider flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-white shadow-md transition-all duration-200 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>CONSULTAR NO WHATSAPP</span>
              <Send className="w-4 h-4 ml-1" />
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
