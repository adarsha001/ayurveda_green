import { motion } from "motion/react";
import { Leaf, FlaskConical, Recycle, Truck, Shield, Sprout } from "lucide-react";

const REASONS = [
  { icon: Leaf, title: "100% Pure Botanicals", desc: "No parabens, sulphates, or synthetic fragrances. Every formula is free from harmful chemicals." },
  { icon: FlaskConical, title: "Lab Tested & Certified", desc: "Each batch undergoes rigorous dermatological and toxicological testing for safety and efficacy." },
  { icon: Recycle, title: "Sustainably Packaged", desc: "Eco-conscious glass and biodegradable packaging to minimise our environmental footprint." },
  { icon: Truck, title: "Express Delivery", desc: "Luxury packaging with temperature-controlled delivery to preserve product integrity." },
  { icon: Shield, title: "Cruelty Free", desc: "No animal testing, ever. Certified by PETA and endorsed by leading animal welfare organisations." },
  { icon: Sprout, title: "Farm-to-Bottle", desc: "Direct partnerships with organic farmers ensure fresh, potent ingredients at every step." },
];

export function WhyUs() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1E3A22 0%, #27492D 50%, #2D5234 100%)" }}>
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 40px)",
      }} />

      {/* Decorative large circle */}
      <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C9A227]/8 pointer-events-none" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#C9A227]/8 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + Accent */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1760621393386-3906922b0b78?w=700&h=875&fit=crop&auto=format"
                alt="Green Elixir Ayurveda"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#27492D]/40 via-transparent to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-[#F8F4E8] p-6 shadow-2xl"
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 300 }} className="text-[#C9A227] leading-none">15</div>
              <div style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#355E3B] text-xs tracking-widest uppercase mt-1">Years of<br />Excellence</div>
            </motion.div>
          </motion.div>

          {/* Right: Reasons */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-[#C9A227]/60" />
                <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#C9A227] tracking-[0.4em] uppercase text-xs">Our Commitment</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300 }} className="text-[#F8F4E8]">
                Why Choose<br />Green Elixir?
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {REASONS.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full border border-[#C9A227]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227]/15 transition-colors duration-300">
                      <Icon size={16} className="text-[#C9A227]" />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#F8F4E8] text-base mb-1">{r.title}</h4>
                      <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#D9E8C7]/50 text-xs leading-relaxed">{r.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
