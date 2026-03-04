import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import bg from "../assets/bg.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const fadeUpItem = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-white text-gray-900 overflow-hidden">

      {/* ═══════════ CTA / MAP CARD ═══════════ */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative text-white rounded-2xl shadow-xl bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* same overlay colors as original */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#5f6fff]/90 via-[#7a85ff]/70 to-[#9ea6ff]/60 z-0" />

          {/* decorative top rule */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-10" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-7 sm:p-9 md:p-12">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {/* eyebrow */}
              <span className="text-[11px] tracking-[0.35em] text-white/60 uppercase font-semibold">
                Visit Us
              </span>

              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                Our Office
              </h2>

              {/* rule */}
              <div className="w-12 h-[2px] bg-white/50" />

              <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-sm">
                Visit AMC &amp; Associates — where professionalism, precision, and
                trust come together in every engagement.
              </p>
            </motion.div>

            {/* Right — map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-xl overflow-hidden shadow-lg border border-white/20 transform-gpu will-change-transform"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7723.35394112818!2d121.01467377494839!3d14.560456085921217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9096ec55555%3A0xfc5936b371540697!2sAMC%20%26%20Associates!5e0!3m2!1sen!2sph!4v1751982300441!5m2!1sen!2sph"
                className="w-full h-44 sm:h-56 md:h-64 cursor-pointer"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ═══════════ FOOTER BODY ═══════════ */}
      <div className="relative mt-[-8rem] z-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-b from-[#fafafa] to-[#f2f2f2] rounded-t-3xl shadow-lg overflow-hidden"
          variants={{
            visible: { transition: { staggerChildren: 0.2, ease: "easeInOut" } },
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[14rem] pb-12">

            {/* ── top divider with brand name ── */}
            <motion.div
              variants={fadeUpItem}
              className="flex items-center gap-4 mb-12"
            >
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs tracking-[0.3em] text-gray-400 uppercase whitespace-nowrap">
                AMC &amp; Associates
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-start gap-12">

              {/* ── Logo & tagline ── */}
              <motion.div variants={fadeUpItem} className="md:w-1/4 flex flex-col gap-4">
                <img
                  src={assets.amclogo}
                  alt="AMC Logo"
                  className="w-36 h-auto brightness-90 hover:brightness-110 transition-all duration-300"
                />
                <div className="h-px w-10 bg-[#880000]" />
                <p className="text-[#0F0E0E] font-semibold text-sm leading-relaxed">
                  Professional accounting, taxation, and business support
                  services for organizations of all sizes.
                </p>
              </motion.div>

              {/* ── Link columns ── */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1, y: 0,
                    transition: { staggerChildren: 0.15, ease: "easeInOut" },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:w-3/4 md:pl-20"
              >
                {/* Quick Links */}
                <motion.div variants={fadeUpItem}>
                  <h4 className="text-[#880000] font-bold mb-5 uppercase tracking-widest text-xs">
                    Quick Links
                  </h4>
                  <ul className="flex flex-col gap-3 text-sm text-[#0F0E0E] font-semibold">
                    {[
                      { name: "Home",       href: "#home" },
                      { name: "Services",   href: "#services" },
                      { name: "Philosophy", href: "#philosophy" },
                    ].map(({ name, href }, i) => (
                      <motion.li key={i} variants={fadeUpItem}>
                        <a
                          href={href}
                          className="group flex items-center gap-2 hover:text-[#880000] transition-all duration-300"
                        >
                          <span className="w-0 h-px bg-[#880000] group-hover:w-4 transition-all duration-300" />
                          {name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Social Media */}
                <motion.div variants={fadeUpItem}>
                  <h4 className="text-[#880000] font-bold mb-5 uppercase tracking-widest text-xs">
                    Social Media
                  </h4>
                  <ul className="flex flex-col gap-3 text-sm text-[#0F0E0E] font-semibold">
                    {[
                      { icon: assets.facebook,  label: "Facebook",  url: "https://www.facebook.com/amcassoc/" },
                      { icon: assets.twitter,   label: "Twitter",   url: "https://x.com/AMC_CPAs" },
                      { icon: assets.instagram, label: "Instagram", url: "https://www.instagram.com/amcassociates/" },
                      { icon: assets.tiktok,    label: "TikTok",    url: "https://www.tiktok.com/@amcassociates" },
                    ].map(({ icon, label, url }, idx) => (
                      <motion.li
                        key={idx}
                        variants={fadeUpItem}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <img
                          src={icon}
                          alt={label}
                          className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                        />
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#880000] group-hover:translate-x-1 inline-block transition-all duration-300"
                        >
                          {label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Legal */}
                <motion.div variants={fadeUpItem}>
                  <h4 className="text-[#880000] font-bold mb-5 uppercase tracking-widest text-xs">
                    Legal
                  </h4>
                  <ul className="flex flex-col gap-3 text-sm text-[#0F0E0E] font-semibold">
                    {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item, i) => (
                      <motion.li key={i} variants={fadeUpItem}>
                        <a
                          href="#"
                          className="group flex items-center gap-2 hover:text-[#880000] transition-all duration-300"
                        >
                          <span className="w-0 h-px bg-[#880000] group-hover:w-4 transition-all duration-300" />
                          {item}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="border-t border-gray-300/80 bg-[#ececec]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p className="text-[#0F0E0E] font-medium text-sm">
                © 2025{" "}
                <span className="text-[#000099] font-semibold">AMC</span>
                <span className="text-[#880000] font-semibold"> &amp; ASSOCIATES</span>
                . All rights reserved.
              </p>
              <p className="text-gray-400 text-xs tracking-widest uppercase">
                Est. 2002 · Makati City, PH
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;