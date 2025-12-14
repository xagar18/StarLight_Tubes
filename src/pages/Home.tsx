import Cta from "../components/CtaSection1";
import { ImagesSliderDemo } from "../components/ImageSlider";
import { MeteorsDemo } from "../components/LinkDisplayCard";
import { NavbarDemo } from "../components/Navbar";

const stainlessSteelItems = [
  "Stainless Steel",
  "Stainless Steel Tube",
  "Stainless Steel Pipe",
  "Stainless Steel Sheet",
  "Stainless Steel Round Bar",
  "Stainless Steel Fasteners",
  "Stainless Steel Wire",
  "304 Stainless Steel Pipe",
  "304 Stainless Steel Plate",
  "316 Stainless Steel Tube",
  "316 Stainless Steel Plate",
  "316L Stainless Steel Pipe",
];

const nickelAlloyItems = [
  "Nickel Pipe",
  "Nickel Sheet",
  "Inconel Pipe",
  "Inconel Plate",
  "Inconel Round Bar",
  "Inconel Bolts",
  "Inconel 600 Plate",
  "Inconel 600 Pipe",
  "Inconel 625 Tubing",
  "Inconel 625 Pipe",
  "Inconel 625 Plate",
  "Welded Steel Pipe",
];

const carbonSteelItems = [
  "Carbon Steel Pipe",
  "ASTM A106",
  "ASTM A53",
  "ASTM A333",
  "API 5L Grade B",
  "API 5L X65",
  "API 5L X52",
  "API 5L X42",
  "A671 Pipe",
  "A672 Pipe",
];
const Home = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <div className="w-full h-fit flex justify-center ">
          <ImagesSliderDemo />
        </div>
        <div className="max-full h-fit flex md:flex-row flex-col items-center md:justify-center mt-20 mb-20 gap-20">
          <MeteorsDemo title="Stainless Steel" items={stainlessSteelItems} />
          <MeteorsDemo title="Nickel Alloy" items={nickelAlloyItems} />
          <MeteorsDemo title="Carbon Steel" items={carbonSteelItems} />
        </div>
        <div>
          <Cta />
        </div>
      </NavbarDemo>
    </div>
  );
};

export default Home;
