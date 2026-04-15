"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

export default function ThankYouPage() {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const icons = [
        {
            name: "linkedin",
            defaultSrc: "/assets/homeContacts/linkedin.svg",
            hoverSrc: "/assets/homeContacts/linkedinhover.svg",
            url: "https://www.linkedin.com/company/solwyz-technologies",
        },
        {
            name: "insta",
            defaultSrc: "/assets/homeContacts/insta.svg",
            hoverSrc: "/assets/homeContacts/instahover.svg",
            url: "https://www.instagram.com/solwyz_technologies/",
        },
        {
            name: "fb",
            defaultSrc: "/assets/homeContacts/fb.svg",
            hoverSrc: "/assets/homeContacts/fbhover.svg",
            url: "https://www.facebook.com/profile.php?id=61559030405055",
        },
    ];

    return (
        <div className="bg-white">
            <div className="h-[100px]"></div>
            <div className="md:px-[418px] px-6 md:py-[72px] py-6">
                <div className={`border border-[#CACACA] rounded-[8px] md:pl-[57px] md:pr-[45px] md:py-[47px] px-[22px] pt-[40px] pb-[21px] flex flex-col items-center justify-center ${styles.customPadding}`}>
                    
                    {/* Heading */}
                    <h1 className="md:text-[32px] text-[24px] font-medium text-black text-center">
                        Thank you for reaching <br className="md:hidden block" /> out to us!
                    </h1>

                    {/* Animation */}
                    <video
                        autoPlay
                        loop
                        muted
                        className="top-0 left-0 w-[99px] h-[99px] object-cover"
                        src="/assets/homeContacts/mailanimation.mp4"
                    ></video>

                    {/* Message */}
                    <p className="md:text-[16px] text-[14px] font-medium text-[#818181] text-center md:mt-[24px] mt-8">
                        Your details have been successfully submitted, and our team will <br className="hidden md:block" />
                        review them shortly. <br className="md:hidden block" />
                        <span className="block h-[9px] md:hidden" />
                        We&apos;ll get back to you with the information <br className="hidden md:block" />
                        you need at the earliest. We truly appreciate your time and interest.
                    </p>

                    {/* Button */}
                  <Link href="/">
                        <div className="mt-10">
                            <button className="md:px-[160px] py-4 px-[122px] bg-[#04A391] text-white rounded-lg cursor-pointer">
                                Go Home
                            </button>
                        </div>
                  </Link>

                    {/* Follow Us */}
                    <h4 className="text-base font-medium text-[#484848] md:mt-[32px] mt-6">
                        Follow Us
                    </h4>

                    {/* Social Icons */}
                    <div className="flex gap-2 mt-4 mb-2">
                        {icons.map((icon) => (
                            <a
                                key={icon.name}
                                href={icon.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-[32px] h-[32px] cursor-pointer"
                                onMouseEnter={() => setHoveredIcon(icon.name)}
                                onMouseLeave={() => setHoveredIcon(null)}
                            >
                                {/* Default */}
                                <img
                                    src={icon.defaultSrc}
                                    alt={icon.name}
                                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                                        hoveredIcon === icon.name ? "opacity-0" : "opacity-100"
                                    }`}
                                />
                                {/* Hover */}
                                <img
                                    src={icon.hoverSrc}
                                    alt={icon.name}
                                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                                        hoveredIcon === icon.name ? "opacity-100" : "opacity-0"
                                    }`}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
