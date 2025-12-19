import { useState } from "react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What grades of stainless steel do you supply?",
      answer:
        "We offer 304, 316, and 316L stainless steel in pipes, tubes, sheets, plates, round bars, fasteners, and wire.",
    },
    {
      question: "Do you provide nickel alloy products?",
      answer:
        "Yes, we supply nickel and Inconel alloys including Inconel 600 and 625 in pipes, plates, tubing, bolts, and round bars.",
    },
    {
      question: "What carbon steel standards are available?",
      answer:
        "Our carbon steel range includes ASTM A106, A53, A333, API 5L (Grade B, X42, X52, X65), A671, and A672 pipes.",
    },
    {
      question: "Are your tubes and pipes certified?",
      answer:
        "All products comply with ISO and ASTM standards, and we provide EN 10204 material test certificates for full traceability.",
    },

    {
      question: "Can I request custom sizes or finishes?",
      answer:
        "Absolutely. We provide customized dimensions, wall thicknesses, and surface finishes to meet client specifications.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "We serve clients in over 25 countries with reliable logistics and a 99.9% on‑time delivery record.",
    },
    {
      question: "How can I get a quotation?",
      answer:
        "You can contact us at sales@starlighttubes.com or submit your requirements through our website inquiry form.",
    },
  ];

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-450 rounded-2xl gap-10 mx-auto my-20 bg-slate-900 p-8 flex items-center justify-center flex-col border-t border-slate-700/50">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Frequently asked questions
      </h1>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-slate-800/30 border border-slate-700/50 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors duration-200"
            >
              <span className="text-white font-medium pr-4">
                {faq.question}
              </span>
              <span className="text-white text-2xl flex-shrink-0">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 text-slate-400">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
