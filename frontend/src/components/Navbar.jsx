import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { HiMenu, HiX } from "react-icons/hi";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsShrunk(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Our Services" },
    { to: "/partners", label: "Partners" },
    {
      label: "Features",
      dropdown: [
        { to: "/blogs", label: "Blog" },
        { to: "/news", label: "News" },
        { to: "/career", label: "Career" },
      ],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

        .nb-underline { position: relative; }
        .nb-underline::after {
          content: ''; position: absolute;
          bottom: -2px; left: 0; width: 0; height: 1.5px;
          background: linear-gradient(90deg, #000099, #3b82f6);
          border-radius: 99px;
          transition: width 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .nb-underline:hover::after, .nb-underline.active::after { width: 100%; }

        .nb-dd { transform: translateY(-6px); opacity: 0; pointer-events: none; transition: all 0.25s cubic-bezier(0.22,1,0.36,1); }
        .nb-dd.open { transform: translateY(0); opacity: 1; pointer-events: all; }

        .nb-chevron { transition: transform 0.25s ease; }
        .nb-chevron.open { transform: rotate(180deg); }

        .nb-drawer { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.22,1,0.36,1); }
        .nb-drawer.open { max-height: 520px; }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md
          ${isShrunk ? "bg-white/95 shadow-md border-b border-[#000099]/10 h-16" : "bg-white/85 border-b border-[#000099]/5 h-[72px]"}`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between gap-8">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={assets.amclogo} alt="AMC Logo"
              className={`transition-all duration-300 ${isShrunk ? "w-14" : "w-16"}`}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link, i) =>
              !link.dropdown ? (
                <Link
                  key={i} to={link.to}
                  className={`nb-underline font-[DM_Sans] text-[13.5px] font-medium tracking-wide pb-1 transition-colors duration-200
                    ${activePath === link.to ? "text-[#000099] active" : "text-gray-600 hover:text-[#000099]"}`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </Link>
              ) : (
                <div key={i} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 text-[13.5px] font-medium tracking-wide transition-colors
                      ${dropdownOpen ? "text-[#000099]" : "text-gray-600 hover:text-[#000099]"}`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`nb-chevron ${dropdownOpen ? "open" : ""}`} />
                  </button>
                  <div className={`nb-dd ${dropdownOpen ? "open" : ""} absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 min-w-[160px] bg-white rounded-2xl border border-[#000099]/10 shadow-xl p-2 z-50`}>
                    <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 rotate-45 w-[10px] h-[10px] bg-white border-l border-t border-[#000099]/10" />
                    {link.dropdown.map((item, j) => (
                      <Link
                        key={j} to={item.to}
                        onClick={() => setDropdownOpen(false)}
                        className={`block px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-150
                          ${activePath === item.to ? "text-[#000099] bg-[#000099]/5 font-semibold" : "text-gray-500 hover:text-[#000099] hover:bg-[#000099]/5 hover:pl-4"}`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center text-[13px] font-semibold tracking-wider text-white
                bg-gradient-to-br from-[#000099] to-[#1d4ed8] px-5 py-2.5 rounded-full
                border-[1.5px] border-transparent shadow-[0_2px_12px_rgba(0,0,153,0.25)]
                hover:bg-white hover:text-[#000099] hover:border-[#000099]/30
                hover:shadow-[0_4px_20px_rgba(0,0,153,0.15)] hover:-translate-y-px transition-all duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact Us
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center p-1.5 rounded-lg text-[#1e3a8a] hover:bg-[#000099]/5 transition-colors"
            >
              {isMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`md:hidden nb-drawer ${isMenuOpen ? "open" : ""} bg-white border-t border-[#000099]/6`}>
          <div className="px-4 py-3 pb-5 space-y-1">
            {navLinks.map((link, i) =>
              !link.dropdown ? (
                <Link
                  key={i} to={link.to}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium transition-all
                    ${activePath === link.to ? "bg-[#000099]/5 text-[#000099] font-semibold" : "text-gray-600 hover:bg-[#000099]/5 hover:text-[#000099]"}`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-[#000099] flex-shrink-0 transition-opacity ${activePath === link.to ? "opacity-100" : "opacity-0"}`} />
                  {link.label}
                </Link>
              ) : (
                <div key={i}>
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-gray-400 px-4 pt-4 pb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {link.label}
                  </p>
                  {link.dropdown.map((item, j) => (
                    <Link
                      key={j} to={item.to}
                      className={`flex items-center gap-2 pl-7 pr-4 py-2.5 rounded-xl text-sm font-medium transition-all
                        ${activePath === item.to ? "bg-[#000099]/5 text-[#000099] font-semibold" : "text-gray-500 hover:bg-[#000099]/5 hover:text-[#000099]"}`}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <span className={`w-1 h-1 rounded-full bg-[#000099] flex-shrink-0 transition-opacity ${activePath === item.to ? "opacity-100" : "opacity-0"}`} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )
            )}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white tracking-wide bg-gradient-to-br from-[#000099] to-[#1d4ed8] shadow-[0_4px_14px_rgba(0,0,153,0.25)]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;  

