import { motion } from "framer-motion";

const Hero = () => {
  return (
   <section className="relative min-h-screen bg-white flex items-center px-15">
      <div className="relative z-10 py-16 mt-6">
        <div className="grid lg:grid-cols-1 items-center">
          <div>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay:0.5, duration: 1 }}
              className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight mb-4"
            >
              Supporting
            </motion.h1>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-start gap-7"
            >
              <p className="text-gray-600 text-md leading-relaxed max-w-sm mt-4">
                Behind these few words is a way of delivering professional service
                that amounts to a way of life. Our personal commitment to our clients
                makes a direct contribution to our professional excellence. It is the
                foundation for the trust and business insights that allow us to serve
                clients effectively now and in the future.
              </p>

              <div className="flex items-baseline">
                <span className="text-6xl lg:text-8xl font-bold text-gray-900 mr-4">
                  Your
                </span>
                <span className="text-6xl lg:text-8xl font-bold text-blue-600">
                  Success
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
