// import { assets } from "../assets/assets";
// import { motion } from "framer-motion";
// import { IoIosArrowRoundForward } from "react-icons/io";

// const Philosophy = () => {
//   // Animation variants
//   const fadeInLeft = {
//     hidden: { opacity: 0, x: -40 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const fadeInRight = {
//     hidden: { opacity: 0, x: 40 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const zoomIn = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
//     },
//   };

//   return (
//     <section
//   id="philosophy"
//   className="min-h-screen flex items-center bg-gray-100 py-16 md:py-24 overflow-hidden px-[30px] md:px-[120px]"
// >

//       <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
//         {/* ✅ Left: Image with zoom-in */}
//         <motion.div
//           variants={zoomIn}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="relative md:w-1/2 w-full group"
//         >
//           <motion.img
//             src={assets.amc_image}
//             alt="Philosophy"
//             className="w-full h-auto rounded-3xl shadow-lg object-cover transform transition-transform duration-700 group-hover:scale-105"
//           />
//           <motion.div
//             className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-left"
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <span className="text-xs text-gray-200">Since</span>
//             <div className="text-3xl font-bold text-white">2002</div>
//           </motion.div>
//         </motion.div>

//         {/* ✅ Right: Text fade-in from right */}
//         <motion.div
//           variants={fadeInRight}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="md:w-1/2 w-full"
//         >
//           <motion.p
//             className="text-[#880000] font-semibold uppercase tracking-wide"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             About us
//           </motion.p>

//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6"
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Philosophy
//           </motion.h2>

//           <motion.p
//             className="text-black-600 mb-8 leading-relaxed"
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             We dedicate ourselves to providing superior and high-quality
//             services of audit, accounting, tax, and business process
//             outsourcing in a timely, effective, and efficient manner maintaining
//             the highest standards of professional integrity. We consider our
//             responsibility to embrace responsiveness to our client’s
//             requirements for their business, special opportunities, and
//             challenges that confront them. We foster an enjoyable working
//             environment through open communication, mutual respect, teamwork,
//             continuous innovation, and loyalty to perform our tradition of
//             services and leadership.
//           </motion.p>

//           <motion.a
//             href="about"
//             className="text-[#000099] font-semibold flex items-center gap-2 hover:gap-4 transition-all duration-300 cursor-pointer"

