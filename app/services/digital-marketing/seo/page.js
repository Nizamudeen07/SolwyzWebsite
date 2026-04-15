"use client"; // ✅ Required for client-side logic

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, Minus } from "lucide-react";
import Pageloader from "../../../Loaders/Pageloader";
import Link from "next/link";
import styles from "./page.module.css"; // Import the CSS module
import Api from "../../../../Service/Api";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { usePathname, useRouter } from "next/navigation"; // both from next/navigation


export default function SEODetailPage() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [openIndex, setOpenIndex] = useState(null);
    const SwiperRef = useRef(null);
    const router = useRouter();
    const pathname = usePathname();
   
    useEffect(() => {
        document.title = "SEO Services | Solwyz Technologies";
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

const handlePrv = () => {
        if (SwiperRef.current) {
            SwiperRef.current.slidePrev()
        }
    }
    const handleNxt = () => {
        if (SwiperRef.current) {
            SwiperRef.current.slideNext()
        }
    }



    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);
    const services = [
        {
            title: "On Page SEO",
            description:
                "We optimize your website content and structure to make it search-engine and user-friendly",
            items: [
                "Keyword research & mapping",
                "Title, meta tags & headers",
                "Content optimization",
                "Internal linking",
                "Image SEO",
            ],
        },
        {
            title: "Off Page SEO",
            description:
                "We build your authority online with white-hat link building and brand visibility.",
            items: [
                "High-quality backlinks",
                "Guest posting & outreach",
                "Social bookmarking & mentions",
                "PR & influencer collaborations",
                "Directory & citation Submissions",
            ],
        },
        {
            title: "Technical SEO",
            description:
                "We ensure your website is technically perfect for Google’s algorithms",
            items: [
                "Site speed & mobile optimization",
                "Crawlability & indexing",
                "Schema markup",
                "Fixing duplicate & broken links",
                "HTTPS & Core web optimization",
            ],
        },
        {
            title: "Local SEO",
            description:
                'Dominate "near me" searches and attract nearby customers.',
            items: [
                "Google Business Profile setup",
                "Local keyword targeting",
                "Citations & directory listings",
                "Reviews & reputation management",
                "Localized content strategies",
            ],
        },
    ];

    const steps = [
        {
            title: "Audit & Research",
            description: "Identify opportunities and gaps",
            image: "/assets/DetailPages/undraw.svg",
            image2: "/assets/DetailPages/Frame (1).svg",
            image1: "/assets/DetailPages/unHov1.svg"
        },
        {
            title: "Strategy & Planning",
            description: "Customised SEO roadmap",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (2).svg",
            image2: "/assets/DetailPages/Hov2.svg"
        },
        {
            title: "Optimization",
            description: "On-page, off-page & technical improvements",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (5).svg",
            image2: "/assets/DetailPages/Hov3.svg"
        },
        {
            title: "Content & Link Building",
            description: "Create authority-driven growth",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (6).svg",
            image2: "/assets/DetailPages/Hov4.svg"
        },
        {
            title: "Tracking & Reporting",
            description: "Transparent monthly reports with progress",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (7).svg",
            image2: "/assets/DetailPages/Hov5.svg"
        },
    ];










    const faqs = [
        {
            question: " How long does SEO take to show results?",
            answer:
                " Generally, you’ll start seeing results in 3–6 months depending on competition and your niche.",
        },
        {
            question: " Do you offer SEO for both local and international businesses?",
            answer:
                "Yes! We specialize in local SEO for Trivandrum businesses and competitive SEO for UAE companies targeting global markets.",
        },
        {
            question: " Can SEO really increase sales?",
            answer:
                "Absolutely. SEO not only increases traffic but also brings in high-intent leads that are more likely to convert into paying customers.",
        },
        {
            question: "Do you provide reports?",
            answer:
                "yes, we share detailed monthly reports with rankings, traffic, and conversions so you can measure ROI clearly",
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
                    style={{ backgroundImage: "url('/assets/DetailPages/BannerSEO.png')"
                     }}
                >
                    <div className="md:flex justify-between md:max-w-[1440px] w-full mx-auto">
                        <div>
                            
                            <h1 className="md:text-[48px] text-[32px] font-medium md:mt-[173px] mt-[197px]">Search engine Optimization</h1>
                            <p className="text-lg font-light text-[#E0E0E0] mt-2">
                                Rank Higher on Search Engines with Tested SEO Techniques
                            </p>
                        </div>
                        <div className="md:items-end md:justify-end md:text-end">
                            
                            <h4 className="md:text-[18px] font-medium md:mt-[189px] mt-[68px]">Get your free SEO Audit today</h4>
                            <button
        onClick={handleClick}
        className="border hover:border-[#04A391] hover:text-[#04A391] duration-300 px-[41px] py-[14px] rounded-lg mt-4 md:ml-[80px]"
      >
        Get In Touch
      </button>                     </div>
                    </div>
                </div>

                <div className="md:px-[120px] px-4 md:py-12 py-10  bg-white text-[#000000]">
                    <div className="md:max-w-[1440px] mx-auto">
                        <p className="md:text-[18px] text-base font-medium text-justify text-[#000000]">
                            Every second, over 40,000 Google searches are happening worldwide. Yet, more than 70% of users never look beyond the first page of search results. If your business isn’t ranking high,you’re losing leads to competitors.That’s why Solwyz Technologies focuses on helping businesses in Trivandrum and the UAE grow  online, attract quality leads, and achieve measurable results through effective SEO strategies
                        </p>

                        <div className="md:mt-[104px] mt-[72px] md:flex justify-between">
                            <div>
                                <h2 className="md:text-[40px] text-[24px] font-semibold md:w-[565px]">Why SEO is the Smartest
                                    Investment for Your Business</h2>
                                <div>
                                    <img className="md:w-[557px] w-[361px] md:h-[408px] h-[240px] md:hidden block mt-6" src="/assets/DetailPages/DetailPageImg.png" alt="" />
                                </div>
                                <ul className="mt-8 space-y-6">
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-0 md:py-3 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" />14.6% close rate for SEO leads vs. 1.7% for outbound leads </li>
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-0 md:py-3 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" />70%+ of clicks go to the first 5 search results </li>
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-0 md:py-3 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" /> Local intent searches often convert within 24 hours </li>
                                    <li className="md:w-[588px] w-full px-4 md:px-0 md:py-0">The right SEO approach attracts visitors who are truly interested in engaging with your business</li>
                                </ul>
                            </div>
                            <div>
                                <img className="md:w-[557px] w-[361px] md:h-[408px] h-[240px] hidden md:block" src="/assets/DetailPages/DetailPageImg.png" alt="" />
                            </div>
                        </div>
                    </div>



                    {/*Our SEO Service Section */}

                    <div className="md:mt-[104px] mt-[72px] md:px-0 px-0">
                        <h2 className="md:text-[40px] text-[24px] font-bold text-center">
                            Our SEO Services
                        </h2>
                        <div className=" bg-white relative max-w-[1550px] mx-auto">
                            {/* Custom Navigation Arrows */}
                            <div className="md:hidden block">
                                <div className="flex gap-2 justify-end ">
                                    <div
                                        onClick={handlePrv}
                                        className="cursor-pointer"
                                    >
                                        <img src="/assets/DetailPages/leftArrow.svg" alt="Prev" className="w-11 h-11" />
                                    </div>
                                    <div
                                        onClick={handleNxt}
                                        className="cursor-pointer"
                                    >
                                        <img src="/assets/DetailPages/rightArrow.svg" alt="Next" className="w-11 h-11" />
                                    </div>
                                </div>
                            </div>

                            <Swiper
                                className="h-[550px] "
                                modules={[Navigation]}
                                spaceBetween={24}
                                slidesPerView={1}
                                breakpoints={{
                                    768: { slidesPerView: 2.2 },
                                    1024: { slidesPerView: 3.2 },
                                    1280: { slidesPerView: 4 },
                                }}

                                onBeforeInit={(swiper) => {
                                    SwiperRef.current = swiper
                                }}
                            >
                                {services.map((service, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative flex flex-col bg-white shadow-md border border-[#F0F0F0] p-6 hover:shadow-2xl hover:border-none transition duration-300 mt-6 h-[438px] group">
                                           
                                            {/* Default Image */}
                                            <div className="absolute top-0 right-0 w-[80px] h-auto">
                                                {/* Default image */}
                                                <img
                                                    src="/assets/DetailPages/CardUnHover.svg"
                                                    alt="Card Banner"
                                                    className="absolute top-0 right-0 w-[80px] h-auto opacity-100 transition-opacity duration-500 group-hover:opacity-0"
                                                />

                                                {/* Hover image */}
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
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-start w-[225px]">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 text-start mt-4 w-[234px] ">
                                                {service.description}
                                            </p>

                                            {/* Items */}
                                            <ul className="space-y-3 mt-auto">
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

                    <section className=" md:px-20 bg-white md:mt-[104px] mt-[72px]">
                        <div className="text-center ">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Our Proven SEO Process
                            </h2>
                            <p className="text-gray-500 mt-2">
                                Our SEO approach is focused on delivering long-term growth for your
                                business.
                            </p>
                        </div>

                        <div className="md:flex gap-[61px] items-start mx-auto md:max-w-[1055px] md:mt-16 mt-8">
                            {/* Left Steps */}
                            <div className="space-y-8 border-l-2 border-gray-200 pl-6 md:w-[265px]">
                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-3 cursor-pointer transition 
                ${activeIndex === index
                                                ? "text-teal-600 font-semibold"
                                                : "text-gray-400"
                                            }`}
                                        onClick={() => setActiveIndex(index)}


                                    >
                                        <img
                                            src={activeIndex === index ? step.image2 : step.image1}
                                            alt=""
                                            className="w-6 h-6"
                                        />
                                        <span
                                            className={`text-[18px] font-medium ${activeIndex === index ? "text-teal-600" : "text-gray-400"
                                                }`}
                                        >
                                            {step.title}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Right Content */}
                            <div className="bg-[#F2F5F5] p-6 rounded-tl-3xl mt-4 md:mt-0  rounded-tr-3xl rounded-br-3xl border-gray-200 md:w-[744px]">
                                <div className="flex md:block">
                                    <div className="md:flex items-start gap-6">
                                        <img
                                            src={steps[activeIndex].image}
                                            alt={steps[activeIndex].title}
                                            width={120}
                                            height={120}
                                            className="rounded-md  mt-3"
                                        />
                                        <div>
                                            <h3 className="md:text-[22px] text-[19px] font-semibold text-teal-600 mt-[29px]">
                                                {steps[activeIndex].title}
                                            </h3>
                                            <p className="text-[#026359] md:text-base text-[14px] mt-2">
                                                {steps[activeIndex].description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:flex justify-end items-center mt-6 md:mt-0 gap-4 whitespace-nowrap ml-4">
                                        <p className="text-transparent text-[16px]  bg-clip-text bg-gradient-to-r from-[#04A391] to-[#013D36] font-medium">Lets grow your online <br className="md:hidden block" /> Presence</p>
                                        <Link href="/contact">
                                            <button className="px-5 py-2 border text-[16px] cursor-pointer font-semibold border-teal-600 text-transparent bg-clip-text bg-gradient-to-r from-[#04A391] to-[#013D36]  rounded-md  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l hover:from-[#04A391] hover:to-[#013D36] duration-300 transition">
                                                Get in Touch
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <div className="md:mt-[104px] mt-[72px] md:px-0 px-0">
                        <h3 className="md:text-[32px] font-semibold text-[24px] text-center">
                            Why Choose Us as Your SEO <br />
                            Company in Trivandrum & UAE?
                        </h3>

                        <div className="md:flex grid grid-cols-2 md:w-[1110px] mx-auto justify-center text-center gap-[48px] md:mt-[64px] mt-10">
                            <div>
                                <div className="border hover:bg-[#D2EDEA] duration-300 w-[134px] h-[134px] border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/WhiteHAt.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    100% White-hat SEO
                                    <br />
                                    Practices
                                </p>
                            </div>

                            <div>
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300  border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/ExpertTeam.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    Expert Team with Years of <br />
                                    Experience
                                </p>
                            </div>

                            <div>
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300  border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/CustomizedSEO.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    Customized SEO Packages <br />
                                    for Every Business
                                </p>
                            </div>

                            <div>
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300  border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/Transparent.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    Transparent Reporting & <br />
                                    Real Results
                                </p>
                            </div>


                            <div className="col-span-2 md:col-span-1">
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300 border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/ServingBoth.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    Serving Both Local & <br />
                                    International Clients
                                </p>
                            </div>
                        </div>
                    </div>



                    <div>
                        <div>
                            <h2 className="md:text-[48px] text-[32px] font-light text-[#027366] text-center md:mt-[104px] mt-[72px]">Your competitors are already investing in SEO. <br />
                                Don&apos;t get left behind.</h2>
                            <img className="justify-center items-center mx-auto" src="/assets/DetailPages/Rocket.svg" alt="" />
                        </div>

                    

                        <div>
                            <div className={` md:flex md:items-center md:justify-center bg-white   md:p-[56px] p-4 max-w-6xl mx-auto mt-4 md:mt-12 ${styles['custom-shadow']}`}>
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
                                    <h3 className="text-[#00796B] md:font-semibold font-medium md:text-start text-center text-2xl md:mb-8 mb-6">
                                        Take Your Business to the Top of Google
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

                    <div className=" mx-auto  md:py-[104] py-[72px] max-w-[1550px]">
                        <h3 className="text-2xl md:text-[32px] font-semibold text-center mb-2">
                            Frequently Asked Questions
                        </h3>
                        <p className="text-teal-600 md:text-2xl font-medium text-2xl text-center mb-8">On SEO Services</p>

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
