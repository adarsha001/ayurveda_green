import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { MandalaBackground } from "./MandalaBackground";

const PRODUCTS = [
  { name: "Kumkumadi Brightening Face Elixir", category: "Skin Care", price: "₹2,850", originalPrice: "₹3,200", rating: 5, reviews: 284, img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=620&fit=crop&auto=format", badge: "Bestseller" },
  { name: "Rose & Sandalwood Glow Serum", category: "Skin Care", price: "₹3,200", rating: 4.8, reviews: 196, img: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=500&h=620&fit=crop&auto=format", badge: "New" },
  { name: "Ashwagandha Root Night Oil", category: "Wellness", price: "₹2,100", originalPrice: "₹2,500", rating: 4.9, reviews: 312, img: "https://images.unsplash.com/photo-1679394270597-e90694d70350?w=500&h=620&fit=crop&auto=format", badge: "Award Winning" },
  { name: "Neem & Turmeric Purifying Mask", category: "Skin Care", price: "₹1,650", rating: 4.7, reviews: 428, img: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=500&h=620&fit=crop&auto=format" },
  { name: "Brahmi Hair Growth Elixir", category: "Hair Care", price: "₹1,980", originalPrice: "₹2,200", rating: 4.9, reviews: 567, img: "https://images.unsplash.com/photo-1613803745799-ba6c10aace85?w=500&h=620&fit=crop&auto=format", badge: "Bestseller" },
  { name: "Amla Vitamin C Brightening Toner", category: "Skin Care", price: "₹1,450", rating: 4.6, reviews: 203, img: "https://images.unsplash.com/photo-1638609927093-fc8ac17d3295?w=500&h=620&fit=crop&auto=format" },
  { name: "Saffron & Gold Eye Cream", category: "Skin Care", price: "₹3,800", originalPrice: "₹4,200", rating: 5, reviews: 89, img: "https://images.unsplash.com/photo-1779524477261-12141ccbd8d9?w=500&h=620&fit=crop&auto=format", badge: "Luxury" },
  { name: "Chyawanprash Immunity Booster", category: "Immunity", price: "₹899", rating: 4.8, reviews: 1243, img: "https://images.unsplash.com/photo-1777694037031-18460ee6c940?w=500&h=620&fit=crop&auto=format", badge: "Bestseller" },
];

export function BestSellers() {
  return (
    <section className="py-24 bg-[#F8F4E8] relative overflow-hidden">
      <MandalaBackground />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-[#C9A227]/60" />
              <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#C9A227] tracking-[0.4em] uppercase text-xs">Best Sellers</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300 }} className="text-[#27492D]">
              Most Loved Formulas
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#5A7A60] text-sm mt-2 max-w-md">
              Trusted by thousands — our most-loved Ayurvedic formulations for radiant skin, lustrous hair, and inner wellness.
            </p>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={i} {...product} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
