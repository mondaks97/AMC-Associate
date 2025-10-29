import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative mt-24 mb-20 z-0">
      <div className="relative h-[50vh] md:h-[70vh] max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-lg">
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
          className="absolute z-20 text-white px-6 sm:px-10 md:px-20 top-1/2 -translate-y-1/2 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.p
            className="font-montserrat text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            YOUR VISION, <br className="sm:hidden" /> OUR MISSION
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Where Technology Meets Excellence
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 text-sm sm:text-base"
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
      </div>
    </section>
  );
};

export default Banner;





// import React, { useRef, useEffect } from "react";

// const Banner = () => {
//   const videoRef = useRef(null);
//   const bannerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         const video = videoRef.current;
//         if (video) {
//           if (entry.isIntersecting) {
//             video.play().catch(() => {}); // in case autoplay is blocked
//           } else {
//             video.pause();
//           }
//         }
//       },
//       {
//         threshold: 0.6, // play when 60% of the banner is visible
//       }
//     );

//     if (bannerRef.current) {
//       observer.observe(bannerRef.current);
//     }

//     return () => {
//       if (bannerRef.current) {
//         observer.unobserve(bannerRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={bannerRef}
//       className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gray-100"
//     >
//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         className="absolute inset-0 w-full h-full object-cover"
//         playsInline
//         loop
//       >
//         <source src="" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black opacity-40"></div>

//       {/* Optional Content */}
//       <div className="relative z-10 text-white text-center px-6">
//         <h1 className="text-4xl text-white-500 md:text-5xl font-bold">
//           Start your success
//           <br />
//           journey with us today.
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Banner;
