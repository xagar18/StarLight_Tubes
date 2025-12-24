import { WorldMapDemo } from "../components/main components/AboutMap";
import { CardSpotlightDemo } from "../components/main components/AboutSpotLightCard";
import Footer from "../components/main components/Fotter";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";
import { BottomCTA } from "../components/sub components/BottomCTA";

const About = () => {
  const heading = "Starlight Tubes";
  const text1 =
    "Starlight Tubes is India's No. 1 exporter and stockist of industrial steel pipes and tubes, serving the Oil & Gas, petrochemical, and chemical processing industries since 2020. We supply piping materials in Stainless Steel, Carbon Steel, Alloy Steel, and Nickel Alloys to UAE, Saudi Arabia, Kuwait, Qatar, Egypt, Turkey, Oman, Africa, Malaysia, and many countries across USA & Europe. As a stocking distributor of leading global steel pipe suppliers from India, Japan, Italy, China & UK, we maintain ready stock of Pipes, Tubes, Sheets, Plates, Coils, Fittings, Flanges, Round Bars, and Fasteners. We specialize in supplying materials for Boilers, Steam Pipelines, and LNG Projects. Starlight Tubes is an ISO 9001, 14001, OHSAS 18001 certified company and a Government of India Recognized Export House. We are PED 97/23/EC approved Supplier & Exporter, and we only deal in high-quality steel material with proper mill test certificates and documentation.";

  const bottomCtaData = {
    title: "Why Choose Starlight Tubes?",
    description:
      "With decades of industry experience and a commitment to excellence, Starlight Tubes has become the preferred partner for leading organizations worldwide. Our dedication to quality, reliability, and customer satisfaction sets us apart in the industrial materials sector.",
    features: [
      "ISO 9001, 14001, OHSAS 18001 Certified",
      "Government Recognized Export House",
      "PED 97/23/EC Approved Supplier",
      "Global Shipping to 50+ Countries",
      "Complete Mill Test Certificates",
      "Extensive Ready Stock Inventory",
      "Expert Technical Consultation",
      "Competitive Factory Pricing",
      "On-Time Delivery Guaranteed",
    ],
  };

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <NavbarDemo>
          {/* Image Slider Section */}
          <PageHero
            title="About Starlight Tubes"
            subtitle="India's No. 1 Exporter & Stockist of Industrial Steel Products Since 2020"
            image="/main-page/aboutus.png"
          />

          {/* About Section */}
          <div className="w-full max-w-7xl mx-auto px-6 mt-20 mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 mb-4 rounded-full bg-gray-900/10 border border-gray-300 text-gray-700 text-sm font-semibold">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                About Our Company
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Leading the industry in quality steel tubes and piping solutions
                since 2020
              </p>
            </div>

            <div className="flex flex-col items-center gap-8">
              <CardSpotlightDemo
                heading={heading}
                text={text1}
                image="./img.png"
              />
            </div>
          </div>

          {/* Bottom CTA Section */}
          <BottomCTA
            title={bottomCtaData.title}
            description={bottomCtaData.description}
            features={bottomCtaData.features}
          />

          {/* World Map Section */}
          <div>
            <WorldMapDemo />
          </div>
          {/* Footer Section */}
          <div>
            <Footer />
          </div>
        </NavbarDemo>
      </div>
    </>
  );
};

export default About;
