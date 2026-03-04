// import { useState } from "react";
// import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

// const ServicePageCard = ({ service }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
//       {/* Header */}
//       <div
//         className="flex justify-between items-center cursor-pointer"
//         onClick={() => setOpen(!open)}
//       >
//         <h3 className="text-lg font-semibold text-[#5a2d82]">
//           {service.title}
//         </h3>
//         {open ? (
//           <ChevronUp className="text-[#5a2d82]" />
//         ) : (
//           <ChevronDown className="text-[#5a2d82]" />
//         )}
//       </div>

//       {/* Description */}
//       <p className="text-gray-600 text-sm leading-relaxed mt-2">
//         {service.description}
//       </p>

//       {/* Expandable Section */}
//       <div
//         className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
//           open ? "max-h-96 mt-4" : "max-h-0"
//         }`}
//       >
//         {open && (
//           <>
//             <hr className="border-t border-gray-200 my-3" />
//             <div className="flex items-center gap-1 text-xs font-medium text-gray-500 mb-3">
//               <ChevronUp size={14} /> HIDE OUR {service.title.toUpperCase()}
//             </div>

//             <div className="flex flex-col gap-2">
//               {service.subServices.map((sub, i) => (
//                 <button
//                   key={i}
//                   className="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 text-sm font-medium text-[#5a2d82] transition-all"
//                 >
//                   {sub}
//                   <ArrowRight size={16} />
//                 </button>
//               ))}
//             </div>
//           </>
//         )}
//       </div>

//       {/* Closed button */}
//       {!open && (
//         <div
//           className="flex items-center gap-2 text-sm text-[#5a2d82] mt-3 font-medium cursor-pointer"
//           onClick={() => setOpen(true)}
//         >
//           <ArrowRight size={14} /> SEE OUR {service.title.toUpperCase()}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServicePageCard;

// import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const ServicePageCard = ({ service, isOpen, onToggle }) => {
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-md">
      
//       {/* Header */}
//       <button
//         type="button"
//         onClick={onToggle}
//         aria-expanded={isOpen}
//         className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left"
//       >
//         <div>
//           <h3 className="text-base sm:text-lg font-semibold text-[#5a2d82]">
//             {service.title}
//           </h3>

//           {/* Mobile description */}
//           <p className="text-sm text-gray-600 mt-1 sm:hidden">
//             {service.description}
//           </p>
//         </div>

//         {isOpen ? (
//           <ChevronUp className="text-[#5a2d82] mt-1 shrink-0" />
//         ) : (
//           <ChevronDown className="text-[#5a2d82] mt-1 shrink-0" />
//         )}
//       </button>

//       {/* Desktop description */}
//       <p className="hidden sm:block px-6 -mt-3 text-sm text-gray-600 leading-relaxed">
//         {service.description}
//       </p>

//       {/* Accordion body */}
//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             key="content"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.35, ease: "easeInOut" }}
//             className="overflow-hidden"
//           >
//             <div className="px-5 sm:px-6 pt-4 pb-6">
//               <hr className="border-gray-200 mb-4" />

//               <p className="flex items-center gap-1 text-xs font-medium text-gray-500 mb-3">
//                 <ChevronUp size={14} /> HIDE OUR {service.title.toUpperCase()}
//               </p>

//               <div className="flex flex-col gap-2">
//                 {service.subServices.map((sub, i) => (
//                   <button
//                     key={i}
//                     className="flex items-center justify-between px-4 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-sm font-medium text-[#5a2d82] transition-all"
//                   >
//                     {sub}
//                     <ArrowRight size={16} />
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ServicePageCard;
