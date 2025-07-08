import React from "react";
import { Users, Database, Target } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div>
      <div className="min-h-screen p-8 mb-16">
        <div className="max-w-7xl mx-auto">
          {/* About Us Header */}
          <motion.div
            className="text-center mt-16 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-600 mb-2 tracking-wide">About Us</h2>
            <div className="w-45 h-1 bg-blue-500 rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Images and Chart */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Business woman image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-10 h-10 text-gray-800" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Professional Woman</h3>
                      <p className="text-gray-300">Business Leader</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team meeting and chart */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Team meeting */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-center h-32 bg-gray-100 rounded-lg mb-4">
                    <Users className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm text-gray-600">Card user</p>
                  </div>
                </div>

                {/* Chart */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      {/* Donut chart simulation */}
                      <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
                      <div className="absolute inset-0 rounded-full border-8 border-orange-500 border-t-transparent border-r-transparent transform -rotate-45"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-800">80%</div>
                          <div className="text-xs text-gray-500">Transactions</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center space-x-4 text-xs">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-1"></div>
                        <span className="text-gray-600">Sell</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                        <span className="text-gray-600">Distribute</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-1"></div>
                        <span className="text-gray-600">Return</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">AMC Associates — Delivering Strategic Business Solutions with Integrity and Precision.</h1>
                <p className="text-lg text-gray-600 mb-8">At AMC Associates, we specialize in delivering tailored business solutions that uphold the highest standards of integrity and accuracy—empowering organizations to grow with confidence and compliance.</p>
                <div className="w-full h-0.5 bg-gray-900 rounded-full"></div>
              </div>

              {/* Values */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Client-Focused */}
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Client-Focused</h3>
                  <p className="text-gray-600">Our clients and the business community can rely on us for independence and objectivity – two important ingredients of a successful accounting practice that we guard very closely.</p>
                </div>

                {/* Results-Oriented */}
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Results-Oriented</h3>
                  <p className="text-gray-600">We are committed to achieving results rather than merely the completion of tasks. We will be flexible and forward thinking to assure that the desired result is achieved.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
