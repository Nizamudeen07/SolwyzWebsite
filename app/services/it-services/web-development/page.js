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
export default function WebDevelopmentPage() {


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
            SwiperRef.current.slidePrev()
        }
    }
    const handleNxt = () => {
        if (SwiperRef.current) {
            SwiperRef.current.slideNext()
        }
    }




    useEffect(() => {
        document.title = "Web Development | Solwyz Technologies";
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Pageloader />;

    const services = [
        {
            title: "Custom Website Development",
            description:
                "Build websites tailored to your business needs and target audience.",
            items: [
                "Corporate websites & brand portals",
                "Portfolio & showcase websites",
                "Responsive & mobile-friendly design",
                "SEO-optimized architecture",
            ],
        },
        {
            title: "E-commerce Development",
            description: "Turn your product-based business into a 24/7 online store.",
            items: [
                "WooCommerce, Shopify, Magento",
                "Secure payment integration",
                "Inventory & order management systems",
                "User-friendly shopping experiences",
            ],
        },
        {
            title: "Web Applications & SaaS Solutions",
            description:
                "Develop scalable, high-performance applications for business efficiency.",
            items: [
                "Custom web apps & portals",
                "Cloud-based SaaS solutions",
                "API integrations and automation",
                "Dashboard & analytics solutions",
            ],
        },
        {
            title: "Website Maintenance & Optimization",
            description: "Keep your website secure and updated.",
            items: [
                "Security updates & vulnerability fixes",
                "Performance monitoring & speed optimization",
                "Feature upgrades & enhancements",
                "Technical support",
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









    const faqs = [{
        question: "How long does it take to build a custom website?",
        answer:
            "The timeline depends on features and complexity. A simple business website can take 3–6 weeks, while complex e-commerce or SaaS platforms may take 3–6 months.",
    },
    {
        question: "I only have a business idea, no design or content. Can you help?",
        answer:
            "Yes! We create wireframes, design UI/UX, and build your website from scratch while guiding you throughout the process.",
    },
    {
        question: "Do you provide website hosting and domain support?",
        answer:
            "Absolutely. We assist with domain registration, hosting setup, and smooth deployment of your website.",
    },
    {
        question: "How do you ensure website security?",
        answer:
            "We implement SSL encryption, secure authentication, and regular vulnerability monitoring to protect your website and user data.",
    },
    {
        question: "Can you integrate third-party systems like ERP or CRM?",
        answer:
            "Yes, we integrate APIs, payment gateways, and business systems for seamless operations.",
    },
    {
        question: "Can I update my website after launch?",
        answer:
            "Yes, we provide ongoing maintenance and support for feature updates, performance improvements, and security enhancements.",
    },];

    const benefits = [
        {
            title: "Requirement Analysis",
            desc: (<p>Understand your business, goals, and  target audience</p>),
        },
        {
            title: "UI/UX Design",
            desc: (<p>Craft engaging, intuitive, and <br /> user-friendly  interfaces</p>),
        },
        {
            title: "Development",
            desc: (<p>Build secure, scalable, and <br /> SEO-friendly websites</p>),
        },
        {
            title: "Testing & QA",
            desc: (<p>smooth functionality across devices and <br className="md:hidden block" /> browsers</p>),
        },
        {
            title: "Launch & Deployment",
            desc: (<p>Deploy your website with <br /> full optimization</p>),
        },
        {
            title: "Ongoing Maintenance",
            desc: (<p>Continuous updates, support, and <br /> improvements</p>),
        },
    ];

    const stack = [
        {
            category: "Frontend",
            items: ["React", "Angular", "Vue.js", "HTML5", "CSS3", "JavaScript"],
        },
        {
            category: "Backend",
            items: ["Node.js", "Python (Django, Flask)", "PHP (Laravel)", "Java (Spring)"],
        },
        {
            category: "Database",
            items: ["MySQL", "PostgreSQL", "MongoDB"],
        },
        {
            category: "Cloud & Hosting",
            items: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Hostinger"],
        },
        {
            category: "Tools & Collaboration",
            items: ["Git", "Jira", "Figma", "Postman"],
        },
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
                            <h2 className="md:text-[16px] font-medium text-[#BCBCBC] mt-[30px] md:hidden block"></h2>
                            <h1 className="md:text-[48px] text-[32px] font-medium md:mt-[173px] mt-[197px]"> Web Development Services </h1>
                            <p className="text-lg font-light text-[#E0E0E0] mt-2">
                                Create High-Performing Websites That Generate More Leads
                            </p>
                        </div>
                        <div className="md:items-end md:justify-end md:text-end">
                            <h2 className="md:text-[16px] font-medium text-[#BCBCBC] md:mt-6 hidden md:block"></h2>
                            <h4 className="md:text-[18px] font-medium md:mt-[189px] mt-[68px]">Get Your Free Consultation</h4>
                            <Link href="/contact">
                                <button className="border hover:border-[#04A391] hover:text-[#04A391] duration-300 px-[41px] py-[14px] rounded-lg mt-4 md:ml-[80px]">
                                    Get In Touch{" "}
                                </button>
                            </Link>                        </div>
                    </div>
                </div>

                <div className="md:py-12 py-10  bg-white text-[#000000]">
                    <div className="md:max-w-[1540px] mx-auto md:px-[120px] px-4 ">
                        <p className="md:text-[18px] text-base font-medium text-justify text-[#000000]">Your website is the first impression potential customers have with your business. A slow,outdated, or poorly designed website can cost leads, trust, and revenue. That&apos;s why we help you to build fast, responsive, and visually stunning websites that attract visitors, engage customers, and generate more revenue for your business</p>

                        <div className="md:mt-[104px] mt-[72px] md:flex justify-between">
                            <div>
                                <h3 className="md:text-[40px] text-[24px] font-semibold md:w-[565px]">Why a strong website
                                    matters</h3>
                                <div>
                                    <img className="md:w-[557px] w-[361px] md:h-[408px] h-[240px] md:hidden block mt-6" src="/assets/DetailPages/DetailPageImg.png" alt="" />
                                </div>
                                <ul className="mt-8 space-y-6">
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-0 md:py-3 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" /> 70% of users judge a business’s credibility based on its website </li>

                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-0 md:py-3 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" />Responsive websites boost user engagement across devices</li>
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-0 md:py-3 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" />Custom websites improve operational efficiency </li>
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-0 md:py-3 text-[14px] font-medium text-[#373737]">A professional website not only showcases your brand but also acts as a 24/7 sales and marketing tool, driving more leads and opportunities for your business.</li>


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
                            Our Web Services
                        </h2>
                        {/* <p className="text-center text-[#888888]">Complete influencer marketing solutions for your business</p> */}

                        <div className=" bg-white relative max-w-[1550px] mx-auto">
                            {/* Custom Navigation Arrows */}
                           <div className="md:hidden block">
                                <div className="flex gap-2 justify-end">
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
                                        <div className="relative flex flex-col bg-white shadow-md border border-[#F0F0F0] p-6 hover:shadow-2xl hover:border-none transition duration-300 mt-6 h-[480px] group">
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
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-start w-[240px]">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm  text-start mt-4 w-[250px] ">
                                                {service.description}
                                            </p>

                                            {/* Items */}
                                            <ul className="space-y-3  py-6 ">
                                                {service.items.map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-center  gap-2 text-sm text-[#066C60]"
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


                    <div className="bg-black text-white py-16 md:px-[120px] px-6 md:py-[104px]">
                        <div className="max-w-[1300px] mx-auto">
                            {/* Row 1: Heading + 2 Cards */}
                            <div className="md:flex justify-between space-y-16 gap-12 items-start mb-12 md:mb-0">
                                {/* Heading */}
                                <div>
                                    <h3 className="text-teal-400 md:text-[40px] text-2xl mt-6 font-medium leading-snug md:w-[434px]">
                                        Our Web Development <br /> Process
                                    </h3>
                                </div>

                                {/* First two cards */}
                                <div className={`md:flex gap-12 space-y-20 ${styles.customMl}`}>
                                    {benefits.slice(0, 2).map((benefit, index) => (
                                        <div
                                            key={index}
                                            className=" relative border border-[#1E3C34] rounded-lg px-6 pt-14 pb-8 text-start  transition h-[172px] md:w-full"
                                        >
                                            {/* Icon - top centered */}
                                            <div className="absolute -top-[38px] left-[60px] -translate-x-1/2">
                                                <img src="/assets/DetailPages/webbenifit.svg" alt="icon" />
                                            </div>

                                            {/* Text */}
                                            <h4 className="text-[16px] font-medium mb-2">{benefit.title}</h4>
                                            <p className="text-gray-300 text-[14px] leading-relaxed">
                                                {benefit.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Row 2: 4 Cards */}
                            <div className="grid md:grid-cols-4 gap-12 mt-20 md:mt-0  space-y-10 md:space-y-0">
                                {benefits.slice(2).map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="relative border border-[#1E3C34] rounded-lg px-6 pt-14 pb-8 text-start transition h-[186x] md:w-full "
                                    >
                                        {/* Icon - top centered */}
                                        <div className="absolute -top-[38px] left-[60px] -translate-x-1/2">
                                            <img src="/assets/DetailPages/webbenifit.svg" alt="icon" />
                                        </div>

                                        {/* Text */}
                                        <h4 className="text-[16px] font-medium mb-2">{benefit.title}</h4>
                                        <p className="text-gray-300 text-[14px] leading-relaxed">
                                            {benefit.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="bg-white md:py-[104px] py-[71px] px-6 md:px-[120px] text-center">
                            <div className="">
                                {/* Heading */}
                                <h3 className="text-3xl md:text-4xl font-semibold text-black mb-4">
                                    Our Tech Stack
                                </h3>
                                <p className="text-gray-500 mb-12">
                                    Our tech stack empowers innovation, scalability, and seamless digital
                                    solutions.
                                </p>

                                {/* Categories */}
                                <div className="space-y-10 max-w-[1550px] mx-auto">
                                    {stack.map((section, index) => (
                                        <div key={index} className="border-b border-[#E4E4E4] last:border-b-0 pb-6">
                                            <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                                                {/* Category Name */}
                                                <div className=" shrink-0 text-[18px] md:text-left text-center font-medium md:w-[179px] text-[#000000] mb-4 md:mb-0">
                                                    {section.category}
                                                </div>

                                                {/* Tech Items */}
                                                <div className="flex flex-wrap gap-4 md:ml-[47px]">
                                                    {section.items.map((item, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-4 py-2 border border-[#E2E2E2] rounded-2xl  text-base font-medium text-[#047367] transition"
                                                        >
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:mt-0 mt-[72px] md:px-[120px] px-4">
                        <h3 className="md:text-[32px] font-semibold text-[24px] text-center">
                            Why Choose Us
                        </h3>
                        <p className="md:text-[18px] font-medium text-[#888888] text-center hidden md:block">Why Choose Us: Trusted, innovative, and result-driven solutions.</p>

                        <div className="md:flex grid grid-cols-2 md:w-[1110px] mx-auto justify-center text-center gap-[48px] md:mt-[64px] mt-10">
                            <div>
                                <div className="border hover:bg-[#D2EDEA] duration-300 w-[134px] h-[134px] border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/WhiteHAt.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    End-to-End 
                                   
                                  Web Development Solutions
                                </p>
                            </div>

                            <div>
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300  border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/ExpertTeam.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    Experienced Developers & Designers
                                </p>
                            </div>

                            <div>
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300  border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/CustomizedSEO.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                  Mobile-Responsive & SEO-Friendly Websites
                                </p>
                            </div>

                            <div>
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300  border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/Transparent.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    Agile Methodology for Timely Delivery
                                </p>
                            </div>


                            <div className="col-span-2 md:col-span-1">
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300 border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/ServingBoth.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                   Serving Clients Globally
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="md:px-[120px] px-4">
                        <div>
                            <h2 className="md:text-[48px] text-[32px] font-light text-[#027366] text-center md:mt-[104px] mt-[72px]">Your competitors are already leveraging <br />
                                professional websites to grow their business. <br />
                                Don’t fall behind.</h2>
                            <img className="justify-center items-center mx-auto" src="/assets/DetailPages/Rocket.svg" alt="" />
                        </div>

                        {/* form */}

                        <div>
                            <div className={`md:flex md:items-center md:justify-center bg-white ${styles['custom-shadow']} md:p-[56px] p-4 max-w-6xl mx-auto mt-4 md:mt-12`}>
                                {/* Left Side Image + Text */}
                                <div className="md:w-1/2 flex flex-col items-center text-center mb-8 md:mb-0">
                                    <p className="text-teal-700 font-medium text-2xl md:hidden block">
                                        Contact Us Today & Get a <br />
                                        Free Website Consultation
                                    </p>
                                    <img
                                        src="/assets/DetailPages/FormPic.svg"
                                        alt="Form Illustration"
                                        className="w-[250px] md:w-[300px] mb-6 md:mt-0 mt-4"
                                    />
                                    <p className="text-teal-700 font-medium text-2xl hidden md:block">
                                        Contact Us Today & Get a <br />
                                        Free Website Consultation
                                    </p>
                                </div>

                                {/* Right Side Form */}
                                <div className="md:w-1/2 w-full">
                                    <h3 className="text-[#00796B] md:font-semibold font-medium md:text-start text-center text-2xl md:mb-8 mb-6">
                                        Take Your Business to the Top
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
                                                <option value="Web Development">Web Development</option>
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
                                                <option value="App Development">App Development</option>
                                                <option value="ERP Solutions">ERP Solutions</option>
                                                <option value="CRM Solutions">CRM Solutions</option>
                                               
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

                    <div className=" mx-auto px-4 md:py-[104] py-[72px] md:px-[120px] max-w-[1550px]  ">
                        <h3 className="text-2xl md:text-[32px] font-semibold text-center mb-2">
                            Frequently Asked Questions
                        </h3>
                        <p className="text-teal-600 md:text-2xl font-medium text-2xl text-center mb-8">On Web Development Service</p>

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

