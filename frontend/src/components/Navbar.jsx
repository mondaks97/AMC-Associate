import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  
  const links = ["Home", "About", "Services", "Features", "Contact Us"];
  const dropdownItems = [
    { name: "Jobs", path: "/Jobs" },
    { name: "Blogs", path: "/blogs" },
  ];

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
    <nav className="bg-white fixed w-full shadow-sm z-50">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              closeMenu();
              window.location.href = '/';
            }}
          >
            <img
              src={assets.amclogo}
              alt="logo"
              className="cursor-pointer w-24 sm:w-28 md:w-32 lg:w-30 h-auto"
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
                        relative inline-flex items-center px-3 xl:px-4 py-2 text-[#800000] text-sm xl:text-base
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
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Desktop Dropdown */}
                    <div 
                      className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 ${
                        isDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                      }`}
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      {dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-3 text-[#800000] hover:text-[#000099] hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
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
                      relative inline-block px-3 xl:px-4 py-2 text-[#800000] text-sm xl:text-base
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
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div className={`overflow-hidden transition-all duration-300 ${isMobileDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                      {dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={closeMenu}
                          className="block pl-8 pr-4 py-2 text-[#800000] hover:text-[#000099] hover:bg-gray-50 rounded-md transition-all duration-300 text-sm font-medium"
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
    </nav>
  );
};

export default Navbar;