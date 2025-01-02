import About from "./About";
import AppPromotion from "./AppPromotion";
import ContactUs from "./ContactUs";
import HeroSection from "./HeroSection";
import Slider from "./Slider";

function Home() {
  return (
    <div className=" bg-[#F7FBF9]">
      <HeroSection />
      <About />;
      <Slider />
      <ContactUs />
      <AppPromotion />
    </div>
  );
}

export default Home;
