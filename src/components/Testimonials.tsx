import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-cream-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold-500 mb-2.5 block">
            Nossos Clientes Recomendam
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-cocoa-900 mb-4">
            Quem experimenta, se apaixona.
          </h2>
          <p className="font-sans text-sm sm:text-base text-cocoa-700 max-w-xl mx-auto leading-relaxed">
            Nada nos deixa mais felizes do que fazer parte das suas melhores memórias. Veja o carinho de quem já provou nossos doces artesanais.
          </p>
        </div>

        {/* Testimonials Grid Layout - no nested cards! */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" id="testimonials-grid">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 sm:p-8 rounded-[24px] border border-beige-300 shadow-[0_4px_20px_rgba(74,41,40,0.03)] hover:shadow-[0_8px_30px_rgba(74,41,40,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars and Rating */}
                <div className="flex items-center gap-1 text-gold-500 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Main Quote Content */}
                <p className="font-sans text-sm text-cocoa-700 italic leading-relaxed mb-6">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Author profile block */}
              <div className="flex items-center gap-3 pt-4 border-t border-beige-300/40">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-rose-100"
                />
                <div>
                  <h4 className="font-sans text-xs font-bold text-cocoa-900 leading-none mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] text-gold-500 font-medium uppercase tracking-wider leading-none">
                    {testimonial.role} — encomendou {testimonial.productOrdered}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
