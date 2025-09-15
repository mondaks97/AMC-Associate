import { assets } from "../assets/assets";

import React, { useState, useRef, useEffect } from "react";

const accordionData = [
  {
    title: <h2 className="text-[#880000] text-lg font-bold">Accounting/Bookkeeping Services</h2>,
    content: (
      <>
        <p className="text-sm leading-relaxed">
          AMC handles accounting services for several companies from a wide range of industries. You may opt to outsource all your accounting function or pass on to us choice activities, such as:
           <br></br>
          <span className="px-4">&#9679; Processing invoices and collections, which involves recording your pro forma billings and collections to official accountable forms of sales invoices and official receipts</span>
           <br></br>
          <span className="px-4">&#9679; Maintaining inventory records and assisting in the inventory count. </span>
           <br></br>
          <span className="px-4">&#9679; Compiling and reviewing source documents supporting your financial transactions. </span>
           <br></br>
          <span className="px-4">&#9679; Recording you financial transactions and preparing pertinent adjustment. </span>
           <br></br>
          <span className="px-4">&#9679; Preparing financial reports and supporting schedule. </span>
           <br></br>
          <span className="px-4">&#9679; Preparing statutory and other reports. </span>
           <br></br>
          <span className="px-4">&#9679; Preparing tax returns and related schedules for withholding, value added, and income tax. </span>
           <br></br>
          <span className="px-4">&#9679; Filing tax returns and payment of the corresponding taxes manually or electronically. </span>
        </p>
      </>
    ),
  },
  {
    title: <h2 className="text-[#880000] text-lg font-bold">Staff Augmentation Services</h2>,
    content: <p className="text-sm">AMC offers staff augmentation services where our staff, under the direction and supervision of the company's officers, perform accounting and accounting-related work.
    <br></br>
          <span className="px-4">&#9679; Migration from one accounting system to another accounting system.</span>
          <br></br>
          <span className="px-4">&#9679; Bank reconciliation for several bank account that have not been reconciled for years.</span>
          <br></br>
          <span className="px-4">&#9679; Data cleansing, such as reconciliation of balances in subsidiary ledgers  of receivables and payables with the general ledger balances.</span>
          <br></br>
          <span className="px-4">&#9679; Physical counts of inventories and reconciling the results of the physical count with the accounting records.</span>
          <br></br>
          <span className="px-4">&#9679; Count of property and equipment : tagging and reconciliation of the count with the accounting records: and properly setting up the property ledgers.</span>
          <br></br>
          <span className="px-4">&#9679; Preparation of schedules and  documentary supports and requirements during audits by internal and external parties, including government agencies.</span>
          <br></br>
          <span className="px-4">&#9679; Preparation of statements of accounts for certain customers.</span>
          
    </p>
    
  },
  {
    title: <h2 className="text-[#880000] text-lg font-bold">Payroll Processing</h2>,
    content: <p className="text-sm">  
      <span className="px-4">&#9679; Prepare schedules of statutory and internal contributions and obligation.</span>
      <br></br>
      <span className="px-4">&#9679; File and pay statutory contributions and obligations, manually or electronically.</span>
      <br></br>
      <span className="px-4">&#9679; Annualized employee's income tax.</span>
      <br></br>
      <span className="px-4">&#9679; Provide secure pay slips.</span>
      <br></br>
      <span className="px-4">&#9679; Handle administration of benefits that needs coordination with government agencies.</span>
    </p>,
  },
];




const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto font-sans space-y-4">
      {accordionData.map(({ title, content }, index) => {
        const isOpen = openIndex === index;
        const contentRef = (el) => (contentRefs.current[index] = el);

        return (
          <div
            key={index}
            className={`rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "bg-white shadow" : "bg-white/80"
            }`}
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-xs tracking-widest uppercase font-semibold border-b border-gray-300"
            >
              <span>{title}</span>
              <span className="text-2xl font-bold select-none">
                {isOpen ? "×" : "+"}
              </span>
            </button>

            {/* Accordion Content with smooth expand/collapse */}
            <div
              ref={contentRef}
              style={{
                maxHeight: isOpen
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0px",
                transition: "max-height 0.4s ease",
              }}
              className="px-6 bg-[#f7f2e8] overflow-hidden"
            >
              <div className="py-4">{content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

 const ServicesPage = () => {

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-5">
      {/* Hero Section */}
      <section className="relative mt-25 bg-[#000099] px-4 rounded-2xl sm:px-6 lg:px-35 py-12 sm:py-16 lg:py-5">
        <div className="container mx-auto px-6 py-11 grid lg:grid-cols-2 gap-6 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight mb-4">Services</h1>
            <p className="text-white text-lg max-w-lg">AMC is your partner and provides support for your key accounting and administrative activities, such as outsourced accounting, payroll, and accounting-relatable tasks.</p>
          </div>
        </div>
        {/* Hero Image Placeholder - taller */}
        <img className="w-full h-90 bg-gray-200 rounded-xl shadow-lg absolute top-[40px] bottom-[-90px] right-6 lg:right-40 max-w-[25%]" src={assets.amc_image} alt="" />
      </section>

      {/* Services Section */}
      <section
        className="bg-gray-100 py-60 px-4 md:px-10"
        
      >
        <Accordion />
      </section>
    </div>
  );
};
export default ServicesPage;