//           >
//             Know more about us
//             <IoIosArrowRoundForward className="w-5 h-5" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Philosophy;
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const up = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const stats = [
  { v: "20+", l: "Years of Excellence" },
  { v: "500+", l: "Clients Served" },
  { v: "100%", l: "Integrity" },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="overflow-hidden"
      style={{ background: "#f6f2ec" }}
    >
      {/* ── Full-width hero image ── */}
      <motion.div
        className="relative w-full overflow-hidden"
        style={{ height: "70vh", minHeight: "260px" }}
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <img
          src={assets.amc_image}
          alt="Our office"
          className="w-full h-full object-cover transition-transform duration-[10000ms] ease-out hover:scale-[1.04]"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 35%, rgba(14,14,14,0.72) 100%)",
          }}
        />

        {/* Red pill badge — top right */}
        <div
          className="absolute top-4 right-4 sm:top-8 sm:right-12 text-white font-semibold tracking-[0.18em] uppercase rounded-full z-10"
          style={{
            background: "#880000",
            fontSize: "9px",
            padding: "6px 14px",
          }}
        >
          About Us
        </div>

        {/* Year stamp — sits above the card overlap area */}
        <div
          className="absolute z-10 flex items-end gap-3"
          style={{
            left: "clamp(16px, 4vw, 56px)",
            bottom: "clamp(76px, 12vw, 100px)",
          }}
        >
          <div
            className="text-white leading-none"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(40px, 6.5vw, 80px)",
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: "-2px",
              opacity: 0.92,
            }}
          >
            2002
          </div>
          <div
            className="font-medium tracking-[0.18em] uppercase pb-1.5"
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "clamp(8px, 1vw, 10px)",
            }}
          >
            Year Established
          </div>
        </div>
      </motion.div>

      {/* ── Floating card ── */}
      <div
        className="px-3 sm:px-6 lg:px-14 pb-0"
        style={{ marginTop: "clamp(-32px, -5vw, -64px)" }}
      >
        <motion.div
          className="relative bg-white rounded-xl sm:rounded-2xl grid grid-cols-1 md:grid-cols-2"
          style={{
            padding: "clamp(24px, 4vw, 64px)",
            gap: "clamp(24px, 4vw, 64px)",
            boxShadow: "0 -2px 0 0 #880000, 0 20px 60px rgba(0,0,0,0.08)",
          }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {/* Left: heading */}
          <motion.div
            variants={up(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="flex items-center gap-2.5 mb-5 sm:mb-6 text-[10px] font-semibold tracking-[0.22em] uppercase"
              style={{ color: "#880000" }}
            >
              <span
                className="block w-6 h-px flex-shrink-0"
                style={{ background: "#880000" }}
              />
              Our Philosophy
            </div>
            <h2
              className="font-bold leading-[1.05]"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(30px, 4.5vw, 58px)",
                letterSpacing: "-1px",
                color: "#0e0e0e",
              }}
            >
              Integrity is not
              <br />
              a service —<br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "#888078",
                }}
              >
                it's our standard.
              </em>
            </h2>
          </motion.div>

          {/* Right: body + CTA */}
          <motion.div
            variants={up(0.18)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <p
              className="font-light mb-8 sm:mb-10"
              style={{
                fontSize: "clamp(13px, 1.4vw, 15px)",
                lineHeight: 1.9,
                color: "#28282B",
              }}
            >
              We dedicate ourselves to providing superior and high-quality
              services of audit, accounting, tax, and business process
              outsourcing in a timely, effective, and efficient manner
              maintaining the highest standards of professional integrity. We
              consider our responsibility to embrace responsiveness to our
              client’s requirements for their business, special opportunities,
              and challenges that confront them
              <br />
              <br />
              We foster an enjoyable working environment through open
              communication, mutual respect, teamwork, continuous innovation,
              and loyalty to perform our tradition of services and leadership.
            </p>

            <a
              href="/about"
              className="group inline-flex items-center rounded-full overflow-hidden no-underline w-fit transition-colors duration-200"
              style={{ background: "#fff", border: "1.5px solid #0e0e0e" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#000099")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#fff")
              }
            >
              <span className="px-5 sm:px-6 text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] uppercase text-[#0e0e0e]">
                Know More
              </span>
              <span
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-[#aa0000]"
                style={{ background: "#880000" }}
              >
                <ArrowRight size={15} className="text-white" />
              </span>
            </a>
          </motion.div>

          {/* Stats — full width bottom row */}
          <motion.div
            variants={up(0.26)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 grid grid-cols-3 pt-8 sm:pt-10 mt-2"
            style={{ borderTop: "1px solid #e5e0d8" }}
          >
            {stats.map((s, i) => (
              <div
                key={s.l}
                className={i > 0 ? "pl-4 sm:pl-8" : ""}
                style={i > 0 ? { borderLeft: "1px solid #e5e0d8" } : {}}
              >
                <div
                  className="leading-none mb-1.5"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "clamp(22px, 3vw, 38px)",
                    fontWeight: 700,
                    color: "#0e0e0e",
                    letterSpacing: "-1px",
                  }}
                >
                  {s.v}
                </div>
                <div
                  className="font-semibold uppercase"
                  style={{
                    fontSize: "clamp(7px, 0.9vw, 9px)",
                    letterSpacing: "0.18em",
                    color: "#888078",
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,700;1,9..144,300;1,9..144,700&family=Outfit:wght@300;400;500;600&display=swap');`}</style>
    </section>
  );
}
