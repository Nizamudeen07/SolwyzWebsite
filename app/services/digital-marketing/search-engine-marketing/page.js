"use client"; // ✅ Required for client-side logic

import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Plus, Minus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import styles from "./page.module.css";
import Api from "../../../../Service/Api";
import { usePathname, useRouter } from "next/navigation";

export default function SearchEngineMarketing() {

    const SwiperRef = useRef(null);

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

    const services = [
        {
            title: "Search Advertising",
            description:
                "Place your ads on search engines like Google, Bing, and Yahoo to capture users actively searching for your products or services. We conduct keyword research, craft compelling ad copy, and manage bids to maximise your ROI.",
            items: [
                "Logo design",
                "Logo mockups",
                "Colour palette & typography",
                "Brand guidelines",
            ],
        },
        {
            title: "Display Advertising",
            description:
                "Design and manage display ad campaigns across Google Display Network, Facebook, LinkedIn, and other platforms. Reach potential customers where they spend their time online.",
            items: [
                "Brand positioning",
                "Brand tone & voice",
                "Messaging framework",
                "Strategic branding plan",
            ],
        },
        {
            title: "YouTube & Video Ads",
            description:
                "Leverage video advertising on YouTube and partner sites to capture attention, increase brand awareness, and drive engagement. Our team creates impactful video ads optimized for clicks and conversions.",
            items: [
                "Corporate brochures",
                "Flyers & handouts",
                "Infographic layouts",
                "Print-ready design",
            ],
        },
        {
            title: "Retargeting Ads",
            description:
                "Target users who have already visited your website with customized ads that follow them across platforms. Our remarketing campaigns increase brand recall and encourage users to complete their purchase or inquiry.",
            items: [
                "Investor & client presentations",
                "Slide deck templates",
                "Visual storytelling",
                "Data visualization",
            ],
        },
        {
            title: "Shopping Ads",
            description:
                "Promote your products directly in search results and shopping feeds. Our experts set up Google Shopping campaigns and optimize product listings to maximize sales and conversions.",
            items: [
                "Custom business cards",
                "Branded letterheads",
                "Email signature design",
                "Stationery branding",
            ],
        },
        {
            title: "Local Search Optimization",
            description:
                "Optimize your business for local search results, including Google My Business listings, local landing pages, and reviews. Reach nearby customers actively searching for your services.",
            items: [
                "Product packaging design",
                "Labels & tags",
                "Unboxing experience",
                "Brand-consistent graphics",
            ],
        },
        {
            title: "Landing Page Optimization",
            description:
                "Create and optimize landing pages that convert visitors into leads or customers. Our team designs pages with compelling copy, strong CTAs, and tested layouts to improve conversion rates",
            items: [
                "Event & exhibition displays",
                "Shopfront & office signage",
                "Banners & standees",
                "Promotional displays",
            ],
        },

    ];


    const steps = [
        {
            title: "Understand Your Business",
            description: "Learn about your goals, audience, and competitors.",
            image: "/assets/DetailPages/undraw.svg",
            image2: "/assets/DetailPages/Frame (1).svg",
            image1: "/assets/DetailPages/unHov1.svg"
        },
        {
            title: "Research & Plan",
            description: "Conduct detailed keyword research, audience study, and competitor analysis.",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (2).svg",
            image2: "/assets/DetailPages/Hov2.svg"
        },
        {
            title: "Execute the Strategy",
            description: "Launch campaigns across search, display, video, remarketing, and shopping ads.",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (5).svg",
            image2: "/assets/DetailPages/Hov3.svg"
        },
        {
            title: "Monitor Performance",
            description: "Track campaigns using advanced analytics tools to optimize results",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (6).svg",
            image2: "/assets/DetailPages/Hov4.svg"
        },
        {
            title: "Report & Improve",
            description: "Provide transparent reports and refine campaigns for continuous growth.",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (7).svg",
            image2: "/assets/DetailPages/Hov5.svg"
        },
    ];



    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        document.title = "SEM Services | Solwyz Technologies";
    }, []);


    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is Search Engine Marketing (SEM)?",
            answer:
                "SEM is a digital marketing strategy that places paid ads on search engines to increase visibility and generate targeted traffic.",
        },
        {
            question: "How is SEM different from SEO?",
            answer:
                "SEO focuses on organic rankings and long-term traffic growth, while SEM provides immediate visibility through paid ads.",
        },
        {
            question: "How soon can I see results from SEM/PPC campaigns?",
            answer:
                "PPC campaigns can generate leads almost instantly, while SEO results may take 3–6 months.",
        },
        {
            question: "Do you work with small businesses and startups?",
            answer:
                "Yes, we create customized SEM strategies for businesses of all sizes, from startups to large enterprises.",
        },
        {
            question: "How much do SEM/PPC services cost?",
            answer:
                "Pricing depends on your goals and campaign scope. Request a free audit for a personalized quote.",
        },
        {
            question: "Can I track the results of my campaigns?",
            answer:
                "Absolutely. We provide detailed reports showing traffic growth, lead generation, and ROI.",
        },
    ];


    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
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

    return (
        <div className="">
            <div className="">
                <div className="h-[95px]"></div>

                <div
                    className="text-white md:h-[325px] h-[557px] flex flex-col  bg-cover bg-top-left md:px-[120px] px-4"
                    style={{ backgroundImage: "url('/assets/DetailPages/BannerSEO.png')" }}
                >
                    <div className="md:flex justify-between md:max-w-[1540px] w-full mx-auto">
                        <div>

                            <h1 className="md:text-[48px] text-[32px] font-medium md:mt-[173px] mt-[197px]">Search Engine Marketing Services</h1>
                            <p className="text-lg font-light text-[#E0E0E0] mt-2">
                                Drive Instant Leads & Outrank Competitors with Targeted SEM Campaigns
                            </p>
                        </div>
                        <div className="md:items-end md:justify-end md:text-end">

                            <h4 className="md:text-[18px] font-medium md:mt-[189px] mt-[68px]">Get your free SEM Audit today</h4>

                            <button onClick={handleClick} className="border hover:border-[#04A391] hover:text-[#04A391] duration-300 px-[41px] py-[14px] rounded-lg mt-4 md:ml-[80px]">
                                Get In Touch{" "}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="md:px-[120px] px-4 md:py-12 py-10  bg-white text-[#000000]">
                    <div className="md:max-w-[1440px] mx-auto">
                        <p className="md:text-[18px] text-base font-medium text-justify text-[#000000]">
                            Your potential customers are searching for products or services like yours online right
                            now. Make sure your audience finds you before they find your competitors. At Solwyz
                            Technologies, we help you to do search engine marketing campaigns that deliver
                            measurable results and high-quality leads.

                        </p>

                        <div className="md:mt-[104px] mt-[72px] md:flex justify-between">
                            <div>
                                <h2 className="md:text-[40px] text-[24px] font-semibold md:w-[565px]">Why SEM & PPC Is Critical for Your Business</h2>
                                <div>
                                    <img className="md:w-[557px] w-[361px] md:h-[408px] h-[240px] md:hidden block mt-6" src="/assets/DetailPages/DetailPageImg.png" alt="" />
                                </div>
                                <ul className="mt-8 space-y-6">
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-2 md:py-2 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" />Immediate Visibility: Unlike SEO, SEM gets your brand in front of the right audience
                                        instantly.
                                    </li>
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-2 md:py-2 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" />Highly Targeted Ads: Reach users based on location, interests, demographics, and
                                        search intent.
                                    </li>
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-2 md:py-2 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" />Cost-Effective Marketing: You only pay for actual clicks, maximizing your ROI.
                                    </li>
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-2 md:py-2 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" />Data-Driven Results: Every campaign is optimized using real-time analytics to improve
                                        performance.
                                    </li>
                                    <li className="md:w-[588px] w-full px-4 md:px-2 md:py-2">Outrank Competitors: Secure top ad positions and stay ahead in the digital marketplace.</li>
                                </ul>
                            </div>
                            <div>
                                <img className="md:w-[636px] w-[361px] md:h-[480px] h-[240px] hidden md:block" src="/assets/DetailPages/DetailPageImg.png" alt="" />
                            </div>
                        </div>
                    </div>



                    {/*Our SEO Service Section */}

                    <div className="md:mt-[104px] mt-[72px] md:px-0 px-0">
                        <h2 className="md:text-[40px] text-[24px] font-bold text-center">
                            Our SEM & PPC Services
                        </h2>
                        <div className=" bg-white relative max-w-[1550px] mx-auto">
                            {/* Custom Navigation Arrows */}
                            <div className="flex gap-2 justify-end mt-6">
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
                                        <div className="relative flex flex-col bg-white shadow-md border border-[#F0F0F0] p-6 hover:shadow-2xl hover:border-none transition duration-300 mt-6 h-[400px] group">
                                            {/* Banner Top Right */}
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
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-start h-[50px]">
                                                {service.title}
                                            </h3>


                                            <p className="text-gray-600 text-sm mb-4  mt-4 w-full text-justify ">
                                                {service.description}
                                            </p>

                                            {/* Items */}
                                            {/* <ul className="space-y-3 mt-8">
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
                                            </ul> */}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>


                    {/* SEO Process Section */}

                    <section className=" md:px-20  bg-white md:mt-0 mt-[72px]">
                        <div className="text-center ">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Our SEM & PPC Process
                            </h2>
                            <p className="text-gray-500 mt-2">
                                Our SEO approach is focused on delivering long-term growth for your business.
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
                            Trusted SEM Services for <br />
                            Your Business
                        </h3>

                        <div className="md:flex grid grid-cols-2 md:w-[1110px] mx-auto justify-center text-center gap-[48px] md:mt-[64px] mt-10">
                            <div>
                                <div className="border hover:bg-[#D2EDEA] duration-300 w-[134px] h-[134px] border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/WhiteHAt.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    Extensive SEM <br />
                                    expertise
                                </p>
                            </div>

                            <div>
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300  border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/ExpertTeam.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    Customized <br />
                                    Solutions
                                </p>
                            </div>

                            <div>
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300  border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/CustomizedSEO.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    Data-Driven <br />
                                    Strategies
                                </p>
                            </div>

                            <div>
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300  border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/Transparent.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    Transparent <br />
                                    Reporting
                                </p>
                            </div>


                            <div className="col-span-2 md:col-span-1">
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300 border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/ServingBoth.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    24/7 <br />
                                    Support
                                </p>
                            </div>
                        </div>
                    </div>



                    <div>
                        <div>
                            <h2 className="md:text-[48px] text-[32px] font-light text-[#027366] text-center md:mt-[104px] mt-[72px]">
                                Your customers are searching online right now. <br />
                                If they don&apos;t find you, they&apos;ll find your competitor. <br />
                                Don&apos;t let that happen.
                            </h2>

                            <img className="justify-center items-center mx-auto" src="/assets/DetailPages/Rocket.svg" alt="" />
                        </div>

                        {/* form */}

                        <div>
                            <div className={`md:flex md:items-center md:justify-center bg-white ${styles['custom-shadow']} rounded-lg md:p-[56px] p-4 max-w-6xl mx-auto mt-4 md:mt-12`}>
                                {/* Left Side Image + Text */}
                                <div className="md:w-1/2 flex flex-col items-center text-center mb-8 md:mb-0">
                                    <p className="text-teal-700 font-medium text-2xl md:hidden block">
                                        Fill out the form below to get a <br />
                                        FREE strategy session with <br />
                                        our SEM experts
                                    </p>
                                    <img
                                        src="/assets/DetailPages/FormPic.svg"
                                        alt="Form Illustration"
                                        className="w-[250px] md:w-[300px] mb-6 md:mt-0 mt-4"
                                    />
                                    <p className="text-teal-700 font-medium text-2xl hidden md:block">
                                        Fill out the form below to get a <br />
                                        FREE strategy session with <br />
                                        our SEM experts
                                    </p>
                                </div>

                                {/* Right Side Form */}
                                <div className="md:w-1/2 w-full">
                                    <h3 className="text-[#00796B] md:font-semibold font-medium md:text-start text-center text-2xl md:mb-8 mb-6">
                                        Ready to Grow Your Business?
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
                                                <option value="Search Engine Marketing">
                                                    Search Engine Marketing
                                                </option>
                                                <option value="SEO Services">SEO Services</option>
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

                    <div className=" mx-auto  md:py-[104] py-[72px] max-w-[1550px] ">
                        <h3 className="text-2xl md:text-[32px] font-semibold text-center mb-2">
                            Frequently Asked Questions
                        </h3>
                        <p className="text-teal-600 md:text-2xl font-medium text-2xl text-center mb-8">On SEM Services</p>

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


