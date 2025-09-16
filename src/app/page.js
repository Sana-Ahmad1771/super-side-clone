import Image from "next/image";
import Hero from "./components/pages/home/hero";
import BoxScroller from "./components/pages/home/trust";
import Header from "./components/common/Header";
import Support from "./components/pages/home/support";
import CardSection from "./components/pages/home/supertalented";
import Successinnumbers from "./components/pages/home/successinnumbers";
import SuccessStory from "./components/pages/home/successstory";
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
    </>
  );
}
