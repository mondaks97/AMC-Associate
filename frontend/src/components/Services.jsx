import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Package } from "lucide-react";
import { assets } from "../assets/assets";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Expert services to elevate your
            <br />
            business performance.
          </h1>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">View all services</button>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Image Section */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <div className="relative bg-white shadow-lg overflow-hidden">
              <div className="aspect-square p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    <img src={assets.pano} alt="Animated Preview" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Services Section - Triangle Layout */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Strategic Business Planning - Top Center */}
              <div className="flex transition-transform duration-300 hover:-translate-y-2 justify-center mb-8">
                <div className="text-center max-w-sm w-full">
                  <div className="w-12  h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Integrity
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                 We conduct business with customers in strict compliance with CPA ethics codes and take seriously our role in achieving corporate governance goals.
                  </p>
                </div>
              </div>

              {/* Bottom Row Services - Triangle Base */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {/* Market Entry Analysis - Bottom Left */}
                <div className="text-center pr-0 md:pr-8 transition-transform duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Quality
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                   Providing quality service by focusing on our clients’ needs. Doing their project in the most efficient manner. We stand behind our work.
                  </p>
                </div>

                {/* Supply Chain Optimization - Bottom Right */}
                <div className="text-center pl-0 md:pl-8 transition-transform duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Package className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Transparency
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our audit process centers on dialogue. We keep management updated on progress and key issues, making the audit a useful resource for clients.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
