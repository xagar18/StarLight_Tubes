import Footer from "../components/main components/Fotter";
import StatsGrid from "../components/main components/HomeStats";
import { ImagesSliderDemo } from "../components/main components/ImageSlider";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";

const Material = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <div className="w-full h-fit flex justify-center ">
          <ImagesSliderDemo />
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

export default Material;
