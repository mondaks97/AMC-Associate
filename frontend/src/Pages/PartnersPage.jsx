// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";
// import { assets } from "../assets/assets";

// /* ================= ANIMATION VARIANTS ================= */

// const cardVariant = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.6,
//       ease: [0.25, 0.4, 0.25, 1],
//     },
//   }),
//   hover: {
//     y: -5,
//     transition: {
//       duration: 0.3,
//       ease: "easeOut",
//     },
//   },
// };

// const modalVariant = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.3,
//       ease: [0.25, 0.4, 0.25, 1],
//     },
//   },
//   exit: {
//     opacity: 0,
//     scale: 0.95,
//     transition: {
//       duration: 0.2,
//     },
//   },
// };

// const overlayVariant = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 0.3 },
//   },
//   exit: {
//     opacity: 0,
//     transition: { duration: 0.2 },
//   },
// };

// /* ================= MODAL ================= */

// const PartnerModal = ({ partner, onClose }) => {
//   useEffect(() => {
//     if (!partner) return;
//     const prevOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prevOverflow;
//     };
//   }, [partner]);

//   if (!partner) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         variants={overlayVariant}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         onClick={onClose}
//         className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
//       >
//         <motion.div
//           variants={modalVariant}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           onClick={(e) => e.stopPropagation()}
//           onWheel={(e) => e.stopPropagation()}
//           className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
//         >
//           {/* X Button */}
//           <div className="relative">
//             {/* Close Button */}{" "}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={onClose}
//               className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 rounded-full bg-white/90 backdrop-blur p-2 shadow-lg hover:bg-white transition-colors"
//             >
//               {" "}
//               <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />{" "}
//             </motion.button>
//             {/* Hero Image - Much Larger */}
//             <div className="h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-t-2xl bg-gray-50">
//               <img
//                 src={partner.image}
//                 alt={partner.name}
//                 className="h-full w-full object-contain p-6 sm:p-10"
//               />
//             </div>
//             {/* Content */}
//             <div className="space-y-6 p-6 sm:p-8 md:p-10">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3">
//                 {partner.name}
//               </h2>

//               <Section title="Experience" text={partner.experience} />
//               <Section
//                 title="Sector Experience"
//                 text={partner.sectorExperience}
//               />
//               <Section title="Qualifications" list={partner.qualifications} />

//               {partner.memberships && partner.memberships.length > 0 && (
//                 <Section title="Memberships" list={partner.memberships} />
//               )}
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// const Section = ({ title, text, list }) => (
//   <div className="mb-5 text-sm sm:text-base text-gray-600">
//     <h4 className="font-semibold text-lg text-gray-800 mb-2">{title}</h4>
//     {text && <div className="leading-relaxed text-gray-700">{text}</div>}
//     {list && (
//       <ul className="space-y-2 mt-3">
//         {list.map((item, i) => (
//           <li key={i} className="flex items-start gap-3 text-gray-700">
//             <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
//             <span>{item}</span>
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// );

// /* ================= CARD ================= */

// const PartnerCard = ({ partner, index, onOpen }) => {
//   return (
//     <motion.div
//       custom={index}
//       variants={cardVariant}
//       initial="hidden"
//       whileInView="visible"
//       whileHover="hover"
//       viewport={{ once: true, margin: "-50px" }}
//       className="group bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-shadow hover:shadow-xl"
//     >
//       <div className="p-6 sm:p-8 space-y-5">
//         {/* Contact Card */}
//         <div className="relative rounded-[26px] bg-white shadow-md overflow-hidden">
//           {/* Left curve */}
//           <div className="absolute inset-y-0 left-0 w-20 bg-blue-100 rounded-r-full" />

//           <div className="relative p-5 pl-9">
//             <h3 className="font-bold text-blue-900 uppercase text-sm sm:text-base">
//               {partner.name}
//             </h3>

//             <p className="text-xs sm:text-sm text-gray-500 leading-snug">
//               {partner.role}
//             </p>

//             {partner.phone && (
//               <div className="mt-3 inline-flex items-center gap-2 bg-red-900 text-white text-xs px-3 py-1.5 rounded-md">
//                 ☎ {partner.phone}
//               </div>
//             )}

//             {partner.email && (
//               <div className="mt-2 text-xs text-gray-700">
//                 ✉ {partner.email}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Experience Preview */}
//         <div className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
//           {partner.experience}
//         </div>

//         {/* View Profile */}
//         <div className="flex justify-end">
//           <motion.button
//             whileHover={{ x: 3 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => onOpen(partner)}
//             className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
//           >
//             <span>View Full Profile</span>
//             <span>→</span>
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// /* ================= PAGE ================= */

