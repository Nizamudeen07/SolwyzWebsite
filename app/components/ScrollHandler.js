// ScrollToHandler.jsx
"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollToHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  return null;
}
