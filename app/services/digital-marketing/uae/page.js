"use client";
import { useEffect, useState } from "react";

import EndToEnd from "../../../components/EndToEndComponent/endToEnd";
import Link from "next/link";
import KeyHighlightDubai from "../../../components/KeyHighlightDubai/KeyHighlightDubai";
import ReadyToGrowDigital from "../../../components/ReadyToGrowDigital/ReadyToGrowDigital";
import { useForm } from "react-hook-form";
import Api from "../../../../Service/Api";

export default function DigitalMarketingDubai() {
     useEffect(() => {
                document.title = " Digital Marketing Services UAE | Solwyz Technologies";
            }, []);

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
  }


    const processSteps = [
        {
            title: "Understanding Goals & Audience",
            desc: "We analyze your business objectives and target audience to create strategies that deliver results.",
            alignment: "start",
            border: "border-t border-r border-b",
            borderPosition: { top: 41, left: 171 },
            borderSize: { h: 125, w: 332 }
        },
        {
            title: "Strategy Development",
            desc: "We design digital marketing plans focused on maximizing ROI and driving conversions.",
            alignment: "end",
            border: "border-l border-b",
            borderPosition: { top: 45, left: -180 },
            borderSize: { h: 120, w: 332 }
        },
        {
            title: "Campaign Execution",
            desc: "We implement SEO, social media marketing (SMM), SEM, paid ads, and content marketing to reach the right customers effectively.",
            alignment: "start",
            border: "border-r border-b",
            borderPosition: { top: 44, left: 171 },
            borderSize: { h: 120, w: 332 }
        },
        {
            title: "Monitoring & Optimization",
            desc: "We continuously track campaign performance and refine strategies to boost leads, sales, and engagement.",
            alignment: "end",
            border: "border-l border-b",
            borderPosition: { top: 43, left: -180 },
            borderSize: { h: 120, w: 332 }
        },
        {
            title: "Reporting & Insights",
            desc: "We provide transparent reports with actionable insights so you can measure progress and success.",
            alignment: "start",
            border: "border-r",
            borderPosition: { top: 44, left: 171 },
            borderSize: { h: 120, w: 332 }
        },
        {
            title: "Brand Growth & Visibility",
            desc: "We help your brand stand out in a crowded market and connect with your ideal audience.",
            alignment: "end",
            border: null,
            borderPosition: null,
            borderSize: null
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="pt-[104px]  mb-[72px] md:pt-[95px]  ">
            <div className="relative overflow-hidden">
                {/* Gradient Circles */}
                <div className="absolute top-[-148px] left-[-80px] w-[400px] h-[400px] bg-[#04A39166] rounded-full blur-[170px] opacity-80 hidden md:block "></div>
                <div className="absolute bottom-[198px] right-[-10px] w-[400px] h-[400px] bg-[#04A39166] rounded-full blur-[170px] opacity-80 hidden md:block"></div>

                <div className="px-4 md:px-[120px] text-center md:mt-[136px] mt-[72px] ">
                    <h1 className="font-bold md:text-[48px] text-[20px] md:leading-[56px] text-[#ffffff]">
                        Boost Leads & Sales with the <br />
                        <span className="text-[#04A391] md:text-[48px] text-[25px] font-normal md:font-light">
                            Best Digital Marketing Agency
                        </span>{" "}
                        in Dubai
                    </h1>
                    <p className=" text-[16px] font-medium text-[#6E6E6E] text-center md:mt-12 mt-[72px]">
                        Reach the right audience, generate quality leads, and grow your
                        revenue with <br /> Solwyz Technologies, your trusted digital
                        marketing partner.
                    </p>
                </div>

                <div className="md:flex items-center gap-4 text-center justify-center md:mt-20 mt-[72px] ">
                    <p className="text-[20px] font-medium bg-gradient-to-r from-[#04A391] to-[#9C6EA0] bg-clip-text text-transparent">
                        Get a Free Consultation
                    </p>
                    <Link href="/contact">
                        {" "}
                        <button className="px-[42px] py-[14px] bg-white text-black rounded-lg text-base font-semibold md:mt-0 mt-4">
                            Get In Touch
                        </button>
                    </Link>
                </div>

                <div>
                    <h2 className="font-semibold md:text-[40px] text-[20px] text-center md:mt-[104px] mt-20">
                        Why Partner with Solwyz <br className="md:hidden block" />{" "}
                        Technologies for <br className="hidden md:block" />
                        Digital Marketing in <br className="md:hidden block" /> Dubai?
                    </h2>

                    <p className="font-medium text-[18px] text-justify md:px-[120px] text-[#A7A7A7] md:mt-12 mt-[29px] px-4 max-w-[1440px] mx-auto">
                        Solwyz Technologies is a results-driven digital marketing agency in
                        Dubai, helping small, medium, and large businesses strengthen their
                        online presence. Using proven strategies in SEO, social media
                        marketing, SEM, paid advertising, and content marketing, we ensure
                        your brand reaches the right audience, engages potential customers,
                        and drives measurable growth, resulting in increased leads, higher
                        sales, and more conversions.
                    </p>
                </div>
            </div>

            <div className="md:mt-[104px] mt-20">
                {" "}
                <KeyHighlightDubai />
            </div>

            <div>
                <div className="absolute top-[2117px] left-[-100px] w-[400px] h-[400px] bg-[#04A39166] rounded-full blur-[170px] opacity-80 hidden md:block "></div>
                <div className="absolute top-[2717px] right-[-10px] w-[400px] h-[400px] bg-[#04A39166] rounded-full blur-[170px] opacity-80 hidden md:block"></div>

                <h2 className="font-semibold text-white md:mt-[40px] mt-[54px] md:text-center text-center md:text-[48px] text-[20px]">
                    Our Digital Marketing Services
                </h2>
                <p className="md:text-center text-[#A7A7A7] text-[16px] font-medium px-4 md:px-0 mt-[29px] mb-10 md:mt-0 md:mb-0">
                    Choose from our wide range of services designed to maximize your ROI.{" "}
                    <br className="hidden md:block" />
                    Click to explore each service
                </p>

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
                                        <h2 className="   font-semibold text-[16px] ">
                                            SEO Services
                                        </h2>
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
                                        <h2 className="font-semibold text-[16px] ">
                                            Social Media Marketing
                                        </h2>
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
                                        <h2 className="font-semibold text-[16px] ">
                                            Search engine marketing
                                        </h2>
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
                                        <h2 className="font-semibold text-[16px] ">
                                            Influencer Marketing
                                        </h2>
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
                                        <h2 className="font-semibold text-[16px] ">
                                            Video Marketing
                                        </h2>
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
                                        <h2 className="font-semibold text-[16px] ">Branding</h2>
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
            </div>

            {/* grow your section */}
            <div>
                <div className="px-4 ">
                    <h2 className="font-semibold md:text-[40px] text-[20px] md:text-center text-start md:mt-[104px] mt-20">
                        Grow Your Business with the Best <br />
                        Digital Marketing in Dubai
                    </h2>

                    <p className="font-medium text-[18px] text-justify md:px-[120px] text-[#A7A7A7] md:mt-12 mt-10 max-w-[1440px] mx-auto">
                        At Solwyz Technologies, we know that whether you run a small,
                        medium, or large business, you want to reach the right customers and
                        increase sales. To achieve this, we developed digital marketing
                        strategies focused on maximising your ROI. Our approach ensures that
                        your marketing efforts lead to real, measurable growth by increasing
                        brand awareness, generating high-quality leads, and boosting sales.
                        We use SEO, social media marketing, SEM, paid ads, and content
                        marketing to help your brand stand out in a crowded market and
                        connect effectively with your target audience.
                    </p>
                </div>
                <div className="text-center px-4 md:px-0 md:mt-[104px] mt-20">
                    <h2 className="md:text-[24px] text-[20px] font-bold">
                        Our Digital Market process In Dubai
                    </h2>
                    <p className="md:text-base font-medium md:mt-4 mt-6 text-[#A7A7A7]">
                        We follow a structured process to help small, medium, and large
                        businesses achieve real, measurable growth online
                    </p>
                </div>
            </div>

            {/* for Desktop */}

            <div className="relative z-10 md:pt-[56px] pt-10">
                <div className="absolute top-[-148px] left-[-80px] w-[400px] h-[400px] bg-[#04A39166] rounded-full blur-[170px] opacity-80 hidden md:block "></div>
                <div className="absolute bottom-[198px] right-[-10px] w-[400px] h-[400px] bg-[#04A39166] rounded-full blur-[170px] opacity-80 hidden md:block"></div>

                {/* Desktop Version */}
                <div className="w-[702px] mx-auto hidden md:block">
                    {processSteps.map((step, index) => (
                        <div key={index} className={`relative flex justify-${step.alignment} mt-10`}>
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
                                    className="text-[18px] font-medium bg-[#1B1B1B] hover:bg-[#0A0A0A] duration-300 text-[#ffffff] 
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
            className="md:flex md:items-center md:justify-center bg-white md:p-[56px] p-4 max-w-[1240] mx-auto mt-4 md:mt-12 md:mb-12"
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
                  className={`w-full py-2 rounded-md transition ${isSubmitted
                      ? "bg-teal-600 hover:bg-teal-700 text-white"
                      : "bg-teal-600 hover:bg-teal-700 text-white"
                    }`}
                >
                  {isSubmitted ? "Form Submitted " : "Submit"}
                </button>
              </form>
            </div>
          </div>


        </div>
      </div>


            <EndToEnd />
            <div className="md:mt-[104px] mt-[80px]">
                <ReadyToGrowDigital />
            </div>
        </div>
    );
}
