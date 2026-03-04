// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import bg_about from "../assets/bg_about.jpg";
// import { ArrowRight } from "lucide-react";
// import { Boxes } from "@/components/ui/boxes";
// import { assets } from "../assets/assets";

// /* ================= PAGE OPEN EFFECT ================= */
// const pageVariants = {
//   hidden: { opacity: 0, y: 20, scale: 0.98 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// /* ================= SERVICE CARD ================= */
// const ServiceCard = ({ service, isOpen, onToggle, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.09 }}
//       className="relative bg-white border border-gray-200 overflow-hidden group transition-shadow duration-300 hover:shadow-lg"
//       style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
//     >
//       {/* crimson left accent bar */}
//       <div className="absolute left-0 top-0 w-[3px] h-full bg-[#880000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//       <div className="p-6 sm:p-8">
//         {/* index counter */}
//         {/* <span className="block text-[10px] tracking-[0.35em] text-[#880000] uppercase mb-3 font-semibold">
//           {String(index + 1).padStart(2, "0")} / {String(4).padStart(2, "0")}
//         </span> */}

//         {/* Title */}
//         <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-3">
//           {service.title}
//         </h3>

//         {/* thin rule */}
//         <div className="h-[2px] w-8 bg-[#880000] mb-3 rounded-full" />

//         {/* Description */}
//         <p className="text-sm text-gray-500 leading-relaxed mb-5">
//           {service.description}
//         </p>

//         {/* Toggle */}
//         <button
//           onClick={onToggle}
//           className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors duration-200 select-none"
//           style={{ color: isOpen ? "#880000" : "#1a1a1a" }}
//         >
//           <motion.span
//             animate={{ rotate: isOpen ? 90 : 0 }}
//             transition={{ duration: 0.25 }}
//           >
//             <ArrowRight size={13} />
//           </motion.span>
//           {isOpen ? "Hide Details" : "View Details"}
//         </button>

//         {/* Expandable sub-services */}
//         <AnimatePresence initial={false}>
//           {isOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.35, ease: "easeInOut" }}
//               className="overflow-hidden"
//             >
//               <div className="mt-5">
//                 <div className="h-px bg-gray-100 mb-5" />
//                 <div className="flex flex-col gap-1.5">
//                   {service.subServices.map((sub, i) => (
//                     <motion.button
//                       key={i}
//                       initial={{ opacity: 0, x: -8 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: i * 0.04, duration: 0.22 }}
//                       className="flex items-start justify-between gap-3 px-4 py-2.5 text-left text-[13px] text-gray-700 bg-gray-50 hover:bg-[#880000] hover:text-white transition-all duration-200 group/sub"
//                       style={{ fontFamily: "'Georgia', serif" }}
//                     >
//                       <span className="leading-snug">{sub}</span>
//                       <ArrowRight
//                         size={13}
//                         className="flex-shrink-0 mt-0.5 opacity-30 group-hover/sub:opacity-100 transition-opacity"
//                       />
//                     </motion.button>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// /* ================= SERVICES PAGE ================= */
// const ServicesPage = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const services = [
//     {
//       title: "Business Process Solutions and Outsourcing",
//       description:
//         "AMC partners with you to support key accounting and administrative needs, including outsourced accounting, payroll, and related services.",
//       subServices: [
//         "Accounting/Bookkeeping services",
//         "Staff augmentation services",
//         "Payroll processing",
//       ],
//     },
//     {
//       title: "Tax Advisory and Outsourcing",
//       description:
//         "We help you identify the opportunities and pitfalls that can significantly affect your bottom line.",
//       subServices: [
//         "Tax advisory",
//         "Tax Outsourcing",
//         "ICPA report on Application for tax refund/credit",
//       ],
//     },
//     {
//       title: "Other Business Process Solutions Services",
//       description:
//         "We believe there is an optimal solution to every business challenge. We work with you to find the right approach and help you create value.",
//       subServices: [
//         "Company name availability",
//         "Preparation of registration documents with various government agencies",
//         "Registration with various government agencies",
//         "Annual preparation and filing of General Information Sheet (GIS) to SEC",
//         "Annual registration of business permits",
//         "Printing of INVOICE and other secondary documentation invoicing requirements processing to BIR",
//         "Assistance in TAX Clearance processing",
//         "Representation with local government agencies and retirement closure of business operation",
//         "Headhunting services",
//       ],
//     },
//     {
//       title: "Virtual Office Address Services",
//       description:
//         "We provide solid, first-rate support for your key accounting and administrative activities.",
//       subServices: [
//         "Registered business address (Makati City)",
//         "Virtual phone number",
//         "Courier management",
//         "Mail forwarding",
//         "Live Reception",
//         "Local mail drop-off and pick-up",
//       ],
//     },
//   ];

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <motion.div
//       variants={pageVariants}
//       initial="hidden"
//       animate="visible"
//       className="min-h-screen bg-white p-5"
//       style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
//     >
//       {/* ─── Hero Section ─── */}
//       <section className="relative mt-25 px-4 rounded-2xl sm:px-6 lg:px-35 py-12 sm:py-16 lg:py-7 overflow-hidden">
//         {/* Animated background */}
//         <div className="absolute inset-0 bg-slate-900 rounded-2xl">
//           <div className="absolute inset-0 overflow-hidden">
//             <Boxes className="opacity-100" />
//           </div>
//         </div>

