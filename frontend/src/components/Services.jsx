// import { assets } from "../assets/assets";
// import Title from "../components/Title.jsx";
// import ServiceCard from "./ServiceCard.jsx";
// import AnimatedButton from "./AnimatedButton.jsx";
// import { motion } from "framer-motion";

// const Services = () => {
//   const servicesData = [
//     {
//       title: "Advertising",
//       description: "Review Engagements and Advisory Services",
//       icon: assets.social_icon,
//     },
//     {
//       title: "Regulatory Compliance Audit",
//       description: "Review Engagements and Advisory Services",
//       icon: assets.marketing_icon,
//     },
//     {
//       title: "Review & Advisory",
//       description: "Review Engagements and Advisory Services",
//       icon: assets.content_icon,
//     },
//     {
//       title: "Content Marketing",
//       description: "Review Engagements and Advisory Services",
//       icon: assets.ads_icon,
//     },
//   ];

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <section
//       id="service"
//   className="relative flex flex-col justify-center items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white overflow-hidden scroll-mt-24 mb-20"
//     >
//       {/* Floating Background Image */}
//       <motion.img
//         src={assets.bgImage2}
//         alt="bg_image"
//         className="absolute -top-40 -left-40 -z-10 opacity-30 dark:opacity-10"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       />

//       {/* Title */}
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         animate="visible"
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <Title title={"Expert services to elevate your business \n performance."} />
//       </motion.div>

//       {/* Button */}
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         animate="visible"
//         transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
//       >
//         <AnimatedButton label="View all Services" to="/services" />
//       </motion.div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 w-full max-w-5xl">
//         {servicesData.map((service, index) => (
//           <motion.div
//             key={index}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.2 }}
//             transition={{
//               duration: 0.6,
//               delay: index * 0.15,
//               ease: "easeOut",
//             }}
//           >
//             <ServiceCard key={index} service={service} index={index} />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Audit Services",
    desc: "Comprehensive audit engagements and advisory services designed to give you a clear, accurate picture of your business. We go beyond compliance — we give you confidence.\n\nOur team brings decades of combined experience, ensuring every audit is thorough, timely, and useful.",
    icon: assets.social_icon,
    tall: true,
  },
  {
    num: "02",
    title: "Regulatory Compliance",
    desc: "Ensuring full adherence to regulatory standards and industry guidelines — protecting your business from risk.",
    icon: assets.marketing_icon,
  },
  {
    num: "03",
    title: "Review & Advisory",
    desc: "Strategic advisory to drive growth and efficiency.",
    icon: assets.content_icon,
    small: true,
  },
  {
    num: "04",
    title: "Business Process Outsourcing",
    desc: "End-to-end outsourcing so you focus on what matters.",
    icon: assets.ads_icon,
    small: true,
  },
];

const up = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] } },
});

