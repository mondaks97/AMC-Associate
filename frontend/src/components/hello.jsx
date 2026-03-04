import React from 'react'

const hello = () => {
  return (
   
 <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="relative z-10 py-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-1 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight mb-4">Constructing</h1>

            <div className="flex items-start gap-7">
              <p className="text-gray-600 text-lg leading-relaxed max-w-sm mt-4">
                With our expert team and innovative solutions, we're dedicated to delivering high-quality construction projects that exceed expectations.
              </p>

              <div className="flex items-baseline">
                <span className="text-6xl lg:text-8xl font-bold text-gray-900 mr-4">Your</span>
                <span className="text-6xl lg:text-8xl font-bold text-orange-500">Legacy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    
  )
}

export default hello
<section className="bg-white px-6 md:px-12 lg:px-24 py-16">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
           Our Philosophy
          </h2>

          <p className="text-gray-600 mt-6 text-base md:text-lg">
           We dedicate ourselves to providing superior and high-quality services of audit, accounting, tax, and business process outsourcing in a timely, effective, and efficient manner maintaining the highest standards of professional integrity. We consider our responsibility to embrace responsiveness to our client’s requirements for their business, special opportunities, and challenges that confront them. We foster an enjoyable working environment through open communication, mutual respect, teamwork, continuous innovation, and loyalty to perform our tradition of services and leadership.
          </p>

          <button className="mt-8 bg-red-600 hover:bg-blue-600 text-white px-6 py-3 rounded font-medium cursor-pointer">Know more about us</button>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7">
          <div className="relative w-full">
            {/* Image */}
            <img src="https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=800&q=80" alt="Construction workers" className="w-full h-full rounded-lg object-cover" />

            {/* Since Badge */}
            <div className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded shadow-lg text-left">
              <span className="text-xs">Since</span>
              <div className="text-3xl font-bold text-white-500">2002</div>
            </div>
          </div>

          {/* Right Info Box */}
          {/* <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="text-red-600">◎</span> Our mission
              </h3>
              <p className="text-gray-700 text-sm">To provide the most reliable, effective, and efficient services that add value to clients’ businesses, both local and international. </p>
            </div>

            
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="text-red-600">🎯</span> Goal
              </h3>
              <p className="text-gray-700 text-sm">To be the leading firm provider of high-quality services in the field of audit, taxation, accounting, consulting, and business process outsourcing.</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>






 <div className="min-h-screen w-full max-w-7xl mx-auto p-4 md:p-8">
      {/* Header Section with Contact Info */}
      <div className="mb-8 md:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-25">
          {/* Left side - Title and description */}
          <div className="flex-shrink-0 lg:max-w-md">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-md">
              We'd love to hear from you! Whether you have questions, need support, or want to learn more about our services, our team is here to help.
            </p>
          </div>

          {/* Right side - Contact Information aligned with title */}
          <div className="flex flex-col sm:flex-row lg:flex-row gap-6 lg:gap-45 lg:items-start lg:mt-0">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Address</h3>
                <p className="text-gray-600">
                  Asklepios Tower<br />
                  Makima Street 251
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Contact Info</h3>
                <p className="text-gray-600">
                  +123 456 789<br />
                  help@nightingale.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative">
        <div className="relative bg-gray-100 rounded-lg overflow-hidden h-64 md:h-80 lg:h-96">
          {/* Google Maps iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3bb5a4b%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <button
              onClick={handleZoomIn}
              className="w-10 h-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center"
            >
              <Plus className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleZoomOut}
              className="w-10 h-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center"
            >
              <Minus className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Map Overlay - You can customize this */}
          <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3 max-w-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Your Location</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Asklepios Tower, Makima Street 251
            </p>
          </div>
        </div>
      </div>
    </div>





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





<div className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10">
      <div className="pointer-event-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten">
        <div className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative">
            <div>
              <img src={assets} alt="" />
            </div>
        </div>
      </div>
    </div>









