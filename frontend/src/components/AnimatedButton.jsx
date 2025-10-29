import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AnimatedButton = ({ label = "Click Me", to = "/"  }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };


  return (
    <button
     onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`
        relative flex items-center gap-1.5 px-6 py-2.5
        border-4 border-transparent font-semibold text-base
        text-blue-400 bg-transparent shadow-[0_0_0_2px_rgb(136,0,0)]
        overflow-hidden cursor-pointer transform
        
        transition-shadow duration-600 cubic-bezier(0.23,1,0.32,1)
        ${hover ? "shadow-[0_0_0_12px_transparent] border-gray-900 text-gray-900" : ""}
      `}
      style={{
        borderRadius: hover ? "12px" : "9999px",
        transitionProperty: "border-radius",
        transitionDuration: "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "border-radius, box-shadow, color, transform",
      }}
    >
      {/* Left arrow */}
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-5 top-1/2 -translate-y-1/2 transition-all duration-700 cubic-bezier(0.23,1,0.32,1)"
        style={{
          left: hover ? "12px" : "-25%",
          fill: "black",
          transition: "left 0.7s cubic-bezier(0.23,1,0.32,1)",
          willChange: "left",
          zIndex: 10,
        }}
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>

      {/* Button text */}
      <span
        className="relative z-20 transition-transform duration-700 cubic-bezier(0.23,1,0.32,1)"
        style={{
          color: "black",
          transform: hover ? "translateX(10px)" : "translateX(-10px)",
          transitionProperty: "transform, color",
          transitionDuration: "0.7s",
          willChange: "transform, color",
        }}
      >
        {label}
      </span>

      {/* Expanding circle */}
      <span
        className="absolute top-1/2 left-1/2 rounded-full"
        style={{
          width: hover ? 200 : 10,
          height: hover ? 200 : 10,
          backgroundColor: "#880000",
          opacity: hover ? 1 : 0,
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.7s cubic-bezier(0.23,1,0.32,1), height 0.7s cubic-bezier(0.23,1,0.32,1), opacity 0.7s ease",
          willChange: "width, height, opacity",
          zIndex: 0,
        }}
      ></span>

      {/* Right arrow */}
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-5 top-1/2 -translate-y-1/2 transition-all duration-700 cubic-bezier(0.23,1,0.32,1)"
        style={{
          right: hover ? "-25%" : "12px",
          fill: "black",
          transition: "right 0.7s cubic-bezier(0.23,1,0.32,1)",
          willChange: "right",
        }}
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </button>
  );
};

export default AnimatedButton;
