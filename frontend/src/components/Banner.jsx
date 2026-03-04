// import React from "react";
// import { assets } from "../assets/assets";
// import { motion } from "framer-motion";

// const Banner = () => {
//   return (
//     <section
//       id="banner"
//       className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-24 mb-6 z-0 scroll-mt-24"
//     >
//       {/* Background Image with subtle zoom animation */}
//       <motion.img
//         src={assets.amc_banner}
//         alt="AMC Banner"
//         className="absolute inset-0 w-full h-full object-cover z-0"
//         initial={{ scale: 1.1, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/40 z-10"></div>

//       {/* Text content */}
//       <motion.div
//         className="relative z-20 text-white px-6 sm:px-10 md:px-20 w-full max-w-5xl text-center"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.3 }}
//       >
//         <motion.p
//           className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           BUILDING TRUST, <br className="sm:hidden" /> DELIVERING RESULTS
//         </motion.p>

//         <motion.p
//           className="text-base sm:text-lg md:text-xl mb-6 text-gray-200"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           Accounting Solutions with Precision
//         </motion.p>

//         <motion.div
//           className="flex flex-col sm:flex-row gap-4 text-sm sm:text-base justify-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
//             <span>🌐</span>
//             <p className="text-gray-100">www.reallygreatsite.com</p>
//           </div>
//           <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
//             <span>📞</span>
//             <p className="text-gray-100">123-456-7890</p>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Banner;
import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="banner"
      className="relative overflow-hidden mt-24 mb-6 scroll-mt-24"
      style={{ minHeight: "78vh" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      {/* Background image with zoom-in */}
      <motion.img
        src={assets.amc_banner}
        alt="AMC Banner"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", zIndex: 0,
        }}
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Layered overlays for depth */}
      {/* Base dark */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(to right, rgba(4,12,35,0.82) 0%, rgba(4,12,35,0.55) 55%, rgba(4,12,35,0.25) 100%)",
      }} />
      {/* Blue tone wash on left */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(110deg, rgba(14,50,140,0.45) 0%, transparent 60%)",
      }} />
      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2,
        height: "35%",
        background: "linear-gradient(to top, rgba(4,12,35,0.6) 0%, transparent 100%)",
      }} />

      {/* Diagonal accent line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute", zIndex: 3,
          top: "50%", left: 0,
          width: "3px", height: "55%",
          transform: "translateY(-50%)",
          marginLeft: "clamp(32px, 8vw, 100px)",
          background: "linear-gradient(to bottom, transparent, #60a5fa, transparent)",
          borderRadius: 99,
          transformOrigin: "top",
        }}
      />

      {/* Main content — left-aligned */}
      <div style={{
        position: "relative", zIndex: 10,
        display: "flex", alignItems: "center",
        minHeight: "78vh",
        padding: "60px clamp(48px, 10vw, 120px)",
      }}>
        <div style={{ maxWidth: 640 }}>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              marginBottom: 24,
            }}
          >
            <div style={{
              width: 36, height: 2,
              background: "linear-gradient(90deg, #60a5fa, #93c5fd)",
              borderRadius: 99,
            }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#93c5fd",
            }}>
              AMC Associates & Co.
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              margin: "0 0 10px",
            }}
          >
            Building Trust,
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              fontWeight: 900,
              fontStyle: "italic",
              lineHeight: 1.05,
              margin: "0 0 28px",
              background: "linear-gradient(90deg, #93c5fd, #bfdbfe)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Delivering Results
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.82 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
              fontWeight: 300,
              color: "rgba(219,234,254,0.85)",
              lineHeight: 1.7,
              marginBottom: 40,
              letterSpacing: "0.02em",
            }}
          >
            Accounting Solutions with Precision — trusted by businesses across every industry.
          </motion.p>

          {/* Contact pills */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 12 }}
          >
            {[
              { icon: "🌐", label: "www.amc-associates.com" },
              { icon: "📞", label: "+63 917 324 4486" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2, background: "rgba(255,255,255,0.18)" }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  padding: "9px 18px",
                  borderRadius: 99,
                  cursor: "default",
                }}
              >
                <span style={{ fontSize: 14 }}>{item.icon}</span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13, fontWeight: 400,
                  color: "rgba(226,240,255,0.9)",
                  letterSpacing: "0.01em",
                }}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 5,
          height: 3,
          background: "linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa, transparent)",
          transformOrigin: "left",
        }}
      />
    </section>
  );
};

export default Banner;
