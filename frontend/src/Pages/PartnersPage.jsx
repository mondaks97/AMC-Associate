import { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* ================= ANIMATION VARIANT ================= */

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

/* ================= MODAL ================= */

const PartnerModal = ({ partner, onClose }) => {
  if (!partner) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        <img
          src={partner.image}
          alt={partner.name}
          className="w-full h-56 object-cover rounded-xl mb-6"
        />

        <h3 className="text-2xl font-bold mb-4">{partner.name}</h3>

        <Section title="Experience" text={partner.experience} />
        <Section title="Sector Experience" text={partner.sectorExperience} />
        <Section
          title="Qualifications"
          list={partner.qualifications}
        />
        <Section title="Memberships" list={partner.memberships} />
      </div>
    </div>
  );
};

const Section = ({ title, text, list }) => (
  <div className="mb-5 text-sm text-gray-600">
    <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
    {text && <p>{text}</p>}
    {list && (
      <ul className="list-disc list-inside space-y-1">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

/* ================= CARD ================= */

const PartnerCard = ({ partner, index, onOpen }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
    >
      {/* Image */}
      <div className="h-44 bg-gray-200 rounded-b-[3rem] overflow-hidden">
        <img
          src={partner.image}
          alt={partner.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-sm text-gray-600">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {partner.name}
        </h3>

        {/* Experience (collapsed) */}
        <motion.div
          animate={{ height: expanded ? "auto" : 60 }}
          className="overflow-hidden"
        >
          <p>{partner.experience}</p>
        </motion.div>

        {/* Actions */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-medium text-indigo-600 hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>

          <button
            onClick={() => onOpen(partner)}
            className="text-sm font-medium text-indigo-600 hover:underline"
          >
            View full profile
          </button>
        </div>
      </div>
    </motion.div>
  );
};

/* ================= PAGE ================= */

const PartnersPage = () => {
  const partners = [
    {
      name: "Joseph Cedric v. Calica",
      image: "/partner-1.jpg",
      experience:
        "Cedric is one of the founding Partners of AMC and currently the Chairman & Managing Partner of the firm. He has extensive experience in audit, manufacturing, utilities, mining, retail, banking, and services.",
      sectorExperience:
        "Banking and finance, mutual benefit associations (MBA), hospitality, technology, manufacturing, mining, retail, real estate",
      qualifications: [
        "Certified Public Accountant",
        "BS Commerce – Accounting, San Beda College",
      ],
      memberships: [
        "PICPA",
        "ACPACI",
      ],
    },
    {
      name: "Ariel D. Gonzales",
      image: "/partner-2.jpg",
      experience:
        "Ariel is a Practice Leader of the Audit & Assurance Division and heads Technical Standards & Quality Control. He has worked with multinational and local companies.",
      sectorExperience:
        "Banking, cooperatives, not-for-profit, technology, manufacturing, utilities",
      qualifications: [
        "Certified Public Accountant",
        "BS Business Administration – Accounting",
      ],
      memberships: ["PICPA"],
    },
  ];

  /* Pagination */
  const perPage = 2;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(partners.length / perPage);
  const current = partners.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const [activePartner, setActivePartner] = useState(null);

  return (
    <div className="min-h-screen bg-[#EAF2FA] px-6 md:px-20 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Our Partners
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {current.map((partner, i) => (
          <PartnerCard
            key={i}
            partner={partner}
            index={i}
            onOpen={setActivePartner}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="p-2 rounded-full border disabled:opacity-40"
        >
          <ChevronLeft />
        </button>

        <span className="text-sm font-medium">
          {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="p-2 rounded-full border disabled:opacity-40"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Modal */}
      {activePartner && (
        <PartnerModal
          partner={activePartner}
          onClose={() => setActivePartner(null)}
        />
      )}
    </div>
  );
};

export default PartnersPage;
