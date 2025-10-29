import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
  <section id="home" className="relative min-h-screen w-full bg-transparent flex items-center px-4 sm:px-6 md:px-10">
  {/* Background Image Container */}
  <div className="absolute inset-0">
    {/* Overlay for better text readability */}
    {/* <div className="absolute inset-0 bg-black/10 z-10" /> */}
    <motion.img
      // src={assets.amc_wallpaper}
      src={assets.bg2}
      alt="Background Image"
      className="absolute inset-0 w-full h-full object-cover object-[center_30%] z-0"
    />
  </div>
      
      {/* Additional overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"/>
      
      <div className="relative z-20 w-full py-16 mt-25">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 items-center">
            <div>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="font-playfair text-5xl lg:text-7xl font-bold text-white leading-tight mb-4"
              >
              We take your Business <br></br>Personally
            </motion.h1>

            <motion.div 
              initial={{ y: 40, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 1, duration: 1 }} 
              className="flex items-start gap-7"
            >
              <p className="text-white text-md font-medium leading-relaxed max-w-m mt-4">
                Behind these few words is a way of delivering professional service that amounts to a way of life.<br></br> Our personal commitment to our clients makes a direct contribution to our
                professional excellence.<br></br> It is the foundation for the trust and business insights that allow us to serve clients effectively now and in the future.
              </p>

              <div className="flex items-baseline">
                {/* <span className="text-6xl lg:text-8xl font-bold text-gray-900 mr-4">
                  Your
                </span> */}
                <span className="text-5xl lg:text-7xl font-bold text-white"></span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;