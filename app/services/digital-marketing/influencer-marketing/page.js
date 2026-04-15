"use client"; // ✅ Required for client-side logic

import { useEffect, useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Plus, Minus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Pageloader from "../../../Loaders/Pageloader";
import Link from "next/link";
import styles from "./page.module.css"
import Api from "../../../../Service/Api";
import { usePathname, useRouter } from "next/navigation";

export default function InfluencerMarketing() {


    const [loading, setLoading] = useState(true);
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

  
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

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };



    useEffect(() => {
        document.title = "Influencer Service | Solwyz Technologies";
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const services = [
        {
            title: (<>Influencer <br /> Research</>),
            description:
                "We help you find and evaluate the right influencers to promote your brand effectively.",
            items: [
                "Identify influencers in your niche",
                "Ensure audience relevance and credibility",
                "Evaluate engagement and influence",
                "Select the best fit for your brand",
            ],
        },
        {
            title: (<p>Campaign <br /> Strategy</p>),
            description:
                "We build data-driven influencer marketing strategies aligned with your business goals.",
            items: [
                "Build data-driven strategies",
                "Align campaigns with business goals",
                "Define campaign objectives and KPIs",
                "Plan timelines and deliverables",
            ],
        },
        {
            title: (<p>Content <br />Collaboration</p>),
            description:
                "We collaborate with influencers to create authentic, brand-aligned content.",
            items: [
                "Prepare content and scripts",
                "Align with influencer storytelling",
                "Ensure brand messaging consistency",
                "Approve creative assets before publishing",
            ],
        },
        {
            title: (<p>Multi-Platform <br /> Campaigns</p>),
            description:
                "We run influencer campaigns across multiple platforms to maximize reach.",
            items: [
                "Run campaigns across platforms",
                "Maximize audience reach",
                "Adapt content for each platform",
                "Coordinate posting schedules",
            ],
        },
        {
            title: "Performance Tracking & Reporting",
            description:
                "We track campaign success and provide actionable insights to improve ROI.",
            items: [
                "Track performance metrics",
                "Monitor leads and conversions",
                "Analyze campaign ROI",
                "Preparation of performance reports",
            ],
        },
    ];



    const steps = [
        {
            title: "Audit & Research",
            description: "Identify opportunities and gaps",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (1).svg"
        },
        {
            title: "Strategy Development",
            description: "  Create a goal-oriented roadmap",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (2).svg"
        },
        {
            title: "Content & Campaign Execution",
            description: " Post organic content and run paid campaigns",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (5).svg"
        },
        {
            title: "Monitoring & Optimization",
            description: "Track KPIs and refine strategy for maximum ROI",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (6).svg"
        },
        {
            title: "Reporting & Insights",
            description: "Provide transparent, actionable reports for future growth",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (7).svg"
        },
    ];









    const faqs = [
        {
            question: "What is the ideal budget for an influencer marketing campaign?",
            answer:
                "The budget depends on factors like influencer reach, campaign length, content type, and platform. We help brands create cost-effective strategies tailored to their goals.",
        },
          {
            question: "How do you measure the success of influencer campaigns?",
            answer:
                "We track metrics like engagement rate, click-through rate, conversions, website traffic, and ROI to ensure your campaign delivers tangible results.",
        },
          {
            question: " How do you choose the right influencers for my brand?",
            answer:
                "We consider audience demographics, engagement rates, credibility, content style, and relevance to your brand values to select influencers who genuinely resonate with your target audience.",
        },
          {
            question: "Can influencer marketing work for small businesses?",
            answer:
                "Absolutely. Micro-influencers with smaller, highly engaged audiences can deliver impressive results at lower costs, making it ideal for small and medium-sized businesses.",
        },
        {
            question: "How long does it take to see results?",
            answer:
                "Some campaigns drive immediate engagement, while others build momentum over time. Typical campaigns show measurable impact within 4–8 weeks, depending on goals and platforms.",
        },
        {
            question: "Do you handle content creation for influencers?",
            answer:
                "Yes, we collaborate with influencers to create authentic, engaging content that aligns with your brand voice while respecting their creative style.",
        },
        {
            question: "Can influencer marketing improve SEO and website traffic?",
            answer:
                "Indirectly, yes. Influencer content can increase brand mentions, backlinks, and social traffic, all of which contribute to better visibility and SEO performance.",
        },
        {
            question: "How do you manage compliance and authenticity?",
            answer:
                "We ensure all content follows platform guidelines, disclosure rules, and brand standards to maintain transparency and authenticity with the audience.",
        },
        {
            question: "What platforms work best for influencer marketing?",
            answer:
                "It depends on your target audience. Instagram, YouTube, TikTok, LinkedIn, and Facebook are commonly effective, and we create platform-specific strategies for optimal results.",
        },
    ];

    const benefits = [
        "Proven experience in running ROI-driven influencer campaigns.",
        "Access to verified influencer networks across industries. ",
        "Transparent reporting and performance tracking.",
        "Customised strategies for small, medium, and enterprise businesses.",
        "High-return campaigns designed for minimal client-side effort.",
    ];


    const industries = [
        {
            title: "Fashion & Lifestyle",
            desc: "Increase brand awareness and credibility",
        },
        {
            title: "Food & Beverages",
            desc: "Drive orders and restaurant visits",
        },
        {
            title: "Health & Fitness",
            desc: "Boost program sign-ups and engagement",
        },
        {
            title: "Travel & Hospitality",
            desc: "Attract bookings and tourist interest",
        },
        {
            title: "Technology & Start-ups",
            desc: "Generate leads and product adoption",
        },
        {
            title: "Real Estate & More",
            desc: "Showcase properties and attract buyers and investors",
        },
    ];


    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleClick = () => {
        if (pathname === "/") {
          const section = document.getElementById("pageSpeedChecker");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        } else {
          router.push("/?scrollTo=pageSpeedChecker");
        }
      };

    if (loading) return <Pageloader />;

    return (
        <div className="">
            <div className="">
                <div className="h-[95px]"></div>

                <div
                    className="text-white md:h-[325px] h-[557px] flex flex-col  bg-cover bg-top-left md:px-[120px] px-4"
                    style={{ backgroundImage: "url('/assets/DetailPages/BannerSEO.png')" }}
                >
                    <div className="md:flex justify-between md:max-w-[1440px] w-full mx-auto">
                        <div>

                            <h1 className="md:text-[48px] text-[32px] font-medium md:mt-[173px] mt-[197px]"> Influencer Marketing Services </h1>
                            <p className="text-lg font-light text-[#E0E0E0] mt-2">
                                Transform Your Business with Expert Influencer Marketing Services
                            </p>
                        </div>
                        <div className="md:items-end md:justify-end md:text-end">

                            <h4 className="md:text-[18px] font-medium md:mt-[189px] mt-[68px]">Get your free IMS Audit today</h4>
                           
                                <button onClick={handleClick} className="border hover:border-[#04A391] hover:text-[#04A391] duration-300 px-[41px] py-[14px] rounded-lg mt-4 md:ml-[80px]">
                                    Get In Touch{" "}
                                </button>
                                                   </div>
                    </div>
                </div>

                <div className="md:py-12 py-10  bg-white text-[#000000]">
                    <div className="md:max-w-[1540px] mx-auto md:px-[120px] px-4 ">
                        <p className="md:text-[18px] text-base font-medium text-justify text-[#000000]">Influencer marketing is a social media strategy where brands partner with individuals who have a strong following and influence over their audience. By leveraging an influencer’s credibility and trust, brands can reach a targeted audience, generate authentic engagement, and drive sales through relatable content and genuine recommendations. We help your business to implement this strategy by identifying the right influencers, planning campaigns, and managing every step of execution to ensure maximum results.</p>

                        <div className="md:mt-[104px] mt-[72px] md:flex justify-between">
                            <div>
                                <h3 className="md:text-[40px] text-[24px] font-semibold md:w-[565px]">Why Influencer Marketing ?</h3>
                                <div>
                                    <img className="md:w-[557px] w-[361px] md:h-[408px] h-[240px] md:hidden block mt-6" src="/assets/DetailPages/DetailPageImg.png" alt="" />
                                </div>
                                <ul className="mt-8 space-y-6">
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-0 md:py-3 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" /> Build lasting credibility and trust.</li>
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-0 md:py-3 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" />Reach and engage the right audience.</li>
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-0 md:py-3 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" />Boost engagement with impactful strategies.</li>
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-0 md:py-3 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" />Increase conversions with proven strategies.</li>


                                </ul>
                            </div>
                            <div>
                                <img className="md:w-[557px] w-[361px] md:h-[424px] h-[240px] hidden md:block" src="/assets/DetailPages/DetailPageImg.png" alt="" />
                            </div>
                        </div>
                    </div>



                    {/*Our SEO Service Section */}

                    <div className="md:mt-[104px] mt-[72px] md:px-[120px] px-4 relative">
                        <h2 className="md:text-[40px] text-[24px] font-semibold text-center">
                            Our Influencer Marketing Services
                        </h2>
                        <p className="text-center text-[#888888]">
                            Complete influencer marketing solutions for your business
                        </p>

                        <div className="bg-white relative max-w-[1550px] mx-auto">
                            {/* Custom Navigation Arrows */}
                            <div className="flex gap-2 justify-end mb-4">
                                <div onClick={handlePrev} className="cursor-pointer">
                                    <img
                                        src="/assets/DetailPages/leftArrow.svg"
                                        alt="Prev"
                                        className="w-11 h-11"
                                    />
                                </div>
                                <div onClick={handleNext} className="cursor-pointer">
                                    <img
                                        src="/assets/DetailPages/rightArrow.svg"
                                        alt="Next"
                                        className="w-11 h-11"
                                    />
                                </div>
                            </div>

                            <Swiper
                                className="h-[550px]"
                                modules={[Navigation]}
                                spaceBetween={24}
                                slidesPerView={1}
                                breakpoints={{
                                    768: { slidesPerView: 2.2 },
                                    1024: { slidesPerView: 3.2 },
                                    1280: { slidesPerView: 4 },
                                }}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                            >
                                {services.map((service, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative flex flex-col bg-white shadow-md border border-[#F0F0F0] p-6 hover:shadow-2xl hover:border-none transition duration-300 mt-6 h-[413px] group">
                                            {/* Banner Top Right */}
                                            <div className="absolute top-0 right-0 w-[80px] h-auto">
                                                <img
                                                    src="/assets/DetailPages/CardUnHover.svg"
                                                    alt="Card Banner"
                                                    className="absolute top-0 right-0 w-[80px] h-auto opacity-100 transition-opacity duration-500 group-hover:opacity-0"
                                                />
                                                <img
                                                    src="/assets/DetailPages/cardBanner.svg"
                                                    alt="Card Banner Hover"
                                                    className="absolute top-0 right-0 w-[80px] h-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                                />
                                            </div>

                                            {/* Icon */}
                                            <div className="flex justify-start mb-6 mt-2">
                                                <div className="bg-[#E6F5F2] rounded-full p-4">
                                                    <img
                                                        src="/assets/DetailPages/CardIcon.svg"
                                                        alt="Service Icon"
                                                        width={32}
                                                        height={32}
                                                    />
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-start h-[75px]">
                                                {service.title}
                                            </h3>

                                            {/* Items */}
                                            <ul className="space-y-4">
                                                {service.items.map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-2 text-sm text-[#066C60]"
                                                    >
                                                        <img
                                                            src="/assets/DetailPages/CardArrow.svg"
                                                            alt="Arrow Icon"
                                                            width={14}
                                                            height={14}
                                                        />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>


                    {/* SEO Process Section */}


                    <div>
                        <div className="bg-black text-white py-16 md:px-[120px] px-6 md:py-[104px] ">
                            <div className="max-w-[1550px] mx-auto">
                                {/* Left Text Section */}


                                {/* Right Cards */}
                                <div className="md:col-span-2 grid md:grid-cols-3 space-y-[62px] gap-[24px]">
                                    <h3 className="text-teal-400 text-[32px] mt-[62px] font-medium leading-snug">
                                        Why Choose Solwyz for <br />
                                        Influencer Marketing
                                    </h3>
                                    {benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="relative border w-full   h-[191px] border-[#1E3C34] rounded-xl pl-6 flex items-start transition"
                                        >
                                            {/* Icon Circle */}
                                            <div className="absolute -top-[38px] left-6">
                                                <img src="/assets/DetailPages/benifits.svg" alt="" />
                                            </div>

                                            {/* Text */}
                                            <p className=" text-gray-300 text-[20px]  font-medium mt-[85px]">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="bg-[#FFFFFF] text-black md:py-[104px] py-12 px-4 md:px-0  md:w-[1200px] md:mx-auto">
                        {/* Industries We Serve */}
                        <div>
                            <h2 className="font-semibold text-2xl leading-8 md:leading-12 md:text-[40px] text-center">
                                Our Influencer marketing support <br />
                                businesses across
                            </h2>

                            <p className="text-base font-medium leading-5.5 text-center mt-4 text-[#888888]">
                                Our full-range digital services are designed to help your business grow online.
                            </p>

                            {/* Grid Section */}
                            <div className="md:flex gap-6  md:mt-[88px] mt-10 justify-center">
                                {/* Left column */}
                                <div className="flex flex-col space-y-4 ">
                                    {industries.slice(0, 3).map((item, i) => (
                                        <div
                                            key={i}
                                            className="bg-white  rounded-2xl px-8 py-3 h-[104px] md:w-[435px] relative overflow-hidden"
                                        >
                                            {/* Decorative quarter circle */}
                                            <div className="absolute top-0 right-0 w-14 h-14 bg-[#EBFFFD] rounded-bl-full flex items-center justify-center">
                                                <div className="absolute top-0 right-0 w-10 h-10 bg-[#BCEEE8] rounded-bl-full"></div>
                                            </div>

                                            <h3 className="font-semibold text-xl leading-6">{item.title}</h3>
                                            <p className="text-base text-[#999999] font-medium leading-5 mt-2">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Center image */}
                                <div className="flex justify-center mt-4 md:mt-0">
                                    <img
                                        src="/assets/DetailPages/influ.png"
                                        alt="Industries We Serve"

                                        className="rounded-xl md:w-[281px] md:h-[344px] w-full h-[344px] object-cover"
                                    />
                                </div>

                                {/* Right column */}
                                <div className="flex flex-col mt-4 md:mt-0 space-y-4">
                                    {industries.slice(3).map((item, i) => (
                                        <div
                                            key={i}
                                            className="bg-white  rounded-2xl px-8 py-3 h-[104px] relative overflow-hidden"
                                        >
                                            {/* Decorative quarter circle */}
                                            <div className="absolute top-0 right-0 w-14 h-14 bg-[#EBFFFD] rounded-bl-full flex items-center justify-center">
                                                <div className="absolute top-0 right-0 w-10 h-10 bg-[#BCEEE8] rounded-bl-full"></div>
                                            </div>

                                            <h3 className="font-semibold text-xl leading-6">{item.title}</h3>
                                            <p className="text-base text-[#999999] font-medium leading-5 mt-2">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>


                    <div className="md:px-[120px] px-4">
                        <div>
                            <h2 className="md:text-[48px] text-[32px] font-light text-[#027366] text-center md:mt-0 mt-[72px]">Start Your Influencer Marketing <br />
                                Journey</h2>
                            <img className="justify-center items-center mx-auto" src="/assets/DetailPages/Rocket.svg" alt="" />
                        </div>

                        {/* form */}

                        <div>
                            <div className={`md:flex md:items-center md:justify-center bg-white ${styles['custom-shadow']} rounded-lg md:p-[56px] p-4 max-w-6xl mx-auto mt-4 md:mt-12`}>
                                {/* Left Side Image + Text */}
                                <div className="md:w-1/2 flex flex-col items-center text-center mb-8 md:mb-0">
                                    <h3 className="text-teal-700 font-medium text-2xl md:hidden block">
                                        Take your brand to the next <br />
                                        level with influencer marketing.
                                    </h3>
                                    <img
                                        src="/assets/DetailPages/FormPic.svg"
                                        alt="Form Illustration"
                                        className="w-[250px] md:w-[300px] mb-6 md:mt-0 mt-4"
                                    />

                                    <h3 className="text-teal-700 font-medium text-2xl hidden md:block">
                                        Take your brand to the next <br />
                                        level with influencer marketing.
                                    </h3>

                                </div>

                                {/* Right Side Form */}
                                <div className="md:w-1/2 w-full">
                                    <h3 className="text-[#00796B] md:font-semibold font-medium md:text-start text-center text-2xl md:mb-8 mb-6">
                                        Contact Us Today for a Free Consultation
                                    </h3>
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        {/* Name + Company */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                            <div>
                                                <div className="text-base font-medium text-black"> Name*</div>
                                                <input
                                                    type="text"
                                                    placeholder="Enter First Name"
                                                    {...register("name", { required: "Name is required" })}
                                                    className="w-full border-b border-gray-300 focus:outline-none text-[14px] focus:border-teal-600 py-2"
                                                />
                                                {errors.name && (
                                                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                                                )}
                                            </div>
                                            <div>
                                                <div className="text-base font-medium text-black"> Company Name(optional)</div>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Company Name"
                                                    {...register("company")}
                                                    className="w-full border-b border-gray-300 focus:outline-none text-[14px] focus:border-teal-600 py-2"
                                                />
                                            </div>
                                        </div>

                                        {/* Email + Phone */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <div className="text-base font-medium text-black"> Email*</div>
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
                                                    className="w-full border-b border-gray-300 focus:outline-none text-[14px] focus:border-teal-600 py-2"
                                                />
                                                {errors.email && (
                                                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                                                )}
                                            </div>
                                            <div>
                                                <div className="text-base font-medium text-black">  Phone Number*</div>
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
                                                    className="w-full border-b border-gray-300 focus:outline-none text-[14px] focus:border-teal-600 py-2"
                                                />
                                                {errors.phone && (
                                                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Website */}
                                        <div>
                                            <div className="text-base font-medium text-black">  Website URL(optional)</div>
                                            <input
                                                type="url"
                                                placeholder="Enter Website URL"
                                                {...register("website")}
                                                className="w-full border-b border-gray-300 focus:outline-none text-[14px] focus:border-teal-600 py-2"
                                            />
                                        </div>

                                        {/* Service Dropdown */}
                                        <div>
                                            <select
                                                {...register("service", { required: "Please select a service" })}
                                                className="w-[265.9964294433594px] border-b border-gray-300 focus:outline-none text-[16px] focus:border-teal-600 py-2 bg-transparent"
                                            >
                                                <option value="Influencer Marketing">
                                                    Influencer Marketing
                                                </option>
                                                <option value="SEO Services">SEO Services</option>
                                                <option value="Search Engine Marketing">
                                                    Search Engine Marketing
                                                </option>
                                                <option value="Social Media Marketing">
                                                    Social Media Marketing
                                                </option>
                                                <option value="Video Marketing">Video Marketing</option>
                                                <option value="Branding">Branding</option>
                                            </select>
                                            {errors.service && (
                                                <p className="text-red-500 text-sm">{errors.service.message}</p>
                                            )}
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <div className="text-base font-medium text-black"> Write Your Message</div>
                                            <textarea
                                                placeholder=""
                                                {...register("message", { required: "Message is required" })}
                                                className="w-full border-b border-gray-300 focus:outline-none text-[14px] focus:border-teal-600 py-2"
                                            />
                                            {errors.message && (
                                                <p className="text-red-500 text-sm">{errors.message.message}</p>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className={`w-full py-2 rounded-md transition
                    ${isSubmitted ? "bg-teal-700 hover:bg-teal-700 text-white  cursor-not-allowed" : "bg-teal-600 hover:bg-teal-700 text-white"}`}
                                            disabled={isSubmitted}
                                        >
                                            {isSubmitted ? "Form Submitted " : "Submit"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* FAQ Section */}

                    <div className=" mx-auto px-4 md:py-[104] py-[72px] md:px-[120px] max-w-[1550px] ">
                        <h3 className="text-2xl md:text-[32px] font-semibold text-center mb-2">
                            Frequently Asked Questions
                        </h3>
                        <p className="text-teal-600 md:text-2xl font-medium text-2xl text-center mb-8">On Influencer Marketing</p>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-[#E3E3E3] rounded-md px-6 py-4 cursor-pointer"
                                >
                                    <div
                                        className="flex justify-between items-center w-full"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <h4 className="font-medium text-gray-800">{faq.question}</h4>
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            {openIndex === index ? (
                                                <Minus className="w-4 h-4 text-gray-600 stroke-[2]" />
                                            ) : (
                                                <Plus className="w-4 h-4 text-gray-600 stroke-[2]" />
                                            )}
                                        </div>
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

