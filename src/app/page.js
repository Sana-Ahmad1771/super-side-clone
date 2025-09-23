import Image from "next/image";
import Hero from "./components/pages/home/hero";
import BoxScroller from "./components/pages/home/trust";
import Header from "./components/common/Header";
import Support from "./components/pages/home/support";
import CardSection from "./components/pages/home/supertalented";
import Successinnumbers from "./components/pages/home/successinnumbers";
import SuccessStory from "./components/pages/home/successstory";
import HighTec from "./components/pages/home/hightec";
import CreativeWork from "./components/pages/home/creativework";
import CamparisonSection from "./components/pages/home/comparison";
import SeeHow from "./components/pages/home/seehow.jsx"
// import Slider from "./components/pages/home/slider";
import TechEnabled from "./components/pages/home/techenabled";
import OurDifference from "./components/pages/home/ourdifference-cards";
import WorldScaleClass from "./components/pages/home/world-scale-class.jsx";
import Footer from "./components/common/footer";
export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <BoxScroller />
    <Support />
    <CardSection />
    <Successinnumbers />
    <SuccessStory />
    <HighTec/>
    <CreativeWork/>
    <CamparisonSection/>
    <SeeHow />
    {/* <Slider /> */}
    <TechEnabled/>
    <OurDifference />
    <WorldScaleClass/>
    <Footer/>
    </>
  );
}
