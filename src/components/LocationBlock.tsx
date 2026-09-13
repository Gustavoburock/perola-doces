import { MapPin, Phone, Clock, MessageSquare, Navigation } from 'lucide-react';

export default function LocationBlock() {
  const officialPhone = '5511998640394';
  const whatsappUrl = `https://wa.me/${officialPhone}?text=${encodeURIComponent('Olá, Pérola Doces! Vim pelo site e gostaria de tirar algumas dúvidas sobre encomendas e retirada.')}`;
  
  // Real location query for Google Maps embed and directions
  const addressQuery = encodeURIComponent('Rua Soledade, 33, Jardim da Luz, São Paulo - SP');
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const googleMapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`;

  return (
    <section id="contato" className="py-24 bg-cream-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl sm:rounded-[32px] border border-beige-300 overflow-hidden shadow-[0_8px_30px_rgba(74,41,40,0.05)] max-w-6xl mx-auto" id="location-card">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Coordinates, Details and Action Buttons (takes 6 columns) */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 text-left flex flex-col justify-between">
              
              <div>
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold-500 mb-2 block">
                  Visite Nosso Ateliê
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-cocoa-900 mb-6">
                  Venha conhecer a Pérola.
                </h2>
                <p className="font-sans text-sm text-cocoa-700 leading-relaxed mb-8">
                  Trabalhamos principalmente sob encomenda, garantindo que cada bolo ou doce seja feito com ingredientes nobres e frescor absoluto especialmente para você. Venha retirar seu pedido ou solicite entrega.
                </p>

                {/* Info Items */}
                <div className="flex flex-col gap-5 mb-8">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-cocoa-900 mb-0.5">Endereço</h4>
                      <p className="text-sm text-cocoa-700 font-sans">
                        Rua Soledade, 33 — Jardim da Luz<br />
                        São Paulo — SP
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-cocoa-900 mb-0.5">Contato & WhatsApp</h4>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-cocoa-700 font-sans font-bold hover:text-rose-500 transition-colors"
                      >
                        (11) 99864-0394
                      </a>
                    </div>
                  </div>

                  {/* Opening hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-cocoa-900 mb-0.5">Horário de Retiradas</h4>
                      <p className="text-sm text-cocoa-700 font-sans">
                        Terça a Sábado: das 09:00 às 18:00<br />
                        Domingo: das 09:00 às 13:00
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Buttons: Primary WhatsApp + Secondary Como Chegar side by side */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-rose-500 text-white rounded-full font-bold tracking-wider text-xs uppercase hover:bg-rose-500/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer shadow-md group"
                  id="location-whatsapp-cta"
                >
                  <svg
                    className="w-4 h-4 fill-current transition-transform duration-300 group-hover:rotate-6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.18-.48-.3z"/>
                  </svg>
                  <span>FALAR PELO WHATSAPP</span>
                </a>

                <a
                  href={googleMapsRouteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-beige-300 hover:border-rose-400 text-cocoa-900 hover:text-rose-500 rounded-full font-bold tracking-wider text-xs uppercase hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer shadow-2xs group"
                  id="location-directions-cta"
                >
                  <Navigation className="w-4 h-4 text-rose-500 group-hover:rotate-12 transition-transform duration-300" />
                  <span>COMO CHEGAR</span>
                </a>
              </div>

            </div>

            {/* Right Column: Clean, Unobstructed Google Maps Embed (takes 6 columns) */}
            <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-full bg-cream-100/50 p-3 sm:p-5 flex flex-col border-t lg:border-t-0 lg:border-l border-beige-300">
              
              <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-beige-300 shadow-inner bg-white flex flex-col">
                {/* Official Full Google Maps iframe Embed */}
                <iframe
                  title="Localização Pérola Doces no Google Maps"
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px', flex: 1 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full flex-1"
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
