import { CardHoverEffectDemo } from "../components/main components/CoatingImgCard";
import Footer from "../components/main components/Fotter";
import StatsGrid from "../components/main components/HomeStats";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";

const Certificates = () => {
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
