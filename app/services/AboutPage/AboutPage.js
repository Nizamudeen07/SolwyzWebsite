"use client";

import { useEffect, useState } from "react";
import AboutBanner from "../../components/AboutComponents/AboutBanner/AboutBanner";
import AboutAnimate from "../../components/AboutComponents/AboutAnimate/AboutAnimate";
import AboutOur from "../../components/AboutComponents/AboutOur/AboutOur";
// import OurOffice from "@/components/HomeComponents/OurOffice/OurOffice";

import Pageloader from "../../Loaders/Pageloader";
import Empowering from "../../components/HomeComponents/EmpoweringHome/Empowering";
import OurOffice from "../../components/HomeComponents/OurOffice/OurOffice";

export default function AboutPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "About Us | Solwyz Technologies"; // still works in client
  }, []);

  useEffect(() => {
    // Simulate delay
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Pageloader />;

  return (
    <div className="md:max-w-[1440px] mx-auto">
      <AboutBanner />
      <Empowering/>
      {/* <AboutAnimate /> */}
      <AboutOur />
      <OurOffice/>
    </div>
  );
}