//         {/* subtle crimson tint */}
//         <div
//           className="absolute inset-0 rounded-2xl pointer-events-none"
//           style={{
//             background:
//               "linear-gradient(135deg, rgba(136,0,0,0.10) 0%, transparent 55%)",
//           }}
//         />

//         {/* Content */}
//         <div className="container mx-auto px-6 py-11 grid lg:grid-cols-2 gap-6 items-center relative z-30">
//           <div>
//             {/* <p className="text-[11px] tracking-[0.4em] text-[#880000] uppercase mb-3">
//               AMC &amp; Associates
//             </p> */}

//             <div className="inline-block px-6 py-2 border-2 border-white rounded-md">
//               <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight">
//                 Services
//               </h1>
//             </div>

//             <p className="text-white/65 text-sm mt-4 max-w-lg leading-relaxed">
//               AMC is your partner and provides support for your key accounting
//               and administrative activities, such as outsourced accounting,
//               payroll, and accounting-relatable tasks.
//             </p>
//           </div>
//         </div>

//         {/* Hero Image Placeholder */}
//         {/* <img
//           src={assets.services}
//           alt="Service hero placeholder"
//           className="w-full h-80 object-cover rounded-xl shadow-lg absolute top-10 right-6 lg:right-40 max-w-xs hidden lg:block z-30"
//         /> */}
//       </section>

//       {/* ─── Services Section ─── */}
//       <section className="min-h-screen bg-gray-50 px-6 md:px-20 py-16">
//         {/* Section header */}
//         <div className="mb-12">
//           <p className="text-[11px] tracking-[0.35em] text-[#880000] uppercase mb-2">
//             What we offer
//           </p>
//           <div className="flex items-end gap-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Our Services
//             </h2>
//             <div className="hidden sm:block flex-1 max-w-xs h-px mb-3 bg-gray-200" />
//           </div>
//         </div>

//         {/* Cards grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
//           {services.map((service, index) => (
//             <ServiceCard
//               key={index}
//               service={service}
//               isOpen={openIndex === index}
//               onToggle={() => handleToggle(index)}
//               index={index}
//             />
//           ))}
//         </div>

//          {/* faded bg image */}
//         <div
//           className="absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-[700px] h-[700px] md:w-[900px] md:h-[900px] bg-cover bg-center opacity-10"
//           style={{ backgroundImage: `url(${bg_about})` }}
//         />

//         {/* Bottom rule */}
//         <div className="mt-16 flex items-center gap-4">
//           <div className="h-px flex-1 bg-gray-200" />
//           <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase whitespace-nowrap">
//             AMC &amp; Associates · Est. 2002
//           </span>
//           <div className="h-px flex-1 bg-gray-200" />
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default ServicesPage;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg_about from "../assets/bg_about.jpg";
import { ArrowRight } from "lucide-react";
import { Boxes } from "@/components/ui/boxes";
import { assets } from "../assets/assets";

