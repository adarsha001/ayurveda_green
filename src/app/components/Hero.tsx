import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Star, Sparkles, ArrowUpRight } from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HERO_PRODUCTS = [
  {
    name: "Kumkumadi Saffron Royal Cream",
    price: "₹3,450",
    originalPrice: "₹4,200",
    img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=500&fit=crop&auto=format",
    badge: "Imperial Blend",
    rating: 4.9,
    reviews: 1842,
    description: "Ultra-rich overnight complexion restoration treatment infused with hand-harvested Kashmiri Saffron.",
    benefits: ["Royal Glow", "Deep Elasticity", "Hyper-Pigmentation"]
  },
  {
    name: "24K Oudh Glow Concentrate",
    price: "₹4,800",
    originalPrice: "₹5,500",
    img: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=400&h=500&fit=crop&auto=format",
    badge: "Limited Edition",
    rating: 5.0,
    reviews: 614,
    description: "Pure liquid gold micro-particles suspended in a deeply aromatic, cell-rejuvenating precious Oudh oil.",
    benefits: ["Cellular Renewal", "24K Radiance", "Aromatic Healing"]
  },
  {
    name: "Marula & Blue Lotus Nectar",
    price: "₹2,950",
    originalPrice: "₹3,600",
    img: "https://images.unsplash.com/photo-1679394270597-e90694d70350?w=400&h=500&fit=crop&auto=format",
    badge: "Pure Elixir",
    rating: 4.8,
    reviews: 931,
    description: "A lightweight, rapid-absorption facial nectar delivering intensive lipid boundary restoration.",
    benefits: ["Lipid Barrier", "Satin Matte Glow", "Deep Hydration"]
  },
];

const FLOATING_LEAVES = [
  { x: "5%", y: "15%", size: 28, delay: 0, rotate: 12 },
  { x: "90%", y: "25%", size: 22, delay: 0.4, rotate: -18 },
  { x: "15%", y: "75%", size: 24, delay: 0.9, rotate: 28 },
  { x: "82%", y: "60%", size: 30, delay: 0.7, rotate: -15 },
  { x: "45%", y: "92%", size: 20, delay: 1.1, rotate: 18 },
];

