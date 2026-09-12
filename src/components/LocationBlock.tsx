import { MapPin, Phone, Clock, MessageSquare } from 'lucide-react';

export default function LocationBlock() {
  const officialPhone = '5511998640394';
  const whatsappUrl = `https://wa.me/${officialPhone}?text=Olá, Pérola Doces! Gostaria de tirar algumas dúvidas sobre encomendas.`;

  return (
    <section id="contato" className="py-24 bg-cream-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-[32px] border border-beige-300 overflow-hidden shadow-[0_8px_30px_rgba(74,41,40,0.05)] max-w-6xl mx-auto" id="location-card">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Coordinates and Details (takes 6 columns) */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 text-left flex flex-col justify-between">
              
              <div>
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold-500 mb-2 block">
                  Visite Nosso Ateliê
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-cocoa-900 mb-6">
                  Venha conhecer a Pérola.
                </h2>
                <p className="font-sans text-sm text-cocoa-700 leading-relaxed mb-8">
                  Trabalhamos principalmente sob encomenda, garantindo que cada doce ou bolo seja montado fresquinho especialmente para você. Venha retirar seu pedido ou consulte nossa taxa de entrega para sua região.
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
                      <p className="text-sm text-cocoa-700 font-sans font-bold">
                        (11) 99864-0394
                      </p>
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

              {/* CTA strictly adhering to verb and design system format */}
              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-rose-500 text-white rounded-full font-bold tracking-wider text-sm hover:bg-rose-500/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer shadow-md"
                  id="location-whatsapp-cta"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>FALAR PELO WHATSAPP</span>
                </a>
              </div>

            </div>

            {/* Right Column: Visual Maps Illustration (takes 6 columns) */}
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full bg-cream-100/40 p-4 sm:p-8 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-beige-300">
              
              {/* Aesthetic CSS/SVG Styled Interactive Art representing a gorgeous street map */}
              <div className="relative w-full h-full max-w-md aspect-square bg-cream-50 rounded-2xl border border-beige-300 p-6 shadow-2xs overflow-hidden flex flex-col justify-between">
                
                {/* Abstract grid representing streets */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#C98287_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                
                {/* Simulated geometric streets */}
                <svg className="absolute inset-0 w-full h-full text-beige-300 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="10%" y1="0%" x2="10%" y2="100%" stroke="currentColor" strokeWidth="4" />
                  <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="currentColor" strokeWidth="6" />
                  <line x1="85%" y1="0%" x2="85%" y2="100%" stroke="currentColor" strokeWidth="3" />
                  <line x1="0%" y1="30%" x2="100%" y2="30%" stroke="currentColor" strokeWidth="5" />
                  <line x1="0%" y1="70%" x2="100%" y2="70%" stroke="currentColor" strokeWidth="4" strokeDasharray="6 4" />
                </svg>

                {/* Pulsing shop coordinate pin marker */}
                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  <div className="relative">
                    {/* Ring pulsations */}
                    <div className="absolute -inset-2 rounded-full bg-rose-500/20 animate-ping" />
                    <div className="absolute -inset-4 rounded-full bg-rose-500/10 animate-pulse" />
                    
                    {/* Beautiful physical pin */}
                    <div className="w-10 h-10 rounded-full bg-rose-500 border-2 border-white shadow-md flex items-center justify-center text-white font-bold text-sm">
                      🧁
                    </div>
                  </div>
                  <div className="bg-cocoa-900 text-cream-50 text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm mt-2 border border-rose-300/30">
                    Pérola Doces
                  </div>
                </div>

                {/* Tiny visual guide labels */}
                <div className="text-[10px] text-cocoa-700/60 font-sans tracking-wide self-end pointer-events-none">
                  Av. Principal do Jardim da Luz
                </div>
                <div className="text-[10px] text-cocoa-700/60 font-sans tracking-wide self-start transform rotate-90 origin-top-left translate-x-4 translate-y-16 pointer-events-none">
                  Rua Soledade
                </div>

                {/* Open in external maps card */}
                <a
                  href="https://maps.google.com/?q=Rua+Soledade,+33,+Jardim+da+Luz,+Sao+Paulo"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/90 backdrop-blur-xs hover:bg-white border border-beige-300 p-3.5 rounded-xl flex items-center justify-between gap-4 shadow-sm relative z-20 transition-all cursor-pointer"
                >
                  <div>
                    <p className="text-[10px] uppercase font-bold text-cocoa-900 tracking-wider">Ver no Google Maps</p>
                    <p className="text-[10px] text-cocoa-700 font-sans">Rua Soledade, 33 — São Paulo</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 text-xs">
                    ➜
                  </div>
                </a>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
