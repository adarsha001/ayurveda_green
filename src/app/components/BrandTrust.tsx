import { motion } from "motion/react";
import { Leaf, Award, Users } from "lucide-react";

const PILLARS = [
  {
    icon: Leaf,
    number: "100%",
    title: "Natural Ingredients",
    desc: "Every formulation uses pure, unadulterated botanicals sourced directly from certified organic farms across India.",
  },
  {
    icon: Award,
    number: "5000+",
    title: "Ayurvedic Experts",
    desc: "Developed in collaboration with qualified Ayurvedic practitioners and traditional Vaidyas with decades of expertise.",
  },
  {
    icon: Users,
    number: "50K+",
    title: "Happy Customers",
    desc: "Trusted by over fifty thousand wellness seekers across the globe who have transformed their skin and health naturally.",
  },
];

export function BrandTrust() {
  return (
    <section className="py-24 bg-[#27492D] relative overflow-hidden">
      {/* Top border decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25% 50%, #C9A227 1px, transparent 1px), radial-gradient(circle at 75% 50%, #C9A227 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#C9A227]/40" />
            <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#C9A227] tracking-[0.4em] uppercase text-xs">
              Our Promise
            </span>
            <div className="h-px w-16 bg-[#C9A227]/40" />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300 }} className="text-[#F8F4E8]">
            Why Green Elixir?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 flex items-center justify-center group-hover:bg-[#C9A227]/20 transition-colors duration-500 relative">
                  <Icon size={28} className="text-[#C9A227]" />
                  <div className="absolute inset-0 rounded-full border border-[#C9A227]/10 scale-110 group-hover:scale-125 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300 }} className="text-[#C9A227] leading-none mb-2">
                  {pillar.number}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#F8F4E8] text-xl mb-3">
                  {pillar.title}
                </h3>
                <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#D9E8C7]/50 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />
    </section>
  );
}
