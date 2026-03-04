import { useRef, useState } from "react";
import { assets } from "../assets/assets";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { motion, useInView } from "framer-motion";

/* ─── fade+slide up when in view ─── */
const useReveal = (delay = 0) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
    },
  };
  return { ref, variants, animate: inView ? "visible" : "hidden" };
};

/* ─── single info row ─── */
const InfoRow = ({ icon: Icon, children, delay }) => {
  const reveal = useReveal(delay);
  return (
    <motion.div
      ref={reveal.ref}
      variants={reveal.variants}
      initial="hidden"
      animate={reveal.animate}
      className="flex items-start gap-3 sm:gap-4 group"
    >
      <span className="mt-0.5 flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-[#8B0000]/30 bg-[#8B0000]/5 text-[#8B0000] transition-all duration-300 group-hover:bg-[#8B0000] group-hover:text-white">
        <Icon size={15} />
      </span>
      <span className="text-[#3a3a3a] leading-relaxed text-sm pt-1.5">
        {children}
      </span>
    </motion.div>
  );
};

/* ─── decorative corner marks ─── */
const Corner = ({ pos }) => {
  const classes = {
    tl: "top-0 left-0 border-t border-l",
    tr: "top-0 right-0 border-t border-r",
    bl: "bottom-0 left-0 border-b border-l",
    br: "bottom-0 right-0 border-b border-r",
  };
  return (
    <span className={`absolute ${classes[pos]} h-5 w-5 border-[#8B0000]/50`} />
  );
};

