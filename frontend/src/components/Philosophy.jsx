import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

const Philosophy = () => {
  // Animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section
  id="philosophy"
  className="min-h-screen flex items-center bg-gray-100 py-16 md:py-24 overflow-hidden px-[30px] md:px-[120px]"
>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* ✅ Left: Image with zoom-in */}
        <motion.div
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative md:w-1/2 w-full group"
        >
          <motion.img
            src={assets.amc_image}
            alt="Philosophy"
            className="w-full h-auto rounded-3xl shadow-lg object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          <motion.div
            className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-left"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-xs text-gray-200">Since</span>
            <div className="text-3xl font-bold text-white">2002</div>
          </motion.div>
        </motion.div>

        {/* ✅ Right: Text fade-in from right */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2 w-full"
        >
          <motion.p
            className="text-[#880000] font-semibold uppercase tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About us
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Philosophy
          </motion.h2>

          <motion.p
            className="text-black-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We dedicate ourselves to providing superior and high-quality
            services of audit, accounting, tax, and business process
            outsourcing in a timely, effective, and efficient manner maintaining
            the highest standards of professional integrity. We consider our
            responsibility to embrace responsiveness to our client’s
            requirements for their business, special opportunities, and
            challenges that confront them. We foster an enjoyable working
            environment through open communication, mutual respect, teamwork,
            continuous innovation, and loyalty to perform our tradition of
            services and leadership.
          </motion.p>

          <motion.a
            href="about"
            className="text-[#000099] font-semibold flex items-center gap-2 hover:gap-4 transition-all duration-300 cursor-pointer"
            
          >
            Know more about us
            <IoIosArrowRoundForward className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
