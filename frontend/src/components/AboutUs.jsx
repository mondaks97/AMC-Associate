import { assets } from "../assets/assets";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-25 px-6">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#000099] mb-4">About Us</h2>
          <p className="text-gray-600 font-bold text-3xl mt-15">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, enim ex. Sunt quasi quibusdam reiciendis!</p>
        </div>

       
       
      </div>
    </div>
  );
};

export default AboutUs;

// import { motion } from "framer-motion";
// import { assets } from "../assets/assets";

// const AboutUs = () => {
//   return (
//     <div>
//       <div className="min-h-screen p-8 mb-16">
//         <div className="max-w-7xl mx-auto">
//           {/* About Us Header */}
//           <motion.div
//             className="text-center mt-16 mb-16"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-6xl font-bold text-[#000099] mb-2 tracking-wide">Our Corporate Values</h2>
//             {/* <div className="w-45 h-1 bg-blue-500 rounded-full mx-auto"></div> */}
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Right side - Content */}
//             <motion.div
//               className="space-y-8"
//               initial={{ opacity: 0, x: 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >

//               {/* Values */}
//               <div className="flex justify-center md:flex-col gap-8">
//                 {/* Client-Focused */}

//                 <div className="space-y-4">
//                   <div className="w-20 h-20  flex items-center justify-center">
//                     <img src={assets.transparency}
//                      className="w-20 h-20 text-blue-600"
//                      />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900">Transparency</h3>
//                   <p className="text-gray-600">Our clients and the business community can rely on us for independence and objectivity – two important ingredients of a successful accounting practice that we guard very closely.</p>
//                 </div>

//                 <div className="space-y-4">
//                  <div className="w-20 h-20  flex items-center justify-center">
//                     <img src={assets.results_oriented}
//                      className="w-20 h-20 text-blue-600"
//                      />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900">Results-Oriented</h3>
//                   <p className="text-gray-600">Our clients and the business community can rely on us for independence and objectivity – two important ingredients of a successful accounting practice that we guard very closely.</p>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="w-20 h-20  flex items-center justify-center">
//                     <img src={assets.integrity}
//                      className="w-20 h-20 text-blue-600"
//                      />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900">Integrity</h3>
//                   <p className="text-gray-600">Our clients and the business community can rely on us for independence and objectivity – two important ingredients of a successful accounting practice that we guard very closely.</p>
//                 </div>

//                 {/* Results-Oriented */}
//                 <div className="space-y-4">
//                   <div className="w-20 h-20  flex items-center justify-center">
//                     <img src={assets.quality}
//                      className="w-20 h-20 text-blue-600"
//                      />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900">Quality</h3>
//                   <p className="text-gray-600">We are committed to achieving results rather than merely the completion of tasks. We will be flexible and forward thinking to assure that the desired result is achieved.</p>
//                 </div>

//                  <div className="space-y-4">
//                  <div className="w-20 h-20  flex items-center justify-center">
//                     <img src={assets.client_focused}
//                      className="w-20 h-20 text-blue-600"
//                      />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900">Client-Focused</h3>
//                   <p className="text-gray-600">Our clients and the business community can rely on us for independence and objectivity – two important ingredients of a successful accounting practice that we guard very closely.</p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