/* ================= PAGE OPEN EFFECT ================= */
const pageVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= SERVICE CARD ================= */
const ServiceCard = ({ service, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.09 }}
      className="relative bg-white border border-gray-200 overflow-hidden group transition-shadow duration-300 hover:shadow-lg"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      <div className="absolute left-0 top-0 w-[3px] h-full bg-[#880000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6 sm:p-8">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-3">
          {service.title}
        </h3>

        <div className="h-[2px] w-8 bg-[#880000] mb-3 rounded-full" />

        <p className="text-sm text-gray-500 leading-relaxed mb-5">
          {service.description}
        </p>

        <button
          onClick={onToggle}
          className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors duration-200 select-none"
          style={{ color: isOpen ? "#880000" : "#1a1a1a" }}
        >
          <motion.span
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ArrowRight size={13} />
          </motion.span>
          {isOpen ? "Hide Details" : "View Details"}
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-5">
                <div className="h-px bg-gray-100 mb-5" />
                <div className="flex flex-col gap-1.5">
                  {service.subServices.map((sub, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.22 }}
                      className="flex items-start justify-between gap-3 px-4 py-2.5 text-left text-[13px] text-gray-700 bg-gray-50 hover:bg-[#880000] hover:text-white transition-all duration-200 group/sub"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      <span className="leading-snug">{sub}</span>
                      <ArrowRight
                        size={13}
                        className="flex-shrink-0 mt-0.5 opacity-30 group-hover/sub:opacity-100 transition-opacity"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/* ================= SERVICES PAGE ================= */
const ServicesPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Business Process Solutions and Outsourcing",
      description:
        "AMC partners with you to support key accounting and administrative needs, including outsourced accounting, payroll, and related services.",
      subServices: [
        "Accounting/Bookkeeping services",
        "Staff augmentation services",
        "Payroll processing",
      ],
    },
    {
      title: "Tax Advisory and Outsourcing",
      description:
        "We help you identify the opportunities and pitfalls that can significantly affect your bottom line.",
      subServices: [
        "Tax advisory",
        "Tax Outsourcing",
        "ICPA report on Application for tax refund/credit",
      ],
    },
    {
      title: "Other Business Process Solutions Services",
      description:
        "We believe there is an optimal solution to every business challenge. We work with you to find the right approach and help you create value.",
      subServices: [
        "Company name availability",
        "Preparation of registration documents with various government agencies",
        "Registration with various government agencies",
        "Annual preparation and filing of General Information Sheet (GIS) to SEC",
        "Annual registration of business permits",
        "Printing of INVOICE and other secondary documentation invoicing requirements processing to BIR",
        "Assistance in TAX Clearance processing",
        "Representation with local government agencies and retirement closure of business operation",
        "Headhunting services",
      ],
    },
    {
      title: "Virtual Office Address Services",
      description:
        "We provide solid, first-rate support for your key accounting and administrative activities.",
      subServices: [
        "Registered business address (Makati City)",
        "Virtual phone number",
        "Courier management",
        "Mail forwarding",
        "Live Reception",
        "Local mail drop-off and pick-up",
      ],
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-white p-5"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* ─── Hero Section ─── */}
      <section className="relative mt-25 px-4 rounded-2xl sm:px-6 lg:px-35 py-12 sm:py-16 lg:py-7 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 rounded-2xl">
          <div className="absolute inset-0 overflow-hidden">
            <Boxes className="opacity-100" />
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(136,0,0,0.10) 0%, transparent 55%)",
          }}
        />

        <div className="container mx-auto px-6 py-11 grid lg:grid-cols-2 gap-6 items-center relative z-30">
          <div>
            <div className="inline-block px-6 py-2 border-2 border-white rounded-md">
              <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight">
                Services
              </h1>
            </div>

            <p className="text-white/65 text-sm mt-4 max-w-lg leading-relaxed">
              AMC is your partner and provides support for your key accounting
              and administrative activities.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Services Section ─── */}
      <section className="relative min-h-screen bg-gray-50 px-6 md:px-20 py-16 overflow-hidden">
        {/* Centered faded bg image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div
            className="w-[700px] h-[700px] md:w-[900px] md:h-[900px] bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${bg_about})` }}
          />
        </div>

        <div className="relative z-10 mb-12">
          <p className="text-[11px] tracking-[0.35em] text-[#880000] uppercase mb-2">
            What we offer
          </p>
          <div className="flex items-end gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <div className="hidden sm:block flex-1 max-w-xs h-px mb-3 bg-gray-200" />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>

        <div className="relative z-10 mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase whitespace-nowrap">
            AMC &amp; Associates · Est. 2002
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
