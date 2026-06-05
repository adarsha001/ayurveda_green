import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrandTrust } from "./components/BrandTrust";
import { Categories } from "./components/Categories";
import { BestSellers } from "./components/BestSellers";
import { Ingredients } from "./components/Ingredients";
import { BeautyCarousel } from "./components/BeautyCarousel";
import { WhyUs } from "./components/WhyUs";
import { Testimonials } from "./components/Testimonials";
import { InstagramGallery } from "./components/InstagramGallery";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#F8F4E8] overflow-x-hidden" style={{ fontFamily: "'Jost', sans-serif" }}>
      <Navbar />
      <Hero />
      <BrandTrust />
      <Categories />
      <BestSellers />
      <Ingredients />
      <BeautyCarousel />
      <WhyUs />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
      <Footer />
    </div>
  );
}