// const PartnersPage = () => {
//   const partners = [
//     {
//       name: "JOSEPH CEDRIC V. CALICA",
//       image: assets.one,
//       role: "Chairman & Managing Partner",
//       phone: "+63 917 324 4486",
//       email: "jcvcalica@amc-associates.com",
//       experience: (
//         <>
//           <p>
//             Cedric is one of the founding Partner of AMC and currently the
//             Chairman & Managing Partner of the Firm. Cedric has been in public
//             accounting for his entire professional career. He worked for seven
//             years at a prestigious and among the top auditing firms in the
//             Philippines, having extensive experience in manufacturing and other
//             various related industries such as mining, retail, banking, real
//             estate, government accounting, agri-business, and theme parks. He
//             spent the next four years of his career heading the internal audit
//             division of a broadcasting and construction company.
//           </p>
//           <br></br>
//           <p>
//             He has significant involvement in major financial due diligence
//             audits, agreed-upon and review engagements of the Firm, and heads
//             the engagement of ICPA report on the application for tax refund/TCC
//             and assistance in handling tax audits by the BIR.
//           </p>
//         </>
//       ),
//       sectorExperience:
//         "Banking and finance, mutual benefit associations (MBAI), hospitality and hotel-related operations, not-for-profit, technology, manufacturing, mining, retail, real estate, and services.",
//       qualifications: [
//         "Certified Public Accountant",
//         "Bachelor's degree in commerce Major in Accounting, San Beda College",
//       ],
//       memberships: [
//         "Member, Philippine Institute of Certified Public Accountants (PICPA)",
//         "Association of Certified Public Accountants in Commerce and Industry (ACPACI)",
//       ],
//     },

//     {
//       name: "ARIEL D. GONZALES",
//       image: assets.two,
//       role: "Practice Leader, Audit and Assurance, Technical Standards and Quality Control Leader",
//       phone: "+63 917 804 0772",
//       email: "adgonzales@amc-associates.com",
//       experience: (
//         <>
//           <p>
//             Ariel is a Practice Leader of the Audit & Assurance Division as well
//             as the Leader of Technical Standards & Quality Control. Ariel
//             started his CPA career at a prestigious and among the top auditing
//             firm in the Philippines and worked his way to become one of the
//             elite audit managers of his batch.
//           </p>
//           <br></br>
//           <p>
//             Ariel has been in public accounting for his entire professional
//             career, gaining extensive experience in the audit of local and
//             multinational companies in various industries such as manufacturing
//             and other various related industries such as retail, banking, real
//             estate, processing and manufacturing, utilities, and construction.
//             Ariel started as a junior audit staff and after five years was
//             promoted to audit manager.
//           </p>
//         </>
//       ),
//       sectorExperience:
//         "Banking, cooperatives, not-for-profit, technology, manufacturing, utilities",
//       qualifications: [
//         "Certified Public Accountant",
//         "BS Business Administration – Accounting",
//       ],
//       memberships: ["PICPA"],
//     },

//     {
//       name: "MARICEL B. DE TORRES",
//       image: assets.four,
//       role: "Deputy Leader, Audit and Assurance, Markets, Communication, and Training Leader & Business Development Head",
//       phone: "+63 998 865 8681",
//       email: "mbdetorres@amc-associates.com",
//       experience: (
//         <>
//           <p>
//             Maricel is a Deputy Leader in the Audit & Assurance Division,
//             responsible for the overall prompt and efficient delivery of quality
//             service to clients, and in training and developing the skills of
//             high-performance staff. She also leads the Firm's Markets &
//             Communications and Business Development Group, which handles
//             external communications, and business development handling the other
//             business support group engagements.
//           </p>
//           <br></br>
//           <p>
//             In addition to her client-servicing responsibilities, she was head
//             of the Firm's Training Group for a number of years.
//           </p>
//           <br></br>
//           <p>
//             Maricel started her audit and professional career in 2007. She has
//             extensive experience in the financial audit of local and
//             multinational companies in a wide range of industries. Prior to this
//             designation, she was the group lead audit manager, as well as the
//             group's Senior Manager in charge of training.
//           </p>
//           <br></br>
//           <p>
//             Maricel specializes in handling various non-audit engagements such
//             as agreed-upon procedures, review engagements, due diligence
//             engagements, ICPA report on the application for tax refund/TCC
//             engagements, and ICPA report on the application for
//             increase/decrease in capital stock filed to SEC.
//           </p>
//         </>
//       ),
//       sectorExperience:
//         "Banking and finance, non-bank financial institutions, mutual benefit associations (MBAI), cooperatives, manufacturing, real estate, gaming and entertainment, PEZA and SBMA entities, and services",
//       qualifications: [
//         "Certified Public Accountant",
//         "BS Business Administration – Accounting",
//       ],
//       memberships: [
//         "Bachelor's degree in accountancy, Lyceum of the Philippines University – Batangas (LPU-Batangas)",
//       ],
//     },

