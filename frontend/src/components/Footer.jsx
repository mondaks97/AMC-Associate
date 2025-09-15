import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { assets } from "../assets/assets";
import bg from "../assets/bg.jpg";

const Footer = () => {
  return (
    <footer className=" bg-white text-gray-900">
      {/* CTA Section */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 text-white p-8 md:p-10 rounded-3xl shadow-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {/* Left Side: Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                WALANG PANG MAISIP NA ILALAGAY
              </h2>
              <p className="text-gray-300 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur reiciendis dolore ad porro cumque illo, doloremque
                aperiam nihil quasi perspiciatis nisi, nam pariatur tempore
                itaque modi expedita iure omnis fuga?
              </p>
            </div>

            {/* Right Side: Full-Height Google Map */}
            <div className="h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7723.35394112818!2d121.01467377494839!3d14.560456085921217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9096ec55555%3A0xfc5936b371540697!2sAMC%20%26%20Associates!5e0!3m2!1sen!2sph!4v1751982300441!5m2!1sen!2sph"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg w-full h-full min-h-[250px]"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Footer Section */}
      <div className="relative mt-[-11rem] z-0">
        {/* Only the background container is moved up */}
        <div className="bg-[#F2F2F2] text-gray-300 rounded-t-3xl shadow-lg overflow-hidden">
          {/* Footer Content */}
          <div className="max-w-7xl mx-auto px-6 pt-[14rem] pb-20 flex flex-col md:flex-row md:items-start gap-8">
            {/* Logo & Address */}
            <div className="md:flex-shrink-0 md:w-1/4">
              <img
                className="mb-4 w-32 h-auto"
                src={assets.amclogo}
                alt="AMC Logo"
              />
              <p className="text-[#0F0E0E] font-semibold text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                asperiores, suscipit error perferendis repellat id alias ipsa
                commodi? Repellendus earum perspiciatis dignissimos tempore
                adipisci, illum cumque corporis similique eos facilis.
              </p>
            </div>

            {/* Links wrapper pushed right */}
            <div className="md:flex md:w-3/4 md:gap-45 md:pl-45">
              {/* Quick Links */}
              <div>
                <h4 className="text-[#880000] font-bold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm text-[#0F0E0E] font-semibold">
                  <li>
                    <a href="#" className="hover:underline">
                      Lorem
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Lorem
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Lorem
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Lorem
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
  <h4 className="text-[#880000] font-bold mb-3">Social Media</h4>
  <ul className="space-y-2 text-sm text-[#0F0E0E] font-semibold">
    <li className="flex items-center gap-2 hover:scale-105 transition-all duration-200 p-1 rounded-lg cursor-pointer">
      <img
        src={assets.facebook}
        alt="Facebook"
        className="w-6 h-6 hover:scale-110 transition-transform duration-200"
      />
      <a href="#" className="hover:text-[#880000] transition-colors duration-200">Facebook</a>
    </li>
    <li className="flex items-center gap-2 hover:scale-105 transition-all duration-200 p-1 rounded-lg cursor-pointer">
      <img
        src={assets.twitter}
        alt="Twitter"
        className="w-6 h-6 hover:scale-110 transition-transform duration-200"
      />
      <a href="#" className="hover:text-[#880000] transition-colors duration-200">Twitter</a>
    </li>
    <li className="flex items-center gap-2 hover:scale-105 transition-all duration-200 p-1 rounded-lg cursor-pointer">
      <img
        src={assets.instagram}
        alt="Instagram"
        className="w-6 h-6 hover:scale-110 transition-transform duration-200"
      />
      <a href="#" className="hover:text-[#880000] transition-colors duration-200">Instagram</a>
    </li>
    <li className="flex items-center gap-2 hover:scale-105 transition-all duration-200 p-1 rounded-lg cursor-pointer">
      <img
        src={assets.linkedin}
        alt="LinkedIn"
        className="w-6 h-6 hover:scale-110 transition-transform duration-200"
      />
      <a href="#" className="hover:text-[#880000] transition-colors duration-200">LinkedIn</a>
    </li>
  </ul>
</div>

              {/* Legal */}
              <div>
                <h4 className="text-[#880000] font-bold mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-[#0F0E0E] font-semibold">
                  <li>
                    <a href="#" className="hover:underline">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="text-[#0F0E0E] font-md border-t border-gray-700 text-center py-4 text-sm">
            Copyright © 2025 AMC & ASSOCIATES. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
