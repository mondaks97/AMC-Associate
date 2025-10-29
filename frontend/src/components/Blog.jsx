import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const Blog = () => {
  const tags = [
    { id: 1, name: "All" },
    { id: 2, name: "Business" },
    { id: 3, name: "Finance" },
    { id: 4, name: "Technology" },
    { id: 5, name: "Lifestyle" },
    { id: 6, name: "Health" },
  ];

  const [activeLink, setActiveLink] = useState(0);

  // Container: handles stagger timing
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  // Generic fade+slide for blog items
  const itemVariant = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Zoom-in for main image
  const zoomVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="w-full">
      {/* ✅ Category Nav */}
      <div className="flex flex-col justify-center px-[70px] md:px-[150px] mt-10 mb-8">
        <div className="flex flex-wrap gap-3 md:gap-10 justify-center">
          {tags.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveLink(index)}
              className={`
                px-4 py-2 rounded-full font-medium text-sm md:text-base
                border border-red-500 cursor-pointer
                transition-all duration-300 ease-in-out transform
                ${
                  index === activeLink
                    ? "bg-red-500 text-white scale-105 shadow-md"
                    : "text-red-500 hover:bg-red-100 hover:scale-105"
                }
              `}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Blog Section with Stagger + Zoom */}
      <div className="px-[70px] md:px-[150px] min-h-[60vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLink}
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col lg:flex-row gap-10 md:gap-16"
          >
            {/* Left (main blog) */}
            <motion.div
              variants={itemVariant}
              className="w-full lg:w-1/2 flex flex-col gap-4"
            >
              <motion.img
                variants={zoomVariant}
                className="rounded-3xl object-cover w-full h-80 shadow-md"
                src={assets.blogimg}
                alt="Main blog"
              />
              <div className="flex items-center gap-4">
                <h1 className="font-semibold lg:text-lg">01.</h1>
                <Link className="text-blue-800 lg:text-lg">Sample Blog</Link>
                <span className="text-gray-500 text-sm">2 days ago</span>
              </div>
              <Link
                className="text-xl lg:text-2xl font-semibold lg:font-bold leading-snug"
                to="/test"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                minus!
              </Link>
            </motion.div>

            {/* Right (other blogs) */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              {[2, 3, 4].map((num) => (
                <motion.div
                  key={num}
                  variants={itemVariant}
                  className="flex justify-between gap-4 items-start hover:scale-[1.02] transition-transform duration-300"
                >
                  <img
                    className="rounded-3xl object-cover w-52 h-28 md:w-60 md:h-36"
                    src={assets.blogimg}
                    alt={`Blog ${num}`}
                  />
                  <div className="w-2/3">
                    <div className="flex items-center gap-3 text-sm lg:text-base mb-3">
                      <h1 className="font-semibold lg:text-lg">
                        {String(num).padStart(2, "0")}.
                      </h1>
                      <Link className="text-blue-800 lg:text-lg">
                        Sample Blog
                      </Link>
                      <span className="text-gray-500 text-sm">2 days ago</span>
                    </div>
                    <Link
                      className="text-base sm:text-lg md:text-xl font-medium leading-snug"
                      to="/test"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus, deserunt!
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Blog;
