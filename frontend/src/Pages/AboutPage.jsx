import { useState } from "react";
import { assets } from "../assets/assets";
import bg_about from "../assets/bg_about.jpg";

const AboutPage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="min-h-screen bg-white p-5">
      {/* Header Section */}
      <section className="relative mt-25 bg-[#5f6fff] px-4 rounded-2xl sm:px-6 lg:px-35 py-12 sm:py-16 lg:py-1 shadow-lg overflow-hidden">
        <div className="container mx-auto px-6 py-11 grid lg:grid-cols-2 gap-6 items-center relative z-10">
          <div>
            <div className="inline-block px-6 py-2 border-2 border-white rounded-md shadow-sm backdrop-blur-sm">
              <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight tracking-wide">
                About Us
              </h1>
            </div>
            <p className="mt-5 text-white/90 text-md max-w-lg leading-relaxed">
              Aquino, Mata, Calica & Associates ("AMC & ASSOCIATES") was
              registered with the Philippine Securities and Exchange Commission
              on February 18, 2002, as a general professional partnership
              providing audit and assurance, accounting, tax, advisory, and
              business process outsourcing services.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <img
          className="w-full h-80 bg-gray-200 rounded-xl shadow-2xl absolute top-[40px] bottom-[-90px] right-6 lg:right-40 max-w-[30%] object-cover object-center transition-transform duration-500 hover:scale-105"
          src={assets.aboutbg}
          alt="About AMC"
        />
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