const Contact = () => {
  /* ── form state (kept for when form is uncommented) ── */
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState({});
  const [sent, setSent] = useState(false);
  const labelActive = (key) => focused[key] || fields[key];
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFields({ name: "", email: "", message: "" });
  };

  /* ── reveal hooks ── */
  const headerReveal = useReveal(0);
  const lineReveal   = useReveal(0.1);
  const subReveal    = useReveal(0.2);
  const imgReveal    = useReveal(0.1);
  const infoReveal   = useReveal(0.2);
  const careerReveal = useReveal(0.3);

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* ── background texture ── */}
      <div className="absolute inset-0 bg-[#faf9f7]" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,#000 0px,#000 1px,transparent 1px,transparent 40px),
            repeating-linear-gradient(90deg,#000 0px,#000 1px,transparent 1px,transparent 40px)`,
        }}
      />

      {/* ── top accent bar ── */}
      <div className="relative h-1 w-full bg-gradient-to-r from-transparent via-[#8B0000] to-transparent" />

      {/* ── main wrapper ── */}
      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">

        {/* ════ PAGE HEADER ════ */}
        <div className="mb-10 sm:mb-14 lg:mb-20 text-center">
          <motion.p
            ref={headerReveal.ref}
            variants={headerReveal.variants}
            initial="hidden"
            animate={headerReveal.animate}
            className="mb-3 text-[10px] sm:text-[11px] tracking-[0.35em] text-[#8B0000] uppercase"
          >
            Get in touch
          </motion.p>

          <motion.h1
            ref={lineReveal.ref}
            variants={lineReveal.variants}
            initial="hidden"
            animate={lineReveal.animate}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-none tracking-tight"
          >
            Contact{" "}
            <em className="not-italic font-semibold text-[#8B0000]">Us</em>
          </motion.h1>

          <motion.div
            ref={subReveal.ref}
            variants={subReveal.variants}
            initial="hidden"
            animate={subReveal.animate}
            className="mt-5 flex items-center justify-center gap-3 sm:gap-4"
          >
            <span className="h-px w-10 sm:w-16 bg-[#8B0000]/40" />
            <span className="text-[10px] sm:text-xs tracking-widest text-gray-400 uppercase">
              AMC &amp; Associates
            </span>
            <span className="h-px w-10 sm:w-16 bg-[#8B0000]/40" />
          </motion.div>
        </div>

        {/* ════ TWO-COLUMN: image | info ════
             · mobile  → stacked single column
             · tablet+ → side by side            */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-8 sm:mb-10">

          {/* ── LEFT: photo ── */}
          <motion.div
            ref={imgReveal.ref}
            variants={imgReveal.variants}
            initial="hidden"
            animate={imgReveal.animate}
            className="relative pr-3 pb-3"
          >
            <img
              src={assets.contact_us}
              alt="Our Office"
              className="w-full rounded-sm object-cover shadow-2xl"
              style={{
                maxHeight: 340,
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            {/* red offset frame */}
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-sm border border-[#8B0000]/25 pointer-events-none" />
            {/* location badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 border-l-2 border-[#8B0000]">
              <p className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[#8B0000] uppercase">
                Head Office
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#1a1a1a]">
                Makati City, Philippines
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT: contact details ── */}
          <motion.div
            ref={infoReveal.ref}
            variants={infoReveal.variants}
            initial="hidden"
            animate={infoReveal.animate}
            className="flex flex-col gap-5 sm:gap-6"
          >
            <p className="text-[10px] tracking-[0.25em] text-[#8B0000] uppercase">
              Our Office
            </p>

            <InfoRow icon={HiOutlineLocationMarker} delay={0.05}>
              Suite 1805–1807, Cityland 10 Tower 2, H.V. Dela Costa St.,
              Makati City 1227, Philippines
            </InfoRow>

            <InfoRow icon={HiOutlinePhone} delay={0.12}>
              <span className="flex flex-col gap-0.5">
                <span>Tel: +63 2 8841 0462</span>
                <span>Tel: +63 2 8893 0287</span>
              </span>
            </InfoRow>

            <InfoRow icon={HiOutlineMail} delay={0.19}>
              info@amc-associates.com
            </InfoRow>
          </motion.div>
        </div>

        {/* ════ CAREERS STRIP — full width ════ */}
        <motion.div
          ref={careerReveal.ref}
          variants={careerReveal.variants}
          initial="hidden"
          animate={careerReveal.animate}
          className="relative border border-[#1a1a1a]/10 bg-white rounded-sm overflow-hidden
                     p-6 sm:p-8
                     flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-8"
        >
          <Corner pos="tl" />
          <Corner pos="tr" />
          <Corner pos="bl" />
          <Corner pos="br" />

          {/* text */}
          <div className="flex-1 min-w-0">
            <p className="text-[10px] tracking-[0.25em] text-[#8B0000] uppercase mb-1">
              Join the team
            </p>
            <p className="font-semibold text-[#1a1a1a] text-base sm:text-lg leading-snug mb-1">
              Career at{" "}
              <span className="text-[#000099]">AMC</span>
              <span className="text-[#8B0000]"> &amp; Associates</span>
            </p>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Explore opportunities with one of the Philippines' trusted
              accounting firms.
            </p>
          </div>

          {/* CTA */}
          <div className="shrink-0 w-full sm:w-auto">
            <button className="group relative inline-flex items-center justify-center gap-2 border border-[#8B0000] px-6 py-2.5 sm:py-3 text-xs tracking-widest uppercase text-[#8B0000] overflow-hidden hover:text-white transition-colors duration-300 w-full sm:w-auto">
              <span className="absolute inset-0 -translate-x-full bg-[#8B0000] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
              <span className="relative">Explore Jobs</span>
              <span className="relative">→</span>
            </button>
          </div>
        </motion.div>

        {/* ════ SEND MESSAGE FORM (commented out — not needed yet) ════ */}
        {/*
        <motion.div className="mt-10 relative bg-white border border-[#1a1a1a]/8 p-6 sm:p-8 md:p-10 shadow-xl rounded-sm">
          <Corner pos="tl" /><Corner pos="tr" /><Corner pos="bl" /><Corner pos="br" />

          <p className="text-[10px] tracking-[0.3em] text-[#8B0000] uppercase mb-1">Send a message</p>
          <h2 className="text-xl sm:text-2xl font-light text-[#1a1a1a] mb-8">We'd love to hear from you</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

            <div className="relative">
              <input type="text" id="name" value={fields.name}
                onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
                onFocus={() => setFocused((f) => ({ ...f, name: true }))}
                onBlur={() => setFocused((f) => ({ ...f, name: false }))}
                className="peer w-full border-0 border-b border-[#1a1a1a]/20 bg-transparent pb-2 pt-5 text-sm text-[#1a1a1a] outline-none transition-all duration-200 focus:border-[#8B0000]"
              />
              <label htmlFor="name" className={`pointer-events-none absolute left-0 text-gray-400 transition-all duration-200 ${labelActive("name") ? "top-0 text-[10px] tracking-widest text-[#8B0000] uppercase" : "top-4 text-sm"}`}>Full Name</label>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#8B0000] transition-all duration-300 peer-focus:w-full" />
            </div>

            <div className="relative">
              <input type="email" id="email" value={fields.email}
                onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
                onFocus={() => setFocused((f) => ({ ...f, email: true }))}
                onBlur={() => setFocused((f) => ({ ...f, email: false }))}
                className="peer w-full border-0 border-b border-[#1a1a1a]/20 bg-transparent pb-2 pt-5 text-sm text-[#1a1a1a] outline-none transition-all duration-200 focus:border-[#8B0000]"
              />
              <label htmlFor="email" className={`pointer-events-none absolute left-0 text-gray-400 transition-all duration-200 ${labelActive("email") ? "top-0 text-[10px] tracking-widest text-[#8B0000] uppercase" : "top-4 text-sm"}`}>Email Address</label>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#8B0000] transition-all duration-300 peer-focus:w-full" />
            </div>

            <div className="relative sm:col-span-2">
              <select id="subject" defaultValue=""
                className="peer w-full appearance-none border-0 border-b border-[#1a1a1a]/20 bg-transparent pb-2 pt-5 text-sm text-[#1a1a1a] outline-none transition-all duration-200 focus:border-[#8B0000] cursor-pointer">
                <option value="" disabled>Select a topic</option>
                <option>Audit &amp; Assurance</option>
                <option>Tax Services</option>
                <option>Advisory</option>
                <option>Business Process Outsourcing</option>
                <option>General Inquiry</option>
              </select>
              <label htmlFor="subject" className="pointer-events-none absolute left-0 top-0 text-[10px] tracking-widest text-[#8B0000] uppercase">Topic</label>
              <span className="absolute right-0 bottom-2.5 text-gray-400 pointer-events-none text-xs">▾</span>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#8B0000] transition-all duration-300 peer-focus:w-full" />
            </div>

            <div className="relative sm:col-span-2">
              <textarea id="message" rows={4} value={fields.message}
                onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
                onFocus={() => setFocused((f) => ({ ...f, message: true }))}
                onBlur={() => setFocused((f) => ({ ...f, message: false }))}
                className="peer w-full resize-none border-0 border-b border-[#1a1a1a]/20 bg-transparent pb-2 pt-5 text-sm text-[#1a1a1a] outline-none transition-all duration-200 focus:border-[#8B0000]"
              />
              <label htmlFor="message" className={`pointer-events-none absolute left-0 text-gray-400 transition-all duration-200 ${labelActive("message") ? "top-0 text-[10px] tracking-widest text-[#8B0000] uppercase" : "top-4 text-sm"}`}>Your Message</label>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#8B0000] transition-all duration-300 peer-focus:w-full" />
            </div>

            <div className="sm:col-span-2 pt-2">
              <button type="submit" className="group relative w-full overflow-hidden border border-[#8B0000] py-3.5 text-xs tracking-[0.25em] uppercase text-[#8B0000] transition-all duration-300 hover:text-white">
                <span className="absolute inset-0 -translate-y-full bg-[#8B0000] transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
                <span className="relative">{sent ? "✓ Message Sent" : "Send Message"}</span>
              </button>
            </div>

          </form>
        </motion.div>
        */}

        {/* ════ BOTTOM RULE ════ */}
        <div className="mt-14 sm:mt-20 flex items-center gap-4 sm:gap-6">
          <span className="h-px flex-1 bg-[#1a1a1a]/10" />
          <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-gray-400 uppercase whitespace-nowrap">
            AMC &amp; Associates · Est. 2002
          </span>
          <span className="h-px flex-1 bg-[#1a1a1a]/10" />
        </div>
      </div>
    </div>
  );
};

export default Contact;