//     {
//       name: "REGINALD S. MANALESE",
//       image: "/partner-2.jpg",
//       role: "Partner, Audit & Assurance",
//       phone: "+63 933 827 6490",
//       email: "rsmanalese@amc-associates.com",
//       experience: (
//         <>
//           <p>
//             Reggie is a Partner in the Audit & Assurance Division. Reggie
//             started his professional career in 1993 as an accountant at one of
//             the largest banking institutions here in the Philippines. He rose
//             from the ranks and has become its chief accountant. After his stint
//             as a banker, he trained as a financial consultant for an Information
//             Technology Company.
//           </p>
//         </>
//       ),
//       sectorExperience: "Banking and finance, technology, and services",
//       qualifications: [
//         "Certified Public Accountant",
//         "Bachelor's degree in commerce Major in Accounting, San Beda College",
//       ],
//     },

//     {
//       name: "LAARNI M. TECSON",
//       image: "/partner-2.jpg",
//       role: "Practice Leader, Business Process Solutions/Outsourcing",
//       phone: "+63 929 743 2352",
//       email: "lmtecson@amc-associates.com",
//       experience: (
//         <>
//           <p>
//             Laarni is the Practice Leader of Business Process Solutions, the
//             outsourcing arm of AMC.
//           </p>
//           <br></br>
//           <p>
//             She started her CPA career at a prestigious and among the top
//             auditing firms in the Philippines in the Audit and Assurance
//             Practice Area in 1995, gaining six years of extensive experience
//             servicing well-known local and multinational companies in various
//             industries such as retail, banking and finance, real estate,
//             non-life insurance and construction. She then moved to join the
//             banking industry and gained ten solid years of experience working
//             for a local thrift bank where she headed as AVP – Internal Audit.
//             After her stint in the banking industry, she became one of the
//             consultants of AMC and then became part of the AMC's BPS Practice
//             Area.
//           </p>
//         </>
//       ),
//       sectorExperience:
//         "Banking and finance, cooperatives, not-for-profit, real estate, retail, and services, non-life insurance, health and wellness",
//       qualifications: [
//         "Certified Public Accountant",
//         "Civil Service Career Sub-Professional Passer",
//         "Bachelor of Science in Accountancy, Polytechnic University of the Philippines – Manila ",
//       ],
//       memberships: [
//         "Member, Philippine Institute of Certified Public Accountants (PICPA)",
//       ],
//     },

//     {
//       name: "NORMAN SANTIAGO",
//       image: assets.three,
//       role: "Practice Leader, Tax Advisory and Compliance",
//       phone: "+63 917 672 0410",
//       email: "nssantiago@amc-associates.com",
//       experience: (
//         <>
//           <p>
//             Norman is the Practice Leader of the Tax Advisory and Compliance
//             Division. He conducts tax compliance reviews that provide advisory
//             services on issues affecting individual and corporate taxpayers. He
//             also assists clients in handling their tax assessments and other
//             compliance requirements with the Bureau of Internal Revenue. Norman
//             is also a Partner of the BPS Practice Area of AMC.
//           </p>
//           <br></br>
//           <p>
//             He started his audit career at a prestigious and among the top
//             auditing firms in the Philippines, for seven fruitful years having
//             extensive experience in manufacturing, brokerage and freight
//             forwarders, mining, foundations, general contractor,
//             service-oriented companies, credit card companies, and trading
//             companies.
//           </p>
//         </>
//       ),
//       sectorExperience:
//         "Manufacturing, mining, foundations, credit card and financing companies, brokerage and freight forwarders, trading and services",
//       qualifications: [
//         "Bachelor's degree in commerce Major in Accounting, San Beda College",
//       ],
//     },

//     {
//       name: "JONEL U. AQUINO",
//       image: "/partner-2.jpg",
//       role: "Partner, Business Process Solutions/Outsourcing",
//       phone: "+63 917 319 6763",
//       email: "juaquino@amc-associates.com",
//       experience: (
//         <>
//           <p>
//             Jonel is one of the founding Partner of AMC and currently a Partner
//             of Business Process Solutions, the outsourcing arm of AMC.
//           </p>
//           <br></br>
//           <p>
//             He started his CPA career at a prestigious and among the top
//             auditing firms in the Philippines in the Audit and Assurance
//             Practice Area in 1991, gaining six years of extensive experience
//             servicing well-known local companies in various industries such as
//             retail and healthcare. He was selected as an instructor in
//             accounting and reporting standards for incoming juniors of the firm.
//             He then moved to join BUREAU OF INTERNAL REVENUE (BIR) as a revenue
//             officer in the assessment division for five years. After his duty in
//             the government tax agency, he moved to the corporate world and
//             gained 19 solid years of experience in events management,
//             advertising and marketing, multinational logistics company,
//             logistics management and consumer goods, and diversified
//             conglomerate with involvement in technology solutions & supply,
//             shared services, real estate development, construction & design,
//             FMCG, cooperative and foundation industries. He is also working
//             part-time as a professor at one of the top universities and colleges
//             in Cost Accounting, Financial Management, Basic Accounting &
//             Taxation, and Taxation.
//           </p>
//         </>
//       ),
//       sectorExperience:
//         "Retail, logistics, Shared services, cooperatives, not-for-profit, real estate, services, FMCG, health and wellness",
//       qualifications: [
//         "Certified Public Accountant",
//         "Certified Lean Six Sigma",
//         "Certified Risk Analyst (Under American Academy of Financial Management Phil) ",
//         "Certified Financial Consultant (Under Institute of Financial Consultants of Canada)",
//         "Certified Management Accountant (Under CMA Philippines)",
//         "Civil Service Career Sub-Professional Passer",
//         "Bachelor of Science in Accountancy, San Beda University",
//         "Executive Education in Finance (for CFOs), Wharton , University of Pennsylvania ",
//         "Masters of Science in International Business, University of London, Royal Holloway",
//         "Currently, taking up a Doctorate in Business Administration (PhD), 9 units, San Beda University",
//       ],
//       memberships: [
//         "Member, Philippine Institute of Certified Public Accountants (PICPA)",
//         "Member, Certified Management Accountants Philippines",
//       ],
//     },