function Card({ s, delay, className = "", style = {} }) {
  return (
    <motion.div
      variants={up(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`group relative flex flex-col cursor-pointer rounded-2xl transition-all duration-300 hover:-translate-y-1 ${className}`}
      style={{
        background: "#ffffff",
        border: "1px solid #e5e0d8",
        padding: s.small ? "clamp(20px,2.5vw,32px)" : "clamp(24px,3vw,40px)",
        ...style,
      }}
      whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.07)", borderColor: "transparent" }}
    >
      {/* Red top sweep on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, #880000, transparent 80%)" }}
      />

      <div
        className="italic mb-5 sm:mb-6"
        style={{ fontFamily: "'Fraunces', serif", fontSize: "12px", color: "#880000", letterSpacing: "0.06em" }}
      >
        {s.num}
      </div>

      <div
        className="rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300 group-hover:bg-[rgba(136,0,0,0.1)] group-hover:border-[rgba(136,0,0,0.25)] flex-shrink-0"
        style={{
          width: "72px",
          height: "72px",
          background: "#edeae3",
          border: "1px solid #d8d3c8",
        }}
      >
        <img src={s.icon} alt="" style={{ width: "62%", height: "62%", objectFit: "contain", opacity: 1 }} />
      </div>

      <h3
        className="font-bold leading-snug mb-2.5"
        style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: s.tall ? "clamp(18px,2.2vw,26px)" : s.small ? "clamp(15px,1.8vw,19px)" : "clamp(16px,2vw,22px)",
          color: "#0e0e0e",
          letterSpacing: "-0.2px",
        }}
      >
        {s.title}
      </h3>

      <p
        className="flex-1 whitespace-pre-line"
        style={{
          fontSize: "clamp(13px,1.2vw,14.5px)",
          lineHeight: 1.8,
          color: "#2c2825",
          fontWeight: 400,
        }}
      >
        {s.desc}
      </p>

      <div
        className="flex items-center gap-1.5 mt-6 font-semibold uppercase opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        style={{ fontSize: "10px", letterSpacing: "0.14em", color: "#000099" }}
      >
        Learn more <ArrowRight size={11} />
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="service"
      className="scroll-mt-24 relative overflow-hidden"
      style={{
        background: "#f6f2ec",
        padding: "clamp(56px, 8vw, 100px) clamp(16px, 5vw, 56px)",
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-end mb-12 sm:mb-16 pb-10 sm:pb-12"
          style={{ borderBottom: "1px solid #e5e0d8" }}
        >
          <div>
            <motion.div
              variants={up(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-4 sm:mb-5 text-[10px] font-semibold tracking-[0.22em] uppercase"
              style={{ color: "#880000" }}
            >
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "#880000" }} />
              What We Offer
            </motion.div>
            <motion.h2
              variants={up(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-bold leading-[1.07]"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(28px, 3.8vw, 52px)",
                letterSpacing: "-1px",
                color: "#0e0e0e",
              }}
            >
              Expert services<br />
              to elevate{" "}
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "#888078" }}>
                your performance.
              </em>
            </motion.h2>
          </div>

          <motion.div
            variants={up(0.16)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <p className="font-light" style={{ fontSize: "clamp(13px, 1.4vw, 15px)", lineHeight: 1.8, color: "#28282B" }}>
              From audit to outsourcing, we deliver with precision, integrity, and care every engagement, every time.
            </p>
            <a
              href="/services"
              className="group inline-flex items-center gap-2.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase no-underline w-fit transition-all duration-200 hover:-translate-y-0.5"
              style={{
                padding: "12px 22px",
                border: "1.5px solid #0e0e0e",
                color: "#0e0e0e",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#000088"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0e0e0e"; }}
            >
              View all Services <ArrowRight size={13} />
            </a>
          </motion.div>
        </div>

        {/* ── Asymmetric bento grid ── */}
        {/* Desktop: tall left + stacked right. Tablet: 2-col. Mobile: 1-col */}
        <div className="hidden lg:grid grid-cols-2 gap-4" style={{ gridTemplateRows: "auto auto" }}>
          {/* Tall card */}
          <Card s={services[0]} delay={0.07} style={{ gridRow: "span 2" }} />
          {/* Right stack */}
          <div className="flex flex-col gap-4">
            <Card s={services[1]} delay={0.14} />
            <div className="grid grid-cols-2 gap-4">
              <Card s={services[2]} delay={0.21} />
              <Card s={services[3]} delay={0.28} />
            </div>
          </div>
        </div>

        {/* Tablet: 2-col grid */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
          {services.map((s, i) => (
            <Card key={i} s={{ ...s, tall: false, small: false }} delay={i * 0.08} />
          ))}
        </div>

        {/* Mobile: single col */}
        <div className="flex flex-col gap-4 sm:hidden">
          {services.map((s, i) => (
            <Card key={i} s={{ ...s, tall: false, small: false }} delay={i * 0.06} />
          ))}
        </div>

      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,700;1,9..144,300;1,9..144,700&family=Outfit:wght@300;400;500;600&display=swap');`}</style>
    </section>
  );
}
