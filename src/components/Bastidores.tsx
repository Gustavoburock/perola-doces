import { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';
import { BASTIDORES_STEPS } from '../data';

export default function Bastidores() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const activeStep = BASTIDORES_STEPS[activeStepIdx];

  return (
    <section id="bastidores" className="py-24 bg-cream-100 border-y border-beige-300 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold-500 mb-2.5 block">
            Por Trás das Câmeras
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-cocoa-900 mb-4">
            Tem coisa que só fica boa quando é feita com carinho.
          </h2>
          <p className="font-sans text-sm sm:text-base text-cocoa-700 max-w-2xl mx-auto leading-relaxed">
            Venha espiar os segredos do nosso ateliê gastronômico. Cada doce conta uma história de dedicação artesanal, técnica refinada e muito amor.
          </p>
        </div>

        {/* Modular Showcase layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto" id="bastidores-interactive">
          
          {/* Stepper Steps (Column on Left for desktop, horizontal bar on mobile) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none" id="bastidores-steps">
            {BASTIDORES_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIdx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`flex-none lg:flex-1 text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer focus:outline-none flex items-center gap-3 w-[260px] lg:w-full ${
                    isActive
                      ? 'border-rose-500 bg-white shadow-sm'
                      : 'border-beige-300/40 bg-transparent hover:bg-white/40'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs font-sans ${
                    isActive ? 'bg-rose-500 text-white' : 'bg-rose-100 text-rose-500'
                  }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold leading-tight uppercase tracking-wider ${
                      isActive ? 'text-cocoa-900' : 'text-cocoa-700'
                    }`}>
                      {step.title}
                    </h4>
                    <p className="text-[10px] text-gold-500 mt-0.5 font-medium leading-none">
                      {idx === 0 && 'Ingredientes nobres'}
                      {idx === 1 && 'Massas e Geleias'}
                      {idx === 2 && 'Trabalho minucioso'}
                      {idx === 3 && 'Segurança total'}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Graphic & Information (takes 8 columns) */}
          <div className="lg:col-span-8 bg-white rounded-[32px] border border-beige-300 p-6 sm:p-10 shadow-[0_8px_30px_rgba(74,41,40,0.04)] flex flex-col md:flex-row gap-8 items-center" id="active-step-showcase">
            
            {/* Smooth transition image box */}
            <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden border border-beige-300 shadow-sm bg-cream-50">
              <img
                src={activeStep.image}
                alt={activeStep.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </div>

            {/* Step text content details */}
            <div className="w-full md:w-1/2 text-left">
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-rose-500 mb-2">
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span>ETAPA {activeStep.id} DE 4</span>
              </div>
              
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-cocoa-900 mb-3">
                {activeStep.title}
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-cocoa-700 leading-relaxed mb-6">
                {activeStep.description}
              </p>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-cocoa-900 font-medium">
                  <div className="w-5 h-5 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 text-[10px]">✓</div>
                  <span>Feito em pequenas fornadas fresquinhas</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-cocoa-900 font-medium">
                  <div className="w-5 h-5 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 text-[10px]">✓</div>
                  <span>Cuidado minucioso com higiene</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
