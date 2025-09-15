import { assets } from "../assets/assets";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-25 px-6">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-[#000099] mb-4">Our Corporate Values</h2>
          <p className="text-gray-600 font-bold text-3xl mt-15">Why do business with us?</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-5 gap-6">
          {/* Basic Coverage */}
          <div className="cursor-pointer bg-white p-8 rounded-lg text-center shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-7">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">
              <img src={assets.transparency} alt="Transparency" />
            </div>
            <h3 className="text-xl text-[#880000] font-bold mb-4">Transparency</h3>
            <p className="text-gray-600 text-md font-md text-sm mb-6">
              The guiding word for our audit process is dialogue. We keep management fully informed of the special attention. Our goal is to turn audit into a management information resource for our
              clients.
            </p>
            {/* <a href="#" className="text-gray-600 text-sm">Learn More →</a> */}
          </div>

          {/* Standard Coverage */}
          <div className="cursor-pointer bg-white p-8 rounded-lg text-center shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-7">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">
              <img src={assets.results_oriented} alt="Results-Oriented" />
            </div>
            <h3 className="text-xl text-[#880000] font-bold mb-4">Results-Oriented</h3>
            <p className="text-gray-600 text-md font-md  text-sm mb-6">
              We are committed to achieving results rather than merely the completion of tasks. We will be flexible and forward thinking to assure that the desired result is achieved.
            </p>
            {/* <a href="#" className="text-gray-600 text-sm">Learn More →</a> */}
          </div>

          {/* Premium Coverage */}
          <div className="cursor-pointer bg-white p-8 rounded-lg text-center shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-7">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">
              <img src={assets.integrity} alt="Integrity" />
            </div>
            <h3 className="text-xl text-[#880000] font-bold mb-4">Integrity</h3>
            <p className="text-gray-600 text-md font-md text-sm mb-6">
              Our focus on doing business with customers strictly adheres to the code of ethics for certified public Accountants promulgated by local and international standard-setting organization.
              We seriously consider ourselves to have a significant
            </p>
            {/* <a href="#" className="text-gray-600 text-sm">Learn More →</a> */}
          </div>

          {/* Custom Coverage */}
          <div className="cursor-pointer bg-white p-8 rounded-lg text-center shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-7">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">
              <img src={assets.quality} alt="Quality" />
            </div>
            <h3 className="text-xl text-[#880000] font-bold mb-4">Quality</h3>
            <p className="text-gray-600 text-md font-md mb-6">Providing quality service by focusing on our clients needs. Doing their project in the most efficient manner. We stand behind our work.</p>
            {/* <a href="#" className="text-gray-600 text-sm">Learn More →</a> */}
          </div>

          {/* Enterprise Coverage */}
          <div className="cursor-pointer bg-white p-8 rounded-lg text-center shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-7">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">
              <img src={assets.client_focused} alt="Client-Focused" />
            </div>
            <h3 className="text-xl text-[#880000] font-bold mb-4">Client-Focused</h3>
            <p className="text-gray-600 text-md font-md text-sm mb-6">
              Our clients and the business community can rely on us for independence and objectively two important ingredients of a successful accounting practice that we guard very closely.
            </p>
            {/* <a href="#" className="text-gray-600 text-sm">Learn More →</a> */}
          </div>
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
