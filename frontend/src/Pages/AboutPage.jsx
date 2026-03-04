import { useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import bg_about from "../assets/bg_about.jpg";
import { motion, useInView, useAnimation } from "framer-motion";
import { Boxes } from "@/components/ui/boxes";
import { Skeleton } from "@/components/ui/skeleton";

const pageVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= ANIMATED CARD ================= */
const AnimatedCard = ({ children, className, delay = 0, ...props }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.set("hidden");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay } },
      }}
      initial="hidden"
      animate={controls}
      style={{ willChange: "transform" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/* ================= SKELETON CARD ================= */
const SkeletonValueCard = () => (
  <div className="px-8 py-10 flex flex-col gap-4 bg-white border border-gray-100 shadow-sm">
    <Skeleton className="h-4 w-24 rounded" />
    <Skeleton className="h-5 w-36 rounded" />
    <div className="space-y-2 pt-1">
      <Skeleton className="h-3.5 w-full rounded" />
      <Skeleton className="h-3.5 w-full rounded" />
      <Skeleton className="h-3.5 w-4/5 rounded" />
    </div>
  </div>
);

/* ================= VALUE CARD ================= */
const ValueCard = ({ title, number, children, className = "", delay = 0, ...props }) => (
  <AnimatedCard
    delay={delay}
    className={`group relative flex flex-col gap-3 bg-white/90 border border-gray-200 border-t-2 border-t-gray-200 px-8 py-10 shadow-sm hover:bg-[#000099] hover:border-t-[#880000] hover:border-[#000099] hover:shadow-md transition-all duration-300 cursor-pointer ${className}`}
    {...props}
  >
    <span className="text-[10px] font-bold tracking-[0.3em] text-[#880000] uppercase opacity-60 group-hover:opacity-100 transition-opacity duration-300">
      {number}
    </span>
    <h3 className="text-[15px] font-bold text-gray-900 group-hover:text-white tracking-tight transition-colors duration-300" style={{ fontFamily: "'Georgia', serif" }}>
      {title}
    </h3>
    <p className="text-[13.5px] text-gray-500 group-hover:text-white/80 leading-relaxed pt-1 transition-colors duration-300">{children}</p>
  </AnimatedCard>
);

/* ================= ABOUT PAGE ================= */
const AboutPage = () => {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-white p-5"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* ================= HEADER ================= */}
      <section className="relative mt-25 px-4 rounded-2xl sm:px-6 lg:px-35 py-12 sm:py-16 lg:py-7 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 rounded-2xl">
          <div className="absolute inset-0 overflow-hidden">
            <Boxes className="opacity-100" />
          </div>
        </div>


        <div className="container mx-auto px-6 py-11 grid lg:grid-cols-2 gap-6 items-center relative z-30">
          <div>
            {/* <p className="text-[11px] tracking-[0.4em] text-[#880000] uppercase mb-3">
              AMC &amp; Associates
            </p> */}

            <div className="inline-block px-6 py-2 border-2 border-white rounded-md">
              <h1 className="text-4xl font-bold text-white leading-tight">About Us</h1>
            </div>
            <p className="text-white/65 text-sm mt-4 max-w-lg leading-relaxed">
              Aquino, Mata, Calica &amp; Associates ("AMC &amp; ASSOCIATES") was registered with the
              Philippine Securities and Exchange Commission on February 18, 2002, as a general
              professional partnership providing audit and assurance, accounting, tax, advisory,
              and business process outsourcing services.
            </p>
          </div>
        </div>

         {/* Hero Image Placeholder */}
        {/* <img
          src={assets.services}
          alt="Service hero placeholder"
          className="w-full h-80 object-cover rounded-xl shadow-lg absolute top-10 right-6 lg:right-40 max-w-xs hidden lg:block z-30"
        /> */}
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="relative bg-gray-50 py-35 px-4 md:px-10">

        {/* — Image + Mission/Vision — */}
        <div className="my-10 flex flex-col md:flex-row gap-12">
          <img
            className="w-full md:max-w-[350px] rounded-lg shadow-lg object-cover"
            src={assets.bgtry}
            alt="Team at work"
          />

          <div className="flex flex-col justify-center gap-10 md:w-2/4">

            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-[#880000]" />
                <span className="text-[10px] tracking-[0.35em] text-[#880000] uppercase font-bold">
                  Mission
                </span>
              </div>
              <p className="text-gray-700 text-base leading-relaxed pl-9">
                To provide the most reliable, effective, and efficient services that add value
                to clients' businesses, both local and international.
              </p>
            </div>

            {/* divider */}
            <div className="h-px bg-gray-200 w-full" />

            {/* Vision */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-[#880000]" />
                <span className="text-[10px] tracking-[0.35em] text-[#880000] uppercase font-bold">
                  Vision
                </span>
              </div>
              <p className="text-gray-700 text-base leading-relaxed pl-9">
                To be the leading firm providing high-quality services in audit, taxation,
                accounting, consulting, and business process outsourcing.
              </p>
            </div>

          </div>
        </div>

        {/* ================= CORPORATE VALUES HEADING ================= */}
        <div className="relative text-center my-10 mt-24 z-10">
          <p className="text-[10px] tracking-[0.5em] text-[#880000] uppercase font-bold mb-4">
            Our Corporate Values
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.01em" }}
          >
            The Principles That Define Us
          </h2>
          <div className="mt-4 mx-auto w-12 h-[3px] bg-[#880000]" />
        </div>

        {/* faded bg image */}
        <div
          className="absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-[700px] h-[700px] md:w-[900px] md:h-[900px] bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${bg_about})` }}
        />


        {/* ================= TOP 3 CARDS ================= */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {isLoading ? (
            <>
              <SkeletonValueCard />
              <SkeletonValueCard />
              <SkeletonValueCard />
            </>
          ) : (
            <>
              <ValueCard
                title="Transparency"
                delay={0}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
              >
                The guiding word for our audit process is dialogue. We keep management fully
                informed at every stage. Our goal is to turn the audit into a management
                information resource for our clients.
              </ValueCard>

              <ValueCard title="Results-Oriented" delay={0.1}>
                We are committed to achieving results rather than merely completing tasks.
                We are flexible and forward-thinking to ensure the desired results are achieved.
              </ValueCard>

              <ValueCard title="Integrity" delay={0.2}>
                We strictly adhere to the code of ethics for Certified Public Accountants as
                set by both local and international organizations. Integrity is the foundation
                of our firm.
              </ValueCard>
            </>
          )}
        </div>

        {/* ================= BOTTOM ROW ================= */}
        <div className="relative z-10 flex justify-center flex-wrap gap-5 mb-10">
          {isLoading ? (
            <>
              <div className="w-full sm:w-[48%] lg:w-[30%]"><SkeletonValueCard /></div>
              <div className="w-full sm:w-[48%] lg:w-[30%]"><SkeletonValueCard /></div>
            </>
          ) : (
            <>
              <ValueCard title="Quality" delay={0} className="w-full sm:w-[48%] lg:w-[30%]">
                We focus on delivering quality by understanding client needs and executing
                projects efficiently. We stand firmly behind our work.
              </ValueCard>

              <ValueCard title="Client-Focused" delay={0.1} className="w-full sm:w-[48%] lg:w-[30%]">
                Our clients and the business community can rely on us for independence and
                objectivity—two essential ingredients of a successful accounting practice.
              </ValueCard>
            </>
          )}
        </div>

      </section>
    </motion.div>
  );
};

export default AboutPage;