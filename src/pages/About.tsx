import { WorldMapDemo } from "../components/main components/AboutMap";
import { CardSpotlightDemo } from "../components/main components/AboutSpotLightCard";
import Footer from "../components/main components/Fotter";
import { ImagesSliderDemo } from "../components/main components/ImageSlider";
import { NavbarDemo } from "../components/main components/Navbar";

const About = () => {
  const heading = "Starlight Tubes";
  const text1 =
    "Starlight Tubes is recently introduced our new division for boiler manufacturers & worldwide companies where boilers are installed. Our new website www.starlighttubes.com is focused for complete range of Boiler steel materials. This site will give the full & very useful information on Boiler tubes, equivalent materials & respective grades. We are offering Alloy steel & carbon steel tubes for Boilers & steam pipelines. This website is specific for alloy steel products & full ranges of piping accessories used in boilers & heaters. We are supplying Boiler materials to south & west Africa, Europe, America, Malaysia, Indonesia, Australia & Middle east. Starlight Tubes is industrial steel pipes suppliers to Oil & Gas piping, petrochemical refineries & Chemical processing industry since 1992. We are Supplying piping material in stainless steel, Carbon steel & Alloy Steel to UAE, Saudi Arabia, Kuwait, Qatar, Egypt, Turkey, Oman, Africa, Malaysia & many countries in USA & Europe, we stock oil & gas piping material & supply to LNG Projects. We are no. 1 exporter of structural pipe in India, Starlight Tubes is stocking distributor of leading manufacturers of Steel Pipes & Tubes in India, Japan, Italy, China & UK. We stock & supply Pipes, Tubes, Tubing, Sheets, Plates, Coils, Fittings, Flanges, Round Bars, Fasteners & full range of piping accessories in Stainless Steel, Alloy Steel, Carbon steel & Nickel based alloys. Starlight Tubes is the only Company in India won the All India Award for export excellence for seven consecutive years & Stood No. 1 in Year 2018-19 also, Starlight Tubes is an ISO 9001, 14001, OHSAS 18001 certified Company. We are PED 97/23/EC approved Supplier & Exporter of Industrial raw materials & provide complete piping solutions to Oil & Gas industry, STI is also Government of India Recognized Export House, we are Stockist & Supplier of Stainless Steel, Alloy Steel, Carbon Steel, Mild Steel, Nickel Alloys in form of Seamless Tubes, Welded & ERW Pipes & Tubes. Starlight Tubes is the only company in India stocks more than 500 Ton Black Steel Pipe for urgent delivery. we only deal in High Quality Steel Material, we dont stock piping material without mill test certificate & documents of raw material.";

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <NavbarDemo>
          {/* Image Slider Section */}
          <div className="w-full h-fit flex justify-center ">
            <ImagesSliderDemo />
          </div>

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
                since 1992
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
