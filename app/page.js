"use client";
import { useEffect, useState } from "react";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import WhoweAre from "./components/WhoweAre/WhoweAre";
import OurServices from "./components/OurServices/OurServices";
import LatestBuzz from "./components/HomeComponents/LatestBuzz/LatestBuzz";
import OurAssosiate from "./components/OurAssociate/OurAssociate";
import Testimonials from "./components/HomeComponents/Testimonials/Testimonials";
import OurOffice from "./components/HomeComponents/OurOffice/OurOffice";
import HomeContact from "./components/HomeComponents/HomeContact/HomeContact";
import Empowering from "./components/HomeComponents/EmpoweringHome/Empowering";
import BookDemoPopup from "./BookDemoPopup";
import PageSpeedChecker from "./components/PageSpeedChecker/PageSpeedChecker";
import Loader from "./Loaders/Loader";
import ScrollToHandler from "./components/ScrollHandler";
import Reveal from "./components/Reveal";
import SectionParallax from "./components/SectionParallax";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showCurtain, setShowCurtain] = useState(false);

  // Loader & curtain
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowCurtain(true);
      setTimeout(() => setShowCurtain(false), 1500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="motion-surface relative">
      {showCurtain && <div className="curtain"></div>}
      <ScrollToHandler />

      <HomeBanner />
      <Reveal>
        <WhoweAre />
      </Reveal>
      <Reveal delay={0.05}>
        <OurServices />
      </Reveal>
      <Reveal delay={0.08}>
        <div id="pageSpeedChecker">
          <PageSpeedChecker />
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <OurAssosiate />
      </Reveal>
      <SectionParallax>
        <Reveal delay={0.12}>
          <Testimonials />
        </Reveal>
      </SectionParallax>
      <Reveal delay={0.14}>
        <LatestBuzz />
      </Reveal>
      <Reveal delay={0.16}>
        <HomeContact />
      </Reveal>
      <SectionParallax>
        <Reveal delay={0.18}>
          <OurOffice />
        </Reveal>
      </SectionParallax>
      <Reveal delay={0.2}>
        <Empowering />
      </Reveal>
      <BookDemoPopup />
    </div>
  );
}
