"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css";

export default function Header() {
  const [isHovering, setIsHovering] = useState(false);
  const [isContactHovering, setIsContactHovering] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [locationTimeoutId, setLocationTimeoutId] = useState(null);
 const [isMobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(true);
  const [digitalOpen, setDigitalOpen] = useState(false);
  const [itOpen, setItOpen] = useState(false);
  const [isLocationHovering, setIsLocationHovering] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Trivandrum");
  const [locationOpen, setLocationOpen] = useState(false);
  const [openLocation, setOpenLocation] = useState(null);

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();
  const digitalMarketingServices = {
    Trivandrum: [],
    UAE: [],
  };

  const itServices = {
    Trivandrum: [],
    UAE: [],
  };

  // Scroll hide/show
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsHovering(true);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsHovering(false);
      setDropdownOpen(false);
    }, 200);
    setTimeoutId(id);
  };

  const handleLocationEnter = () => {
    if (locationTimeoutId) clearTimeout(locationTimeoutId);
    setIsLocationHovering(true);
    setIsLocationDropdownOpen(true);
  };

  const handleLocationLeave = () => {
    const id = setTimeout(() => {
      setIsLocationHovering(false);
      setIsLocationDropdownOpen(false);
    }, 200);
    setLocationTimeoutId(id);
  };

  return (
    <div className="relative w-full">
      {/* Header */}
      <div
        className={`pl-[20px] pr-[20px] md:pl-[56px] md:pr-[120px] py-6 bg-black transition-transform duration-1000 fixed w-full top-0 z-50 ${showHeader ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="text-white flex justify-between items-center">
          <Link href="/">
            <img className="hidden md:block" src="/assets/Logo.svg" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 relative">
            <Link href="/">
              <h2
                className={`duration-300 ${pathname === "/" ? "text-[#04A391]" : "hover:text-[#04A391]"
                  }`}
              >
                Home
              </h2>
            </Link>
            <Link href="/about">
              <h2
                className={`duration-300 ${pathname === "/about" ? "text-[#04A391]" : "hover:text-[#04A391]"
                  }`}
              >
                About
              </h2>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative cursor-pointer hover:text-[#04A391] w-full"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h2
                className={`duration-300 flex items-center ${pathname === "/services" ? "text-[#04A391]" : "hover:text-[#04A391]"
                  }`}
              >
                Services
                <img
                  className="ml-1"
                  src={
                    isHovering || pathname === "/service"
                      ? "/assets/header/arw_clr.svg"
                      : "/assets/header/arw_sevc.svg"
                  }
                  alt="Arrow"
                />
              </h2>

              {/* Dropdown */}
              <div
                className={`fixed top-[70px] left-0 w-full z-50 px-[120px] py-[32px] bg-[#FFFFFF] mt-6 shadow-lg hidden md:flex gap-6 justify-between items-center transition-all duration-500 ease-in-out ${showHeader && isDropdownOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
              >
                <div className=" max-w-[1550px] mx-auto flex justify-between w-full gap-6">
                  {/* Digital Marketing */}
                  <Link
                    href="/service/digital-marketing-service"
                    className="group text-[#2F2F2F] hover:shadow-[0_0_20px_#0280719E] cursor-pointer duration-500 border border-[#D4D4D4] w-full rounded-lg py-8 pl-6 pr-[64px]"
                  >
                    <div className="flex md:text-[20px] md:font-bold">
                      <img
                        className="mr-4"
                        src="/assets/header/DigitalMarketing.svg"
                        alt=""
                      />
                      Digital Marketing Services
                    </div>
                    <div className="flex justify-between ml-[64px] text-[#9B9B9B]">
                      <div className="space-y-3">
                        <Link
                          href="/services/digital-marketing/seo"
                          className="hover:text-[#04A391] duration-300 block"
                        >
                          Search Engine Optimization
                        </Link>
                        <Link
                          href="/services/digital-marketing/social-media-marketing"
                          className="hover:text-[#04A391] duration-300 block"
                        >
                          Social Media Marketing
                        </Link>
                        <Link
                          href="/services/digital-marketing/search-engine-marketing"
                          className="hover:text-[#04A391] duration-300 block"
                        >
                          Search Engine Marketing
                        </Link>
                      </div>
                      <div className="space-y-3">
                        <Link
                          href="/services/digital-marketing/influencer-marketing"
                          className="hover:text-[#04A391] duration-300 block"
                        >
                          Influencer Marketing
                        </Link>
                        <Link
                          href="/services/digital-marketing/video-marketing"
                          className="hover:text-[#04A391] duration-300 block"
                        >
                          Video Marketing
                        </Link>
                        <Link
                          href="/services/digital-marketing/branding"
                          className="hover:text-[#04A391] duration-300 block"
                        >
                          Branding
                        </Link>
                      </div>
                    </div>
                  </Link>

                  {/* IT Services */}
                  <Link
                    href="/service/it-service"
                    className="group text-[#2f2f2f] hover:shadow-[0_0_20px_#0280719E] cursor-pointer duration-500 border border-[#D4D4D4] w-full rounded-lg py-8 pl-6 pr-[128px]"
                  >
                    <div className="flex md:text-[20px] md:font-bold">
                      <img className="mr-4" src="/assets/header/ITSolution.svg" alt="" />
                      IT Services
                    </div>
                    <div className="flex justify-between ml-[64px] text-[#9B9B9B]">
                      <div className="space-y-3">
                        <Link
                          href="/services/it-services/web-development"
                          className="hover:text-[#04A391] duration-300 block"
                        >
                          Web Development
                        </Link>
                        <Link
                          href="/services/it-services/app-development"
                          className="hover:text-[#04A391] duration-300 block"
                        >
                          Application Development
                        </Link>
                        <Link
                          href="/services/it-services/erp"
                          className="hover:text-[#04A391] duration-300 block"
                        >
                          ERP Solution
                        </Link>
                      </div>
                      <div className="space-y-3">
                        <Link
                          href="/services/it-services/crm"
                          className="hover:text-[#04A391] duration-300 block"
                        >
                          CRM Solution
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/blogs">
              <h2
                className={`duration-300 ${pathname === "/blogs" ? "text-[#04A391]" : "hover:text-[#04A391]"
                  }`}
              >
                Blog
              </h2>
            </Link>
            <Link href="/career">
              <h2
                className={`duration-300 ${pathname === "/career" ? "text-[#04A391]" : "hover:text-[#04A391]"
                  }`}
              >
                Career
              </h2>
            </Link>

            {/* Locations */}
            <div
              className="relative cursor-pointer hover:text-[#04A391]"
              onMouseEnter={handleLocationEnter}
              onMouseLeave={handleLocationLeave}
            >
              <h2 className={`duration-300 ${isLocationHovering ? "text-[#04A391]" : ""}`}>
                Locations
              </h2>

              <div
                className={`fixed top-[70px] left-0 w-full z-50 px-[120px] py-[32px] bg-[#FFFFFF] mt-6 shadow-lg hidden md:flex gap-6 justify-between transition-all duration-500 ease-in-out ${showHeader && isLocationDropdownOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
              >
                {/* Location Buttons */}
                <div className="flex flex-col text-[#2F2F2F] font-semibold border-gray-300 pr-4">
                  <button
                    className={`hover:text-[#04A391] duration-300 text-left ${selectedLocation === "Trivandrum" ? "text-[#04A391]" : ""
                      }`}
                    onClick={() => setSelectedLocation("Trivandrum")}
                  >
                    Trivandrum
                  </button>
                  <div className="border w-[79px] mt-3 border-black"></div>
                  <button
                    className={`hover:text-[#04A391] duration-300 text-left mt-3 ${selectedLocation === "UAE" ? "text-[#04A391]" : ""
                      }`}
                    onClick={() => setSelectedLocation("UAE")}
                  >
                    UAE
                  </button>
                </div>

                {/* Services per location */}
                <div className="grid grid-cols-2 gap-10 text-[#2F2F2F] max-w-[1550px] mx-auto">
                  {/* Digital Marketing */}
                  <Link
                    href={
                      selectedLocation === "Trivandrum"
                        ? "/services/digital-marketing/trivandrum"
                        : selectedLocation === "UAE"
                          ? "/services/digital-marketing/uae"
                          : "#"
                    }
                    className="group text-[#2F2F2F] hover:shadow-[0_0_20px_#0280719E] cursor-pointer duration-500 border border-[#D4D4D4] w-full rounded-lg py-8 pl-6 pr-[64px]"
                  >
                    <div className="flex md:text-[20px] md:font-bold mb-4">
                      <img className="mr-4" src="/assets/header/DigitalMarketing.svg" alt="" />
                      <div className="group-hover:text-[#04A391] duration-300">
                        {`Digital Marketing Services ${selectedLocation}`}
                      </div>
                    </div>
                    <div className="space-y-3 text-[#9B9B9B]">
                      {digitalMarketingServices[selectedLocation]?.map((service, index) => (
                        <div key={index} className="hover:text-[#04A391] duration-300">
                          {service}
                        </div>
                      ))}
                    </div>
                  </Link>

                  {/* IT Services */}
                  <Link
                    href={
                      selectedLocation === "Trivandrum"
                        ? "/services/it-services/trivandrum"
                        : selectedLocation === "UAE"
                          ? "/services/it-services/uae"
                          : "#"
                    }
                    className="group hover:shadow-[0_0_20px_#0280719E] border border-[#D4D4D4] cursor-pointer duration-500 w-full rounded-lg py-8 px-6"
                  >
                    <div className="flex md:text-[20px] md:font-bold mb-4">
                      <img className="mr-4" src="/assets/header/ITSolution.svg" alt="" />
                      <div className="group-hover:text-[#04A391] duration-300">
                        {`IT Services ${selectedLocation}`}
                      </div>
                    </div>
                    <div className="space-y-3 text-[#9B9B9B]">
                      {itServices[selectedLocation]?.map((service, index) => (
                        <div key={index} className="hover:text-[#04A391] duration-300">
                          {service}
                        </div>
                      ))}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-10">
            {/* Brochure */}
            <div
              className="group flex items-center text-[16px] cursor-pointer relative duration-300"
              onClick={() => {
                if (typeof window !== "undefined") {
                  const link = document.createElement("a");
                  link.href = "/SolwyzTechnologies.pdf";
                  link.download = "Brochure.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }
              }}
            >
              <span className="group-hover:text-[#04A391] duration-300 custom-underline">
                Brochure
              </span>
              <button className="Btn">
                <svg
                  className="svgIcon"
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
                <span className="icon2"></span>
              </button>
            </div>

            {/* Contact */}
            <Link href="/contact">
              <div
                onMouseEnter={() => setIsContactHovering(true)}
                onMouseLeave={() => setIsContactHovering(false)}
                className={`cursor-pointer duration-300 flex items-center relative group custom-contact-underline ${pathname === "/contact" ? "text-[#04A391]" : "hover:text-[#04A391]"
                  }`}
              >
                Contact
                <img
                  className={`ml-2 duration-300 ${isContactHovering || pathname === "/contact" ? "translate-x-[3px]" : ""
                    }`}
                  src={
                    isContactHovering || pathname === "/contact"
                      ? "/assets/header/cnctIcnHvr.svg"
                      : "/assets/header/cntcIcn.svg"
                  }
                  alt="Contact Icon"
                />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center justify-between w-full">
            <img
              src="/assets/header/mobMenu.svg"
              alt="Menu"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="cursor-pointer w-8 h-8"
            />
            <img className="md:hidden block w-[174px] h-10" src="/assets/Logo.svg" alt="Logo test" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FFFFFF] w-full h-full px-8 py-10 flex flex-col  text-lg overflow-y-auto">
          {/* Close button */}
          <div className="flex justify-between items-center">
          <Link href="/">
            <img className="" src="/assets/logoBlack.svg" alt="Logo" />
          </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-black text-2xl font-bold"
            >
              <img src="/assets/header/cls.svg" alt="Close" />
            </button>
          </div>
         

          {/* Main Links */}
          <Link href="/" className="hover:text-[#04A391] text-[#04A391] mt-10 font-semibold" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-[#04A391] text-[#676767] mt-5 font-semibold" onClick={() => setMobileMenuOpen(false)}>About</Link>


          {/* Services Dropdown */}
          {/* Mobile Services Dropdown */}
          <div className="relative w-full md:hidden">
            <div
              className="flex justify-between mt-4 items-center cursor-pointer py-2 text-[#676767]"
              onClick={() => setMobileServiceOpen(!isMobileServiceOpen)}
            >
              <h2 className={`duration-300 font-semibold flex items-center ${pathname === "/services" ? "text-[#04A391]" : ""}`}>
                Services
              </h2>
              <img
                className={`ml-1 transition-transform duration-300 ${isMobileServiceOpen ? "rotate-180" : ""}`}
                src="/assets/header/arrow_drop_down.svg"
                alt="Arrow"
              />
            </div>

            {isMobileServiceOpen && (
              <div className="ml-4 mt-3 flex flex-col gap-4 text-black">
                {/* Digital Marketing Services */}
                <div className="flex flex-col gap-2">
                  <Link href="/service/digital-marketing-service" className="font-semibold" 
                  onClick={()=> setMobileMenuOpen(false)}
                  >Digital Marketing Services</Link>
                  <Link
                    href="/services/digital-marketing/seo"
                    className="hover:text-[#04A391] duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    SEO Services
                  </Link>
                  <Link
                    href="/services/digital-marketing/social-media-marketing"
                    className="hover:text-[#04A391] duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Social Media Marketing
                  </Link>
                  <Link
                    href="/services/digital-marketing/search-engine-marketing"
                    className="hover:text-[#04A391] duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Search Engine Marketing
                  </Link>
                  <Link
                    href="/services/digital-marketing/influencer-marketing"
                    className="hover:text-[#04A391] duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Influencer Marketing
                  </Link>
                  <Link
                    href="/services/digital-marketing/video-marketing"
                    className="hover:text-[#04A391] duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Video Marketing
                  </Link>
                  <Link
                    href="/services/digital-marketing/branding"
                    className="hover:text-[#04A391] duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Branding
                  </Link>
                </div>

                {/* IT Services */}
                <div className="flex flex-col gap-2 mt-4">
                 <Link href="/service/it-service"> <h2 className="font-semibold" 
                  onClick={()=> setMobileMenuOpen(false)}
                 >IT Services</h2></Link>
                  <Link
                    href="/services/it-services/web-development"
                    className="hover:text-[#04A391] duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/services/it-services/app-development"
                    className="hover:text-[#04A391] duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Application Development
                  </Link>
                  <Link
                    href="/services/it-services/erp"
                    className="hover:text-[#04A391] duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ERP Solution
                  </Link>
                  <Link
                    href="/services/it-services/crm"
                    className="hover:text-[#04A391] duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CRM Solution
                  </Link>
                </div>
              </div>
            )}
          </div>



          <div>
            {/* Location main toggle */}
            <div
              className="flex mt-3 items-center justify-between font-semibold text-[#676767] cursor-pointer"
              onClick={() => setLocationOpen(!locationOpen)}
            >
              <span>Location</span>
              <img
                src="/assets/header/arrow_drop_down.svg"
                alt="arrow"
                className={`transition-transform duration-300 ${locationOpen ? "rotate-180" : ""}`}
              />
            </div>

            {/* Location dropdown */}
            {locationOpen && (
              <div className="ml-4 mt-3 flex flex-col gap-4">
                {/* Trivandrum */}
                <div
                  className="flex items-center cursor-pointer text-black justify-between"
                  onClick={() =>
                    setOpenLocation((prev) => (prev === "Trivandrum" ? null : "Trivandrum"))
                  }
                >
                  <span>Trivandrum</span>
                  <img
                    src="/assets/header/arrow_drop_down.svg"
                    alt="arrow"
                    className={`transition-transform duration-300 ${openLocation === "Trivandrum" ? "rotate-180" : ""
                      }`}
                  />
                </div>

                {/* Trivandrum services */}
                {openLocation === "Trivandrum" && (
                  <div className="ml-4 mt-2 flex flex-col gap-3">
                    <Link
                      href="/services/digital-marketing/trivandrum"
                      className="flex items-center cursor-pointer text-black justify-between"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>Digital Marketing in Trivandrum</span>
                      <img
                        src="/assets/header/arrow_drop_down.svg"
                        alt="arrow"
                        className={`transition-transform duration-300 ${openLocation === "Trivandrum-DM" ? "rotate-180" : ""
                          }`}
                      />
                    </Link>
                    <Link
                      href="/services/it-services/trivandrum"
                      className="flex items-center cursor-pointer text-black justify-between"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>IT Services in Trivandrum</span>
                      <img
                        src="/assets/header/arrow_drop_down.svg"
                        alt="arrow"
                        className={`transition-transform duration-300 ${openLocation === "Trivandrum-IT" ? "rotate-180" : ""
                          }`}
                      />
                    </Link>
                  </div>
                )}

                {/* UAE */}
                <div
                  className="flex items-center cursor-pointer text-black justify-between"
                  onClick={() => setOpenLocation((prev) => (prev === "UAE" ? null : "UAE"))}
                >
                  <span>UAE</span>
                  <img
                    src="/assets/header/arrow_drop_down.svg"
                    alt="arrow"
                    className={`transition-transform duration-300 ${openLocation === "UAE" ? "rotate-180" : ""
                      }`}
                  />
                </div>

                {/* UAE services */}
                {openLocation === "UAE" && (
                  <div className="ml-4 mt-2 flex flex-col gap-3">
                    <Link
                      href="/services/digital-marketing/uae"
                      className="flex items-center cursor-pointer text-black justify-between"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>Digital Marketing in UAE</span>
                      <img
                        src="/assets/header/arrow_drop_down.svg"
                        alt="arrow"
                        className={`transition-transform duration-300 ${openLocation === "UAE-DM" ? "rotate-180" : ""
                          }`}
                      />
                    </Link>
                    <Link
                      href="/services/it-services/uae"
                      className="flex items-center cursor-pointer text-black justify-between"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>IT Services in UAE</span>
                      <img
                        src="/assets/header/arrow_drop_down.svg"
                        alt="arrow"
                        className={`transition-transform duration-300 ${openLocation === "UAE-IT" ? "rotate-180" : ""
                          }`}
                      />
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>


          <Link href="/blogs" className="hover:text-[#04A391] text-[#676767] font-semibold mt-5" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link href="/career" className="hover:text-[#04A391] text-[#676767] font-semibold mt-5" onClick={() => setMobileMenuOpen(false)}>Career</Link>
          <Link href="/contact" className="hover:text-[#04A391] text-[#676767] font-semibold mt-5" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}