//     {
//       name: "PERCIVAL T. LANDA",
//       image: "/partner-2.jpg",
//       role: "Partner, Business Process Solutions/Outsourcing",
//       phone: "+63 917 319 6763",
//       email: "ptlanda@amc-associates.com",
//       experience: (
//         <>
//           <p>
//             Percival is a Partner of the Business Process Solutions/Outsourcing
//             Division
//           </p>
//           <br></br>
//           <p>
//             He started his CPA career at a prestigious and among the top
//             auditing firms in the Philippines in the Audit and Assurance
//             Practice Area in 1993, gaining three years of experience in
//             manufacturing companies, non-profit organizations, real estate,
//             construction, stock brokerage, insurance, investment banking, and
//             banking. He then moved to join a managerial job at an investment
//             banking arm where he served as the financial controller for almost
//             12 years. After his stint in the investment industry, he moved to
//             the manpower outsourcing agency. He gained another 12 solid years of
//             experience in manpower, security, janitorial, wireless, and
//             technology-based solutions for integration, medical, water, academy,
//             realty, and financial services.
//           </p>
//         </>
//       ),
//       sectorExperience:
//         "Manufacturing companies, non-profit organizations, real estate, construction, stock brokerage, insurance, investment banking, banking, Manpower, security, and PR Agencies",
//       qualifications: [
//         "Certified Public Accountant",
//         "Bachelor of Science in Accountancy, Polytechnic University of the Philippines - Manila",
//       ],
//       memberships: [
//         "Member, Philippine Institute of Certified Public Accountants (PICPA)",
//       ],
//     },

//     {
//       name: "SHIELA MARIE R. AGUINALDO",
//       image: "/partner-2.jpg",
//       role: "Partner, Business Process Solutions/Outsourcing",
//       phone: "+63 917 319 6763",
//       email: "smraguinaldo@amc-associates.com",
//       experience: (
//         <>
//           <p>
//             Shiela is the Deputy Leader of the Business Process
//             Solutions/Outsourcing Division. She started her accounting career in
//             2002. Shiela is a seasoned accounting practitioner with significant
//             experience in accounting and payroll services, including expertise
//             in managing the accounting functions of various industries. She also
//             handled the Firm's various reconstruction services of client books.
//           </p>
//           <br></br>
//           <p>
//             Shiela also heads the preparation of personal annual income tax
//             returns for the individual taxpayer.
//           </p>
//         </>
//       ),
//       sectorExperience: "Manufacturing, trading, and services",
//       qualifications: [
//         "Bachelor's degree in accountancy, Philippine Christian University",
//       ],
//     },
//   ];

//   /* Pagination */
//   const perPage = 2;
//   const [page, setPage] = useState(1);
//   const totalPages = Math.ceil(partners.length / perPage);
//   const current = partners.slice((page - 1) * perPage, page * perPage);

//   const [activePartner, setActivePartner] = useState(null);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#EAF2FA] via-white to-[#F0F4FF] px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-30">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="mb-10 sm:mb-12 text-center"
//       >
//         <motion.h1
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2"
//         >
//           Our Partners
//         </motion.h1>

//         {/* <motion.div
//       initial={{ width: 0 }}
//       animate={{ width: "0" }}
//       transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
//       className="h-1 bg-blue-600 mx-auto rounded-full mb-4"
//     /> */}

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="text-gray-600 text-base sm:text-lg"
//         >
//           Meet our team of experienced professionals
//         </motion.p>
//       </motion.div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
//         {current.map((partner, i) => (
//           <PartnerCard
//             key={i}
//             partner={partner}
//             index={i}
//             onOpen={setActivePartner}
//           />
//         ))}
//       </div>

//       {/* Pagination */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4 }}
//         className="flex justify-center items-center gap-4 sm:gap-6"
//       >
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           disabled={page === 1}
//           onClick={() => setPage((p) => p - 1)}
//           className="p-3 rounded-full bg-white border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-all shadow-sm"
//         >
//           <ChevronLeft className="h-5 w-5 text-gray-700" />
//         </motion.button>

