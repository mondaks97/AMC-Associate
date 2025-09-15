import { assets } from "../assets/assets";
import bg_about from '../assets/bg_about.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white p-5">
      <section className="relative mt-25 bg-yellow-400 px-4 rounded-2xl sm:px-6 lg:px-35 py-12 sm:py-16 lg:py-5">
        <div className="container mx-auto px-6 py-11 grid lg:grid-cols-2 gap-6 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight mb-4">About Us</h1>
            <p className="text-white text-lg max-w-lg">Aquino, Mata, Calica & Associates ("AMC & ASSOCIATES") was Registered with the Philippine Securities and Exchange Commission on February 18, 2002 as a general professional partnership providing various services in audit and assurance , accounting, tax and advisory services and business process outsources</p>
          </div>
        </div>
        {/* Hero Image Placeholder - taller */}
        <img className="w-full h-90 bg-gray-200 rounded-xl shadow-lg absolute top-[40px] bottom-[-90px] right-6 lg:right-40 max-w-[25%] bg-center bg-" src={assets.aboutbg} alt="" />
      </section>

      <section className="bg-gray-100 py-60 px-4 md:px-10 bg-cover bg-center" style={{ backgroundImage: `url(${bg_about})` }}>

        <div className="max-w-6xl mx-auto space-y-20">
          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center relative">
            {/* Image */}
            <div className="relative">
              {/* Yellow circle */}
              <div className="absolute -top-5 -right-5 w-10 h-10 bg-[#000099] rounded-full z-0"></div>
              {/* White overlay circle */}
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-full z-0 opacity-80"></div>

              <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg">
                <img src={assets.bgtry} alt="amc_img" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Vision</h2>
              <p className="text-gray-600 text-sm md:text-lg font-md leading-relaxed">
                To be leading firm provider of high-quality services in the field of audit, taxation, accounting, consulting, and business process outsourcing.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center relative">
            {/* Text */}
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Mission</h2>
              <p className="text-gray-600 text-sm md:text-lg font-md leading-relaxed">
                To provide the most reliable, effective, and efficient services that add value to clients' businesses, both local and international
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              {/* Yellow circle */}
              <div className="absolute -bottom-5 -left-5 w-10 h-10 bg-[#000099] rounded-full z-0"></div>
              {/* White overlay circle */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full z-0 opacity-80"></div>

              <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg">
                <img src={assets.bgtry} alt="Smiling woman" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
