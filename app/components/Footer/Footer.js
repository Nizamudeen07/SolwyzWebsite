"use client"; // required for client-side code

import { useEffect, useState } from "react";
import Link from "next/link";
import GoogleTranslate from "../../../GoogleTranslate";

export default function Footer() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgImage = isDesktop
    ? "/assets/footer/footer.png"
    : "/assets/footer/footerMobile.png";

  return (
    <div className="w-full px-4 md:px-[120px] h-[842px] md:h-[574px] md:max-w-[1440px] mx-auto md:mt-104px mt-20">
      <div
        className="pt-6 md:pt-12 w-full h-[239px] md:h-[461px] bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="md:flex md:justify-between">
          {/* Logo + Social */}
          <div>
            <Link href="/">
              <img
                src="/assets/footer/Solwyz Logo 1 (1) 2.png"
                alt="Solwyz Logo"
                className="w-[207px] h-[47px] items-start"
              />
            </Link>
            <p className="mt-4 font-normal leading-[28px] text-sm font-manrope text-[#FFFFFF]">
              Widen the horizon of Your Business with Solwyz!
            </p>

            <div className="flex gap-2 mt-8">
              <a
                href="https://www.linkedin.com/company/solwyz-technologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/footer/linkedin.svg"
                  alt="LinkedIn"
                  className="hover:bg-[#3A3A3A] duration-300 w-[30px] h-[30px] rounded-full"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61559030405055"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/footer/fbIcon.svg"
                  alt="Facebook"
                  className="hover:bg-[#3A3A3A] duration-300 w-[30px] h-[30px] rounded-full"
                />
              </a>
              <a
                href="https://www.instagram.com/solwyz_technologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/footer/Igicon.svg"
                  alt="Instagram"
                  className="hover:bg-[#3A3A3A] duration-300 w-[30px] h-[30px] rounded-full"
                />
              </a>
            </div>
          </div>

          {/* Company (Desktop) */}
          <div className="md:block hidden">
            <h3 className="text-white font-medium text-base leading-6 underline underline-offset-8">
              Company
            </h3>
            <ul className="space-y-4 mt-5 text-sm leading-5 text-[#ffffff] font-medium">
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/about">About</Link>
              </li>
              
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/career">Career</Link>
              </li>
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:mt-0 mt-[64px]">
            <h3 className="text-white font-medium text-base leading-6 underline underline-offset-8">
              Services
            </h3>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-10 mt-5 text-sm leading-5 text-[#ffffff] font-medium">
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/services/digital-marketing/seo">SEO Services</Link>
              </li>
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/services/it-services/web-development">Web Development</Link>
              </li>
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/services/digital-marketing/social-media-marketing">SMM</Link>
              </li>
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/services/it-services/app-development">App Development</Link>
              </li>
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/services/digital-marketing/search-engine-marketing">SEM</Link>
              </li>
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/services/it-services/erp">ERP Solutions</Link>
              </li>
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/services/digital-marketing/influencer-marketing">
                  Influencer Marketing
                </Link>
              </li>
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/services/it-services/crm">CRM Solutions</Link>
              </li>
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/services/digital-marketing/video-marketing">Video Marketing</Link>
              </li>
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/services/digital-marketing/branding">Branding</Link>
              </li>
            </ul>
          </div>

          {/* Company (Mobile) */}
          <div className="md:hidden mt-[64px]">
            <h3 className="text-white font-medium text-base leading-6 underline underline-offset-8">
              Company
            </h3>
            <ul className="space-y-4 mt-5 text-sm leading-5 text-[#ffffff] font-medium">
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/career">Career</Link>
              </li>
              <li className="hover:text-[#04A391] duration-300">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="text-white gap-2 flex mt-6">
          <div>
            <img
              className="md:w-[106px] h-[88px] w-[88px] md:h-[106px]"
              src="/assets/footer/qr-code 1.png"
              alt="QR Code"
            />
          </div>
          <div className="md:mt-[56px] md:ml-[7px]">
            <h3 className="text-[20px] font-semibold">
              Connect with us on WhatsApp
            </h3>
            <p className="text-[14px] font-semibold">
              Scan the QR code to get started.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="md:hidden mt-6 flex justify-center">
          <GoogleTranslate />
        </div>
        <div className="md:justify-between justify-center text-center md:mt-[121px] md:flex">
          <p className="text-white font-normal text-sm leading-6 mt-4 md:hidden tracking-wide">
            Privacy policy
          </p>
          <p className="text-white font-normal md:mt-0 mt-4 text-sm leading-6 tracking-wide">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="hidden md:block">
            <GoogleTranslate />
          </div>
          <p className="text-white font-normal text-sm leading-6 md:block hidden tracking-wide">
            Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
}
