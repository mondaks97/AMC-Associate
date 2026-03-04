import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const Preloader = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
        >
          {/* Logo Spinner */}
          <motion.img
            src={assets.amc_logo2}
            alt="AMC & Associates"
            className="w-28 h-28 object-contain"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear",
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
              transition: { duration: 0.4 },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
