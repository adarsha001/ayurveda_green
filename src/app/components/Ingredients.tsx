import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const INGREDIENTS = [
  {
    name: "Tulsi",
    sanskrit: "Ocimum tenuiflorum",
    benefit: "The Queen of Herbs. Purifies skin, fights acne-causing bacteria, and restores natural radiance.",
    img: "https://images.unsplash.com/photo-1761926783705-61fb59d80c98?w=400&h=400&fit=crop&auto=format",
    color: "#355E3B",
  },
  {
    name: "Neem",
    sanskrit: "Azadirachta indica",
    benefit: "Nature's antibiotic. Deeply cleanses pores, controls oil, and heals blemishes.",
    img: "https://images.unsplash.com/photo-1665479754958-1a8bdc47cc0d?w=400&h=400&fit=crop&auto=format",
    color: "#27492D",
  },
  {
    name: "Ashwagandha",
    sanskrit: "Withania somnifera",
    benefit: "The Strength Root. Adaptogenic herb that calms the mind, energises the body, and promotes deep sleep.",
    img: "https://images.unsplash.com/photo-1712068334998-11643e260bb1?w=400&h=400&fit=crop&auto=format",
    color: "#4A3728",
  },
  {
    name: "Amla",
    sanskrit: "Phyllanthus emblica",
    benefit: "Rich in Vitamin C. Boosts collagen, brightens complexion, and strengthens hair from root to tip.",
    img: "https://images.unsplash.com/photo-1724913172641-e528a0cc9ec6?w=400&h=400&fit=crop&auto=format",
    color: "#355E3B",
  },
  {
    name: "Brahmi",
    sanskrit: "Bacopa monnieri",
    benefit: "The Brain Tonic. Nourishes scalp, promotes hair growth, and enhances cognitive clarity.",
    img: "https://images.unsplash.com/photo-1708868746549-a45ae0be4aa1?w=400&h=400&fit=crop&auto=format",
    color: "#27492D",
  },
  {
    name: "Turmeric",
    sanskrit: "Curcuma longa",
    benefit: "The Golden Spice. Powerful anti-inflammatory, brightens skin tone, and reduces hyperpigmentation.",
    img: "https://images.unsplash.com/photo-1708868746661-a79fedc5d185?w=400&h=400&fit=crop&auto=format",
    color: "#8B6914",
  },
];

export function Ingredients() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Animate each ingredient card with stagger
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              delay: index * 0.08,
              ease: "back.out(0.4)",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );

          // Hover animations
          const img = card.querySelector('.ingredient-image');
          const border = card.querySelector('.hover-border');
          const tooltip = card.querySelector('.ingredient-tooltip');

          card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" });
            if (img) gsap.to(img, { scale: 1.1, duration: 0.7, ease: "power2.out" });
            if (border) gsap.to(border, { scale: 1, opacity: 0.2, duration: 0.5 });
            if (tooltip) gsap.to(tooltip, { opacity: 1, y: 0, duration: 0.3 });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
            if (img) gsap.to(img, { scale: 1, duration: 0.5 });
            if (border) gsap.to(border, { scale: 0.95, opacity: 0, duration: 0.5 });
            if (tooltip) gsap.to(tooltip, { opacity: 0, y: 5, duration: 0.3 });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#27492D] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />

      {/* Decorative faded text */}
      <div className="absolute top-12 left-0 right-0 text-center pointer-events-none overflow-hidden">
        <span 
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "15vw", fontWeight: 300 }} 
          className="text-[#F8F4E8]/[0.03] whitespace-nowrap select-none"
        >
          Botanicals
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#C9A227]/40" />
            <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#C9A227] tracking-[0.4em] uppercase text-xs">
              Sacred Botanicals
            </span>
            <div className="h-px w-16 bg-[#C9A227]/40" />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300 }} className="text-[#F8F4E8]">
            The Power of Ayurvedic Ingredients
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#D9E8C7]/50 text-sm mt-3 max-w-xl mx-auto">
            Each ingredient is hand-selected, ethically sourced, and processed using traditional methods to preserve its full potency.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {INGREDIENTS.map((ing, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="group cursor-pointer"
            >
              {/* Circular image */}
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4 border-2 border-[#C9A227]/20 transition-all duration-500">
                <img 
                  src={ing.img} 
                  alt={ing.name} 
                  className="ingredient-image w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#27492D]/60 via-transparent to-transparent rounded-full" />
                <div className="hover-border absolute inset-0 rounded-full border-4 border-[#C9A227] scale-95 opacity-0 transition-all duration-500" />
              </div>

              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#F8F4E8] text-lg text-center leading-tight mb-0.5">
                {ing.name}
              </h3>
              <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#C9A227]/60 text-[9px] italic text-center mb-2">
                {ing.sanskrit}
              </p>

              {/* Tooltip on hover */}
              <div className="ingredient-tooltip opacity-0 transition-all duration-300">
                <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#D9E8C7]/50 text-[10px] text-center leading-relaxed">
                  {ing.benefit.length > 60 ? ing.benefit.slice(0, 60) + "…" : ing.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />
    </section>
  );
}