import { assets } from "../assets/assets";

const Philosophy = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-6 md:px-12 lg:px-24 py-16">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 mt-15">
          <h2 className="text-4xl md:text-6xl font-bold text-[#000099] leading-tight">
            Our Philosophy
          </h2>

          <p className="text-gray-600 mt-6 text-base md:text-lg">
            We dedicate ourselves to providing superior and high-quality services of audit, accounting, tax, and business process outsourcing in a timely, effective, and efficient manner maintaining the highest standards of professional integrity. We consider our responsibility to embrace responsiveness to our client’s requirements for their business, special opportunities, and challenges that confront them. We foster an enjoyable working environment through open communication, mutual respect, teamwork, continuous innovation, and loyalty to perform our tradition of services and leadership.
          </p>

          <button className="mt-8 bg-[#800000] text-white px-6 py-3 rounded font-medium cursor-pointer">
            Know more about us
          </button>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 mt-7">
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
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
