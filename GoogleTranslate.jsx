import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    if (typeof window === "undefined") return; // ✅ Safeguard

    // Prevent duplicate script injection
    if (document.getElementById("gtranslate-script")) return;

    // ✅ Force inline dropdown on all screens
    window.gtranslateSettings = {
      default_language: "en",
      detect_browser_language: true,
      languages: ["en", "ar", "hi", "ml"],
      wrapper_selector: ".gtranslate_wrapper",
      switcher_horizontal_position: "inline",
      switcher_vertical_position: "inline",
    };

    // Inject script
    const script = document.createElement("script");
    script.id = "gtranslate-script";
    script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    script.defer = true;
    document.body.appendChild(script);

    // MutationObserver to style <select>
    const observer = new MutationObserver(() => {
      const select = document.querySelector(".gtranslate_wrapper select");
      if (select && !select.dataset.styled) {
        select.dataset.styled = "true";
        select.style.backgroundColor = "#ffffff";
        select.style.color = "#000000";
        select.style.fontSize = "0.75rem";
        select.style.padding = "0.25rem 0.5rem";
        select.style.borderRadius = "0.375rem";
        select.style.border = "1px solid #4B5563";
        select.style.outline = "none";
        select.style.appearance = "none";
        select.style.minWidth = "100px"; // ✅ prevent collapsing on mobile
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center gap-2 px-4 font-normal relative">
      <span className="font-normal text-white text-sm">Display Language</span>
      <div className="text-black bg-white focus:outline-none rounded-sm text-xs font-normal gtranslate_wrapper" />
    </div>
  );
};

export default GoogleTranslate;
