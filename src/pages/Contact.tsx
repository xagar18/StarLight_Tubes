import { ContactCtaParent } from "../components/main components/ContactCta";
import ContactForm from "../components/main components/ContactForm";
import Footer from "../components/main components/Fotter";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";

const Contact = () => {
  return (
    <div>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <NavbarDemo>
          {/* Image Slider Section */}
          <PageHero
            title="Contact Us"
            subtitle="Get in touch with our team for quotes, inquiries and support"
            image="/main-page/contact-us1.webp"
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
