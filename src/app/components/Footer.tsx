import { motion } from "motion/react";
import { Leaf, Instagram, Facebook, Youtube, Twitter, MapPin, Phone, Mail } from "lucide-react";

const FOOTER_LINKS = {
  "Shop": ["Skin Care", "Hair Care", "Wellness", "Immunity Boosters", "Herbal Juices", "Gift Sets"],
  "Learn": ["Ayurvedic Wisdom", "Ingredient Library", "Wellness Blog", "Beauty Rituals", "FAQs"],
  "Company": ["Our Story", "Farm Partners", "Sustainability", "Press & Awards", "Careers"],
};

export function Footer() {
  return (
    <footer className="bg-[#1E3A22] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />

      {/* Large faded text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18vw", fontWeight: 300 }} className="text-[#F8F4E8]/3 whitespace-nowrap select-none leading-none">
          Green Elixir
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/30 flex items-center justify-center">
              <img src="logo.png" alt="" className="rounded-full object-cover scale-125"/>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#F8F4E8] tracking-[0.15em] uppercase text-base leading-none">Green Elixir</div>
                <div style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#C9A227] tracking-[0.35em] uppercase text-[9px] leading-none mt-0.5">Ayurveda</div>
              </div>
            </div>
            <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#D9E8C7]/40 text-sm leading-relaxed mb-6 max-w-xs">
              Rooted in 5,000 years of Ayurvedic science, crafted for the modern soul. Every product is a sacred ritual of nature's finest gifts.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, color: "#C9A227" }}
                  className="w-9 h-9 rounded-full border border-[#F8F4E8]/15 flex items-center justify-center text-[#F8F4E8]/40 hover:text-[#C9A227] hover:border-[#C9A227]/40 transition-all"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#C9A227] tracking-[0.3em] uppercase text-[10px] mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#D9E8C7]/40 text-xs hover:text-[#C9A227] transition-colors tracking-wide">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="border-t border-[#F8F4E8]/8 pt-8 mb-8">
          <div className="flex flex-wrap gap-6">
            {[
              { Icon: MapPin, text: "14, Ayurveda Gardens, Rishikesh, Uttarakhand 249201" },
              { Icon: Phone, text: "+91 98765 43210" },
              { Icon: Mail, text: "hello@greenelixirayurveda.com" },
            ].map(({ Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2">
                <Icon size={13} className="text-[#C9A227]/60" />
                <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#D9E8C7]/30 text-xs">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#F8F4E8]/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#D9E8C7]/25 text-[10px] tracking-wider">
            © 2026 Green Elixir Ayurveda. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Shipping Policy", "Returns"].map(link => (
              <a key={link} href="#" style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#D9E8C7]/25 text-[10px] hover:text-[#C9A227]/60 transition-colors tracking-wider">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
