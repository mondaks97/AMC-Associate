import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="banner"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-24 mb-6 z-0 scroll-mt-24"
    >
      {/* Background Image with subtle zoom animation */}
      <motion.img
        src={assets.amc_banner}
        alt="AMC Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Text content */}
      <motion.div
        className="relative z-20 text-white px-6 sm:px-10 md:px-20 w-full max-w-5xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.p
          className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          BUILDING TRUST, <br className="sm:hidden" /> DELIVERING RESULTS
        </motion.p>

        <motion.p
          className="text-base sm:text-lg md:text-xl mb-6 text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Accounting Solutions with Precision
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 text-sm sm:text-base justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
            <span>🌐</span>
            <p className="text-gray-100">www.reallygreatsite.com</p>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
            <span>📞</span>
            <p className="text-gray-100">123-456-7890</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
