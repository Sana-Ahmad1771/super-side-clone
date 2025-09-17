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
    </>
  );
}
