import { useState } from "react";
import { motion } from "motion/react";
import { Heart, ShoppingBag, Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  img: string;
  badge?: string;
  delay?: number;
}

export function ProductCard({ name, category, price, originalPrice, rating, reviews, img, badge, delay = 0 }: ProductCardProps) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative bg-[#FDFAF1] rounded-sm overflow-hidden cursor-pointer"
      style={{ boxShadow: "0 4px 30px rgba(39,73,45,0.08)" }}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span style={{ fontFamily: "'Jost', sans-serif", background: badge === "New" ? "linear-gradient(135deg, #355E3B, #27492D)" : "linear-gradient(135deg, #C9A227, #A8841F)" }} className="text-[#F8F4E8] text-[9px] tracking-[0.2em] uppercase px-2.5 py-1">
            {badge}
          </span>
        </div>
      )}

      {/* Wishlist */}
      <motion.button
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#F8F4E8]/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => setWished(!wished)}
        whileTap={{ scale: 0.9 }}
      >
        <Heart size={14} fill={wished ? "#C9A227" : "none"} className={wished ? "text-[#C9A227]" : "text-[#355E3B]"} />
      </motion.button>

      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden bg-[#EBF0E0]">
        <motion.img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#5A7A60] text-[10px] tracking-[0.3em] uppercase mb-1">{category}</p>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#27492D] text-lg leading-tight mb-2">{name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={10} fill={i < Math.floor(rating) ? "#C9A227" : "none"} className={i < Math.floor(rating) ? "text-[#C9A227]" : "text-[#D9E8C7]"} />
            ))}
          </div>
          <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#5A7A60] text-[10px]">({reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#C9A227] text-xl">{price}</span>
            {originalPrice && <span style={{ fontFamily: "'Jost', sans-serif" }} className="text-[#5A7A60] text-xs line-through">{originalPrice}</span>}
          </div>

          <motion.button
            onClick={handleAdd}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: "'Jost', sans-serif", background: added ? "linear-gradient(135deg, #355E3B, #27492D)" : "linear-gradient(135deg, #C9A227, #A8841F)" }}
            className="flex items-center gap-1.5 px-3 py-2 text-[#F8F4E8] text-[10px] tracking-widest uppercase transition-all duration-300"
          >
            <ShoppingBag size={11} />
            {added ? "Added!" : "Add"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
