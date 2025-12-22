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
              