//         <span className="text-base font-medium text-gray-700 min-w-[100px] text-center">
//           {page} / {totalPages}
//         </span>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           disabled={page === totalPages}
//           onClick={() => setPage((p) => p + 1)}
//           className="p-3 rounded-full bg-white border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-all shadow-sm"
//         >
//           <ChevronRight className="h-5 w-5 text-gray-700" />
//         </motion.button>
//       </motion.div>

//       {/* Modal */}
//       {activePartner && (
//         <PartnerModal
//           partner={activePartner}
//           onClose={() => setActivePartner(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default PartnersPage;

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { assets } from "../assets/assets";

/* ─────────────── VARIANTS ─────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const overlayVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const drawerVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: 40, scale: 0.97, transition: { duration: 0.3 } },
};

/* ─────────────── MODAL ─────────────── */

const PartnerModal = ({ partner, onClose }) => {
  useEffect(() => {
    if (!partner) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [partner]);

  if (!partner) return null;

  return (
    <AnimatePresence>
      <motion.div
        variants={overlayVariant}
        initial="hidden" animate="visible" exit="exit"
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 50,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "16px",
          background: "rgba(4,15,35,0.82)",
          backdropFilter: "blur(10px)",
        }}
      >
        <motion.div
          variants={drawerVariant}
          initial="hidden" animate="visible" exit="exit"
          onClick={e => e.stopPropagation()}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 860,
            height: "min(88vh, 620px)",
            display: "flex",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 40px 100px rgba(0,30,100,0.35)",
            background: "#ffffff",
          }}
        >
          {/* ── LEFT: full-bleed image panel ── */}
          <div
            style={{
              width: "44%",
              flexShrink: 0,
              position: "relative",
              background: "linear-gradient(175deg, #c8dff5 0%, #daeaf8 40%, #e8f1fb 70%, #f0f4ff 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              overflow: "hidden",
            }}
          >
            {/* Decorative circles */}
            <div style={{
              position: "absolute", top: -60, left: -60,
              width: 220, height: 220, borderRadius: "50%",
              background: "rgba(37,99,235,0.08)",
            }} />
            <div style={{
              position: "absolute", bottom: -40, right: -40,
              width: 160, height: 160, borderRadius: "50%",
              background: "rgba(96,165,250,0.1)",
            }} />

            {/* Image fills bottom ~85% of panel */}
            <img
              src={partner.image}
              alt={partner.name}
              style={{
                width: "100%",
                height: "90%",
                objectFit: "contain",
                objectPosition: "center top",
                position: "relative",
                zIndex: 1,
                padding: "10px 20px 0",
              }}
            />

            {/* Name overlay at bottom */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              padding: "20px 20px 0",
              zIndex: 2,
            }}>
              <div style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(8px)",
                borderRadius: 10,
                padding: "6px 12px",
              }}>
                <p style={{
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "#1d4ed8", margin: 0,
                }}>
                  AMC Associates
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: scrollable content ── */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              background: "#ffffff",
            }}
          >
            {/* Header — fixed inside right panel */}
            <div style={{
              padding: "28px 28px 20px",
              borderBottom: "1px solid #e8f0fe",
              flexShrink: 0,
            }}>
              <p style={{
                fontSize: 10, fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#3b82f6", marginBottom: 6,
              }}>
                {partner.role}
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                fontWeight: 900, color: "#0f1f4b",
                lineHeight: 1.2, margin: "0 0 14px",
              }}>
                {partner.name}
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {partner.phone && (
                  <span style={{
                    fontSize: 11, display: "inline-flex", alignItems: "center", gap: 5,
                    background: "#eff6ff", border: "1px solid #bfdbfe",
                    color: "#1e40af", padding: "5px 10px", borderRadius: 99,
                  }}>
                    ☎ {partner.phone}
                  </span>
                )}
                {partner.email && (
                  <span style={{
                    fontSize: 11, display: "inline-flex", alignItems: "center", gap: 5,
                    background: "#f8fafc", border: "1px solid #e2e8f0",
                    color: "#475569", padding: "5px 10px", borderRadius: 99,
                  }}>
                    ✉ {partner.email}
                  </span>
                )}
              </div>
            </div>

            {/* Scrollable body */}
            <div style={{
              flex: 1,
              overflowY: "auto",
              padding: "20px 28px 28px",
              minHeight: 0,
            }}>
              <Section title="Experience" text={partner.experience} />
              <Section title="Sector Experience" text={partner.sectorExperience} />
              <Section title="Qualifications" list={partner.qualifications} />
              {partner.memberships?.length > 0 && (
                <Section title="Memberships" list={partner.memberships} />
              )}
            </div>
          </div>

          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={onClose}
            style={{
              position: "absolute", top: 16, right: 16, zIndex: 30,
              width: 36, height: 36, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 2px 12px rgba(0,30,100,0.18)",
              border: "none", cursor: "pointer",
            }}
          >
            <X size={16} color="#1e3a8a" />
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Section = ({ title, text, list }) => (
  <div className="mb-6">
    <h4
      className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-3"
    >
      {title}
    </h4>
    {text && (
      <div className="text-sm text-gray-700 leading-relaxed space-y-2">{text}</div>
    )}
    {list && (
      <ul className="space-y-2 mt-1">
        {list.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "#2563eb" }}
            />
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

/* ─────────────── CARD ─────────────── */

const PartnerCard = ({ partner, index, onOpen }) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    className="group relative overflow-hidden"
    style={{
      borderRadius: 24,
      background: "white",
      boxShadow: "0 4px 24px rgba(0,40,120,0.08)",
      border: "1px solid rgba(0,80,200,0.08)",
    }}
  >
    {/* Accent bar top */}
    <div
      className="h-1 w-full"
      style={{ background: "linear-gradient(90deg,#1d4ed8,#60a5fa)" }}
    />

    <div className="p-6 sm:p-8 flex gap-5 sm:gap-7">
      {/* Photo */}
      <div className="flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.3 }}
          className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg,#daeaf8,#eef5ff)",
            boxShadow: "0 6px 24px rgba(0,60,140,0.12)",
          }}
        >
          <img
            src={partner.image}
            alt={partner.name}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          {/* Name */}
          <h3
            className="text-base sm:text-lg font-black text-blue-950 leading-snug mb-1"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {partner.name}
          </h3>

          {/* Role pill */}
          <p
            className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3 leading-relaxed"
          >
            {partner.role}
          </p>

          {/* Divider */}
          <div className="w-8 h-0.5 rounded-full bg-blue-200 mb-3" />

          {/* Experience preview */}
          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
            {typeof partner.experience === "string"
              ? partner.experience
              : "Extensive professional experience across multiple industries."}
          </p>
        </div>

        {/* Footer row */}
        <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
          {partner.phone && (
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <span className="text-blue-400">☎</span> {partner.phone}
            </span>
          )}

          <motion.button
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpen(partner)}
            className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold text-white px-4 py-2 rounded-full transition-all"
            style={{
              background: "linear-gradient(90deg,#1d4ed8,#3b82f6)",
              boxShadow: "0 2px 10px rgba(37,99,235,0.3)",
            }}
          >
            View Profile
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─────────────── PAGE ─────────────── */

