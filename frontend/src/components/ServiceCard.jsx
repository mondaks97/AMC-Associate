import { useRef, useState } from "react";

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={divRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden group h-full rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 bg-white dark:bg-gray-900 transition-all duration-500"
    >
      {/* Gradient Light Effect */}
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${
          visible ? "opacity-70" : "opacity-0"
        }`}
        style={{
          top: position.y - 150,
          left: position.x - 150,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 flex items-center gap-8 p-8 transition-all duration-500 group-hover:scale-[1.02]">
        {/* Icon */}
        <div className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-full p-4 shadow-inner">
          <img
            src={service.icon}
            alt={service.title}
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
