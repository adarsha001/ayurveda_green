import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const ITEMS = [
  { name: "Saffron Glow Face Oil", ml: "30ml", price: "₹3,400", img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=360&h=440&fit=crop&auto=format", tag: "Skin" },
  { name: "Bhringraj Hair Mask", ml: "200ml", price: "₹1,200", img: "https://images.unsplash.com/photo-1773527143923-4b2af679c7a6?w=360&h=440&fit=crop&auto=format", tag: "Hair" },
  { name: "Rose Quartz Eye Serum", ml: "15ml", price: "₹2,900", img: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=360&h=440&fit=crop&auto=format", tag: "Eyes" },
  { name: "Chandan Sandalwood Cream", ml: "50ml", price: "₹2,100", img: "https://images.unsplash.com/photo-1779524477261-12141ccbd8d9?w=360&h=440&fit=crop&auto=format", tag: "Skin" },
  { name: "Kesar Lip Butter", ml: "12ml", price: "₹750", img: "https://images.unsplash.com/photo-1777840347880-747242e0db00?w=360&h=440&fit=crop&auto=format", tag: "Lips" },
  { name: "Argan & Amla Hair Serum", ml: "100ml", price: "₹1,650", img: "https://images.unsplash.com/photo-1679394270597-e90694d70350?w=360&h=440&fit=crop&auto=format", tag: "Hair" },
  { name: "Gold Infused Gua Sha Gel", ml: "60ml", price: "₹1,900", img: "https://images.unsplash.com/photo-1776940368278-5b49cc3ed3d1?w=360&h=440&fit=crop&auto=format", tag: "Skin" },
];

export function BeautyCarousel() {
  const [index, setIndex] = useState(0);
  const [wished, setWished] = useState<Record<number, boolean>>({});
  const maxIndex = Math.max(0, ITEMS.length - 4);

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  return (
    <section className="py-24 bg-[#F8F4E8] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-[#C9A227]/60" />
              <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#C9A227] tracking-[0.4em] uppercase text-xs">Beauty Essentials</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300 }} className="text-[#27492D]">
              Your Daily Ritual
            </h2>
          </div>
          <div className="flex gap-3">
            <motion.button
              onClick={() => setIndex(i => Math.max(0, i - 1))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!canPrev}
              className="w-11 h-11 rounded-full border border-[#355E3B]/30 flex items-center justify-center text-[#355E3B] disabled:opacity-30 hover:bg-[#355E3B] hover:text-[#F8F4E8] transition-all"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              onClick={() => setIndex(i => Math.min(maxIndex, i + 1))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!canNext}
              className="w-11 h-11 rounded-full border border-[#355E3B]/30 flex items-center justify-center text-[#355E3B] disabled:opacity-30 hover:bg-[#355E3B] hover:text-[#F8F4E8] transition-all"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-5"
            animate={{ x: `-${index * (260 + 20)}px` }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
          >
            {ITEMS.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="min-w-[240px] sm:min-w-[260px] bg-[#FDFAF1] group cursor-pointer rounded-sm overflow-hidden"
                style={{ boxShadow: "0 4px 30px rgba(39,73,45,0.07)", flexShrink: 0 }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#EBF0E0]">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3">
                    <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[9px] tracking-wider uppercase bg-[#27492D] text-[#F8F4E8] px-2 py-1">
                      {item.tag}
                    </span>
                  </div>
                  <motion.button
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#F8F4E8]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => setWished(w => ({ ...w, [i]: !w[i] }))}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart size={13} fill={wished[i] ? "#C9A227" : "none"} className={wished[i] ? "text-[#C9A227]" : "text-[#355E3B]"} />
                  </motion.button>
                </div>
                <div className="p-4">
                  <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#5A7A60] text-[10px] tracking-widest uppercase mb-1">{item.ml}</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#27492D] text-base leading-tight mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#C9A227] text-lg">{item.price}</span>
                    <button style={{ fontFamily: "'Jost', sans-serif", background: "linear-gradient(135deg, #355E3B, #27492D)" }} className="text-[#F8F4E8] text-[10px] tracking-widest uppercase px-3 py-1.5">
                      Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-[#C9A227]" : "w-2 bg-[#D9E8C7]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
