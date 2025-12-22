import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../assets/assets";

const Hero = () => {
  const bgImages = [
    assets.bg2, 
    assets.amc_wallpaper, 
    assets.amc_wallpaper2
  ];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showArrows, setShowArrows] = useState(true);

  // ✅ Auto change background every 6s
  useEffect(() => {
    const interval = setInterval(() => nextImage(), 20000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Auto-hide arrows after 3s
  useEffect(() => {
    const timer = setTimeout(() => setShowArrows(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const nextImage = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % bgImages.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + bgImages.length) % bgImages.length);
  };

  // ✅ Show arrows again when user interacts
  const handleUserInteraction = () => {
    setShowArrows(true);
    clearTimeout(window.arrowTimeout);
    window.arrowTimeout = setTimeout(() => setShowArrows(false), 3000);
  };

  return (
    <section
      id="home"
      onMouseMove={handleUserInteraction}
      onTouchStart={handleUserInteraction}
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={current}
            src={bgImages[current]}
            alt="Background Image"
            custom={direction}
            initial={{ opacity: 0, scale: 1.05, x: direction > 0 ? 50 : -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.05, x: direction > 0 ? -50 : 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-[center_30%] z-0"
          />
        </AnimatePresence>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Text Content */}
      <div className="relative z-20 w-full py-16 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 items-center">
            <div>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="font-playfair text-5xl lg:text-7xl font-bold text-white leading-tight mb-4"
              >
                We take your Business <br /> Personally
              </motion.h1>

              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-white text-md font-medium leading-relaxed max-w-3xl mt-4"
              >
                Behind these few words is a way of delivering professional
                service that amounts to a way of life. <br /> Our personal
                commitment to our clients makes a direct contribution to our
                professional excellence. <br /> It is the foundation for the
                trust and business insights that allow us to serve clients
                effectively now and in the future.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showArrows ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={prevImage}
        className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showArrows ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={nextImage}
        className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {bgImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;


