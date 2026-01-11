import { useSEO } from "@/hooks/use-seo";
import { ContactCtaParent } from "../components/main components/ContactCta";
import ContactForm from "../components/main components/ContactForm";
import Footer from "../components/main components/Fotter";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";

const Contact = () => {
  useSEO({
    title:
      "Contact Steel Pipe Manufacturer & Exporter | Get Quote | Starlight Tubes Mumbai India",
    description:
      "Contact Starlight Tubes - India's leading steel pipe manufacturer and exporter. Get quotes for stainless steel pipes, carbon steel tubes, nickel alloy pipes, pipe fittings. Mumbai, India office with global delivery to USA, Europe, Middle East, Asia. Call +91-9892233118 for inquiries.",
    keywords:
      "contact steel pipe manufacturer, contact pipe exporter, steel pipe quote, steel tube inquiry, stainless steel pipe manufacturer contact, carbon steel pipe manufacturer contact, pipe fittings manufacturer contact, steel pipe supplier Mumbai, steel tube supplier India, get steel pipe quote, steel pipe inquiry, steel pipe manufacturer phone number, pipe exporter contact details, steel pipe factory contact",
    url: "https://www.starlighttubes.com/contact",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      { name: "Contact", url: "https://www.starlighttubes.com/contact" },
    ],
    speakableContent: {
      headline: "Contact Starlight Tubes - Get Steel Pipe Quotes",
      summary:
        "Contact Starlight Tubes in Mumbai, India for steel pipe quotes and inquiries. Call +91-9892233118 or email for stainless steel, carbon steel, and nickel alloy products with global delivery.",
    },
    entityType: "Place",
    relatedEntities: [
      "Mumbai steel supplier",
      "steel pipe quote India",
      "pipe manufacturer contact",
      "industrial steel inquiry",
      "export house contact",
    ],
    faqSchema: [
      {
        question: "How can I contact Starlight Tubes?",
        answer:
          "You can contact Starlight Tubes by calling +91-9892233118, emailing through our contact form, or visiting our Mumbai office. We respond to all inquiries within 24 hours.",
      },
      {
        question: "How do I get a quote for steel pipes?",
        answer:
          "Fill out our contact form with your requirements including material grade, size, quantity, and specifications. Our team will provide a detailed quote within 24 hours.",
      },
      {
        question: "Does Starlight Tubes deliver internationally?",
        answer:
          "Yes, Starlight Tubes exports to over 50 countries including USA, Europe, Middle East, and Asia. We handle complete export documentation and logistics.",
      },
    ],
  });
  return (
    <div>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <NavbarDemo>
          {/* Image Slider Section */}
          <PageHero
            title="Contact Us"
            subtitle="Get in touch with our team for quotes, inquiries and support"
            image="https://res.cloudinary.com/dtdardvqm/image/upload/f_avif,q_auto,w_1200,c_fill/contact-us1_tddy3v"
            buttonText="Call Now →"
            buttonLink="tel:+919892233118"
          />

          {/* Contact CTA Section Header */}
          <div className="w-full flex flex-col items-center justify-center mt-16 mb-8 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
              <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
                Contact Information
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Reach Out To Us
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl">
              Visit our office or get in touch through phone and email
            </p>
          </div>

          {/* Contact CTA Section */}
          <div className=" w-full h-fit flex justify-center mb-16">
            <ContactCtaParent />
          </div>

          {/* Heading Section for Contact Form */}
          <div className="w-full flex flex-col items-center justify-center  mb-0 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20 dark:bg-green-500/20 dark:border-green-500/30">
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                Get In Touch
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Let's Discuss Your Requirements
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Fill out the form below and our team will get back to you within
              24 hours. We're here to help with quotes, technical
              specifications, and custom orders.
            </p>
          </div>

          <div className="w-full h-fit flex justify-center mt-10 mb-10">
            <ContactForm />
          </div>

          {/* Footer Section */}

          <div>
            <Footer />
          </div>
        </NavbarDemo>
      </div>
    </div>
  );
};

export default Contact;
