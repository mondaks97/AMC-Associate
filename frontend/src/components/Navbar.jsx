import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { assets } from "../assets/assets";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const location = useLocation();

  // ✅ Scroll + Shrink effect
  useEffect(() => {
    const handleScroll = () => setIsShrunk(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Highlight active page
  const activePath = location.pathname;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Our Services" },
    { to: "/partners", label: "Meet Our Partners" },
    {
      // label: "Features",
      // dropdown: [
      //   { to: "/blog", label: "Blog" },
      //   { to: "/news", label: "News" },
      //   { to: "/jobs", label: "Jobs" },
      // ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 backdrop-blur-sm z-50 border-b border-gray-100 transition-all duration-300
      ${isShrunk ? "bg-white/95 shadow-md md:h-16 h-14" : "bg-white/80 shadow-none md:h-20 h-16"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            className={`transition-all duration-300 ${isShrunk ? "w-16" : "w-20"}`}
            src={assets.amclogo}
            alt="amc_logo"
          />
        </Link>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
          {isMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {!link.dropdown ? (
                <Link
                  to={link.to}
                  className={`text-md font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#000099] after:transition-all ${
                    activePath === link.to
                      ? "text-[#000099] after:w-full"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  <button className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    {link.label}
                    <ChevronDown size={16} />
                  </button>
                  <div className="absolute left-0 top-full opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-200 bg-white shadow-lg rounded-lg py-2 w-44 border border-gray-100 z-50">
                    {link.dropdown.map((item, subIndex) => (
                      <Link
                        key={subIndex}
                        to={item.to}
                        className={`block px-4 py-2 text-sm hover:bg-gray-50 ${
                          activePath === item.to
                            ? "text-[#000099] font-medium"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <Link
          to="/contact"
          className={`hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-[#000099] text-sm font-medium transition-all hover:shadow-lg ${
            activePath === "/contact" ? "bg-[#000099]" : ""
          }`}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="px-4 space-y-4">
            {navLinks.map((link, index) =>
              !link.dropdown ? (
                <Link
                  key={index}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm ${
                    activePath === link.to
                      ? "text-blue-600 font-medium"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <div key={index}>
                  <p className="text-gray-400 text-xs uppercase">{link.label}</p>
                  {link.dropdown.map((item, subIndex) => (
                    <Link
                      key={subIndex}
                      to={item.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-1 text-sm ${
                        activePath === item.to
                          ? "text-blue-600 font-medium"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )
            )}

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full bg-blue-600 text-white text-center py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium ${
                activePath === "/contact" ? "bg-blue-700" : ""
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
