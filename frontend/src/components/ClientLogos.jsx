import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const logos = [
  "/logos/bir-icons.png",
  "/logos/bsp-logonew.png",
  "/logos/CDA-logo-RA11364-PNG.png",
  "/logos/IC-logo-white-1.png",
  "/logos/SEC-logo.png",
 
];

const itemWidth = 200; // px width of each logo
const gap = 24; // gap between logos in px

const ClientCarousel = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const totalWidth = logos.length * (itemWidth + gap);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: [-totalWidth, 0], // animate from right to left
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, isHovered, totalWidth]);

  return (
    <section className="min-h-[40vh] max-w-7xl mx-auto px-4 mt-20 bg-[]">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Firm Accreditation
      </h2>

      <div
        className="overflow-hidden relative w-full h-[120px]"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0))",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={controls}
          className="flex space-x-6 absolute left-0 top-0 h-[120px]"
          style={{ width: totalWidth * 2 }}
        >
          {logos.concat(logos).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`client logo ${i + 1}`}
              draggable={false}
              className="h-[100px] object-contain select-none rounded-md"
              style={{ width: itemWidth }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientCarousel;
