import { motion } from "motion/react";
import { Instagram } from "lucide-react";

const GALLERY = [
  { img: "https://images.unsplash.com/photo-1779117691346-5de09d89a73f?w=400&h=400&fit=crop&auto=format", likes: "1.2k" },
  { img: "https://images.unsplash.com/photo-1761926783705-61fb59d80c98?w=400&h=400&fit=crop&auto=format", likes: "892" },
  { img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop&auto=format", likes: "2.1k" },
  { img: "https://images.unsplash.com/photo-1767350510090-137a6ce252c0?w=400&h=400&fit=crop&auto=format", likes: "3.4k" },
  { img: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=400&h=400&fit=crop&auto=format", likes: "1.8k" },
  { img: "https://images.unsplash.com/photo-1724913172641-e528a0cc9ec6?w=400&h=400&fit=crop&auto=format", likes: "745" },
];

export function InstagramGallery() {
  return (
    <section className="py-24 bg-[#27492D] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram size={16} className="text-[#C9A227]" />
            <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#C9A227] tracking-[0.4em] uppercase text-xs">@greenelixirayurveda</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300 }} className="text-[#F8F4E8]">
            Follow Our Journey
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#D9E8C7]/50 text-sm mt-2">
            Share your Green Elixir ritual with <span className="text-[#C9A227]">#GreenElixirLife</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {GALLERY.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer"
            >
              <img src={item.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#27492D]/0 group-hover:bg-[#27492D]/50 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-1"
                >
                  <Instagram size={20} className="text-[#F8F4E8]" />
                  <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#F8F4E8] text-xs">♥ {item.likes}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <motion.a
            href="#"
            style={{ fontFamily: "'Jost', sans-serif" }}
            className="inline-flex items-center gap-2 border border-[#C9A227]/40 text-[#C9A227] px-8 py-3 tracking-widest uppercase text-xs hover:bg-[#C9A227]/10 transition-colors"
            whileHover={{ scale: 1.03 }}
          >
            <Instagram size={13} />
            Follow on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
