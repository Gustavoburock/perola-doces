import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Check } from 'lucide-react';
import { BASTIDORES_STEPS } from '../data';

const STEP_HIGHLIGHTS = [
  ['Ovos frescos e manteiga pura', 'Chocolates nobres e frutas do dia'],
  ['Pequenas fornadas artesanais', 'Calda na medida sem ficar enjoativo'],
  ['Rosetas e flores feitas à mão', 'Acabamento estilo Lambeth e fitas'],
  ['Caixas reforçadas e travadas', 'Chega perfeito na sua mesa']
];

// Position of circle badges according to the sketch:
// Step 1: Left Top (side: 'left', position: 'top')
// Step 2: Right Middle (side: 'right', position: 'center')
// Step 3: Left Middle (side: 'left', position: 'center')
// Step 4: Right Bottom (side: 'right', position: 'bottom')
const STEP_NODE_CONFIG = [
  { side: 'left', vAlign: 'top', label: '1' },
  { side: 'right', vAlign: 'center', label: '2' },
  { side: 'left', vAlign: 'center', label: '3' },
  { side: 'right', vAlign: 'bottom', label: '4' }
];

export default function Bastidores() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const [svgPathD, setSvgPathD] = useState('');
  const [pathLength, setPathLength] = useState(0);

  // Recalculate exact SVG S-Track coordinates based on rendered card bounding boxes
  const updateTrackCoordinates = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const cards = cardRefs.current;
    if (cards.length < 4 || !cards[0] || !cards[1] || !cards[2] || !cards[3]) return;

    const r1 = cards[0].getBoundingClientRect();
    const r2 = cards[1].getBoundingClientRect();
    const r3 = cards[2].getBoundingClientRect();
    const r4 = cards[3].getBoundingClientRect();

    // Responsive horizontal anchor points (left rail and right rail aligned with circle centers)
    const isMobile = window.innerWidth < 640;
    const leftX = isMobile ? 18 : 28;
    const rightX = containerRect.width - (isMobile ? 18 : 28);
    const cornerRadius = 24;

    // Node vertical positions matching sketch:
    // Node 1: top of card 1
    const p1Y = (r1.top - containerRect.top) + 24;
    // Cross 1-2: horizontal between card 1 and card 2
    const cross1Y = (r1.bottom + r2.top) / 2 - containerRect.top;
    // Node 2: center of card 2
    const p2Y = (r2.top + r2.bottom) / 2 - containerRect.top;
    // Cross 2-3: horizontal between card 2 and card 3
    const cross2Y = (r2.bottom + r3.top) / 2 - containerRect.top;
    // Node 3: center of card 3
    const p3Y = (r3.top + r3.bottom) / 2 - containerRect.top;
    // Cross 3-4: horizontal between card 3 and card 4
    const cross3Y = (r3.bottom + r4.top) / 2 - containerRect.top;
    // Node 4: bottom of card 4
    const p4Y = (r4.bottom - containerRect.top) - 24;

    // Build the exact orthogonal track path according to user's sketch
    // 1 -> down on left -> cross to right -> 2 on right -> cross to left -> 3 on left -> cross to right -> 4 on right
    const path = `
      M ${leftX} ${p1Y}
      L ${leftX} ${cross1Y - cornerRadius}
      Q ${leftX} ${cross1Y} ${leftX + cornerRadius} ${cross1Y}
      L ${rightX - cornerRadius} ${cross1Y}
      Q ${rightX} ${cross1Y} ${rightX} ${cross1Y + cornerRadius}
      L ${rightX} ${cross2Y - cornerRadius}
      Q ${rightX} ${cross2Y} ${rightX - cornerRadius} ${cross2Y}
      L ${leftX + cornerRadius} ${cross2Y}
      Q ${leftX} ${cross2Y} ${leftX} ${cross2Y + cornerRadius}
      L ${leftX} ${cross3Y - cornerRadius}
      Q ${leftX} ${cross3Y} ${leftX + cornerRadius} ${cross3Y}
      L ${rightX - cornerRadius} ${cross3Y}
      Q ${rightX} ${cross3Y} ${rightX} ${cross3Y + cornerRadius}
      L ${rightX} ${p4Y}
    `.replace(/\s+/g, ' ').trim();

    setSvgPathD(path);
  };

  useEffect(() => {
    updateTrackCoordinates();
    const handleResize = () => updateTrackCoordinates();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update path length once SVG path D is calculated
  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setPathLength(len);
    }
  }, [svgPathD]);

  // Scroll Progress and active step calculator
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start filling earlier as top enters viewport, and reach 100% when card 4 is comfortably in view
      const startTrigger = windowHeight * 0.70;
      const endTrigger = windowHeight * 0.50; // Triggers completion much earlier so Step 4 completes in sync
      const totalDist = (rect.height + startTrigger) - endTrigger;
      const currentDist = startTrigger - rect.top;

      let progress = Math.min(Math.max(currentDist / totalDist, 0), 1);
      setScrollProgress(progress);

      // Determine active card based on center threshold
      const triggerPoint = windowHeight * 0.5;
      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        const cRect = el.getBoundingClientRect();
        if (cRect.top <= triggerPoint && cRect.bottom >= triggerPoint - 120) {
          setActiveStepIdx(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (index: number) => {
    setActiveStepIdx(index);
    const targetElement = cardRefs.current[index];
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="bastidores" className="py-24 sm:py-32 bg-cream-100 border-y border-beige-300 scroll-mt-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-16 sm:mb-24">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold-500 mb-2.5 block flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Por Trás das Câmeras</span>
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-cocoa-900 mb-4">
            Tem coisa que só fica boa quando é feita com carinho.
          </h2>
          <p className="font-sans text-sm sm:text-base text-cocoa-700 max-w-2xl mx-auto leading-relaxed">
            Siga a trilha artesanal do nosso ateliê: cada etapa é executada com ingredientes nobres, técnica refinada e dedicação em cada detalhe.
          </p>
        </div>

        {/* Orthogonal S-Track Timeline Container */}
        <div
          ref={containerRef}
          className="relative flex flex-col gap-14 sm:gap-20 max-w-4xl mx-auto px-6 sm:px-14"
          id="bastidores-interactive"
        >
          
          {/* Continuous SVG Circuit Track Overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="roseTrackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E89B9D" />
                <stop offset="50%" stopColor="#C98287" />
                <stop offset="100%" stopColor="#B3696E" />
              </linearGradient>
            </defs>

            {/* Base Background Track (Cinza suave / Bege) */}
            {svgPathD && (
              <path
                d={svgPathD}
                fill="none"
                stroke="#E5D9CC"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}

            {/* Active Animated Fill Track (Preenchimento Rosa sincronizado com o scroll) */}
            {svgPathD && (
              <path
                ref={pathRef}
                d={svgPathD}
                fill="none"
                stroke="url(#roseTrackGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: pathLength || 2000,
                  strokeDashoffset: pathLength ? pathLength * (1 - scrollProgress) : 0,
                  transition: 'stroke-dashoffset 0.15s ease-out'
                }}
              />
            )}
          </svg>

          {/* 4 Continuous Step Cards with positioned circular nodes (1, 2, 3, 4) */}
          {BASTIDORES_STEPS.map((step, idx) => {
            const nodeConfig = STEP_NODE_CONFIG[idx];
            const isLeft = nodeConfig.side === 'left';
            const isActive = idx === activeStepIdx;
            const isCompleted = idx < activeStepIdx || (scrollProgress >= (idx + 1) / 4);

            return (
              <div
                key={step.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                onClick={() => scrollToStep(idx)}
                className="relative z-10"
              >
                {/* Node Circle Badge exactly along the track (Standardized numbers 1, 2, 3, 4) */}
                <div
                  className={`absolute z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-display font-bold text-xs sm:text-sm border-2 transition-colors duration-300 shadow-md ${
                    isLeft
                      ? '-left-4.5 sm:-left-5.5'
                      : '-right-4.5 sm:-right-5.5'
                  } ${
                    nodeConfig.vAlign === 'top'
                      ? 'top-4'
                      : nodeConfig.vAlign === 'bottom'
                      ? 'bottom-4'
                      : 'top-1/2 -translate-y-1/2'
                  } ${
                    isCompleted || isActive
                      ? 'bg-rose-500 border-white text-white shadow-rose-300 ring-2 ring-rose-200/60'
                      : 'bg-white border-beige-300 text-cocoa-700'
                  }`}
                >
                  {nodeConfig.label}
                </div>

                {/* Step Card */}
                <div
                  className={`bg-white rounded-3xl sm:rounded-[32px] border transition-all duration-300 p-6 sm:p-8 sm:px-10 cursor-pointer ${
                    isActive
                      ? 'border-rose-400 shadow-[0_12px_36px_rgba(201,130,135,0.18)] scale-101'
                      : 'border-beige-300/80 hover:border-rose-300 hover:shadow-xs shadow-[0_4px_20px_rgba(74,41,40,0.04)]'
                  }`}
                >
                  {/* Step Header info */}
                  <div className="mb-2">
                    <span className={`text-xs font-sans font-bold uppercase tracking-wider ${
                      isActive ? 'text-rose-500' : 'text-gold-500'
                    }`}>
                      ETAPA {step.id}
                    </span>
                  </div>

                  <h3 className={`font-display text-2xl sm:text-3xl font-bold mb-3 transition-colors ${
                    isActive ? 'text-cocoa-900' : 'text-cocoa-800'
                  }`}>
                    {step.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-cocoa-700 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Bullet highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-beige-300/40">
                    {STEP_HIGHLIGHTS[idx]?.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-cocoa-900 font-medium">
                        <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                          isCompleted || isActive ? 'bg-rose-500 text-white' : 'bg-rose-100 text-rose-500'
                        }`}>
                          ✓
                        </div>
                        <span className="truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
