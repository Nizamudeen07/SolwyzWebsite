"use client";

import { useEffect, useState } from "react";

import Pageloader from "../../Loaders/Pageloader";
import Home from "../../page";
import HomeContact from "../HomeComponents/HomeContact/HomeContact";

export default function ContactPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Contact | Solwyz Technologies";
  }, []);

  useEffect(() => {
    // Simulate delay
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Pageloader />;

  return (
    <div className="">
      <div className="h-[95px]"></div>
      <HomeContact/>
    </div>
  );
}
