"use client"; // ✅ Required for useState, useEffect, etc.

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link"; // ✅ Next.js navigation
import Pageloader from "../../Loaders/Pageloader";
import KeyHighlight from "../../components/KeyHighlight/keyhighlight";
import { Plus, Minus } from "lucide-react";
import Api from "../../../Service/Api";

export default function ServicePage() {
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    // Construct query params
    const queryParams = new URLSearchParams({
      name: data.name,
      companyName: data.company || "",
      email: data.email,
      websiteUrl: data.website || "",
      service: data.service,
      phoneNumber: data.phone,
      message: data.message,
    }).toString();

    try {
      // Call API with query params
      const response = await Api.post(`api/service/create?${queryParams}`);
      console.log("API Response:", response.data);

      // Reset form
      reset();

      // Show submitted button state
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("API Error:", error);
      
    }
  

    // ✅ Reset form after submit
    reset();

    // ✅ Show "Form Submitted" on button
    setIsSubmitted(true);

    // Optional: revert button text after 3s
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  useEffect(() => {
    document.title = "Services | Solwyz Technologies";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Pageloader />;

  const faqs = [
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We provide a complete range of services including SEO, Social Media Marketing, PPC/Google Ads, Influencer Marketing, Video Marketing, and Branding. Our solutions are designed to help businesses in the UAE, Trivandrum, and globally achieve measurable growth.",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "The timeline depends on your goals and chosen services. SEO may take 3–6 months to show significant impact, while PPC and social media ads can generate leads almost instantly.",
  },
  {
    question: "Do you work with small businesses and startups?",
    answer:
      "Yes. We create customized strategies for small, medium, and large enterprises. Whether you’re a startup looking to build visibility or an established company aiming for higher ROI, we can help.",
  },
  {
    question: "What makes Solwyz Technologies different from other digital marketing agencies in the UAE?",
    answer:
      "We focus on ROI-driven strategies, industry-specific campaigns, and dedicated client support. With experience in both UAE and Trivandrum markets, we understand local and global dynamics—giving your business a competitive edge.",
  },
  {
    question: "How much do digital marketing services cost?",
    answer:
      "Our pricing depends on the scope of services and your business needs. We offer flexible packages that ensure you get maximum value for your investment. You can request a free audit to receive a custom quote.",
  },
  {
    question: "Can I track the results of my campaigns?",
    answer:
      "Absolutely. We provide detailed reports and insights so you can monitor campaign performance—traffic growth, lead generation, and ROI are all tracked transparently.",
  },
];


  const processSteps = [
    {
      title: "Understand Your Business",
      desc: "We start by learning about your goals, target audience, and competitors. This helps us create a plan that fits your business perfectly.",
      alignment: "start",
      border: "border-t border-r border-b",
      borderPosition: { top: 41, left: 171 },
      borderSize: { h: 125, w: 332 },
    },
    {
      title: "Research & Plan",
      desc: "Our team does detailed keyword research, audience study, and competitor analysis to design the best strategy for you.",
      alignment: "end",
      border: "border-l border-b",
      borderPosition: { top: 45, left: -180 },
      borderSize: { h: 120, w: 332 },
    },
    {
      title: "Execute the Strategy",
      desc: "We launch campaigns across SEO, paid ads, content, and social media to bring your business more traffic, leads, and sales.",
      alignment: "start",
      border: "border-r border-b",
      borderPosition: { top: 44, left: 171 },
      borderSize: { h: 120, w: 332 },
    },
    {
      title: "Monitor Performance",
      desc: "We track every campaign closely using advanced tools. This helps us see what’s working and make improvements quickly.",
      alignment: "end",
      border: "border-l",
      borderPosition: { top: 43, left: -180 },
      borderSize: { h: 120, w: 332 },
    },
    {
      title: "Report & Improve",
      desc: "You get clear, transparent reports that show real results. Based on the data, we refine and scale the campaigns for even better growth.",
      alignment: "start",
      border: null,
      borderPosition: null,
      borderSize: null,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-[104px] md:mb-[120px] mb-[72px] md:pt-[95px]   mx-auto bg-gradient-to-r from-[#000f0e5c] to-[#00211d8f] bg-opacity-40">
      <div
        className="text-white md:h-[325px] h-[557px] flex flex-col  bg-cover bg-top-left md:px-[120px] px-4"
        style={{ backgroundImage: "url('/assets/DetailPages/BannerSEO.png')" }}
      >
        <div className="md:flex justify-between md:max-w-[1440px] w-full mx-auto">
          <div>
            {/* <h4 className="md:text-[16px] font-medium text-[#BCBCBC] mt-[30px] md:hidden block">
              SEO company in UAE & Trivandrum
            </h4> */}
            <h1 className="md:text-[48px] text-[32px] font-medium md:mt-[173px] mt-[227px]">
              Digital Marketing Services{" "}
            </h1>
            <p className="text-lg font-light text-[#E0E0E0] mt-2">
              Get More Leads, Sales & Growth with Solwyz Technologies
            </p>
          </div>
          <div>
            {/* <h2 className="md:text-[16px] font-medium text-[#BCBCBC] md:mt-6 hidden md:block">SEO company in UAE & Trivandrum</h2> */}
            <h4 className="md:text-[18px] font-medium md:mt-[192px] mt-8 md:ml-[80px]  ">
              Contact Us Today
            </h4>
            <Link href="/contact">
              <button className="border hover:border-[#04A391] hover:text-[#04A391] duration-300 px-[41px] py-[14px] rounded-lg mt-4 md:ml-[80px]">
                Get In Touch{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <p className="md:text-[18px] text-base font-light text-justify text-[#FEFEFE] md:px-[120px] px-4 md:mt-10 max-w-[1440px] mx-auto">
        We provide digital marketing services in the UAE and Trivandrum for
        small, medium, and large enterprises. By combining strategy, creativity,
        and data, we help your brand connect with the right customers, generate
        high-quality leads, and achieve measurable ROI. With global expertise,
        we design campaigns that adapt to different markets and deliver
        consistent growth
      </p>
      <h2 className="font-semibold text-white md:mt-[88px] mt-[54px] md:text-center text-center md:text-[40px] text-[20px]">
        Our Services
      </h2>
      <p className="md:text-center text-[#A7A7A7] text-[16px] font-medium md:mt-4 px-4 md:px-0 mt-[29px] mb-10 md:mb-0">
        Choose from Our full-range digital services are designed to help your{" "}
        <span className="text-[#04A391]">business grow online.</span>
      </p>
      {/* digital marketing */}
      <div className="  px-4  md:max-w-[1206px] mx-auto md:mt-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[37px] md:gap-[56px] justify-items-center">
          <Link href="/services/digital-marketing/seo">
            <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[384px] w-[361px] p-6  ">
              <div className="flex  gap-4 md:gap-0 items-start">
                <img
                  src="/assets/OurServices/seo.svg"
                  className=" w-[64px] h-[64px] "
                  alt=""
                />
                <div className="md:ml-[19px]">
                  <h3 className="   font-semibold text-[16px] ">
                    SEO Services
                  </h3>
                  <p className="text-start text-[#A5A5A5] font-medium md:w-[262px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                    Rank higher on Google & attract qualified traffic
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/digital-marketing/social-media-marketing">
            <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[384px] w-[361px] p-6  ">
              <div className="flex  gap-4 md:gap-0 items-start">
                <img
                  src="/assets/OurServices/socialmm.svg"
                  className=" w-[64px] h-[64px]"
                  alt=""
                />
                <div className="md:ml-[19px]">
                  <h3 className="font-semibold text-[16px] ">
                    Social Media Marketing
                  </h3>
                  <p className="text-start text-[#A5A5A5] font-medium md:w-[268px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                    Build awareness & engagement on Instagram, Facebook,LinkedIn
                    & more.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/digital-marketing/search-engine-marketing">
            <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[384px] w-[361px] p-6  ">
              <div className="flex  gap-4 md:gap-0 items-start">
                <img
                  src="/assets/OurServices/sem.svg"
                  className=" w-[64px] h-[64px]"
                  alt=""
                />
                <div className="md:ml-[19px]">
                  <h3 className="font-semibold text-[16px] ">
                    Search engine marketing
                  </h3>
                  <p className="text-start text-[#A5A5A5] font-medium md:w-[262px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                    Targeted ads that drive instant leads with high ROI.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/digital-marketing/influencer-marketing">
            <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[384px] w-[361px] p-6  ">
              <div className="flex  gap-4 md:gap-0 items-start">
                <img
                  src="/assets/OurServices/influ.svg"
                  className="w-[64px] h-[64px] "
                  alt=""
                />
                <div className="md:ml-[19px]">
                  <h3 className="font-semibold text-[16px] ">
                    Influencer Marketing
                  </h3>
                  <p className="text-start text-[#A5A5A5] font-medium md:w-[262px] w-[243px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                    Collaborate with trusted voices in your niche
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/digital-marketing/video-marketing">
            <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[384px] w-[361px] p-6  ">
              <div className="flex  gap-4 md:gap-0 items-start">
                <img
                  src="/assets/OurServices/videomarketing.svg"
                  className="w-[64px] h-[64px] "
                  alt=""
                />
                <div className="md:ml-[19px]">
                  <h3 className="font-semibold text-[16px] ">
                    Video Marketing
                  </h3>
                  <p className="text-start text-[#A5A5A5] font-medium md:w-[262px] w-[245px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                    Engage your audience with impactful videos .
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/digital-marketing/branding">
            <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[384px] w-[361px] p-6  ">
              <div className="flex  gap-4 md:gap-0 items-start">
                <img
                  src="/assets/OurServices/branding.svg"
                  className="w-[64px] h-[64px] "
                  alt=""
                />
                <div className="md:ml-[19px]">
                  <h3 className="font-semibold text-[16px] ">Branding</h3>
                  <p className="text-start text-[#A5A5A5] font-medium md:w-[269px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                    Build a consistent brand image that sets you apart in the
                    market.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {/* <Link href="SEO-ServicesBranding" className="md:col-span-3 flex justify-center">
                                  <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[384px] w-[361px] p-6  ">
                                      <div className="flex  gap-4 md:gap-0 items-start">
                                          <img src='/assets/OurServices/Ads.svg' className="w-[64px] h-[64px] " alt="" />
                                          <div className="md:ml-[19px]">
                                              <h2 className="font-semibold text-[16px] ">
                                                  Paid Ads Management
                                              </h2>
                                              <p className="text-start text-[#A5A5A5] font-medium md:w-[262px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                                                  Targeted ad campaigns that deliver high
                                                  conversions.
                                              </p>
                                          </div>
                                      </div>
          
                                  </div>
                              </Link> */}
        </div>
      </div>

      <div className="bg-[#EDF2F5] md:px-[120px] px-4 md:py-[88px] py-10 mt-[88px] space-y-4">
        <h2 className="md:text-[40px] font-semibold text-[#000000] text-center ">
          Why Businesses Choose Us
        </h2>
        <p className="md:text-[16px] font-medium text-[#888888] text-center">
          Trusted solutions driving growth and success.
        </p>

        <div>
          <div className="md:flex gap-6 justify-center md:space-y-6 space-y-4 md:mt-16 mt-10">
            <div className="flex md:gap-6 gap-2   ">
              <div className="md:w-[282px] md:h-[282px] w-full h-[234px]">
                <img
                  className="md:w-[282px] md:h-[282px] w-full h-[234px] object-center object-cover rounded-2xl"
                  src="/assets/DigtalMarketing/digi1.png"
                  alt=""
                />
              </div>
              <div className="md:w-[282px] md:h-[282px] w-full h-[234px] bg-white rounded-2xl md:p-6">
                <h3 className="text-[20px] font-semibold text-[#000000] md:pl-0 md:pt-0 pl-4 pt-4 ">
                  ROI - Focused <br />
                  stratagies
                </h3>
                <p className="md:text-base text-[14px] font-medium text-[#A2A2A2] w-full md:mt-[100px] md:pl-0 pl-4 mt-[70px]">
                  ROI-focused strategies drive growth, efficiency, and
                  sustainable success.
                </p>
              </div>
            </div>
            <div className="md:hidden block">
              <div className="flex md:gap-6 gap-2   ">
                <div className="md:w-[282px] md:h-[282px] w-full h-[234px] bg-white rounded-2xl md:p-6">
                  <h3 className="text-[20px] font-semibold text-[#000000] md:pl-0 md:pt-0 pl-4 pt-4 ">
                    24/7 Dedicated <br />
                    Support
                  </h3>
                  <p className="md:text-base text-[14px] font-medium text-[#A2A2A2] w-full md:mt-[100px] md:pl-0 pl-4 mt-[70px]">
                    24/7 dedicated support ensuring reliability, quick response,
                    and trust.
                  </p>
                </div>
                <div className="md:w-[282px] md:h-[282px] w-full h-[234px]">
                  <img
                    className="md:w-[282px] md:h-[282px] w-full h-[234px] object-center object-cover rounded-2xl"
                    src="/assets/DigtalMarketing/digi2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex md:gap-6 gap-2 ">
                <div className="md:w-[282px] md:h-[282px] w-full h-[234px]">
                  <img
                    className="md:w-[282px] md:h-[282px] w-full h-[234px] object-center object-cover rounded-2xl"
                    src="/assets/DigtalMarketing/digi2.png"
                    alt=""
                  />
                </div>
                <div className="md:w-[282px] md:h-[282px] w-full h-[234px] bg-white rounded-2xl md:p-6">
                  <h3 className="text-[20px] font-semibold text-[#000000] md:pl-0 md:pt-0 pl-4 pt-4 ">
                    24/7 Dedicated <br />
                    Support
                  </h3>
                  <p className="md:text-base text-[14px] font-medium text-[#A2A2A2] w-full md:mt-[100px] md:pl-0 pl-4 mt-[70px]">
                    24/7 dedicated support ensuring reliability, quick response,
                    and trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex gap-6 justify-center md:space-y-6 space-y-4 mt-4 md:mt-0 ">
            <div className="hidden md:block">
              <div className="flex md:gap-6 gap-2 ">
                <div className="md:w-[282px] md:h-[282px] w-full h-[234px] bg-white rounded-2xl md:p-6">
                  <h3 className="text-[20px] font-semibold text-[#000000] md:pl-0 md:pt-0 pl-4 pt-4">
                    Proven Track Record in <br className="hidden md:block" />
                    UAE & Trivandrum
                  </h3>
                  <p className="md:text-base text-[14px] font-medium text-[#A2A2A2] w-full md:mt-[100px] md:pl-0 pl-4 mt-[32px]">
                    Proven track record delivering success in UAE and <br />{" "}
                    Trivandrum.
                  </p>
                </div>

                <div className="md:w-[282px] md:h-[282px] w-full h-[234px]">
                  <img
                    className="md:w-[282px] md:h-[282px] w-full h-[234px] object-center object-cover rounded-2xl"
                    src="/assets/DigtalMarketing/digi3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="md:hidden block">
              <div className="flex md:gap-6 gap-2 ">
                <div className="md:w-[282px] md:h-[282px] w-full h-[234px]">
                  <img
                    className="md:w-[282px] md:h-[282px] w-full h-[234px] object-center object-cover rounded-2xl"
                    src="/assets/DigtalMarketing/digi3.png"
                    alt=""
                  />
                </div>
                <div className="md:w-[282px] md:h-[282px] w-full h-[234px] bg-white rounded-2xl md:p-6">
                  <h3 className="text-[20px] font-semibold text-[#000000] md:pl-0 md:pt-0 pl-4 pt-4">
                    Proven Track Record in <br className="hidden md:block" />
                    UAE & Trivandrum
                  </h3>
                  <p className="md:text-base text-[14px] font-medium text-[#A2A2A2] w-full md:mt-[100px] md:pl-0 pl-4 mt-[32px]">
                    Proven track record delivering success in UAE and <br />{" "}
                    Trivandrum.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex md:gap-6 gap-2 ">
              <div className="md:w-[282px] md:h-[282px] w-full h-[234px] bg-white rounded-2xl md:p-6">
                <h3 className="text-[20px] font-semibold text-[#000000] md:pl-0 md:pt-0 pl-4 pt-4">
                  Tailored Campaigns for <br className="hidden md:block" />
                  Every Industry
                </h3>
                <p className="md:text-base text-[14px] font-medium text-[#A2A2A2] w-full md:mt-[100px] md:pl-0 pl-4 mt-[40px]">
                  Tailored campaigns crafted to drive success across every
                  industry.
                </p>
              </div>
              <div className="md:w-[282px] md:h-[282px] w-full h-[234px]">
                <img
                  className="md:w-[282px] md:h-[282px] w-full h-[234px] object-center object-cover rounded-2xl"
                  src="/assets/DigtalMarketing/digi4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center md:mt-[104px] mt-[72px] px-4">
        <h2 className="md:text-[40px] font-semibold text-[20px]">
          Our Digital Marketing Process{" "}
        </h2>
        <p className="text-base font-medium mt-4 ">
          We follow a structured process to make sure your business gets{" "}
          <span className="text-[#04A391]">
            real, measurable results from digital marketing.
          </span>
        </p>
      </div>

      <div>
        {/* for Desktop */}

        <div className="relative z-10 md:pt-[56px] pt-10">
          {/* Desktop Version */}
          <div className="w-[702px] mx-auto hidden md:block">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex justify-${step.alignment} mt-10`}
              >
                <div className="group relative z-50">
                  {/* Hover Content */}
                  <div
                    className="w-[447px] text-center z-[60] absolute bottom-full left-1/2 -translate-x-1/2 mb-3 
            bg-[#ffffff] text-[#000000] text-sm font-medium rounded-tl-[16px] rounded-br-[16px] 
            p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-6 group-hover:translate-x-4 
            translate-y-2 transition-all duration-300 shadow-lg"
                  >
                    {step.desc}
                  </div>

                  {/* Main Box */}
                  <div
                    className="text-[18px] font-medium bg-[#1B1B1B] hover:bg-[#000000] duration-300 text-[#ffffff] 
            w-[351px] px-[37px] py-[27px] rounded-[16px] cursor-pointer text-center relative z-50"
                  >
                    {step.title}
                  </div>

                  {/* Border Box */}
                  {step.border && (
                    <div
                      className={`absolute ${step.border} border-[#04A391] z-40`}
                      style={{
                        top: `${step.borderPosition.top}px`,
                        left: `${step.borderPosition.left}px`,
                        height: `${step.borderSize.h}px`,
                        width: `${step.borderSize.w}px`,
                      }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Version */}
          <div className="md:hidden px-4 mt-10">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative z-50">
                  {/* Toggle Content */}
                  {openIndex === index && (
                    <div
                      className="w-full text-center z-[60] absolute bottom-full left-1/2 -translate-x-1/2 mb-3 
              bg-[#ffffff] text-[#000000] text-sm font-medium rounded-tl-[16px] rounded-br-[16px] 
              p-4 transition-all duration-300 shadow-lg"
                    >
                      {step.desc}
                    </div>
                  )}

                  {/* Main Box */}
                  <div
                    onClick={() => handleToggle(index)}
                    className="text-[18px] font-medium bg-[#1B1B1B] hover:bg-[#0A0A0A] duration-300 text-[#ffffff] 
            w-full px-[37px] py-[27px] rounded-[16px] cursor-pointer text-center relative z-50"
                  >
                    {step.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* End-to-End Digital Delivery Section */}
      <div className="md:mt-[104px] mt-[72px] px-4 md:px-[120px] max-w-[1440px] mx-auto">
        <h2 className="text-center text-white text-[24px] md:text-[48px] font-bold ">
          End-to-End Digital Delivery
        </h2>
        <p className="text-center font-normal mt-4 leading-[24px] md:leading-8 md:mt-6 text-[#04A391] text-base ">
          Core principles
          <span className="text-white"> guide every smart solution</span>
        </p>

        {/* The 8 Steps Grid */}
        <div className="md:mt-20 mt-12">
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 text-white">
            {/* Mobile dividing lines for 2x2 grid */}
            <div className="block md:hidden absolute top-0 bottom-0 left-1/2 translate-x-[-0.5px] w-px bg-[#04A3916E] z-0"></div>
            <div className="block md:hidden absolute left-0 right-0 top-1/2 translate-y-[-0.5px] h-px bg-[#04A3916E] z-0"></div>
            <div className="block md:hidden absolute left-0 right-0 -top-[-25%] translate-y-[-0.5px] h-px bg-[#04A3916E] z-0"></div>
            <div className="block md:hidden absolute left-0 right-0 -top-[-75%] translate-y-[-0.5px] h-px bg-[#04A3916E] z-0"></div>

            {/* Desktop lines as you have */}
            <div className="hidden md:block absolute top-0 bottom-0 left-[25%] translate-x-[-0.5px] w-px bg-[#04A3916E] z-0"></div>
            <div className="hidden md:block absolute top-0 bottom-0 left-[50%] translate-x-[-0.5px] w-px bg-[#04A3916E] z-0"></div>
            <div className="hidden md:block absolute top-0 bottom-0 left-[75%] translate-x-[-0.5px] w-px bg-[#04A3916E] z-0"></div>
            <div className="hidden md:block absolute left-0 right-0 top-[50%] translate-y-[-0.5px] h-px bg-[#04A3916E] z-0"></div>

            {/* 1. Discovery & Consultation */}
            {/* 1. Discovery & Consultation */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src="/assets/service/discovery.svg"
                  alt="Discovery & Consultation"
                  className="w-full hidden duration-300 md:block opacity-100 group-hover:opacity-0 transition-opacity h-full object-contain z-10 relative"
                />
                <img
                  src="/assets/service/discoveryBg.svg"
                  alt="Discovery & Consultation"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src="/assets/service/discoveryBg.svg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Discovery & Consultation
              </p>
            </div>

            {/* 2. Solution Planning */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src="/assets/service/solution.svg"
                  alt="Solution Planning"
                  className="w-full hidden duration-300 md:block opacity-100 group-hover:opacity-0 transition-opacity h-full object-contain z-10 relative"
                />
                <img
                  src="/assets/service/solutionBg.svg"
                  alt="Solution Planning"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src="/assets/service/solutionBg.svg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Solution <br className="md:hidden" /> Planning
              </p>
            </div>

            {/* 3. Design & Prototyping */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src="/assets/service/design.svg"
                  alt="Design & Prototyping"
                  className="w-full hidden duration-300 opacity-100 group-hover:opacity-0 transition-opacity md:block h-full object-contain z-10 relative"
                />
                <img
                  src="/assets/service/designBg.svg"
                  alt="Design & Prototyping"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src="/assets/service/designBg.svg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Design & Prototyping
              </p>
            </div>

            {/* 4. Custom Development */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src="/assets/service/custom.svg"
                  alt="Custom Development"
                  className="w-full hidden duration-300 opacity-100 group-hover:opacity-0 transition-opacity md:block h-full object-contain z-10 relative"
                />
                <img
                  src="/assets/service/customBg.svg"
                  alt="Custom Development"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src="/assets/service/customBg.svg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Custom Development
              </p>
            </div>

            {/* 5. Testing & Compliance */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src="/assets/service/testing.svg"
                  alt="Testing & Compliance"
                  className="w-full hidden opacity-100 duration-300 group-hover:opacity-0 transition-opacity md:block h-full object-contain z-10 relative"
                />
                <img
                  src="/assets/service/testingBg.svg"
                  alt="Testing & Compliance"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src="/assets/service/testingBg.svg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Testing & Compliance
              </p>
            </div>

            {/* 6. Deployment & Launch */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src="/assets/service/deployment.svg"
                  alt="Deployment & Launch"
                  className="w-full hidden opacity-100 group-hover:opacity-0 transition-opacity duration-300 md:block h-full object-contain z-10 relative"
                />
                <img
                  src="/assets/service/deploymentBg.svg"
                  alt="Deployment & Launch"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src="/assets/service/deploymentBg.svg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Deployment & Launch
              </p>
            </div>

            {/* 7. Marketing & User Acquisition */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src="/assets/service/marketing.svg"
                  alt="Marketing & User Acquisition"
                  className="w-full opacity-100 group-hover:opacity-0 transition-opacity duration-300 h-full hidden md:block object-contain z-10 relative"
                />
                <img
                  src="/assets/service/marketingBg.svg"
                  alt="Marketing & User Acquisition"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src="/assets/service/marketingBg.svg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Marketing & User Acquisition
              </p>
            </div>

            {/* 8. Ongoing Support & Evolution */}
            <div className="z-10 flex flex-col items-center px-4 py-6 rounded-2xl group">
              <div className="mb-4 w-16 h-16 relative">
                <img
                  src="/assets/service/support.svg"
                  alt="Ongoing Support & Evolution"
                  className="w-full opacity-100 group-hover:opacity-0 transition-opacity duration-300 md:block hidden h-full object-contain z-10 relative"
                />
                <img
                  src="/assets/service/supportBg.svg"
                  alt="Ongoing Support & Evolution"
                  className="w-[64px] md:hidden h-[64px] object-contain z-10 relative"
                />
                <img
                  src="/assets/service/supportBg.svg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center font-bold md:text-base text-sm underline-animate">
                Ongoing Support & Evolution
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* form and FAQ*/}
      <div className="bg-white w-full mt-[72px] ">
        <div className="">
          <h2 className="md:text-[48px] text-[32px] font-light text-[#027366] text-center md:pt-[64px] pt-[72px] px-4 ">
            Your competitors are already investing in SEO. <br />
            Don’t get left behind.
          </h2>
          <img
            className="justify-center items-center mx-auto"
            src="/assets/DetailPages/Rocket.svg"
            alt=""
          />
        </div>

        <div>
          <div
            className="md:flex md:items-center md:justify-center bg-white md:p-[56px] p-4 max-w-[1240] mx-auto mt-4 md:mt-12"
            style={{ boxShadow: "16px 32px 84px 0px #0000001F" }}
          >
            {" "}
            {/* Left Side Image + Text */}
            <div className="md:w-1/2 flex flex-col items-center text-center mb-8 md:mb-0">
              <p className="text-teal-700 font-medium text-2xl md:hidden block">
                Contact Us Today &amp; Get a <br /> Free SEO Strategy Session
              </p>
              <img
                src="/assets/DetailPages/FormPic.svg"
                alt="Form Illustration"
                className="w-[250px] md:w-[300px] mb-6 md:mt-0 mt-4"
              />
              <p className="text-teal-700 font-medium text-2xl hidden md:block">
                Contact Us Today &amp; Get a <br /> Free SEO Strategy Session
              </p>
            </div>
            {/* Right Side Form */}
            <div className="md:w-1/2 w-full">
              <h2 className="text-[#00796B] md:font-semibold font-medium md:text-start text-center text-2xl md:mb-8 mb-6">
                Take Your Business to the Top of Google
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name + Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-base font-medium text-black">
                      Name*
                    </div>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      {...register("name", { required: "Name is required" })}
                      className="w-full border-b border-gray-300 text-black placeholder-gray-500 focus:outline-none text-[14px] focus:border-teal-600 py-2"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="text-base font-medium text-black">
                      Company Name (optional)
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Company Name"
                      {...register("company")}
                      className="w-full border-b border-gray-300 text-black placeholder-gray-500 focus:outline-none text-[14px] focus:border-teal-600 py-2"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-base font-medium text-black">
                      Email*
                    </div>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email format",
                        },
                      })}
                      className="w-full border-b border-gray-300 text-black placeholder-gray-500 focus:outline-none text-[14px] focus:border-teal-600 py-2"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="text-base font-medium text-black">
                      Phone Number*
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a valid 10-digit phone number",
                        },
                      })}
                      className="w-full border-b border-gray-300 text-black placeholder-gray-500 focus:outline-none text-[14px] focus:border-teal-600 py-2"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Website (optional, but still validates if filled) */}
                <div>
                  <div className="text-base font-medium text-black">
                    Website URL (optional)
                  </div>
                  <input
                    type="text" // use text instead of url
                    placeholder="Enter Website URL"
                    {...register("website", {
                      pattern: {
                        value: /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/\S*)?$/,
                        message:
                          "Enter a valid URL (e.g., https://example.com)",
                      },
                    })}
                    className="w-full border-b border-gray-300 text-black placeholder-gray-500 focus:outline-none text-[14px] focus:border-teal-600 py-2"
                  />
                  {errors.website && (
                    <p className="text-red-500 text-sm">
                      {errors.website.message}
                    </p>
                  )}
                </div>

                {/* Service Dropdown */}
                <div>
                  <select
                    {...register("service", {
                      required: "Please select a service",
                    })}
                    className="w-[265px] bg-[#F9F9F9] text-black font-medium focus:outline-none h-[36px] text-[16px] focus:border-teal-600 py-2"
                  >
                    <option value="">Select Service</option>
                    <option value="SEO Services">SEO Services</option>
                    <option value="Search Engine Marketing">
                      Search Engine Marketing
                    </option>
                    <option value="Social Media Marketing">
                      Social Media Marketing
                    </option>
                    <option value="Influencer Marketing">
                      Influencer Marketing
                    </option>
                    <option value="Video Marketing">Video Marketing</option>
                    <option value="Branding">Branding</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className="text-base font-medium text-black">
                    Write Your Message
                  </div>
                  <textarea
                    placeholder="Enter your message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full border-b border-gray-300 text-black placeholder-gray-500 focus:outline-none text-[14px] focus:border-teal-600 py-2"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full py-2 rounded-md transition ${
                    isSubmitted
                      ? "bg-green-600 text-white"
                      : "bg-teal-600 hover:bg-teal-700 text-white"
                  }`}
                >
                  {isSubmitted ? "Form Submitted ✅" : "Submit"}
                </button>
              </form>
            </div>
          </div>

          <div className=" mx-auto px-4 md:py-[104] py-[72px] max-w-[1540px]">
            <h2 className="text-2xl md:text-[32px] font-semibold text-center mb-2 text-[#000000]">
              Frequently Asked Questions
            </h2>
            <p className="text-teal-600 md:text-2xl font-medium text-2xl text-center mb-8">
              On SEO Services
            </p>

            <div className="space-y-4 md:px-[120px] px-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-[#E3E3E3] rounded-md px-6 py-[18px] cursor-pointer shadow-sm"
                >
                  <div
                    className="flex justify-between items-center text-black"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="font-medium md:w-full w-[300px]">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-gray-600 " />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                  {openIndex === index && (
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
