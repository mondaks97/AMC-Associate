import { assets } from "../assets/assets";
import Title from "../components/Title.jsx";
import ServiceCard from "./ServiceCard.jsx";
import AnimatedButton from "./AnimatedButton.jsx";
import { motion } from "framer-motion";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description: "Review Engagements and Advisory Services",
      icon: assets.social_icon,
    },
    {
      title: "Regulatory Compliance Audit",
      description: "Review Engagements and Advisory Services",
      icon: assets.marketing_icon,
    },
    {
      title: "Review & Advisory",
      description: "Review Engagements and Advisory Services",
      icon: assets.content_icon,
    },
    {
      title: "Content Marketing",
      description: "Review Engagements and Advisory Services",
      icon: assets.ads_icon,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="service"
  className="relative flex flex-col justify-center items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white overflow-hidden scroll-mt-24 mb-20"
    >
      {/* Floating Background Image */}
      <motion.img
        src={assets.bgImage2}
        alt="bg_image"
        className="absolute -top-40 -left-40 -z-10 opacity-30 dark:opacity-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Title */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Title title={"Expert services to elevate your business \n performance."} />
      </motion.div>

      {/* Button */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <AnimatedButton label="View all Services" to="/services" />
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 w-full max-w-5xl">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            <ServiceCard key={index} service={service} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
