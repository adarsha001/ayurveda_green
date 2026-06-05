import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Search, User, Heart, ShoppingBag, Menu, X, Leaf } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(2);
  const [logoError, setLogoError] = useState(false);
  
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    
    // Initial navbar animation
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu animations
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      
      // Animate overlay
      if (overlayRef.current) {
        gsap.fromTo(overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.out" }
        );
      }
      
      // Animate drawer
      if (mobileMenuRef.current) {
        gsap.fromTo(mobileMenuRef.current,
          { x: "100%" },
          { x: 0, duration: 0.5, ease: "back.out(0.8)" }
        );
      }
      
      // Animate mobile nav links with stagger
      const links = document.querySelectorAll('.mobile-nav-link');
      gsap.fromTo(links,
        { opacity: 0, x: 20 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.4,
          stagger: 0.07,
          ease: "power2.out",
          delay: 0.2
        }
      );
    } else {
      document.body.style.overflow = 'unset';
      
      // Close animations
      if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            if (overlayRef.current) {
              gsap.set(overlayRef.current, { opacity: 0 });
            }
          }
        });
      }
      
      if (overlayRef.current) {
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
      }
    }
  }, [menuOpen]);

  const navLinks = ["Collections", "Skin Care", "Hair Care", "Wellness", "Ingredients", "Our Story"];

  // Button hover animations
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>, isHovering: boolean) => {
    const btn = e.currentTarget;
    if (isHovering) {
      gsap.to(btn, { scale: 1.1, color: "#C9A227", duration: 0.2 });
    } else {
      gsap.to(btn, { scale: 1, color: "#F8F4E8", duration: 0.2 });
    }
  };

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, isHovering: boolean) => {
    const link = e.currentTarget;
    if (isHovering) {
      gsap.to(link, { y: -1, color: "#C9A227", duration: 0.2 });
    } else {
      gsap.to(link, { y: 0, color: "#F8F4E8", duration: 0.2 });
    }
  };

  const handleLogoHover = (isHovering: boolean) => {
    const logo = document.querySelector('.logo-container');
    if (logo) {
      gsap.to(logo, { scale: isHovering ? 1.02 : 1, duration: 0.2 });
    }
  };

  const handleMenuTap = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
    setMenuOpen(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#27492D]/90 backdrop-blur-xl shadow-lg shadow-[#27492D]/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <div
            className="logo-container flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => handleLogoHover(true)}
            onMouseLeave={() => handleLogoHover(false)}
          >
            <div className="w-24 h-24 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/40 flex items-center justify-center overflow-hidden">
              {!logoError ? (
                <img 
                  src="/logo.png" 
                  alt="Green Elixir Logo" 
                  className="w-full h-full object-cover"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <Leaf size={14} className="text-[#C9A227]" />
              )}
            </div>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#F8F4E8] ml-2.5 tracking-[0.15em] uppercase text-sm leading-none">
                Green Elixir
              </div>
              <div style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#C9A227] tracking-[0.35em] uppercase text-[9px] leading-none mt-0.5">
                Ayurveda
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                style={{ fontFamily: "'Jost', sans-serif" }}
                className="text-[#F8F4E8]/80 hover:text-[#C9A227] transition-colors duration-300 text-sm tracking-widest uppercase"
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {[Search, User, Heart].map((Icon, i) => (
              <button
                key={i}
                className="hidden md:flex text-[#F8F4E8]/80 hover:text-[#C9A227] transition-colors"
                onMouseEnter={(e) => handleButtonHover(e, true)}
                onMouseLeave={(e) => handleButtonHover(e, false)}
              >
                <Icon size={18} />
              </button>
            ))}
            <button
              className="relative text-[#F8F4E8]/80 hover:text-[#C9A227] transition-colors"
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
            >
              <ShoppingBag size={18} />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#C9A227] text-[#27492D] rounded-full text-[9px] flex items-center justify-center" style={{ fontFamily: "'Jost', sans-serif" }}>
                {cartCount}
              </span>
            </button>
            <button
              className="lg:hidden text-[#F8F4E8]"
              onClick={handleMenuTap}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <>
          <div
            ref={overlayRef}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={closeMenu}
          />
          <div
            ref={mobileMenuRef}
            className="fixed top-0 right-0 bottom-0 w-72 bg-[#27492D] z-50 lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-[#F8F4E8]/10">
              <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#F8F4E8] text-xl tracking-widest uppercase">Menu</span>
              <button onClick={closeMenu} className="text-[#F8F4E8]">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-6 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="mobile-nav-link text-[#F8F4E8]/80 hover:text-[#C9A227] transition-colors text-sm tracking-[0.25em] uppercase border-b border-[#F8F4E8]/10 pb-4"
                  style={{ fontFamily: "'Jost', sans-serif", opacity: 0 }}
                  onClick={closeMenu}
                >
                  {link}
                </a>
              ))}
            </nav>
            <div className="p-6 flex gap-6">
              {[Search, User, Heart, ShoppingBag].map((Icon, i) => (
                <button key={i} className="text-[#F8F4E8]/60 hover:text-[#C9A227]">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}