<div>
        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service, index)=>(
                <ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>
    </div>














// navbar
const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ["Home", "About", "Services", "Features", "Contact Us"];
  const dropdownItems = [
    { name: "Career", path: "/Career" },
    { name: "Blogs", path: "/blogs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <motion.div
    initial={{opacity: 0, y: -90}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.2, ease: 'easeOut'}}
  className={`fixed w-full z-50 bg-white transition-all duration-300 ${
    scrolled ? "shadow-md py-2" : "py-4"
  }`}
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              closeMenu();
              window.location.href = "/";
            }}
          >
            <img
              src={assets.amclogo}
              alt="logo"
              className="cursor-pointer w-24 sm:w-28 md:w-32 lg:w-25 h-auto"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex font-medium space-x-4 xl:space-x-6">
            {links.map((link) => (
              <li key={link} className="relative">
                {link === "Features" ? (
                  <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                      className="
                        font-montserrat font-semibold relative inline-flex items-center px-3 xl:px-4 py-2 text-[#800000] text-sm xl:text-base
                        transition-colors duration-300 hover:text-[#000099]
                        after:content-[''] after:absolute after:left-0 after:bottom-0
                        after:h-[2px] after:w-0 after:bg-[#000099]
                        after:transition-all after:duration-500 after:ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                        hover:after:w-1/2
                        before:content-[''] before:absolute before:right-0 before:bottom-0
                        before:h-[2px] before:w-0 before:bg-[#000099]
                        before:transition-all before:duration-500 before:ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                        hover:before:w-1/2
                        whitespace-nowrap
                      "
                    >
                      {link}
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Desktop Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 ${
                        isDropdownOpen
                          ? "opacity-100 visible transform translate-y-0"
                          : "opacity-0 invisible transform -translate-y-2"
                      }`}
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      {dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="font-montserrat font-semibold text-base block px-4 py-3 text-[#800000] hover:text-[#000099] hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="
                      font-montserrat font-semibold relative inline-block px-3 xl:px-4 py-2 text-[#800000] text-sm xl:text-base
                      transition-colors duration-300 hover:text-[#000099]
                      after:content-[''] after:absolute after:left-0 after:bottom-0
                      after:h-[2px] after:w-0 after:bg-[#000099]
                      after:transition-all after:duration-500 after:ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                      hover:after:w-1/2
                      before:content-[''] before:absolute before:right-0 before:bottom-0
                      before:h-[2px] before:w-0 before:bg-[#000099]
                      before:transition-all before:duration-500 before:ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                      hover:before:w-1/2
                      whitespace-nowrap
                    "
                  >
                    {link}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-[#800000] hover:text-[#000099] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-2 pb-4 border-t border-gray-100 pt-4">
            {links.map((link) => (
              <li key={link}>
                {link === "Features" ? (
                  <div>
                    <button
                      onClick={toggleMobileDropdown}
                      className="
                        flex items-center justify-between w-full px-4 py-3 text-[#800000] hover:text-[#000099] 
                        hover:bg-gray-50 rounded-md transition-all duration-300
                        text-base font-medium
                      "
                    >
                      {link}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMobileDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                     {/* Mobile Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isMobileDropdownOpen
                          ? "max-h-48 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={closeMenu}
                          className=" block pl-8 pr-4 py-2 text-[#800000] hover:text-[#000099] hover:bg-gray-50 rounded-md transition-all duration-300 text-sm font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={closeMenu}
                    className="
                      block px-4 py-3 text-[#800000] hover:text-[#000099] 
                      hover:bg-gray-50 rounded-md transition-all duration-300
                      text-base font-medium
                    "
                  >
                    {link}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>

    //Carousel
    import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const logos = [
  "/logos/bir-icons.png",
  "/logos/bsp-logonew.png",
  "/logos/CDA-logo-RA11364-PNG.png",
  "/logos/IC-logo-white-1.png",
  "/logos/SEC-logo.png",
 
];

const itemWidth = 200; // px width of each logo
const gap = 24; // gap between logos in px

const ClientCarousel = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const totalWidth = logos.length * (itemWidth + gap);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: [-totalWidth, 0], // animate from right to left
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, isHovered, totalWidth]);

  return (
    <section className="min-h-[40vh] max-w-7xl mx-auto px-4 mt-20 mb-10">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Firm Accreditation
      </h2>

      <div
        className="overflow-hidden relative w-full h-[120px]"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0))",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={controls}
          className="flex space-x-6 absolute left-0 top-0 h-[120px]"
          style={{ width: totalWidth * 2 }}
        >
          {logos.concat(logos).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`client logo ${i + 1}`}
              draggable={false}
              className="h-[100px] object-contain select-none rounded-md"
              style={{ width: itemWidth }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientCarousel;



//philosophy
import AnimatedButton from "./AnimatedButton.jsx"; 
import { assets } from "../assets/assets";
import { motion } from "framer-motion"

const Philosophy = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
     className="min-h-screen bg-gray-50 px-6 md:px-12 lg:px-24">

      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* Left Column */}
        <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:col-span-5 mt-20">
          <h2 className="text-4xl md:text-6xl font-bold text-[#000099] leading-tight">
            Our Philosophy
          </h2>

          <p className="text-gray-600 mt-6 text-base md:text-lg">
            We dedicate ourselves to providing superior and high-quality services of audit, accounting, tax, and business process outsourcing in a timely, effective, and efficient manner maintaining the highest standards of professional integrity. We consider our responsibility to embrace responsiveness to our client’s requirements for their business, special opportunities, and challenges that confront them. We foster an enjoyable working environment through open communication, mutual respect, teamwork, continuous innovation, and loyalty to perform our tradition of services and leadership.
          </p>

          {/* Replace original button here */}
          <div className="mt-8">
            <AnimatedButton label="Know more about us" to="/about" />
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="lg:col-span-7 mt-7">
          <div className="relative w-full">
            <img
              src={assets.amc_image}
              alt="Image"
              className="w-full h-full rounded-lg object-cover"
            />

            {/* Since Badge */}
            <div className="absolute bottom-4 left-4  text-white px-4 py-2 rounded shadow-lg text-left">
              <span className="text-xs">Since</span>
              <div className="text-3xl font-bold">2002</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Philosophy;


// servicespage
import { assets } from "../assets/assets";

import React, { useState, useRef, useEffect } from "react";

const accordionData = [
  {
    title: <h2 className="text-[#880000] text-lg font-bold">Accounting/Bookkeeping Services</h2>,
    content: (
      <>
        <p className="text-sm leading-relaxed">
          AMC handles accounting services for several companies from a wide range of industries. You may opt to outsource all your accounting function or pass on to us choice activities, such as:
           <br></br>
          <span className="px-4">&#9679; Processing invoices and collections, which involves recording your pro forma billings and collections to official accountable forms of sales invoices and official receipts</span>
           <br></br>
          <span className="px-4">&#9679; Maintaining inventory records and assisting in the inventory count. </span>
           <br></br>
          <span className="px-4">&#9679; Compiling and reviewing source documents supporting your financial transactions. </span>
           <br></br>
          <span className="px-4">&#9679; Recording you financial transactions and preparing pertinent adjustment. </span>
           <br></br>
          <span className="px-4">&#9679; Preparing financial reports and supporting schedule. </span>
           <br></br>
          <span className="px-4">&#9679; Preparing statutory and other reports. </span>
           <br></br>
          <span className="px-4">&#9679; Preparing tax returns and related schedules for withholding, value added, and income tax. </span>
           <br></br>
          <span className="px-4">&#9679; Filing tax returns and payment of the corresponding taxes manually or electronically. </span>
        </p>
      </>
    ),
  },
  {
    title: <h2 className="text-[#880000] text-lg font-bold">Staff Augmentation Services</h2>,
    content: <p className="text-sm">AMC offers staff augmentation services where our staff, under the direction and supervision of the company's officers, perform accounting and accounting-related work.
    <br></br>
          <span className="px-4">&#9679; Migration from one accounting system to another accounting system.</span>
          <br></br>
          <span className="px-4">&#9679; Bank reconciliation for several bank account that have not been reconciled for years.</span>
          <br></br>
          <span className="px-4">&#9679; Data cleansing, such as reconciliation of balances in subsidiary ledgers  of receivables and payables with the general ledger balances.</span>
          <br></br>
          <span className="px-4">&#9679; Physical counts of inventories and reconciling the results of the physical count with the accounting records.</span>
          <br></br>
          <span className="px-4">&#9679; Count of property and equipment : tagging and reconciliation of the count with the accounting records: and properly setting up the property ledgers.</span>
          <br></br>
          <span className="px-4">&#9679; Preparation of schedules and  documentary supports and requirements during audits by internal and external parties, including government agencies.</span>
          <br></br>
          <span className="px-4">&#9679; Preparation of statements of accounts for certain customers.</span>
          
    </p>
    
  },
  {
    title: <h2 className="text-[#880000] text-lg font-bold">Payroll Processing</h2>,
    content: <p className="text-sm">  
      <span className="px-4">&#9679; Prepare schedules of statutory and internal contributions and obligation.</span>
      <br></br>
      <span className="px-4">&#9679; File and pay statutory contributions and obligations, manually or electronically.</span>
      <br></br>
      <span className="px-4">&#9679; Annualized employee's income tax.</span>
      <br></br>
      <span className="px-4">&#9679; Provide secure pay slips.</span>
      <br></br>
      <span className="px-4">&#9679; Handle administration of benefits that needs coordination with government agencies.</span>
    </p>,
  },
];




const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto font-sans space-y-4">
      {accordionData.map(({ title, content }, index) => {
        const isOpen = openIndex === index;
        const contentRef = (el) => (contentRefs.current[index] = el);

        return (
          <div
            key={index}
            className={`rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "bg-white shadow" : "bg-white/80"
            }`}
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-xs tracking-widest uppercase font-semibold border-b border-gray-300"
            >
              <span>{title}</span>
              <span className="text-2xl font-bold select-none">
                {isOpen ? "×" : "+"}
              </span>
            </button>

            {/* Accordion Content with smooth expand/collapse */}
            <div
              ref={contentRef}
              style={{
                maxHeight: isOpen
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0px",
                transition: "max-height 0.4s ease",
              }}
              className="px-6 bg-[#f7f2e8] overflow-hidden"
            >
              <div className="py-4">{content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

 const ServicesPage = () => {

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-5">
      {/* Hero Section */}
      <section className="relative mt-25 bg-[#5f6fff] px-4 rounded-2xl sm:px-6 lg:px-35 py-12 sm:py-16 lg:py-7">
        <div className="container mx-auto px-6 py-11 grid lg:grid-cols-2 gap-6 items-center relative z-10">
          <div>
           <div className="inline-block px-6 py-2 border-2 border-white rounded-md">
              <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight">
                Services
              </h1>
            </div>
            <p className="text-white text-[16px] mt-4 max-w-lg">AMC is your partner and provides support for your key accounting and administrative activities, such as outsourced accounting, payroll, and accounting-relatable tasks.</p>
          </div>
        </div>
        {/* Hero Image Placeholder - taller */}
        <img className="w-full h-80 bg-gray-200 rounded-xl shadow-lg absolute top-[40px] bottom-[-90px] right-6 lg:right-40 max-w-[30%]" src={assets.amc_image} alt="" />
      </section>

      {/* Services Section */}
      <section
        className="bg-gray-100 py-60 px-4 md:px-10"
        
      >
        <Accordion />
      </section>
    </div>
  );
};
export default ServicesPage;


// ServiceCard
import { useRef, useState } from "react";

const ServiceCard = ({service, index}) => {

const [position, setPosition] = useState({ x: 0, y: 0})
const [visible, setVisible] = useState(false);
const divRef = useRef(null)

const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({x: e.clientX - bounds.left, y: e.clientY - bounds.top})
}

  return (
    <div className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10" onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)} ref={divRef} onMouseMove={handleMouseMove}>
      <div className={`pointer-event-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} style={{ top: position.y - 150, left: position.x - 150} }/>
        <div className="relative z-10 flex items-center gap-6 p-8 transition-all duration-500 group-hover:scale-[1.02]">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
                <img className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2" src={service.icon} alt="" />
            </div>

            <div className="flex-1">
                <h3 className="font-bold">{service.title}</h3>
                <p className="text-sm mt-2">{service.description}</p>
            </div>
        </div>
    </div>

  );
};

export default ServiceCard;


//2nd servicecard
 <div onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)} ref={divRef} onMouseMove={handleMouseMove} className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500 group h-full">
      {/* Gradient Light Effect */}
      <div className={`pointer-event-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} style={{ top: position.y - 150, left: position.x - 150} }/>
      <div className="relative z-10 flex items-center gap-6 p-8 transition-all duration-500 group-hover:scale-[1.02]">
        {/* Icon */}
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
                <img className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2" src={service.icon} alt="" />
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
  id="services"
  className="relative min-h-screen flex flex-col justify-center items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white overflow-hidden scroll-mt-24"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full max-w-5xl">
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
            <ServiceCard service={service} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;


// original servicecard
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
    <div className="relative overflow-hidden group h-full rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10" onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)} ref={divRef} onMouseMove={handleMouseMove}>

      <div className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} style={{ top: position.y - 150, left: position.x - 150}}/>

        <div className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative">

          <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
            <img className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2" src={service.icon} alt="" />
          </div>

          <div className="flex-1">
            <h3 className="font-bold">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
          </div>

        </div>

    </div>
  );
};

export default ServiceCard;

// original service
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
    <div
      id="service"
      className="relative min-h-screen flex flex-col justify-center items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white overflow-hidden scroll-mt-24"
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

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Title
          title={"Expert services to elevate your business \n performance."}
        />
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full max-w-5xl">
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
    </div>
  );
};

export default Services;


Aquino, Mata, Calica & Associates ("AMC & ASSOCIATES") was
              registered with the Philippine Securities and Exchange Commission
              on February 18, 2002, as a general professional partnership
              providing audit and assurance, accounting, tax, advisory, and
              business process outsourcing services.







              import { useState } from "react";
              import { assets } from "../assets/assets";
              import bg_about from "../assets/bg_about.jpg";
              
              const AboutPage = () => {
                const [visible, setVisible] = useState(false);
              
                return (
                  <div className="min-h-screen bg-white p-5">
                    {/* Header Section */}
                    <section className="relative mt-25 bg-indigo-500 px-4 rounded-2xl sm:px-6 lg:px-35 py-12 sm:py-16 lg:py-7">
                      <div className="container mx-auto px-6 py-11 grid lg:grid-cols-2 gap-6 items-center relative z-10">
                        <div>
                          <div className="inline-block px-6 py-2 border-2 border-white rounded-md">
                            <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight">
                             About Us
                            </h1>
                          </div>
                          <p className="text-white text-sm mt-4 max-w-lg">
                            Aquino, Mata, Calica & Associates ("AMC & ASSOCIATES") was
                            registered with the Philippine Securities and Exchange Commission
                            on February 18, 2002, as a general professional partnership
                            providing audit and assurance, accounting, tax, advisory, and
                            business process outsourcing services.
                          </p>
                        </div>
                      </div>
                      {/* Hero Image Placeholder */}
                      <div className="w-full h-80 bg-gray-300 rounded-xl shadow-lg absolute top-10 right-6 lg:right-40 max-w-xs hidden lg:block" />
                    </section>
              
                    {/* Mission and Vision Section */}
                    <section
                      className="bg-gray-100 py-35 px-4 md:px-10 bg-cover bg-center"
                      style={{ backgroundImage: `url(${bg_about})` }}
                    >
                      <div className="my-10 flex flex-col md:flex-row gap-12">
                        <img
                          className="w-full md:max-w-[350px] rounded-lg shadow-lg object-cover"
                          src={assets.bgtry}
                          alt="Team at work"
                        />
                        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-lg text-gray-600 leading-relaxed">
                          <b className="text-gray-800 text-2xl font-semibold border-l-4 border-[#5f6fff] pl-3">
                            Mission
                          </b>
                          <p>
                            To provide the most reliable, effective, and efficient services
                            that add value to clients’ businesses, both local and
                            international.
                          </p>
                          <b className="text-gray-800 text-2xl font-semibold border-l-4 border-[#5f6fff] pl-3">
                            Vision
                          </b>
                          <p>
                            To be the leading firm providing high-quality services in audit,
                            taxation, accounting, consulting, and business process outsourcing.
                          </p>
                        </div>
                      </div>
              
                      {/* Corporate Values */}
                      <div className="text-center text-xl my-10 mt-20">
                        <p className="tracking-wide">
                          OUR{" "}
                          <span className="text-[#5f6fff] font-semibold">
                            CORPORATE VALUES
                          </span>
                        </p>
                        <div className="w-24 h-[3px] bg-[#5f6fff] mx-auto mt-2 rounded-full"></div>
                      </div>
              
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {/* Value Box 1 */}
                        <div
                          className="border border-gray-300 px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] bg-white hover:bg-[#5f6fff] hover:text-white hover:shadow-xl transition-all duration-300 text-gray-600 cursor-pointer rounded-2xl"
                          onMouseEnter={() => setVisible(true)}
                          onMouseLeave={() => setVisible(false)}
                        >
                          <b className="text-lg font-semibold">Transparency</b>
                          <p>
                            The guiding word for our audit process is dialogue. We keep
                            management fully informed at every stage. Our goal is to turn the
                            audit into a management information resource for our clients.
                          </p>
                        </div>
              
                        {/* Value Box 2 */}
                        <div className="border border-gray-300 px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] bg-white hover:bg-[#5f6fff] hover:text-white hover:shadow-xl transition-all duration-300 text-gray-600 cursor-pointer rounded-2xl">
                          <b className="text-lg font-semibold">Results-Oriented</b>
                          <p>
                            We are committed to achieving results rather than merely
                            completing tasks. We are flexible and forward-thinking to ensure
                            the desired results are achieved.
                          </p>
                        </div>
              
                        {/* Value Box 3 */}
                        <div className="border border-gray-300 px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] bg-white hover:bg-[#5f6fff] hover:text-white hover:shadow-xl transition-all duration-300 text-gray-600 cursor-pointer rounded-2xl">
                          <b className="text-lg font-semibold">Integrity</b>
                          <p>
                            We strictly adhere to the code of ethics for Certified Public
                            Accountants as set by both local and international organizations.
                            Integrity is the foundation of our firm.
                          </p>
                        </div>
                      </div>
              
                      {/* Bottom Row */}
                      <div className="flex justify-center flex-wrap gap-6">
                        <div className="w-full sm:w-[48%] lg:w-[30%] border border-gray-300 px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] bg-white hover:bg-[#5f6fff] hover:text-white hover:shadow-xl transition-all duration-300 text-gray-600 cursor-pointer rounded-2xl">
                          <b className="text-lg font-semibold">Quality</b>
                          <p>
                            We focus on delivering quality by understanding client needs and
                            executing projects efficiently. We stand firmly behind our work.
                          </p>
                        </div>
              
                        <div className="w-full sm:w-[48%] lg:w-[30%] border border-gray-300 px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] bg-white hover:bg-[#5f6fff] hover:text-white hover:shadow-xl transition-all duration-300 text-gray-600 cursor-pointer rounded-2xl">
                          <b className="text-lg font-semibold">Client-Focused</b>
                          <p>
                            Our clients and the business community can rely on us for
                            independence and objectivity—two essential ingredients of a
                            successful accounting practice.
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                );
              };
              
              export default AboutPage;
              




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





//partnerpage

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";
// import { assets } from "../assets/assets"



// /* ================= ANIMATION VARIANT ================= */

// const cardVariant = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.12,
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   }),
// };

// /* ================= MODAL ================= */

// const PartnerModal = ({ partner, onClose }) => {
//   useEffect(() => {
//     if (!partner) return;
//     const prevOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prevOverflow;
//     };
//   }, [partner]);

//   if (!partner) return null;

//   return (
//     <div
//       onClick={onClose}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
//     >
//       <div
//         onClick={(e) => e.stopPropagation()}
//         onWheel={(e) => e.stopPropagation()}
//         className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
//       >
//         <div className="relative">
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 z-10 rounded-full bg-white/90 backdrop-blur p-2 shadow-lg hover:bg-white"
//           >
//             <X className="h-5 w-5" />
//           </button>

//           {/* Hero Image - Better sized */}
//           <div className="h-80 overflow-hidden rounded-t-2xl bg-gray-100">
//             <img
//               src={partner.image}
//               alt={partner.name}
//               className="h-full w-full object-contain" // Changed to object-contain for better fit
//             />
//           </div>

//           <div className="space-y-6 p-8">
//             <h2 className="text-3xl font-bold text-gray-900">{partner.name}</h2>
//             <Section title="Experience" text={partner.experience} />
//             <Section
//               title="Sector Experience"
//               text={partner.sectorExperience}
//             />
//             <Section title="Qualifications" list={partner.qualifications} />
//             {/* Only render Memberships if it exists */}
//             {partner.memberships && partner.memberships.length > 0 && (
//               <Section title="Memberships" list={partner.memberships} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Section = ({ title, text, list }) => (
//   <div className="mb-5 text-sm text-gray-600">
//     <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
//     {text && <p>{text}</p>}
//     {list && (
//       <ul className="list-disc list-inside space-y-1">
//         {list.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     )}
//   </div>
// );

// /* ================= CARD ================= */

// const PartnerCard = ({ partner, index, onOpen }) => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <motion.div
//       custom={index}
//       variants={cardVariant}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-80px" }}
//       className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
//     >
//       {/* REMOVED IMAGE FROM CARD - Only shows in modal now */}

//       {/* Content */}
//       <div className="p-6 text-sm text-gray-600">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">
//           {partner.name}
//         </h3>

//         {/* Experience (collapsed) */}
//         <motion.div
//           animate={{ height: expanded ? "auto" : 60 }}
//           className="overflow-hidden"
//         >
//           <p>{partner.experience}</p>
//         </motion.div>

//         {/* Actions */}
//         <div className="flex justify-end items-center mt-4">
//           <button
//             onClick={() => onOpen(partner)}
//             className="text-sm font-medium text-indigo-600 hover:underline"
//           >
//             View full profile
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// /* ================= PAGE ================= */

// const PartnersPage = () => {
//   const partners = [
//     {
//       name: "JOSEPH CEDRIC V. CALICA",
//       image: assets.one,
//       experience: (
//         <>
//           <p>
//             Cedric is one of the founding Partner of AMC and currently the
//             Chairman & Managing Partner of the Firm. Cedric has been in public
//             accounting for his entire professional career. He worked for seven
//             years at a prestigious and among the top auditing firms in the
//             Philippines, having extensive experience in manufacturing and other
//             various related industries such as mining, retail, banking, real
//             estate, government accounting, agri-business, and theme parks. He
//             spent the next four years of his career heading the internal audit
//             division of a broadcasting and construction company.
//           </p>
//           <br></br>
//           <p>
//             He has significant involvement in major financial due diligence
//             audits, agreed-upon and review engagements of the Firm, and heads
//             the engagement of ICPA report on the application for tax refund/TCC
//             and assistance in handling tax audits by the BIR.
//           </p>
//         </>
//       ),
//       sectorExperience:
//         "Banking and finance, mutual benefit associations (MBAI), hospitality and hotel-related operations, not-for-profit, technology, manufacturing, mining, retail, real estate, and services.",
//       qualifications: [
//         "Certified Public Accountant",
//         "Bachelor’s degree in commerce Major in Accounting, San Beda College",
//       ],
//       memberships: [
//         "Member, Philippine Institute of Certified Public Accountants (PICPA)",
//         "Association of Certified Public Accountants in Commerce and Industry (ACPACI)",
//       ],
//     },

//     {
//       name: "ARIEL D. GONZALES",
//       image: assets.two,
//       experience: (
//         <>
//           <p>
//             Ariel is a Practice Leader of the Audit & Assurance Division as well
//             as the Leader of Technical Standards & Quality Control. Ariel
//             started his CPA career at a prestigious and among the top auditing
//             firm in the Philippines and worked his way to become one of the
//             elite audit managers of his batch.
//           </p>
//           <br></br>
//           <p>
//             Ariel has been in public accounting for his entire professional
//             career, gaining extensive experience in the audit of local and
//             multinational companies in various industries such as manufacturing
//             and other various related industries such as retail, banking, real
//             estate, processing and manufacturing, utilities, and construction.
//             Ariel started as a junior audit staff and after five years was
//             promoted to audit manager.
//           </p>
//         </>
//       ),
//       sectorExperience:
//         "Banking, cooperatives, not-for-profit, technology, manufacturing, utilities",
//       qualifications: [
//         "Certified Public Accountant",
//         "BS Business Administration – Accounting",
//       ],
//       memberships: ["PICPA"],
//     },

//     {
//       name: "MARICEL B. DE TORRES",
//       image: assets.four,
//       experience: (
//         <>
//           <p>
//             Maricel is a Deputy Leader in the Audit & Assurance Division,
//             responsible for the overall prompt and efficient delivery of quality
//             service to clients, and in training and developing the skills of
//             high-performance staff. She also leads the Firm’s Markets &
//             Communications and Business Development Group, which handles
//             external communications, and business development handling the other
//             business support group engagements.
//           </p>
//           <br></br>
//           <p>
//             In addition to her client-servicing responsibilities, she was head
//             of the Firm’s Training Group for a number of years.
//           </p>
//           <br></br>
//           <p>
//             Maricel started her audit and professional career in 2007. She has
//             extensive experience in the financial audit of local and
//             multinational companies in a wide range of industries. Prior to this
//             designation, she was the group lead audit manager, as well as the
//             group’s Senior Manager in charge of training.
//           </p>
//           <br></br>
//           <p>
//             Maricel specializes in handling various non-audit engagements such
//             as agreed-upon procedures, review engagements, due diligence
//             engagements, ICPA report on the application for tax refund/TCC
//             engagements, and ICPA report on the application for
//             increase/decrease in capital stock filed to SEC.
//           </p>
//         </>
//       ),
//       sectorExperience:
//         "Banking and finance, non-bank financial institutions, mutual benefit associations (MBAI), cooperatives, manufacturing, real estate, gaming and entertainment, PEZA and SBMA entities, and services",
//       qualifications: [
//         "Certified Public Accountant",
//         "BS Business Administration – Accounting",
//       ],
//       memberships: [
//         "Bachelor’s degree in accountancy, Lyceum of the Philippines University – Batangas (LPU-Batangas)",
//       ],
//     },

//     {
//       name: "REGINALD S. MANALESE",
//       image: "/partner-2.jpg",
//       experience: (
//         <>
//           <p>
//             Reggie is a Partner in the Audit & Assurance Division. Reggie
//             started his professional career in 1993 as an accountant at one of
//             the largest banking institutions here in the Philippines. He rose
//             from the ranks and has become its chief accountant. After his stint
//             as a banker, he trained as a financial consultant for an Information
//             Technology Company.
//           </p>
//         </>
//       ),
//       sectorExperience: "Banking and finance, technology, and services",
//       qualifications: [
//         "Certified Public Accountant",
//         "Bachelor’s degree in commerce Major in Accounting, San Beda College",
//       ],
//     },

//     {
//       name: "LAARNI M. TECSON",
//       image: "/partner-2.jpg",
//       experience: (
//         <>
//           <p>
//             Laarni is the Practice Leader of Business Process Solutions, the
//             outsourcing arm of AMC.
//           </p>
//           <br></br>
//           <p>
//             She started her CPA career at a prestigious and among the top
//             auditing firms in the Philippines in the Audit and Assurance
//             Practice Area in 1995, gaining six years of extensive experience
//             servicing well-known local and multinational companies in various
//             industries such as retail, banking and finance, real estate,
//             non-life insurance and construction. She then moved to join the
//             banking industry and gained ten solid years of experience working
//             for a local thrift bank where she headed as AVP – Internal Audit.
//             After her stint in the banking industry, she became one of the
//             consultants of AMC and then became part of the AMC’s BPS Practice
//             Area.
//           </p>
//         </>
//       ),
//       sectorExperience:
//         "Banking and finance, cooperatives, not-for-profit, real estate, retail, and services, non-life insurance, health and wellness",
//       qualifications: [
//         "Certified Public Accountant",
//         "Civil Service Career Sub-Professional Passer",
//         "Bachelor of Science in Accountancy, Polytechnic University of the Philippines – Manila ",
//       ],
//       memberships: [
//         "Member, Philippine Institute of Certified Public Accountants (PICPA)",
//       ],
//     },

//     {
//       name: "NORMAN SANTIAGO",
//       image: assets.three,
//       experience: (
//         <>
//           <p>
//             Norman is the Practice Leader of the Tax Advisory and Compliance
//             Division. He conducts tax compliance reviews that provide advisory
//             services on issues affecting individual and corporate taxpayers. He
//             also assists clients in handling their tax assessments and other
//             compliance requirements with the Bureau of Internal Revenue. Norman
//             is also a Partner of the BPS Practice Area of AMC.
//           </p>
//           <br></br>
//           <p>
//             He started his audit career at a prestigious and among the top
//             auditing firms in the Philippines, for seven fruitful years having
//             extensive experience in manufacturing, brokerage and freight
//             forwarders, mining, foundations, general contractor,
//             service-oriented companies, credit card companies, and trading
//             companies.
//           </p>
//         </>
//       ),
//       sectorExperience:
//         "Manufacturing, mining, foundations, credit card and financing companies, brokerage and freight forwarders, trading and services",
//       qualifications: [
//         "Bachelor’s degree in commerce Major in Accounting, San Beda College",
//       ],
//     },

//     {
//       name: "JONEL U. AQUINO",
//       image: "/partner-2.jpg",
//       experience: (
//         <>
//           <p>
//             Jonel is one of the founding Partner of AMC and currently a Partner
//             of Business Process Solutions, the outsourcing arm of AMC.
//           </p>
//           <br></br>
//           <p>
//             He started his CPA career at a prestigious and among the top
//             auditing firms in the Philippines in the Audit and Assurance
//             Practice Area in 1991, gaining six years of extensive experience
//             servicing well-known local companies in various industries such as
//             retail and healthcare. He was selected as an instructor in
//             accounting and reporting standards for incoming juniors of the firm.
//             He then moved to join BUREAU OF INTERNAL REVENUE (BIR) as a revenue
//             officer in the assessment division for five years. After his duty in
//             the government tax agency, he moved to the corporate world and
//             gained 19 solid years of experience in events management,
//             advertising and marketing, multinational logistics company,
//             logistics management and consumer goods, and diversified
//             conglomerate with involvement in technology solutions & supply,
//             shared services, real estate development, construction & design,
//             FMCG, cooperative and foundation industries. He is also working
//             part-time as a professor at one of the top universities and colleges
//             in Cost Accounting, Financial Management, Basic Accounting &
//             Taxation, and Taxation.
//           </p>
//         </>
//       ),
//       sectorExperience:
//         "Retail, logistics, Shared services, cooperatives, not-for-profit, real estate, services, FMCG, health and wellness",
//       qualifications: [
//         "Certified Public Accountant",
//         "Certified Lean Six Sigma",
//         "Certified Risk Analyst (Under American Academy of Financial Management Phil) ",
//         "Certified Financial Consultant (Under Institute of Financial Consultants of Canada)",
//         "Certified Management Accountant (Under CMA Philippines)",
//         "Civil Service Career Sub-Professional Passer",
//         "Bachelor of Science in Accountancy, San Beda University",
//         "Executive Education in Finance (for CFOs), Wharton , University of Pennsylvania ",
//         "Masters of Science in International Business, University of London, Royal Holloway",
//         "Currently, taking up a Doctorate in Business Administration (PhD), 9 units, San Beda University",
//       ],
//       memberships: [
//         "Member, Philippine Institute of Certified Public Accountants (PICPA)",
//         "Member, Certified Management Accountants Philippines",
//       ],
//     },

//     {
//       name: "PERCIVAL T. LANDA",
//       image: "/partner-2.jpg",
//       experience: (
//         <>
//           <p>
//             Percival is a Partner of the Business Process Solutions/Outsourcing
//             Division
//           </p>
//           <br></br>
//           <p>
//             He started his CPA career at a prestigious and among the top
//             auditing firms in the Philippines in the Audit and Assurance
//             Practice Area in 1993, gaining three years of experience in
//             manufacturing companies, non-profit organizations, real estate,
//             construction, stock brokerage, insurance, investment banking, and
//             banking. He then moved to join a managerial job at an investment
//             banking arm where he served as the financial controller for almost
//             12 years. After his stint in the investment industry, he moved to
//             the manpower outsourcing agency. He gained another 12 solid years of
//             experience in manpower, security, janitorial, wireless, and
//             technology-based solutions for integration, medical, water, academy,
//             realty, and financial services.
//           </p>
//         </>
//       ),
//       sectorExperience:
//         "Manufacturing companies, non-profit organizations, real estate, construction, stock brokerage, insurance, investment banking, banking, Manpower, security, and PR Agencies",
//       qualifications: [
//         "Certified Public Accountant",
//         "Bachelor of Science in Accountancy, Polytechnic University of the Philippines - Manila",
//       ],
//       memberships: [
//         "Member, Philippine Institute of Certified Public Accountants (PICPA)",
//       ],
//     },

//     {
//       name: "SHIELA MARIE R. AGUINALDO",
//       image: "/partner-2.jpg",
//       experience: (
//         <>
//           <p>
//             Shiela is the Deputy Leader of the Business Process
//             Solutions/Outsourcing Division. She started her accounting career in
//             2002. Shiela is a seasoned accounting practitioner with significant
//             experience in accounting and payroll services, including expertise
//             in managing the accounting functions of various industries. She also
//             handled the Firm’s various reconstruction services of client books.
//           </p>
//           <br></br>
//           <p>
//             Shiela also heads the preparation of personal annual income tax
//             returns for the individual taxpayer.
//           </p>
//         </>
//       ),
//       sectorExperience:
//         "Manufacturing, trading, and services",
//       qualifications: [
//         "Bachelor’s degree in accountancy, Philippine Christian University"
//       ],
//     },
//   ];

//   /* Pagination */
//   const perPage = 2; // ← Change back to 2
//   const [page, setPage] = useState(1);
//   const totalPages = Math.ceil(partners.length / perPage);
//   const current = partners.slice((page - 1) * perPage, page * perPage); // ← Use (page - 1)

//   const [activePartner, setActivePartner] = useState(null);
//   return (
//     <div className="min-h-screen bg-[#EAF2FA] px-6 md:px-20 py-16">
//       <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Partners</h2>

//       {/* Cards */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {current.map((partner, i) => (
//           <PartnerCard
//             key={i}
//             partner={partner}
//             index={i}
//             onOpen={setActivePartner}
//           />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center gap-4 mt-12">
//         <button
//           disabled={page === 1}
//           onClick={() => setPage((p) => p - 1)}
//           className="p-2 rounded-full border disabled:opacity-40"
//         >
//           <ChevronLeft />
//         </button>

//         <span className="text-sm font-medium">
//           {page} / {totalPages}
//         </span>

//         <button
//           disabled={page === totalPages}
//           onClick={() => setPage((p) => p + 1)}
//           className="p-2 rounded-full border disabled:opacity-40"
//         >
//           <ChevronRight />
//         </button>
//       </div>

//       {/* Modal */}
//       {activePartner && (
//         <PartnerModal
//           partner={activePartner}
//           onClose={() => setActivePartner(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default PartnersPage;


//servicepage
// import { useState } from "react";
// import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
// const ServiceCard = ({ service }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
//       {" "}
//       {/* Header */}{" "}
//       <div
//         className="flex justify-between items-center cursor-pointer"
//         onClick={toggleAccordion}
//       >
//         {" "}
//         <h3 className="text-lg font-semibold text-purple-900">
//           {" "}
//           {service.title}{" "}
//         </h3>{" "}
//         {isOpen ? (
//           <ChevronUp className="text-purple-900 flex-shrink-0" />
//         ) : (
//           <ChevronDown className="text-purple-900 flex-shrink-0" />
//         )}{" "}
//       </div>{" "}
//       {/* Description */}{" "}
//       <p className="text-gray-600 text-sm leading-relaxed mt-2">
//         {" "}
//         {service.description}{" "}
//       </p>{" "}
//       {/* Expandable section */}{" "}
//       <div
//         className="grid transition-all duration-300 ease-in-out"
//         style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
//       >
//         {" "}
//         <div className="overflow-hidden">
//           {" "}
//           <div className="mt-3">
//             {" "}
//             <hr className="border-t border-gray-200 my-3" />{" "}
//             <p className="text-xs font-medium text-gray-500 mb-2 flex items-center gap-1">
//               {" "}
//               <ChevronUp size={14} /> HIDE OUR{" "}
//               {service.title.toUpperCase()}{" "}
//             </p>{" "}
//             <div className="flex flex-col gap-2">
//               {" "}
//               {service.subServices.map((sub, i) => (
//                 <button
//                   key={i}
//                   className="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 text-sm font-medium text-purple-900 transition-all"
//                 >
//                   {" "}
//                   {sub} <ArrowRight size={16} className="flex-shrink-0" />{" "}
//                 </button>
//               ))}{" "}
//             </div>{" "}
//           </div>{" "}
//         </div>{" "}
//       </div>{" "}
//       {/* "See Our" when closed */}{" "}
//       {!isOpen && (
//         <div
//           className="flex items-center gap-2 text-sm text-purple-900 mt-3 font-medium cursor-pointer"
//           onClick={toggleAccordion}
//         >
//           {" "}
//           <ArrowRight size={14} /> SEE OUR {service.title.toUpperCase()}{" "}
//         </div>
//       )}{" "}
//     </div>
//   );
// };
// const ServicesPage = () => {
//   const services = [
//     {
//       title: "Audit & Assurance",
//       description:
//         "We help you manage your fiscal responsibilities with prudence and foresight.",
//       subServices: [
//         "Financial Statement Audit",
//         "Internal Audit",
//         "Risk Management",
//       ],
//     },
//     {
//       title: "Tax Advisory & Compliance",
//       description:
//         "We help you identify the opportunities and pitfalls that can significantly affect your bottom line.",
//       subServices: [
//         "Tax advisory",
//         "Tax compliance",
//         "Transfer pricing",
//         "Corporate services",
//         "Tax education and advocacy",
//       ],
//     },
//     {
//       title: "Advisory Services",
//       description:
//         "We believe there is an optimal solution to every business challenge. We work with you to find the right approach and help you create value.",
//       subServices: [
//         "Business Strategy",
//         "Financial Advisory",
//         "Technology Consulting",
//       ],
//     },
//     {
//       title: "Business Process Solutions",
//       description:
//         "We provide solid, first-rate support for your key accounting and administrative activities.",
//       subServices: ["Payroll Services", "Bookkeeping", "Data Management"],
//     },
//   ];
//   return (
//     <div className="min-h-screen bg-gray-50 px-5 py-5">
//       {" "}
//       {/* Hero Section */}{" "}
//       <section className="relative mt-25 bg-indigo-500 px-4 rounded-2xl sm:px-6 lg:px-35 py-12 sm:py-16 lg:py-7">
//         {" "}
//         <div className="container mx-auto px-6 py-11 grid lg:grid-cols-2 gap-6 items-center relative z-10">
//           {" "}
//           <div>
//             {" "}
//             <div className="inline-block px-6 py-2 border-2 border-white rounded-md">
//               {" "}
//               <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight">
//                 {" "}
//                 Services{" "}
//               </h1>{" "}
//             </div>{" "}
//             <p className="text-white text-base mt-4 max-w-lg">
//               {" "}
//               AMC is your partner and provides support for your key accounting
//               and administrative activities, such as outsourced accounting,
//               payroll, and accounting-relatable tasks.{" "}
//             </p>{" "}
//           </div>{" "}
//         </div>{" "}
//         {/* Hero Image Placeholder */}{" "}
//         <div className="w-full h-80 bg-gray-300 rounded-xl shadow-lg absolute top-10 right-6 lg:right-40 max-w-xs hidden lg:block" />{" "}
//       </section>{" "}
//       {/* Services Section */}{" "}
//       <section className="min-h-screen bg-gray-50 px-6 md:px-20 py-16">
//         {" "}
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Our Services
//         </h2>{" "}
//         <div className="grid md:grid-cols-2 gap-6">
//           {" "}
//           <ServiceCard service={services[0]} />{" "}
//           <ServiceCard service={services[1]} />{" "}
//           <ServiceCard service={services[2]} />{" "}
//           <ServiceCard service={services[3]} />{" "}
//         </div>{" "}
//       </section>{" "}
//     </div>
//   );
// };
// export default ServicesPage;




// partner section
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { assets } from "../assets/assets";

/* ─────────────── VARIANTS ─────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const overlayVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const drawerVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: 40, scale: 0.97, transition: { duration: 0.3 } },
};

/* ─────────────── MODAL ─────────────── */

const PartnerModal = ({ partner, onClose }) => {
  useEffect(() => {
    if (!partner) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [partner]);

  if (!partner) return null;

  return (
    <AnimatePresence>
      <motion.div
        variants={overlayVariant}
        initial="hidden" animate="visible" exit="exit"
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        style={{ background: "rgba(8,20,40,0.75)", backdropFilter: "blur(6px)" }}
      >
        <motion.div
          variants={drawerVariant}
          initial="hidden" animate="visible" exit="exit"
          onClick={e => e.stopPropagation()}
          className="relative w-full sm:max-w-2xl max-h-[92vh] flex flex-col overflow-hidden"
          style={{
            background: "linear-gradient(145deg,#f8fbff 0%,#ffffff 100%)",
            borderRadius: 28,
            boxShadow: "0 32px 80px rgba(0,40,120,0.28)",
          }}
        >
          {/* Close */}
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.9)", boxShadow: "0 2px 12px rgba(0,40,120,0.15)" }}
          >
            <X className="w-5 h-5 text-blue-900" />
          </motion.button>

          {/* Hero image — full width, tall */}
          <div
            className="w-full flex-shrink-0 flex items-center justify-center"
            style={{
              background: "linear-gradient(160deg,#daeaf8 0%,#eaf2fb 55%,#f0f4ff 100%)",
              height: "360px",
              borderRadius: "28px 28px 0 0",
            }}
          >
            <img
              src={partner.image}
              alt={partner.name}
              className="h-full w-full object-contain"
              style={{ padding: "20px 60px" }}
            />
          </div>

          {/* Name bar */}
          <div className="px-7 pt-6 pb-4 border-b border-blue-100 flex-shrink-0">
            <p className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-1">
              {partner.role}
            </p>
            <h2
              className="text-2xl sm:text-3xl font-black text-blue-950 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {partner.name}
            </h2>
            <div className="flex flex-wrap gap-2 mt-3 text-sm text-gray-600">
              {partner.phone && (
                <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-xs">
                  ☎ {partner.phone}
                </span>
              )}
              {partner.email && (
                <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-xs">
                  ✉ {partner.email}
                </span>
              )}
            </div>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-7 py-6">
            <Section title="Experience" text={partner.experience} />
            <Section title="Sector Experience" text={partner.sectorExperience} />
            <Section title="Qualifications" list={partner.qualifications} />
            {partner.memberships?.length > 0 && (
              <Section title="Memberships" list={partner.memberships} />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Section = ({ title, text, list }) => (
  <div className="mb-6">
    <h4
      className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-3"
    >
      {title}
    </h4>
    {text && (
      <div className="text-sm text-gray-700 leading-relaxed space-y-2">{text}</div>
    )}
    {list && (
      <ul className="space-y-2 mt-1">
        {list.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "#2563eb" }}
            />
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

/* ─────────────── CARD ─────────────── */

const PartnerCard = ({ partner, index, onOpen }) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    className="group relative overflow-hidden"
    style={{
      borderRadius: 24,
      background: "white",
      boxShadow: "0 4px 24px rgba(0,40,120,0.08)",
      border: "1px solid rgba(0,80,200,0.08)",
    }}
  >
    {/* Accent bar top */}
    <div
      className="h-1 w-full"
      style={{ background: "linear-gradient(90deg,#1d4ed8,#60a5fa)" }}
    />

    <div className="p-6 sm:p-8 flex gap-5 sm:gap-7">
      {/* Photo */}
      <div className="flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.3 }}
          className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg,#daeaf8,#eef5ff)",
            boxShadow: "0 6px 24px rgba(0,60,140,0.12)",
          }}
        >
          <img
            src={partner.image}
            alt={partner.name}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          {/* Name */}
          <h3
            className="text-base sm:text-lg font-black text-blue-950 leading-snug mb-1"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {partner.name}
          </h3>

          {/* Role pill */}
          <p
            className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3 leading-relaxed"
          >
            {partner.role}
          </p>

          {/* Divider */}
          <div className="w-8 h-0.5 rounded-full bg-blue-200 mb-3" />

          {/* Experience preview */}
          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
            {typeof partner.experience === "string"
              ? partner.experience
              : "Extensive professional experience across multiple industries."}
          </p>
        </div>

        {/* Footer row */}
        <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
          {partner.phone && (
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <span className="text-blue-400">☎</span> {partner.phone}
            </span>
          )}

          <motion.button
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpen(partner)}
            className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold text-white px-4 py-2 rounded-full transition-all"
            style={{
              background: "linear-gradient(90deg,#1d4ed8,#3b82f6)",
              boxShadow: "0 2px 10px rgba(37,99,235,0.3)",
            }}
          >
            View Profile
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─────────────── PAGE ─────────────── */

const PartnersPage = () => {
  const partners = [
    {
      name: "JOSEPH CEDRIC V. CALICA",
      image: assets.one,
      role: "Chairman & Managing Partner",
      phone: "+63 917 324 4486",
      email: "jcvcalica@amc-associates.com",
      experience: (
        <>
          <p>Cedric is one of the founding Partner of AMC and currently the Chairman & Managing Partner of the Firm. Cedric has been in public accounting for his entire professional career. He worked for seven years at a prestigious and among the top auditing firms in the Philippines, having extensive experience in manufacturing and other various related industries such as mining, retail, banking, real estate, government accounting, agri-business, and theme parks. He spent the next four years of his career heading the internal audit division of a broadcasting and construction company.</p>
          <br />
          <p>He has significant involvement in major financial due diligence audits, agreed-upon and review engagements of the Firm, and heads the engagement of ICPA report on the application for tax refund/TCC and assistance in handling tax audits by the BIR.</p>
        </>
      ),
      sectorExperience: "Banking and finance, mutual benefit associations (MBAI), hospitality and hotel-related operations, not-for-profit, technology, manufacturing, mining, retail, real estate, and services.",
      qualifications: ["Certified Public Accountant", "Bachelor's degree in commerce Major in Accounting, San Beda College"],
      memberships: ["Member, Philippine Institute of Certified Public Accountants (PICPA)", "Association of Certified Public Accountants in Commerce and Industry (ACPACI)"],
    },
    {
      name: "ARIEL D. GONZALES",
      image: assets.two,
      role: "Practice Leader, Audit and Assurance, Technical Standards and Quality Control Leader",
      phone: "+63 917 804 0772",
      email: "adgonzales@amc-associates.com",
      experience: (
        <>
          <p>Ariel is a Practice Leader of the Audit & Assurance Division as well as the Leader of Technical Standards & Quality Control. Ariel started his CPA career at a prestigious and among the top auditing firm in the Philippines and worked his way to become one of the elite audit managers of his batch.</p>
          <br />
          <p>Ariel has been in public accounting for his entire professional career, gaining extensive experience in the audit of local and multinational companies in various industries such as manufacturing and other various related industries such as retail, banking, real estate, processing and manufacturing, utilities, and construction.</p>
        </>
      ),
      sectorExperience: "Banking, cooperatives, not-for-profit, technology, manufacturing, utilities",
      qualifications: ["Certified Public Accountant", "BS Business Administration – Accounting"],
      memberships: ["PICPA"],
    },
    {
      name: "MARICEL B. DE TORRES",
      image: assets.four,
      role: "Deputy Leader, Audit and Assurance, Markets, Communication, and Training Leader & Business Development Head",
      phone: "+63 998 865 8681",
      email: "mbdetorres@amc-associates.com",
      experience: (
        <>
          <p>Maricel is a Deputy Leader in the Audit & Assurance Division, responsible for the overall prompt and efficient delivery of quality service to clients, and in training and developing the skills of high-performance staff.</p>
          <br />
          <p>Maricel started her audit and professional career in 2007. She has extensive experience in the financial audit of local and multinational companies in a wide range of industries. She specializes in handling various non-audit engagements such as agreed-upon procedures, review engagements, due diligence engagements, ICPA report on the application for tax refund/TCC engagements.</p>
        </>
      ),
      sectorExperience: "Banking and finance, non-bank financial institutions, mutual benefit associations (MBAI), cooperatives, manufacturing, real estate, gaming and entertainment, PEZA and SBMA entities, and services",
      qualifications: ["Certified Public Accountant", "BS Business Administration – Accounting"],
      memberships: ["Bachelor's degree in accountancy, Lyceum of the Philippines University – Batangas (LPU-Batangas)"],
    },
    {
      name: "REGINALD S. MANALESE",
      image: "/partner-2.jpg",
      role: "Partner, Audit & Assurance",
      phone: "+63 933 827 6490",
      email: "rsmanalese@amc-associates.com",
      experience: (
        <p>Reggie is a Partner in the Audit & Assurance Division. Reggie started his professional career in 1993 as an accountant at one of the largest banking institutions here in the Philippines. He rose from the ranks and has become its chief accountant. After his stint as a banker, he trained as a financial consultant for an Information Technology Company.</p>
      ),
      sectorExperience: "Banking and finance, technology, and services",
      qualifications: ["Certified Public Accountant", "Bachelor's degree in commerce Major in Accounting, San Beda College"],
    },
    {
      name: "LAARNI M. TECSON",
      image: "/partner-2.jpg",
      role: "Practice Leader, Business Process Solutions/Outsourcing",
      phone: "+63 929 743 2352",
      email: "lmtecson@amc-associates.com",
      experience: (
        <>
          <p>Laarni is the Practice Leader of Business Process Solutions, the outsourcing arm of AMC. She started her CPA career at a prestigious firm in 1995, gaining six years of extensive experience in retail, banking and finance, real estate, non-life insurance and construction.</p>
          <br />
          <p>She then moved to join the banking industry and gained ten solid years of experience working for a local thrift bank where she headed as AVP – Internal Audit.</p>
        </>
      ),
      sectorExperience: "Banking and finance, cooperatives, not-for-profit, real estate, retail, and services, non-life insurance, health and wellness",
      qualifications: ["Certified Public Accountant", "Civil Service Career Sub-Professional Passer", "Bachelor of Science in Accountancy, Polytechnic University of the Philippines – Manila"],
      memberships: ["Member, Philippine Institute of Certified Public Accountants (PICPA)"],
    },
    {
      name: "NORMAN SANTIAGO",
      image: assets.three,
      role: "Practice Leader, Tax Advisory and Compliance",
      phone: "+63 917 672 0410",
      email: "nssantiago@amc-associates.com",
      experience: (
        <>
          <p>Norman is the Practice Leader of the Tax Advisory and Compliance Division. He conducts tax compliance reviews that provide advisory services on issues affecting individual and corporate taxpayers. He also assists clients in handling their tax assessments and other compliance requirements with the Bureau of Internal Revenue.</p>
          <br />
          <p>He started his audit career at a prestigious and among the top auditing firms in the Philippines, for seven fruitful years having extensive experience in manufacturing, brokerage and freight forwarders, mining, foundations, general contractor, service-oriented companies, credit card companies, and trading companies.</p>
        </>
      ),
      sectorExperience: "Manufacturing, mining, foundations, credit card and financing companies, brokerage and freight forwarders, trading and services",
      qualifications: ["Bachelor's degree in commerce Major in Accounting, San Beda College"],
    },
    {
      name: "JONEL U. AQUINO",
      image: "/partner-2.jpg",
      role: "Partner, Business Process Solutions/Outsourcing",
      phone: "+63 917 319 6763",
      email: "juaquino@amc-associates.com",
      experience: (
        <>
          <p>Jonel is one of the founding Partner of AMC and currently a Partner of Business Process Solutions. He started his CPA career at a prestigious firm in 1991, gaining six years of extensive experience in retail and healthcare.</p>
          <br />
          <p>He then moved to join BUREAU OF INTERNAL REVENUE (BIR) as a revenue officer. After his duty in the government tax agency, he moved to the corporate world and gained 19 solid years of experience in events management, advertising and marketing, logistics, and diversified conglomerate.</p>
        </>
      ),
      sectorExperience: "Retail, logistics, Shared services, cooperatives, not-for-profit, real estate, services, FMCG, health and wellness",
      qualifications: ["Certified Public Accountant", "Certified Lean Six Sigma", "Certified Risk Analyst", "Certified Financial Consultant", "Certified Management Accountant", "Bachelor of Science in Accountancy, San Beda University", "Executive Education in Finance (for CFOs), Wharton, University of Pennsylvania", "Masters of Science in International Business, University of London, Royal Holloway"],
      memberships: ["Member, Philippine Institute of Certified Public Accountants (PICPA)", "Member, Certified Management Accountants Philippines"],
    },
    {
      name: "PERCIVAL T. LANDA",
      image: "/partner-2.jpg",
      role: "Partner, Business Process Solutions/Outsourcing",
      phone: "+63 917 319 6763",
      email: "ptlanda@amc-associates.com",
      experience: (
        <>
          <p>Percival is a Partner of the Business Process Solutions/Outsourcing Division. He started his CPA career at a prestigious firm in 1993, gaining three years of experience in manufacturing companies, non-profit organizations, real estate, construction, stock brokerage, insurance, investment banking, and banking.</p>
          <br />
          <p>He then moved to join a managerial job at an investment banking arm where he served as the financial controller for almost 12 years, followed by 12 solid years in manpower outsourcing agency.</p>
        </>
      ),
      sectorExperience: "Manufacturing companies, non-profit organizations, real estate, construction, stock brokerage, insurance, investment banking, banking, Manpower, security, and PR Agencies",
      qualifications: ["Certified Public Accountant", "Bachelor of Science in Accountancy, Polytechnic University of the Philippines - Manila"],
      memberships: ["Member, Philippine Institute of Certified Public Accountants (PICPA)"],
    },
    {
      name: "SHIELA MARIE R. AGUINALDO",
      image: "/partner-2.jpg",
      role: "Partner, Business Process Solutions/Outsourcing",
      phone: "+63 917 319 6763",
      email: "smraguinaldo@amc-associates.com",
      experience: (
        <>
          <p>Shiela is the Deputy Leader of the Business Process Solutions/Outsourcing Division. She started her accounting career in 2002. Shiela is a seasoned accounting practitioner with significant experience in accounting and payroll services, including expertise in managing the accounting functions of various industries.</p>
          <br />
          <p>Shiela also heads the preparation of personal annual income tax returns for the individual taxpayer.</p>
        </>
      ),
      sectorExperience: "Manufacturing, trading, and services",
      qualifications: ["Bachelor's degree in accountancy, Philippine Christian University"],
    },
  ];

  const perPage = 4;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(partners.length / perPage);
  const current = partners.slice((page - 1) * perPage, page * perPage);
  const [activePartner, setActivePartner] = useState(null);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg,#EAF2FA 0%,#f8fbff 40%,#F0F4FF 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .line-clamp-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
      `}</style>

      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(37,99,235,0.06) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(96,165,250,0.07) 0%, transparent 50%)
          `,
        }}
      />
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(#1d4ed8 1px,transparent 1px),linear-gradient(90deg,#1d4ed8 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-14 lg:px-20 py-16 sm:py-20 md:py-28">

        {/* ── HEADER ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="mb-16 sm:mb-20"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-12 bg-blue-400" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-500">
              Leadership
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-5xl sm:text-6xl md:text-7xl font-black text-blue-950 leading-[0.95] tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Our
                <br />
                <span
                  className="relative inline-block"
                  style={{
                    background: "linear-gradient(90deg,#1d4ed8,#3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Partners
                </span>
              </motion.h1>
            </div>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base text-gray-500 max-w-xs leading-relaxed md:text-right"
            >
              Decades of expertise across audit, tax, and business solutions — anchored in integrity.
            </motion.p>
          </div>

          {/* Decorative rule */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-8 h-px w-full"
            style={{ background: "linear-gradient(90deg,#1d4ed8 0%,rgba(96,165,250,0.3) 50%,transparent 100%)" }}
          />
        </motion.div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
          {current.map((partner, i) => (
            <PartnerCard
              key={partner.name}
              partner={partner}
              index={i}
              onOpen={setActivePartner}
            />
          ))}
        </div>

        {/* ── PAGINATION ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-between"
        >
          {/* Page info */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className="transition-all duration-300"
                style={{
                  width: page === i + 1 ? 28 : 8,
                  height: 8,
                  borderRadius: 99,
                  background: page === i + 1
                    ? "linear-gradient(90deg,#1d4ed8,#3b82f6)"
                    : "rgba(0,60,200,0.15)",
                }}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400 mr-1">
              {(page - 1) * perPage + 1}–{Math.min(page * perPage, partners.length)} of {partners.length}
            </span>

            <motion.button
              whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                background: "white",
                border: "1.5px solid rgba(0,80,200,0.15)",
                boxShadow: "0 2px 8px rgba(0,60,140,0.06)",
              }}
            >
              <ChevronLeft className="w-5 h-5 text-blue-700" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}
              disabled={page === totalPages}
              onClick={() => setPage(p => p + 1)}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
              }}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {activePartner && (
        <PartnerModal partner={activePartner} onClose={() => setActivePartner(null)} />
      )}
    </div>
  );
};

export default PartnersPage;