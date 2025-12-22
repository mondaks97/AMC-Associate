import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const ServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold text-purple-900">
          {service.title}
        </h3>
        {isOpen ? (
          <ChevronUp className="text-purple-900 flex-shrink-0" />
        ) : (
          <ChevronDown className="text-purple-900 flex-shrink-0" />
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mt-2">
        {service.description}
      </p>

      {/* Expandable section */}
      <div 
        className="grid transition-all duration-300 ease-in-out"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr'
        }}
      >
        <div className="overflow-hidden">
          <div className="mt-3">
            <hr className="border-t border-gray-200 my-3" />
            <p className="text-xs font-medium text-gray-500 mb-2 flex items-center gap-1">
              <ChevronUp size={14} /> HIDE OUR{" "}
              {service.title.toUpperCase()}
            </p>

            <div className="flex flex-col gap-2">
              {service.subServices.map((sub, i) => (
                <button
                  key={i}
                  className="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 text-sm font-medium text-purple-900 transition-all"
                >
                  {sub}
                  <ArrowRight size={16} className="flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* "See Our" when closed */}
      {!isOpen && (
        <div
          className="flex items-center gap-2 text-sm text-purple-900 mt-3 font-medium cursor-pointer"
          onClick={toggleAccordion}
        >
          <ArrowRight size={14} /> SEE OUR {service.title.toUpperCase()}
        </div>
      )}
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "Audit & Assurance",
      description:
        "We help you manage your fiscal responsibilities with prudence and foresight.",
      subServices: [
        "Financial Statement Audit",
        "Internal Audit",
        "Risk Management",
      ],
    },
    {
      title: "Tax Advisory & Compliance",
      description:
        "We help you identify the opportunities and pitfalls that can significantly affect your bottom line.",
      subServices: [
        "Tax advisory",
        "Tax compliance",
        "Transfer pricing",
        "Corporate services",
        "Tax education and advocacy",
      ],
    },
    {
      title: "Advisory Services",
      description:
        "We believe there is an optimal solution to every business challenge. We work with you to find the right approach and help you create value.",
      subServices: [
        "Business Strategy",
        "Financial Advisory",
        "Technology Consulting",
      ],
    },
    {
      title: "Business Process Solutions",
      description:
        "We provide solid, first-rate support for your key accounting and administrative activities.",
      subServices: ["Payroll Services", "Bookkeeping", "Data Management"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-5">
      {/* Hero Section */}
      <section className="relative mt-25 bg-indigo-500 px-4 rounded-2xl sm:px-6 lg:px-35 py-12 sm:py-16 lg:py-7">
        <div className="container mx-auto px-6 py-11 grid lg:grid-cols-2 gap-6 items-center relative z-10">
          <div>
            <div className="inline-block px-6 py-2 border-2 border-white rounded-md">
              <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight">
                Services
              </h1>
            </div>
            <p className="text-white text-base mt-4 max-w-lg">
              AMC is your partner and provides support for your key accounting
              and administrative activities, such as outsourced accounting,
              payroll, and accounting-relatable tasks.
            </p>
          </div>
        </div>
        {/* Hero Image Placeholder */}
        <div className="w-full h-80 bg-gray-300 rounded-xl shadow-lg absolute top-10 right-6 lg:right-40 max-w-xs hidden lg:block" />
      </section>

      {/* Services Section */}
      <section className="min-h-screen bg-gray-50 px-6 md:px-20 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard service={services[0]} />
          <ServiceCard service={services[1]} />
          <ServiceCard service={services[2]} />
          <ServiceCard service={services[3]} />
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 