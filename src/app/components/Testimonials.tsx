import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    title: "Wellness Enthusiast, Mumbai",
    review: "The Kumkumadi Elixir has completely transformed my skin. After 3 weeks of use, my hyperpigmentation faded visibly and my complexion glows like never before. Truly Ayurvedic magic in a bottle.",
    rating: 5,
    product: "Kumkumadi Face Elixir",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    name: "Anjali Menon",
    title: "Yoga Instructor, Bangalore",
    review: "I've tried every high-end skincare brand, but nothing compares to Green Elixir's purity. The Rose & Sandalwood Serum smells divine and my skin has never felt so nourished and balanced.",
    rating: 5,
    product: "Rose & Sandalwood Serum",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    name: "Kavita Nair",
    title: "Holistic Health Coach, Delhi",
    review: "The Brahmi Hair Elixir is absolutely exceptional. I'd been struggling with hair fall for years and within 6 weeks I noticed significant regrowth. The formulation is both sacred and scientific.",
    rating: 5,
    product: "Brahmi Hair Elixir",
    avatar: "https://i.pravatar.cc/80?img=45",
  },
  {
    name: "Deepika Rao",
    title: "Dermatologist, Pune",
    review: "As a dermatologist, I am highly selective about products I recommend. Green Elixir's Neem & Turmeric Mask is one of the few natural formulations I prescribe to patients with acne-prone skin.",
    rating: 5,
    product: "Neem & Turmeric Mask",
    avatar: "https://i.pravatar.cc/80?img=38",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (i: number) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  const t = TESTIMONIALS[active];

  return (
    <section className="py-24 bg-[#F8F4E8] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D9E8C7]/30 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#C9A227]/60" />
            <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#C9A227] tracking-[0.4em] uppercase text-xs">Testimonials</span>
            <div className="h-px w-16 bg-[#C9A227]/60" />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300 }} className="text-[#27492D]">
            Voices of Transformation
          </h2>
        </motion.div>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <Quote size={40} className="text-[#C9A227]/30 mx-auto mb-6" />
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)", fontWeight: 300 }} className="text-[#27492D] leading-relaxed italic mb-8">
                "{t.review}"
              </p>

              <div className="flex items-center justify-center gap-4 mb-3">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-[#C9A227]/30 object-cover" />
                <div className="text-left">
                  <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#27492D] text-lg">{t.name}</p>
                  <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#5A7A60] text-xs tracking-wider">{t.title}</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="#C9A227" className="text-[#C9A227]" />
                ))}
              </div>
              <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#5A7A60] text-xs tracking-widest uppercase">
                Re: {t.product}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button onClick={() => goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="w-10 h-10 rounded-full border border-[#355E3B]/30 flex items-center justify-center text-[#355E3B] hover:bg-[#355E3B] hover:text-[#F8F4E8] transition-all">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-[#C9A227]" : "w-2 bg-[#D9E8C7]"}`}
                />
              ))}
            </div>
            <button onClick={() => goTo((active + 1) % TESTIMONIALS.length)} className="w-10 h-10 rounded-full border border-[#355E3B]/30 flex items-center justify-center text-[#355E3B] hover:bg-[#355E3B] hover:text-[#F8F4E8] transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Avatar strip */}
        <div className="flex justify-center gap-4 mt-12">
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              whileHover={{ scale: 1.08 }}
              className={`transition-all duration-300 ${i === active ? "ring-2 ring-[#C9A227] ring-offset-2 ring-offset-[#F8F4E8]" : "opacity-50"}`}
            >
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
