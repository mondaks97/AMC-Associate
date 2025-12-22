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
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-white text-gray-900 overflow-hidden">
      {/* CTA Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative text-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* Softer Overlay for Corporate Tone */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#5f6fff]/90 via-[#7a85ff]/70 to-[#9ea6ff]/60 z-0"></div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center z-10">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-2"
            >
              <h2 className="text-xl md:text-3xl font-semibold tracking-wide text-white">
                Our Office
              </h2>
              <div className="w-37 h-[2px] bg-white/80 mb-3"></div>

              <p className="text-gray-100 text-[20px] md:text-base leading-relaxed max-w-md">
                Visit AMC & Associates — where professionalism, precision, and
                trust come together in every engagement.
              </p>
            </motion.div>

            {/* Right Side - Google Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-md border border-white/10 transform-gpu will-change-transform"
              whileHover={{ scale: 1.02 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7723.35394112818!2d121.01467377494839!3d14.560456085921217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9096ec55555%3A0xfc5936b371540697!2sAMC%20%26%20Associates!5e0!3m2!1sen!2sph!4v1751982300441!5m2!1sen!2sph"
                className="w-full h-44 sm:h-56 md:h-64 cursor-pointer"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <div className="relative mt-[-8rem] z-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-b from-[#fafafa] to-[#f2f2f2] text-gray-300 rounded-t-3xl shadow-lg overflow-hidden backdrop-blur-sm"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2, ease: "easeInOut" },
            },
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[14rem] pb-20 flex flex-col md:flex-row md:items-start gap-10">
            {/* Logo & Address */}
            <motion.div variants={fadeUpItem} className="md:w-1/4">
              <img
                src={assets.amclogo}
                alt="AMC Logo"
                className="mb-4 w-36 h-auto brightness-90 hover:brightness-110 transition-all duration-300"
              />
              <p className="text-[#0F0E0E] font-semibold text-sm leading-relaxed">
                Professional accounting, taxation, and business support services for organizations of all sizes.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.15, ease: "easeInOut" },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:w-3/4 md:pl-20"
            >
              {/* Quick Links */}
              <motion.div variants={fadeUpItem}>
                <h4 className="text-[#880000] font-bold mb-3 uppercase tracking-wide">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm text-[#0F0E0E] font-semibold">
                  {[
                    { name: "Home", href: "#home" },
                    { name: "Services", href: "#services" },
                    { name: "Philosophy", href: "#philosophy" },
                    { name: "Services", href: "#services" },
                  ].map(({ name, href }, i) => (
                    <motion.li key={i} variants={fadeUpItem}>
                      <a
                        href={href}
                        className="hover:text-[#880000] hover:translate-x-1 inline-block transition-all duration-300"
                      >
                        {name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Social Media */}
              <motion.div variants={fadeUpItem}>
  <h4 className="text-[#880000] font-bold mb-3 uppercase tracking-wide">
    Social Media
  </h4>
  <ul className="space-y-2 text-sm text-[#0F0E0E] font-semibold">
    {[
      { icon: assets.facebook, label: "Facebook", url: "https://www.facebook.com/amcassoc/" },
      { icon: assets.twitter, label: "Twitter", url: "https://x.com/AMC_CPAs" },
      { icon: assets.instagram, label: "Instagram", url: "https://www.instagram.com/amcassociates/" },
      { icon: assets.tiktok, label: "TikTok", url: "https://www.tiktok.com/@amcassociates" },
    ].map(({ icon, label, url }, idx) => (
      <motion.li
        key={idx}
        variants={fadeUpItem}
        className="flex items-center gap-2 hover:translate-x-1 transition-all duration-300 cursor-pointer"
      >
        <img
          src={icon}
          alt={label}
          className="w-6 h-6 hover:scale-110 transition-transform duration-200"
        />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#880000] transition-colors duration-200"
        >
          {label}
        </a>
      </motion.li>
    ))}
  </ul>
</motion.div>

              {/* Legal */}
              <motion.div variants={fadeUpItem}>
                <h4 className="text-[#880000] font-bold mb-3 uppercase tracking-wide">
                  Legal
                </h4>
                <ul className="space-y-2 text-sm text-[#0F0E0E] font-semibold">
                  {["Terms of Service", "Privacy Policy", "Cookie Policy"].map(
                    (item, i) => (
                      <motion.li key={i} variants={fadeUpItem}>
                        <a
                          href="#"
                          className="hover:text-[#880000] hover:translate-x-1 inline-block transition-all duration-300"
                        >
                          {item}
                        </a>
                      </motion.li>
                    )
                  )}
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="text-[#0F0E0E] font-medium border-t border-gray-300/80 text-center py-4 text-sm bg-[#ececec]">
            © 2025{" "}
            <span className="text-[#000099] font-semibold">AMC</span><span className="text-[#880000] font-semibold">  & ASSOCIATES</span>
            . All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
