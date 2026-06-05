import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    name: "Skin Care",
    subtitle: "Radiant glow rituals",
    count: "42 Products",
    img: "https://images.unsplash.com/photo-1779117691346-5de09d89a73f?w=500&h=650&fit=crop&auto=format",
    color: "#D9E8C7",
  },
  {
    name: "Hair Care",
    subtitle: "Ancient hair secrets",
    count: "28 Products",
    img: "https://images.unsplash.com/photo-1778765412357-1716ca013509?w=500&h=650&fit=crop&auto=format",
    color: "#EBF0E0",
  },
  {
    name: "Wellness",
    subtitle: "Balance from within",
    count: "36 Products",
    img: "https://images.unsplash.com/photo-1767350510090-137a6ce252c0?w=500&h=650&fit=crop&auto=format",
    color: "#F0EDD8",
  },
  {
    name: "Immunity",
    subtitle: "Strengthen & protect",
    count: "19 Products",
    img: "https://images.unsplash.com/photo-1724913172641-e528a0cc9ec6?w=500&h=650&fit=crop&auto=format",
    color: "#D9E8C7",
  },
  {
    name: "Juices",
    subtitle: "Pure botanical blends",
    count: "14 Products",
    img: "https://images.unsplash.com/photo-1708868746661-a79fedc5d185?w=500&h=650&fit=crop&auto=format",
    color: "#EBF0E0",
  },
];

export function Categories() {
  return (
    <section className="py-24 bg-[#F8F4E8] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-[#C9A227]/60" />
              <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#C9A227] tracking-[0.4em] uppercase text-xs">Collections</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300 }} className="text-[#27492D]">
              Explore Our World
            </h2>
          </div>
          <motion.a
            href="#"
            style={{ fontFamily: "'Jost', sans-serif" }}
            className="flex items-center gap-2 text-[#355E3B] tracking-widest uppercase text-xs hover:text-[#C9A227] transition-colors"
            whileHover={{ x: 4 }}
          >
            View All <ArrowRight size={14} />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group cursor-pointer"
            >
              {/* Image container */}
              <div className="relative overflow-hidden rounded-sm mb-4 aspect-[3/4]">
                <motion.img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#27492D]/60 via-transparent to-transparent" />

                {/* Count badge */}
                <div className="absolute top-3 right-3">
                  <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#F8F4E8]/80 text-[9px] tracking-wider uppercase bg-[#27492D]/60 backdrop-blur-sm px-2 py-1">
                    {cat.count}
                  </span>
                </div>

                {/* Hover CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <span style={{ fontFamily: "'Jost', sans-serif", background: "linear-gradient(135deg, #C9A227, #A8841F)" }} className="text-[#F8F4E8] text-xs tracking-widest uppercase px-4 py-2">
                    Shop Now
                  </span>
                </motion.div>
              </div>

              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#27492D] text-xl group-hover:text-[#355E3B] transition-colors">
                {cat.name}
              </h3>
              <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#5A7A60] text-xs tracking-wider">
                {cat.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
