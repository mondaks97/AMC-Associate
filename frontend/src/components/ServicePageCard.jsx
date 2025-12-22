import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const ServicePageCard = ({ service }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg font-semibold text-[#5a2d82]">
          {service.title}
        </h3>
        {open ? (
          <ChevronUp className="text-[#5a2d82]" />
        ) : (
          <ChevronDown className="text-[#5a2d82]" />
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mt-2">
        {service.description}
      </p>

      {/* Expandable Section */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          open ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        {open && (
          <>
            <hr className="border-t border-gray-200 my-3" />
            <div className="flex items-center gap-1 text-xs font-medium text-gray-500 mb-3">
              <ChevronUp size={14} /> HIDE OUR {service.title.toUpperCase()}
            </div>

            <div className="flex flex-col gap-2">
              {service.subServices.map((sub, i) => (
                <button
                  key={i}
                  className="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 text-sm font-medium text-[#5a2d82] transition-all"
                >
                  {sub}
                  <ArrowRight size={16} />
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Closed button */}
      {!open && (
        <div
          className="flex items-center gap-2 text-sm text-[#5a2d82] mt-3 font-medium cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <ArrowRight size={14} /> SEE OUR {service.title.toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default ServicePageCard;