const PartnersPage = () => {
  const partners = [
    {
      name: "JOSEPH CEDRIC V. CALICA",
      image: assets.one,
      role: "Chairman & Managing Partner",
      phone: "+63 917 324 4486",
      email: "jcvcalica@amc-associates.com",
      experience: (
        <>
          <p>Cedric is one of the founding Partner of AMC and currently the Chairman & Managing Partner of the Firm. Cedric has been in public accounting for his entire professional career. He worked for seven years at a prestigious and among the top auditing firms in the Philippines, having extensive experience in manufacturing and other various related industries such as mining, retail, banking, real estate, government accounting, agri-business, and theme parks. He spent the next four years of his career heading the internal audit division of a broadcasting and construction company.</p>
          <br />
          <p>He has significant involvement in major financial due diligence audits, agreed-upon and review engagements of the Firm, and heads the engagement of ICPA report on the application for tax refund/TCC and assistance in handling tax audits by the BIR.</p>
        </>
      ),
      sectorExperience: "Banking and finance, mutual benefit associations (MBAI), hospitality and hotel-related operations, not-for-profit, technology, manufacturing, mining, retail, real estate, and services.",
      qualifications: ["Certified Public Accountant", "Bachelor's degree in commerce Major in Accounting, San Beda College"],
      memberships: ["Member, Philippine Institute of Certified Public Accountants (PICPA)", "Association of Certified Public Accountants in Commerce and Industry (ACPACI)"],
    },
    {
      name: "ARIEL D. GONZALES",
      image: assets.two,
      role: "Practice Leader, Audit and Assurance, Technical Standards and Quality Control Leader",
      phone: "+63 917 804 0772",
      email: "adgonzales@amc-associates.com",
      experience: (
        <>
          <p>Ariel is a Practice Leader of the Audit & Assurance Division as well as the Leader of Technical Standards & Quality Control. Ariel started his CPA career at a prestigious and among the top auditing firm in the Philippines and worked his way to become one of the elite audit managers of his batch.</p>
          <br />
          <p>Ariel has been in public accounting for his entire professional career, gaining extensive experience in the audit of local and multinational companies in various industries such as manufacturing and other various related industries such as retail, banking, real estate, processing and manufacturing, utilities, and construction.</p>
        </>
      ),
      sectorExperience: "Banking, cooperatives, not-for-profit, technology, manufacturing, utilities",
      qualifications: ["Certified Public Accountant", "BS Business Administration – Accounting"],
      memberships: ["PICPA"],
    },
    {
      name: "MARICEL B. DE TORRES",
      image: assets.four,
      role: "Deputy Leader, Audit and Assurance, Markets, Communication, and Training Leader & Business Development Head",
      phone: "+63 998 865 8681",
      email: "mbdetorres@amc-associates.com",
      experience: (
        <>
          <p>Maricel is a Deputy Leader in the Audit & Assurance Division, responsible for the overall prompt and efficient delivery of quality service to clients, and in training and developing the skills of high-performance staff.</p>
          <br />
          <p>Maricel started her audit and professional career in 2007. She has extensive experience in the financial audit of local and multinational companies in a wide range of industries. She specializes in handling various non-audit engagements such as agreed-upon procedures, review engagements, due diligence engagements, ICPA report on the application for tax refund/TCC engagements.</p>
        </>
      ),
      sectorExperience: "Banking and finance, non-bank financial institutions, mutual benefit associations (MBAI), cooperatives, manufacturing, real estate, gaming and entertainment, PEZA and SBMA entities, and services",
      qualifications: ["Certified Public Accountant", "BS Business Administration – Accounting"],
      memberships: ["Bachelor's degree in accountancy, Lyceum of the Philippines University – Batangas (LPU-Batangas)"],
    },
    {
      name: "REGINALD S. MANALESE",
      image: "/partner-2.jpg",
      role: "Partner, Audit & Assurance",
      phone: "+63 933 827 6490",
      email: "rsmanalese@amc-associates.com",
      experience: (
        <p>Reggie is a Partner in the Audit & Assurance Division. Reggie started his professional career in 1993 as an accountant at one of the largest banking institutions here in the Philippines. He rose from the ranks and has become its chief accountant. After his stint as a banker, he trained as a financial consultant for an Information Technology Company.</p>
      ),
      sectorExperience: "Banking and finance, technology, and services",
      qualifications: ["Certified Public Accountant", "Bachelor's degree in commerce Major in Accounting, San Beda College"],
    },
    {
      name: "LAARNI M. TECSON",
      image: "/partner-2.jpg",
      role: "Practice Leader, Business Process Solutions/Outsourcing",
      phone: "+63 929 743 2352",
      email: "lmtecson@amc-associates.com",
      experience: (
        <>
          <p>Laarni is the Practice Leader of Business Process Solutions, the outsourcing arm of AMC. She started her CPA career at a prestigious firm in 1995, gaining six years of extensive experience in retail, banking and finance, real estate, non-life insurance and construction.</p>
          <br />
          <p>She then moved to join the banking industry and gained ten solid years of experience working for a local thrift bank where she headed as AVP – Internal Audit.</p>
        </>
      ),
      sectorExperience: "Banking and finance, cooperatives, not-for-profit, real estate, retail, and services, non-life insurance, health and wellness",
      qualifications: ["Certified Public Accountant", "Civil Service Career Sub-Professional Passer", "Bachelor of Science in Accountancy, Polytechnic University of the Philippines – Manila"],
      memberships: ["Member, Philippine Institute of Certified Public Accountants (PICPA)"],
    },
    {
      name: "NORMAN SANTIAGO",
      image: assets.three,
      role: "Practice Leader, Tax Advisory and Compliance",
      phone: "+63 917 672 0410",
      email: "nssantiago@amc-associates.com",
      experience: (
        <>
          <p>Norman is the Practice Leader of the Tax Advisory and Compliance Division. He conducts tax compliance reviews that provide advisory services on issues affecting individual and corporate taxpayers. He also assists clients in handling their tax assessments and other compliance requirements with the Bureau of Internal Revenue.</p>
          <br />
          <p>He started his audit career at a prestigious and among the top auditing firms in the Philippines, for seven fruitful years having extensive experience in manufacturing, brokerage and freight forwarders, mining, foundations, general contractor, service-oriented companies, credit card companies, and trading companies.</p>
        </>
      ),
      sectorExperience: "Manufacturing, mining, foundations, credit card and financing companies, brokerage and freight forwarders, trading and services",
      qualifications: ["Bachelor's degree in commerce Major in Accounting, San Beda College"],
    },
    {
      name: "JONEL U. AQUINO",
      image: "/partner-2.jpg",
      role: "Partner, Business Process Solutions/Outsourcing",
      phone: "+63 917 319 6763",
      email: "juaquino@amc-associates.com",
      experience: (
        <>
          <p>Jonel is one of the founding Partner of AMC and currently a Partner of Business Process Solutions. He started his CPA career at a prestigious firm in 1991, gaining six years of extensive experience in retail and healthcare.</p>
          <br />
          <p>He then moved to join BUREAU OF INTERNAL REVENUE (BIR) as a revenue officer. After his duty in the government tax agency, he moved to the corporate world and gained 19 solid years of experience in events management, advertising and marketing, logistics, and diversified conglomerate.</p>
        </>
      ),
      sectorExperience: "Retail, logistics, Shared services, cooperatives, not-for-profit, real estate, services, FMCG, health and wellness",
      qualifications: ["Certified Public Accountant", "Certified Lean Six Sigma", "Certified Risk Analyst", "Certified Financial Consultant", "Certified Management Accountant", "Bachelor of Science in Accountancy, San Beda University", "Executive Education in Finance (for CFOs), Wharton, University of Pennsylvania", "Masters of Science in International Business, University of London, Royal Holloway"],
      memberships: ["Member, Philippine Institute of Certified Public Accountants (PICPA)", "Member, Certified Management Accountants Philippines"],
    },
    {
      name: "PERCIVAL T. LANDA",
      image: "/partner-2.jpg",
      role: "Partner, Business Process Solutions/Outsourcing",
      phone: "+63 917 319 6763",
      email: "ptlanda@amc-associates.com",
      experience: (
        <>
          <p>Percival is a Partner of the Business Process Solutions/Outsourcing Division. He started his CPA career at a prestigious firm in 1993, gaining three years of experience in manufacturing companies, non-profit organizations, real estate, construction, stock brokerage, insurance, investment banking, and banking.</p>
          <br />
          <p>He then moved to join a managerial job at an investment banking arm where he served as the financial controller for almost 12 years, followed by 12 solid years in manpower outsourcing agency.</p>
        </>
      ),
      sectorExperience: "Manufacturing companies, non-profit organizations, real estate, construction, stock brokerage, insurance, investment banking, banking, Manpower, security, and PR Agencies",
      qualifications: ["Certified Public Accountant", "Bachelor of Science in Accountancy, Polytechnic University of the Philippines - Manila"],
      memberships: ["Member, Philippine Institute of Certified Public Accountants (PICPA)"],
    },
    {
      name: "SHIELA MARIE R. AGUINALDO",
      image: "/partner-2.jpg",
      role: "Partner, Business Process Solutions/Outsourcing",
      phone: "+63 917 319 6763",
      email: "smraguinaldo@amc-associates.com",
      experience: (
        <>
          <p>Shiela is the Deputy Leader of the Business Process Solutions/Outsourcing Division. She started her accounting career in 2002. Shiela is a seasoned accounting practitioner with significant experience in accounting and payroll services, including expertise in managing the accounting functions of various industries.</p>
          <br />
          <p>Shiela also heads the preparation of personal annual income tax returns for the individual taxpayer.</p>
        </>
      ),
      sectorExperience: "Manufacturing, trading, and services",
      qualifications: ["Bachelor's degree in accountancy, Philippine Christian University"],
    },
  ];

  const perPage = 4;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(partners.length / perPage);
  const current = partners.slice((page - 1) * perPage, page * perPage);
  const [activePartner, setActivePartner] = useState(null);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg,#EAF2FA 0%,#f8fbff 40%,#F0F4FF 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .line-clamp-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
      `}</style>

      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(37,99,235,0.06) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(96,165,250,0.07) 0%, transparent 50%)
          `,
        }}
      />
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(#1d4ed8 1px,transparent 1px),linear-gradient(90deg,#1d4ed8 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-14 lg:px-20 py-16 sm:py-20 md:py-28">

        {/* ── HEADER ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="mb-16 sm:mb-20"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-12 bg-blue-400" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-500">
              Leadership
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-5xl sm:text-6xl md:text-7xl font-black text-blue-950 leading-[0.95] tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Our
                <br />
                <span
                  className="relative inline-block"
                  style={{
                    background: "linear-gradient(90deg,#1d4ed8,#3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Partners
                </span>
              </motion.h1>
            </div>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base text-gray-500 max-w-xs leading-relaxed md:text-right"
            >
              Decades of expertise across audit, tax, and business solutions — anchored in integrity.
            </motion.p>
          </div>

          {/* Decorative rule */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-8 h-px w-full"
            style={{ background: "linear-gradient(90deg,#1d4ed8 0%,rgba(96,165,250,0.3) 50%,transparent 100%)" }}
          />
        </motion.div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
          {current.map((partner, i) => (
            <PartnerCard
              key={partner.name}
              partner={partner}
              index={i}
              onOpen={setActivePartner}
            />
          ))}
        </div>

        {/* ── PAGINATION ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-between"
        >
          {/* Page info */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className="transition-all duration-300"
                style={{
                  width: page === i + 1 ? 28 : 8,
                  height: 8,
                  borderRadius: 99,
                  background: page === i + 1
                    ? "linear-gradient(90deg,#1d4ed8,#3b82f6)"
                    : "rgba(0,60,200,0.15)",
                }}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400 mr-1">
              {(page - 1) * perPage + 1}–{Math.min(page * perPage, partners.length)} of {partners.length}
            </span>

            <motion.button
              whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                background: "white",
                border: "1.5px solid rgba(0,80,200,0.15)",
                boxShadow: "0 2px 8px rgba(0,60,140,0.06)",
              }}
            >
              <ChevronLeft className="w-5 h-5 text-blue-700" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}
              disabled={page === totalPages}
              onClick={() => setPage(p => p + 1)}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
              }}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {activePartner && (
        <PartnerModal partner={activePartner} onClose={() => setActivePartner(null)} />
      )}
    </div>
  );
};

export default PartnersPage;