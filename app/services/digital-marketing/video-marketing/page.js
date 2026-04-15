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
import styles from "../seo/page.module.css";
import Api from "../../../../Service/Api";
import { usePathname, useRouter } from "next/navigation";

export default function VideoMarketing() {


    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);
    const SwiperRef = useRef(null)
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
            SwiperRef.current.slidePrev();
        }
    };

    const handleNxt = () => {
        if (SwiperRef.current) {
            SwiperRef.current.slideNext();
        }
    };

  const router = useRouter();
    const pathname = usePathname();
    
    const handleClick = () => {
        if (pathname === "/") {
          // Already on homepage → scroll
          const section = document.getElementById("pageSpeedChecker");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        } else {
          // Navigate to homepage with hash
          router.push("/?scrollTo=pageSpeedChecker");
        }
      };






    useEffect(() => {
        document.title = "Video Marketing| Solwyz Technologies";
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);



    if (loading) return <Pageloader />;

    const services = [
        {
            title: (<p>YouTube Channel & <br /> Video Ads</p>),
            description:
                "Boost your YouTube presence with engaging and impactful video content.",
            items: [
                "Boost YouTube presence with engaging contents",
                "Create product demos and promotional content",
                "Effectively target the right audience",
                "Expand your brand’s reach",
            ],
        },
        {
            title: (<p>Facebook Video <br /> Marketing</p>),
            description:
                "Leverage Facebook’s massive reach with targeted video campaigns.",
            items: [
                "Leverage Facebook’s massive reach",
                "Promote products, services, or announcements",
                "Craft targeted campaigns for specific demographics",
                "Maximize audience engagement",
            ],
        },
        {
            title: (<p>Instagram <br /> Reels</p>),
            description:
                "Engage your audience with short, creative, and visually stunning reels.",
            items: [
                "Create short-form video contents (15–30 seconds)",
                "Optimize ideas/script for Instagram Reels",
                "Focus on creativity and visual appeal",
                "Attract and retain potential clients",
            ],
        },
        {
            title: (<p>Live <br /> Streaming</p>),
            description:
                "Connect directly with your audience in real-time through live events.",
            items: [
                "Broadcast events, product launches, or milestones live",
                "Connect directly with your audience in real-time",
                "Amplify brand reach instantly",
                "Increase audience interaction",
            ],
        },
        {
            title: (<p>Corporate & Promotional  Videos</p>),
            description:
                "Professionally showcase your business, products, and services.",
            items: [
                "Professionally showcase your business, products and services",
                "Build trust and credibility",
                "Enhance brand reputation",
                "Leave a lasting impression on potential clients",
            ],
        },
    ];




    const steps = [
        {
            title: "Research & Analysis",
            description: "Understand your business, competitors, and audience to create a strategy that works.",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (1).svg",
            image2: "/assets/DetailPages/unHov1.svg"
        },
        {
            title: "Concept & Planning",
            description: "Brainstorming, scripting, and designing of video content aligned with your marketing goals.",
            image: "/assets/DetailPages/undraw.svg",
            image2: "/assets/DetailPages/Frame (2).svg",
            image1: "/assets/DetailPages/Hov2.svg"
        },
        {
            title: "Production & Editing",
            description: "Professional videography, editing, and post-production services to craft videos that drives attention",
            image: "/assets/DetailPages/undraw.svg",
            image2: "/assets/DetailPages/Frame (5).svg",
            image1: "/assets/DetailPages/Hov3.svg"
        },
        {
            title: "Distribution & Promotion",
            description: "Deploy videos across platforms and get maximum reach.",
            image: "/assets/DetailPages/undraw.svg",
            image2: "/assets/DetailPages/Frame (6).svg",
            image1: "/assets/DetailPages/Hov4.svg"
        },
        {
            title: "Guidelines Creation",
            description: "Establishing clear brand guidelines to maintain uniformity across digital, print, and physical touchpoints.",
            image: "/assets/DetailPages/undraw.svg",
            image2: "/assets/DetailPages/Frame (7).svg",
            image1: "/assets/DetailPages/Hov5.svg"
        },
    ];









    const faqs = [
        {
            question: "How long does it take to create a video?",
            answer:
                "The timeline depends on the video type, length, and complexity. Short social media videos may take a few days, while corporate or promotional videos can take several weeks from concept to final delivery.",
        },
        {
            question: "What type of videos generate the best engagement?",
            answer:
                "Videos that tell a story, solve a problem, or provide value to the audience typically perform best. Short, visually appealing videos for social media and informative explainer videos for websites often see high engagement.",
        },
        {
            question: "Can video marketing work for small businesses with limited budgets?",
            answer:
                "Yes. Short-form videos, repurposed content, and micro-video campaigns can be cost-effective while still driving significant engagement and conversions.",
        },
        {
            question: "Do you provide scripts and storyboards for videos?",
            answer:
                "Yes. We develop scripts and storyboards tailored to your goals, ensuring that every video is well-planned and effective.",
        },
        {
            question: "Can videos improve my website SEO?",
            answer:
                "Absolutely. Videos can increase time on site, reduce bounce rates, and encourage backlinks, all of which help boost search engine rankings.",
        },
        {
            question: "How do you measure the success of a video marketing campaign?",
            answer:
                "We track metrics like views, engagement, shares, click-through rates, conversions, and ROI to assess performance and optimize future campaigns.",
        },
        {
            question: "Which platforms are best for video marketing?",
            answer:
                "It depends on your audience. YouTube, Instagram, Facebook, LinkedIn, TikTok, and your website are popular platforms, and we tailor strategies for each platform.",
        },
        {
            question: "Can video marketing help with lead generation?",
            answer:
                "Yes. By including clear calls-to-action, landing pages, and retargeting strategies, videos can effectively capture leads and drive conversions.",
        },
        {
            question: "Do you handle video distribution and promotion?",
            answer:
                "Yes. We ensure your videos reach the right audience across multiple platforms through organic and paid campaigns.",
        },
        {
            question: "How often should I create new video content?",
            answer:
                "Consistency is key. Depending on your goals, we recommend regular posting—weekly or bi-weekly for social media, and periodic updates for corporate and promotional videos.",
        },
    ];


    const benefits = [
        "Proven experience in running ROI-driven influencer campaigns.",
        "Access to verified influencer networks across industries. ",
        "Transparent reporting and performance tracking.",
        "Customised strategies for small, medium, and enterprise businesses.",
        "need content ",
    ];


    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };



    return (
        <div className="">
            <div className="">
                <div className="h-[95px]"></div>

                <div
                    className="text-white md:h-[325px] py-6 md:py-0 flex flex-col  bg-cover bg-top-left md:px-[120px] px-4"
                    style={{ backgroundImage: "url('/assets/DetailPages/BannerSEO.png')" }}
                >
                    <div className="md:flex justify-between md:max-w-[1440px] w-full mx-auto">
                        <div>
                            
                            <h1 className="md:text-[48px] text-[32px] font-medium md:mt-[173px] mt-[197px]"> Video Marketing Services </h1>
                            <p className="text-lg font-light text-[#E0E0E0] mt-2">
                                Engage Your Audience with Visual Storytelling
                            </p>
                        </div>
                        <div className="md:items-end md:justify-end md:text-end">
                            
                            <h4 className="md:text-[18px] font-medium md:mt-[189px] mt-[68px]">Get your free Audit today</h4>
                         
                                <button onClick={handleClick} className="border hover:border-[#04A391] hover:text-[#04A391] duration-300 px-[41px] py-[14px] rounded-lg mt-4 md:ml-[80px]">
                                    Get In Touch{" "}
                                </button>
                                                   </div>
                    </div>
                </div>

                <div className="md:py-12 py-10  bg-white text-[#000000]">
                    <div className="md:max-w-[1540px] mx-auto md:px-[120px] px-4 ">
                        <p className="md:text-[18px] text-base font-medium text-justify text-[#000000]">Video marketing is a strategic approach that uses visual storytelling to promote a brand, product, or service. It engages audiences, conveys information, and drives actions such as brand awareness, lead generation, or sales. By combining expertly crafted, high-quality video content with smart marketing strategies, we help you to reach your ideal audience, boost engagement, and achieve measurable results for your business.</p>

                        {/* <div className="md:mt-[104px] mt-[72px] md:flex justify-between">
                            <div>
                                <h2 className="md:text-[40px] text-[24px] font-semibold md:w-[565px]">Why Influencer Marketing ?</h2>
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
                        </div> */}
                    </div>



                    {/*Our SEO Service Section */}

                    <div className="md:mt-[104px] mt-[72px] md:px-[120px] px-4 relative">
                        <h2 className="md:text-[40px] text-[24px] font-semibold text-center">
                            Our Video Marketing Services
                        </h2>
                        <p className="text-center text-[#888888]">
                            Complete video marketing solutions for your business
                        </p>

                        <div className="bg-white relative max-w-[1550px] mx-auto mt-8">
                            {/* Custom Navigation Arrows */}
                            <div className="flex gap-2 justify-end">
                                <div
                                    onClick={handlePrv}
                                    className="cursor-pointer"
                                >
                                    <img
                                        src="/assets/DetailPages/leftArrow.svg"
                                        alt="Prev"
                                        className="w-11 h-11 cursor-pointer"
                                    />
                                </div>
                                <div onClick={handleNxt}
                                    className="cursor-pointer"
                                >
                                    <img

                                        src="/assets/DetailPages/rightArrow.svg"
                                        alt="Next"
                                        className="w-11 h-11 cursor-pointer"
                                    />
                                </div>
                            </div>

                            <Swiper
                                className="h-[450px]"
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
                                        <div className="relative flex flex-col bg-white shadow-md border border-[#F0F0F0] p-6 hover:shadow-2xl hover:border-none transition duration-300 mt-6 h-[412px] group">
                                            {/* Banner */}
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
                                            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-start h-[50px]">
                                                {service.title}
                                            </h3>

                                            {/* Items */}
                                            <ul className="space-y-3">
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


                    <div className="md:px-[120px] px-4">
                        <section className=" md:px-20  bg-white  mt-[72px]">
                            <div className="text-center ">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    How we work
                                </h2>
                                <p className="text-gray-500 mt-2">
                                    Complete video marketing solutions for your business
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
                                                src={activeIndex === index ? step.image1 : step.image2}
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
                                                className="rounded-md mt-3"
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
                                        <div className="md:flex justify-end items-center mt-6 md:mt-0 gap-4 whitespace-nowrap">
                                            <p className="text-transparent text-[16px]  bg-clip-text bg-gradient-to-r from-[#04A391] to-[#013D36] font-medium">Lets grow your online <br className="md:hidden block" /> Presence</p>
                                            <Link href="/contact">
                                                <button className="px-5 py-2 mt-3 md:mt-0 border text-[16px] cursor-pointer font-semibold border-teal-600 text-transparent bg-clip-text bg-gradient-to-r from-[#04A391] to-[#013D36]  rounded-md  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l hover:from-[#04A391] hover:to-[#013D36] duration-300 transition">
                                                    Get in Touch
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div>

                    </div>


                    <div className="md:px-[120px] px-4 max-w-[1550px] mx-auto">
                        <div>
                            <h2 className="md:text-[48px] text-[32px] font-light text-[#027366] text-center md:mt-[104px] mt-[72px]">Don’t wait to make your brand visible and engaging.
                                Lets create video marketing campaigns
                                that amplify your business growth.</h2>
                            <img className="justify-center items-center mx-auto" src="/assets/DetailPages/Rocket.svg" alt="" />
                        </div>

                        {/* form */}

                        <div>
                            <div className={`md:flex md:items-center md:justify-center bg-white rounded-lg md:p-[56px] p-4 max-w-6xl mx-auto mt-4 md:mt-12 ${styles['custom-shadow']}`}>
                                {/* Left Side Image + Text */}
                                <div className="md:w-1/2 flex flex-col items-center text-center mb-8 md:mb-0">
                                    <p className="text-teal-700 font-medium text-2xl md:hidden block">
                                        Contact us today to discuss your <br />
                                        project and get a tailored video <br />
                                        marketing solution.
                                    </p>
                                    <img
                                        src="/assets/DetailPages/FormPic.svg"
                                        alt="Form Illustration"
                                        className="w-[250px] md:w-[300px] mb-6 md:mt-0 mt-4"
                                    />
                                    <p className="text-teal-700 font-medium text-2xl hidden md:block">
                                          Contact us today to discuss your <br />
                                        project and get a tailored video <br />
                                        marketing solution.
                                    </p>
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
                                                 <option value="Video Marketing">Video Marketing</option>
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
                        <p className="text-teal-600 md:text-2xl font-medium text-2xl text-center mb-8">On Video Marketing</p>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-[#E3E3E3] rounded-md px-6 py-4 cursor-pointer "
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


