import { useState, FormEvent } from 'react';
import { X, Trash2, Calendar, Clock, MapPin, Sparkles, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  // Form fields
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [orderTime, setOrderTime] = useState('');
  const [deliveryType, setDeliveryType] = useState<'retirada' | 'entrega'>('retirada');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  // Totals
  const totalPrice = cart.reduce((sum, item) => {
    const itemPrice = item.selectedSize ? item.selectedSize.price : item.product.price;
    return sum + itemPrice * item.quantity;
  }, 0);

  const handleCheckout = (e: FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setErrorMsg('Por favor, digite seu nome completo.');
      return;
    }
    if (!customerPhone.trim()) {
      setErrorMsg('Por favor, informe seu celular para contato.');
      return;
    }
    if (!orderDate || !orderTime) {
      setErrorMsg('Escolha a data e hora desejada.');
      return;
    }
    if (deliveryType === 'entrega' && !address.trim()) {
      setErrorMsg('Por favor, preencha o endereço completo para entrega.');
      return;
    }

    setErrorMsg('');

    // Format WhatsApp message text
    const officialPhone = '5511998640394'; // 11 99864-0394

    let message = `Olá, Pérola Doces! ✨ Gostaria de fazer uma encomenda.\n\n`;
    message += `*📋 DADOS DO CLIENTE*\n`;
    message += `• *Nome:* ${customerName.trim()}\n`;
    message += `• *Telefone:* ${customerPhone.trim()}\n`;
    message += `• *Agendamento:* ${orderDate} às ${orderTime}\n`;
    message += `• *Tipo:* ${deliveryType === 'entrega' ? '🚚 Entrega em Domicílio' : '🧁 Retirada na Loja'}\n`;
    
    if (deliveryType === 'entrega') {
      message += `• *Endereço:* ${address.trim()}\n`;
    }

    if (notes.trim()) {
      message += `• *Observações:* ${notes.trim()}\n`;
    }

    message += `\n*🛒 ITENS ENCOMENDADOS*\n`;
    
    cart.forEach((item, index) => {
      const itemPrice = item.selectedSize ? item.selectedSize.price : item.product.price;
      const sizeLabel = item.selectedSize ? ` - ${item.selectedSize.label}` : '';
      
      message += `*${index + 1}.* ${item.quantity}x _${item.product.name}_${sizeLabel}\n`;
      message += `   Preço: R$ ${(itemPrice * item.quantity).toFixed(2)}\n`;
      
      if (item.customText) {
        message += `   ✍️ _Mensagem no bolo:_ "${item.customText.trim()}"\n`;
      }
      message += `\n`;
    });

    message += `*💰 TOTAL ESTIMADO:* R$ ${totalPrice.toFixed(2)}\n\n`;
    message += `--- \n_Pedido gerado pelo site oficial da Pérola Doces. Aguardo sua confirmação e dados para pagamento._`;

    // Encode URL parameter
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${officialPhone}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="cart-drawer-overlay">
      <div className="absolute inset-0 bg-cocoa-900/45 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream-50 shadow-[0_8px_30px_rgba(74,41,40,0.12)] flex flex-col justify-between border-l border-beige-300 animate-slide-in h-full">
          
          {/* Header */}
          <div className="p-6 border-b border-beige-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-rose-500" />
              <h2 className="font-display text-xl font-bold text-cocoa-900">
                Minha Sacola
              </h2>
              <span className="bg-rose-100 text-rose-500 font-sans text-xs font-bold px-2 py-0.5 rounded-full">
                {cart.reduce((sum, item) => sum + item.quantity, 0)} items
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 text-cocoa-700 hover:text-rose-500 hover:bg-rose-100 rounded-full transition-colors cursor-pointer"
              aria-label="Fechar sacola"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
            
            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center py-20 text-center gap-4">
                <span className="text-4xl">🧺</span>
                <h3 className="font-display text-lg font-semibold text-cocoa-900">Sua sacola está vazia</h3>
                <p className="text-xs text-cocoa-700 max-w-[250px]">
                  Explore nosso cardápio de doces incríveis e adicione suas tentações favoritas.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 text-xs font-bold bg-rose-500 text-white px-5 py-2.5 rounded-full hover:bg-rose-500/90 transition-all cursor-pointer"
                >
                  VOLTAR AO CARDÁPIO
                </button>
              </div>
            ) : (
              <>
                {/* List of Cart Items */}
                <div className="flex flex-col gap-4" id="cart-items-list">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-cocoa-900">
                      Itens Escolhidos
                    </span>
                    <button
                      onClick={onClearCart}
                      className="text-[10px] text-rose-500 hover:text-rose-700 font-bold tracking-wider cursor-pointer"
                    >
                      ESVAZIAR SACOLA
                    </button>
                  </div>

                  {cart.map((item) => {
                    const itemPrice = item.selectedSize ? item.selectedSize.price : item.product.price;
                    return (
                      <div
                        key={item.id}
                        className="bg-white p-4 rounded-2xl border border-beige-300 flex gap-3 shadow-[0_2px_10px_rgba(74,41,40,0.02)] relative"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          onError={(e) => {
                            if (item.product.fallbackImage && e.currentTarget.src !== item.product.fallbackImage) {
                              e.currentTarget.src = item.product.fallbackImage;
                            }
                          }}
                          className="w-16 h-16 rounded-xl object-cover border border-beige-300"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-cocoa-900 leading-tight">
                              {item.product.name}
                            </h4>
                            {item.selectedSize && (
                              <p className="text-[10px] font-medium text-gold-500 mt-0.5">
                                {item.selectedSize.label}
                              </p>
                            )}
                            {item.customText && (
                              <p className="text-[10px] text-cocoa-700 italic mt-1 bg-cream-50 p-1.5 rounded-lg border border-beige-300/40">
                                ✍️ "{item.customText}"
                              </p>
                            )}
                          </div>

                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-beige-300/40">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 border border-beige-300 rounded-full bg-cream-100 px-2 py-0.5 scale-90 origin-left">
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                className="w-6 h-6 rounded-full flex items-center justify-center text-cocoa-700 hover:bg-white cursor-pointer focus:outline-none"
                              >
                                -
                              </button>
                              <span className="text-xs font-bold text-cocoa-900 font-sans w-4 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 rounded-full flex items-center justify-center text-cocoa-700 hover:bg-white cursor-pointer focus:outline-none"
                              >
                                +
                              </button>
                            </div>

                            {/* Total price for line */}
                            <span className="text-xs font-bold text-cocoa-900 font-sans">
                              R$ {(itemPrice * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        {/* Trash Button */}
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="absolute top-2 right-2 p-1.5 text-cocoa-700 hover:text-rose-500 hover:bg-rose-100 rounded-full transition-colors cursor-pointer"
                          aria-label="Excluir item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="h-px bg-beige-300" />

                {/* Delivery details form */}
                <form onSubmit={handleCheckout} className="flex flex-col gap-4" id="delivery-form">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-cocoa-900 block">
                    Informações para Encomenda
                  </span>

                  {/* Customer Name */}
                  <div>
                    <label className="text-[10px] font-sans font-bold uppercase text-cocoa-700 block mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Maria Clara Silva"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full p-2.5 text-xs font-sans border border-beige-300 rounded-xl bg-white focus:outline-none focus:border-rose-500 text-cocoa-900"
                    />
                  </div>

                  {/* Customer Phone */}
                  <div>
                    <label className="text-[10px] font-sans font-bold uppercase text-cocoa-700 block mb-1">
                      WhatsApp para Contato *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (11) 99999-9999"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full p-2.5 text-xs font-sans border border-beige-300 rounded-xl bg-white focus:outline-none focus:border-rose-500 text-cocoa-900"
                    />
                  </div>

                  {/* Date and Time selectors */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-sans font-bold uppercase text-cocoa-700 flex items-center gap-1.5 mb-1">
                        <Calendar className="w-3 h-3 text-gold-500" />
                        <span>Data desejada *</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={orderDate}
                        onChange={(e) => setOrderDate(e.target.value)}
                        className="w-full p-2.5 text-xs font-sans border border-beige-300 rounded-xl bg-white focus:outline-none focus:border-rose-500 text-cocoa-900"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-sans font-bold uppercase text-cocoa-700 flex items-center gap-1.5 mb-1">
                        <Clock className="w-3 h-3 text-gold-500" />
                        <span>Hora desejada *</span>
                      </label>
                      <input
                        type="time"
                        required
                        value={orderTime}
                        onChange={(e) => setOrderTime(e.target.value)}
                        className="w-full p-2.5 text-xs font-sans border border-beige-300 rounded-xl bg-white focus:outline-none focus:border-rose-500 text-cocoa-900"
                      />
                    </div>
                  </div>

                  {/* Delivery Type Selector */}
                  <div>
                    <label className="text-[10px] font-sans font-bold uppercase text-cocoa-700 block mb-1">
                      Forma de Recebimento
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setDeliveryType('retirada')}
                        className={`py-2 rounded-xl border text-xs font-sans font-bold transition-all duration-200 cursor-pointer ${
                          deliveryType === 'retirada'
                            ? 'border-rose-500 bg-rose-100/30 text-cocoa-900'
                            : 'border-beige-300 bg-white text-cocoa-700'
                        }`}
                      >
                        Retirar na Confeitaria
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeliveryType('entrega')}
                        className={`py-2 rounded-xl border text-xs font-sans font-bold transition-all duration-200 cursor-pointer ${
                          deliveryType === 'entrega'
                            ? 'border-rose-500 bg-rose-100/30 text-cocoa-900'
                            : 'border-beige-300 bg-white text-cocoa-700'
                        }`}
                      >
                        Receber em Domicílio
                      </button>
                    </div>
                  </div>

                  {/* Address input if delivery is selected */}
                  {deliveryType === 'entrega' && (
                    <div className="animate-fade-in">
                      <label className="text-[10px] font-sans font-bold uppercase text-cocoa-700 flex items-center gap-1 mb-1">
                        <MapPin className="w-3 h-3 text-gold-500" />
                        <span>Endereço de Entrega Completo *</span>
                      </label>
                      <textarea
                        required
                        placeholder="Ex: Rua das Flores, 123 - Apto 42 - Jardim da Luz - São Paulo"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-2.5 text-xs font-sans border border-beige-300 rounded-xl bg-white focus:outline-none focus:border-rose-500 text-cocoa-900 h-16 resize-none"
                      />
                    </div>
                  )}

                  {/* Special Instructions */}
                  <div>
                    <label className="text-[10px] font-sans font-bold uppercase text-cocoa-700 block mb-1">
                      Observações Adicionais (Restrições alimentares, etc)
                    </label>
                    <textarea
                      placeholder="Ex: 'Sem amendoim por alergia' ou 'Embalar para presente'"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-2.5 text-xs font-sans border border-beige-300 rounded-xl bg-white focus:outline-none focus:border-rose-500 text-cocoa-900 h-14 resize-none"
                    />
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Drawer Footer - Totals & Submit */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-beige-300 bg-cream-100">
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex justify-between items-center text-xs text-cocoa-700 font-sans">
                  <span>Subtotal dos Doces:</span>
                  <span className="font-semibold">R$ {totalPrice.toFixed(2)}</span>
                </div>
                {deliveryType === 'entrega' && (
                  <div className="flex justify-between items-center text-xs text-cocoa-700 font-sans">
                    <span>Taxa de Entrega:</span>
                    <span className="text-gold-500 italic">A combinar (conforme CEP)</span>
                  </div>
                )}
                <div className="h-px bg-beige-300/60" />
                <div className="flex justify-between items-center">
                  <span className="text-sm font-sans font-bold text-cocoa-900">Total Estimado:</span>
                  <span className="font-display text-2xl font-bold text-cocoa-900">
                    R$ {totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Error Alert */}
              {errorMsg && (
                <div className="mb-4 bg-red-100 border border-red-300 text-red-700 text-[11px] p-2.5 rounded-xl font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Action Button: FALAR PELO WHATSAPP */}
              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-rose-500 hover:bg-rose-500/90 active:scale-[0.98] text-white rounded-full font-bold text-sm tracking-widest transition-all duration-300 cursor-pointer shadow-md flex items-center justify-center gap-2"
                id="cart-checkout-button"
              >
                <Sparkles className="w-4 h-4 text-gold-500 animate-pulse" />
                <span>FALAR PELO WHATSAPP</span>
              </button>
              
              <p className="text-[10px] text-center text-cocoa-700 mt-3 leading-tight font-sans">
                Ao clicar, você será redirecionado para finalizar os detalhes de frete e pagamento por PIX/Cartão diretamente com nossa confeiteira pelo WhatsApp.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
