import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const slides = [
  {
    title: "Divinity in Design.",
    subtitle: "Tradition in Stone",
    description:
      "The Sthapathya Veda Research Foundation (SVRF) is dedicated to preserving and reviving the timeless wisdom of Vedic architecture.",
    image: "/hero-img.jpg", // Replace with your image path
  },
  {
    title: "Ancient Wisdom.",
    subtitle: "Modern Relevance",
    description:
      "Bridging tradition and modernity, ensuring sacred design principles inspire future generations.",
    image: "/hero-img4.jpg",
  },
  {
    title: "Sacred Architecture.",
    subtitle: "Cultural Heritage",
    description:
      "Conducting research, education, and practice in the field of Indian temple architecture.",
    image: "/about-us.jpg",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: any) => setCurrentSlide(index);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-24"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }}
    >
      {/* Top Border Image */}
      <div className="absolute -top-0  w-full z-30 mt-1">
        <img
          src="/navborder.png"
          alt="Top Border"
          className="w-full object-cover"
        />
      </div>

      {/* Overlay for soft tint */}
      <div className="absolute inset-0 bg-[#b7a678]/30"></div>     
 {/*   */}
      {/* Text content */}
      <div className="relative z-10 text-center text-[#3a3020] px-4">
        <h3 className="text-2xl md:text-3xl font-serif uppercase tracking-wide text-[#ffffff] mb-3">
          {slides[currentSlide].title}
        </h3>

        <h1 className="text-4xl md:text-6xl font-serif font-bold uppercase mb-6 text-[#494433]">
          {slides[currentSlide].subtitle}
        </h1>

        <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 text-[#ffffff]">
          {slides[currentSlide].description}
        </p>

        <button className="bg-[#4a3820] hover:bg-[#5a4830] text-white px-8 py-3 rounded-full uppercase text-sm tracking-wider transition-colors shadow-md">
          Read More
        </button>

        {/* Slider dots */}
        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-[#4a3820]" : "bg-[#8a7a60]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Social Icons (bottom right) */}
      <div className="absolute right-6 bottom-10 flex flex-col gap-4 z-10">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-[#4a3820] hover:bg-[#5a4830] text-white flex items-center justify-center rounded-full shadow-md transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </a>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-[#4a3820] hover:bg-[#5a4830] text-white flex items-center justify-center rounded-full shadow-md transition-colors"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={22} />
        </a>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#6a5a48]/80 hover:bg-[#6a5a48] text-white p-2 rounded-full transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#6a5a48]/80 hover:bg-[#6a5a48] text-white p-2 rounded-full transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>
       <div className="absolute bottom-0 w-full z-10" style={{ marginBottom: "-5px" }}>
          <img src="/heroborder.png" alt="Bottom Border" className="w-full object-cover" />
        </div>
    </section>
  );
};

export default HeroSlider;
