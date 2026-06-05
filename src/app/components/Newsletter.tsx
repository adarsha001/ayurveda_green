import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Leaf, Send, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-[#F8F4E8] relative overflow-hidden">
      {/* Botanical illustration bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1665479754958-1a8bdc47cc0d?w=1800&h=600&fit=crop&auto=format")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "sepia(100%)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4E8] via-[#F8F4E8]/80 to-[#F8F4E8]" />

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#355E3B]/10 border border-[#355E3B]/20 flex items-center justify-center">
            <Leaf size={24} className="text-[#355E3B]" />
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#C9A227]/60" />
            <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#C9A227] tracking-[0.4em] uppercase text-xs">Wellness Circle</span>
            <div className="h-px w-16 bg-[#C9A227]/60" />
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300 }} className="text-[#27492D] mb-4">
            Join the Green Elixir Family
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#5A7A60] text-sm leading-relaxed mb-8">
            Subscribe for exclusive wellness rituals, Ayurvedic wisdom, seasonal skincare guides, and early access to new launches. Plus — 15% off your first order.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex gap-0 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                  className="flex-1 bg-white border border-[#355E3B]/20 px-5 py-4 text-sm text-[#27492D] placeholder-[#5A7A60]/40 outline-none focus:border-[#C9A227]/60 transition-colors"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ fontFamily: "'Jost', sans-serif", background: "linear-gradient(135deg, #355E3B, #27492D)" }}
                  className="flex items-center gap-2 px-6 text-[#F8F4E8] text-xs tracking-widest uppercase whitespace-nowrap"
                >
                  <Send size={12} />
                  Subscribe
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 py-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#355E3B] flex items-center justify-center">
                  <Check size={18} className="text-[#F8F4E8]" />
                </div>
                <div className="text-left">
                  <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#27492D] text-lg">Welcome to the family!</p>
                  <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#5A7A60] text-xs">Check your inbox for your 15% discount code.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#5A7A60]/40 text-[10px] tracking-wider mt-4">
            No spam, ever. Unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
