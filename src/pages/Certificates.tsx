import { useSEO } from "@/hooks/use-seo";
import { CardHoverEffectDemo } from "../components/main components/CoatingImgCard";
import Footer from "../components/main components/Fotter";
import StatsGrid from "../components/main components/HomeStats";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";

const Certificates = () => {
  useSEO({
    title:
      "Quality Certificates - ISO 9001, PED, Export Certifications | Starlight Tubes Steel Manufacturer",
    description:
      "Starlight Tubes quality certifications - ISO 9001:2015 certified steel pipe manufacturer and exporter in India. View our GST certificate, export license, PED 97/23/EC approval, mill test certificates. Government recognized export house with complete quality documentation for stainless steel, carbon steel, nickel alloy pipes.",
    keywords:
      "ISO certified steel manufacturer, ISO 9001 steel pipe manufacturer, PED approved pipe manufacturer, mill test certificate, quality certificates steel pipes, export certified manufacturer, government recognized export house, steel pipe quality certification, ASTM certified pipes, ASME certified tubes, third party inspection, EN 10204 3.1 certificate, MTC steel pipes, quality assurance steel manufacturer",
    url: "https://www.starlighttubes.com/certificates",
    breadcrumbs: [
      { name: "Home", url: "https://www.starlighttubes.com/" },
      {
        name: "Certificates",
        url: "https://www.starlighttubes.com/certificates",
      },
    ],
    speakableContent: {
      headline: "Quality Certifications - ISO 9001, PED, Export License",
      summary:
        "Starlight Tubes holds ISO 9001:2015 certification, PED 97/23/EC approval, and Government of India Export House recognition, ensuring highest quality standards for all steel pipe products.",
    },
    entityType: "Organization",
    relatedEntities: [
      "ISO 9001 certification",
      "PED approval",
      "export license",
      "mill test certificate",
      "quality certification",
      "GST certificate",
      "export house",
    ],
    faqSchema: [
      {
        question: "What certifications does Starlight Tubes hold?",
        answer:
          "Starlight Tubes holds ISO 9001:2015 certification, ISO 14001, OHSAS 18001, PED 97/23/EC approval, and is a Government of India Recognized Export House with complete quality documentation.",
      },
      {
        question: "What documentation comes with Starlight Tubes products?",
        answer:
          "All products come with mill test certificates (EN 10204 3.1/3.2), chemical and mechanical test reports, dimensional inspection certificates, and third-party inspection reports as per customer requirements.",
      },
      {
        question: "Is Starlight Tubes a government approved exporter?",
        answer:
          "Yes, Starlight Tubes is a Government of India Recognized Export House with valid GST registration, export license, and all necessary certifications for international trade.",
      },
    ],
  });

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <PageHero
          title="Certificates"
          subtitle="Quality documents and compliance for all products"
          image="/MainScrollableImage/Home.webp"
        />

        <div className="w-full max-w-7xl mx-auto px-6 mt-20 ">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-linear-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 text-sm font-semibold dark:from-blue-900/20 dark:to-purple-900/20 dark:border-blue-600 dark:text-blue-300">
              🏆 Certification Gallery
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300 mb-4">
              Our Certificates
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Explore our comprehensive collection of quality certificates and
              compliance documents. Click on any certificate to view detailed
              information and verify our commitment to excellence.
            </p>
          </div>
        </div>

        <div>
          <CardHoverEffectDemo
            projects={[
              { img: "/certificates/gst.png", title: "GST Certificate" },
              { img: "/certificates/export.png", title: "Export Certificate" },
              { img: "/certificates/iso.png", title: "ISO Certificate" },
            ]}
          />
        </div>

        <div>
          <InfiniteMovingCardsDemo />
        </div>

        <div>
          <StatsGrid />
        </div>
        <div>
          <Footer />
        </div>
      </NavbarDemo>
    </div>
  );
};

export default Certificates;