function FloatingLeaf({ x, y, size, delay, rotate }: { x: string; y: string; size: number; delay: number; rotate: number }) {
  const leafRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(leafRef.current, {
        y: -25,
        rotate: rotate + 12,
        duration: 5 + delay,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: delay,
      });
    });
    return () => ctx.revert();
  }, [delay, rotate]);

  return (
    <div
      ref={leafRef}
      className="absolute pointer-events-none z-0"
      style={{ left: x, top: y, rotate: rotate }}
    >
      <svg width={size} height={size * 1.6} viewBox="0 0 24 40" fill="none">
        <path d="M12,2 C18,8 22,16 20,26 C18,34 12,38 12,38 C12,38 6,34 4,26 C2,16 6,8 12,2Z" fill="#C9A227" opacity="0.15" />
        <line x1="12" y1="6" x2="12" y2="36" stroke="#C9A227" strokeWidth="0.5" opacity="0.3" />
      </svg>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeProduct, setActiveProduct] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 8,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          y: "20%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (textContainerRef.current) {
        gsap.to(textContainerRef.current, {
          y: "10%",
          opacity: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.out" } });
      tl.fromTo(".hero-badge", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6 })
        .fromTo(".hero-title-line1", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.0 }, "-=0.3")
        .fromTo(".hero-title-line2", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.0 }, "-=0.7")
        .fromTo(".hero-description", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.5")
        .fromTo(".hero-buttons", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.4")
        .fromTo(".hero-testimonial", { opacity: 0 }, { opacity: 1 }, "-=0.3");

      productRefs.current.forEach((product, index) => {
        if (product) {
          gsap.fromTo(product,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: 0.2 + index * 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
              },
            }
          );
        }
      });

      gsap.to(".scroll-indicator", {
        y: 8,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center bg-[#1E3A22]"
      style={{ background: "radial-gradient(circle at 70% 30%, #2D5234 0%, #1E3A22 60%, #132516 100%)" }}
    >
      {/* Background Layer Parallax */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-5 mix-blend-overlay"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1724913172641-e528a0cc9ec6?w=1800&h=1200&fit=crop&auto=format")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Luxury Geometry Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border-l border-b border-[#C9A227]/30 rounded-bl-[200px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border-t border-r border-[#C9A227]/20 rounded-tr-[150px]" />
      </div>

      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C9A227]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Micro-interactive Floating Petals */}
      {FLOATING_LEAVES.map((leaf, i) => (
        <FloatingLeaf key={i} {...leaf} />
      ))}

      {/* Main Container Layout */}
      <div ref={textContainerRef} className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Premium Typographic Spread (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="hero-badge flex items-center gap-3 mb-6">
              <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#C9A227] tracking-[0.5em] uppercase text-[11px] font-semibold">
                Est. Authentic Ayurveda
              </span>
              <div className="h-[1px] w-16 bg-[#C9A227]/40" />
            </div>

            <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#F8F4E8] leading-[0.95] mb-8">
              <span className="hero-title-line1 block font-light" style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.2rem)" }}>Sensorial</span>
              <span className="hero-title-line2 block italic text-[#C9A227] font-normal" style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.2rem)" }}>Alchemy.</span>
            </h1>

            <p className="hero-description mb-10" style={{ fontFamily: "'Jost', sans-serif" }}>
              <span className="text-[#D9E8C7]/80 text-base md:text-lg leading-relaxed max-w-md block">
                Transcend standard skincare through rare botanical compounds meticulously crafted under precise celestial rhythms for flawless cellular vitality.
              </span>
            </p>

            <div className="hero-buttons flex flex-wrap gap-4 mb-12">
              <button
                onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.03, backgroundColor: "#E1B731", duration: 0.3 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, backgroundColor: "#C9A227", duration: 0.3 })}
                style={{ fontFamily: "'Jost', sans-serif", backgroundColor: "#C9A227" }}
                className="px-8 py-4 text-[#1E3A22] font-semibold tracking-[0.15em] uppercase text-xs transition-shadow shadow-lg shadow-black/20"
              >
                Acquire Collection
              </button>
              <button
                onMouseEnter={(e) => gsap.to(e.currentTarget, { backgroundColor: "rgba(248,244,232,0.08)", duration: 0.3 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { backgroundColor: "transparent", duration: 0.3 })}
                style={{ fontFamily: "'Jost', sans-serif" }}
                className="px-8 py-4 border border-[#F8F4E8]/20 text-[#F8F4E8] tracking-[0.15em] uppercase text-xs"
              >
                The Heritage
              </button>
            </div>

            {/* Micro Social Proof */}
            <div className="hero-testimonial flex items-center gap-4 border-t border-[#F8F4E8]/10 pt-8 max-w-sm">
              <div className="flex -space-x-2">
                {[31, 32, 33].map(i => (
                  <div key={i} className="w-7 h-7 rounded-full border border-[#1E3A22] overflow-hidden">
                    <img src={`https://i.pravatar.cc/40?img=${i}`} alt="user review" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#C9A227" className="text-[#C9A227]" />)}
                </div>
                <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#D9E8C7]/50 text-[11px] tracking-wider uppercase mt-0.5">Connoisseur Endorsed</p>
              </div>
            </div>
          </div>

          {/* Right Column: Restructured Split Asymmetrical Grid (7 Cols) */}
          <div className="lg:col-span-7 grid md:grid-cols-12 gap-6 items-stretch relative min-h-[580px]">
            
            {/* Left Deck: Dynamic Focused Product Spotlight */}
            <div className="md:col-span-7 flex flex-col justify-between bg-gradient-to-b from-[#FDFAF1] to-[#F3EFCF] rounded-3xl p-6 shadow-2xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227]/10 rounded-bl-[100px] pointer-events-none" />
              
              <div className="flex justify-between items-start z-10">
                <span style={{ fontFamily: "'Jost', sans-serif" }} className="bg-[#1E3A22] text-[#F8F4E8] text-[9px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles size={8} /> {HERO_PRODUCTS[activeProduct].badge}
                </span>
                <div className="flex items-center gap-1 bg-white/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-black/5">
                  <Star size={10} className="text-[#C9A227] fill-[#C9A227]" />
                  <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#1E3A22] text-[11px] font-bold">{HERO_PRODUCTS[activeProduct].rating}</span>
                </div>
              </div>

              {/* Parallax Mirror Container for Active Image */}
              <div 
                className="my-4 h-64 w-full overflow-hidden rounded-2xl relative transition-transform duration-500 ease-out"
                style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
              >
                <img 
                  src={HERO_PRODUCTS[activeProduct].img} 
                  alt={HERO_PRODUCTS[activeProduct].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="z-10">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#1E3A22] text-2xl font-semibold leading-tight mb-2">
                  {HERO_PRODUCTS[activeProduct].name}
                </h3>
                <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#1E3A22]/70 text-xs line-clamp-2 mb-4">
                  {HERO_PRODUCTS[activeProduct].description}
                </p>

                {/* Micro Benefits Tagging */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {HERO_PRODUCTS[activeProduct].benefits.map((b, idx) => (
                    <span key={idx} className="text-[9px] font-medium tracking-wider text-[#C9A227] bg-[#1E3A22]/5 px-2.5 py-0.5 rounded-md uppercase">
                      {b}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-[#1E3A22]/10 pt-4">
                  <div>
                    <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#1E3A22] text-2xl font-bold">{HERO_PRODUCTS[activeProduct].price}</span>
                    <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#1E3A22]/40 text-xs line-through ml-2">{HERO_PRODUCTS[activeProduct].originalPrice}</span>
                  </div>
                  <button 
                    style={{ fontFamily: "'Jost', sans-serif" }}
                    className="bg-[#1E3A22] text-[#F8F4E8] p-3 rounded-xl hover:bg-[#C9A227] hover:text-[#1E3A22] transition-colors group/btn flex items-center gap-1 text-xs uppercase font-semibold tracking-wider px-4"
                  >
                    Acquire <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Deck: Selective Stack Nav list (5 Cols) */}
            <div className="md:col-span-5 flex flex-col gap-4 justify-center">
              {HERO_PRODUCTS.map((product, idx) => {
                const isSelected = activeProduct === idx;
                return (
                  <div
                    key={idx}
                    ref={el => productRefs.current[idx] = el}
                    onClick={() => setActiveProduct(idx)}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border backdrop-blur-md flex items-center gap-4 ${
                      isSelected 
                        ? 'bg-[#F8F4E8]/15 border-[#C9A227] shadow-xl' 
                        : 'bg-black/10 border-transparent hover:border-[#F8F4E8]/20'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10">
                      <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#F8F4E8] text-base font-medium truncate">
                        {product.name}
                      </h4>
                      <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#C9A227] font-semibold text-xs mt-0.5">
                        {product.price}
                      </p>
                      <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[9px] text-[#D9E8C7]/40 tracking-widest uppercase block mt-1">
                        {product.reviews} reviews
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* Global Scroll Indicator Footer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer scroll-indicator z-10">
        <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#F8F4E8]/30 text-[9px] tracking-[0.5em] uppercase">Scroll to Discover</span>
        <ChevronDown size={14} className="text-[#C9A227]/50" />
      </div>
    </div>
  );
}