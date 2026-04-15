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
import TechStack from "../../../components/TechStack/TechStack";
import Link from "next/link";
import styles from "./page.module.css"
import Api from "../../../../Service/Api";

export default function ERPDetailPage() {


    const [loading, setLoading] = useState(true);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);
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



    useEffect(() => {
        document.title = "ERP Service | Solwyz Technologies";
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
            title: "Discovery & Business Analysis",
            description: "Map existing workflows and pain points",
            image: "/assets/DetailPages/undraw.svg",
            image2: "/assets/DetailPages/Frame (1).svg",
            image1: "/assets/DetailPages/unHov1.svg"
        },
        {
            title: "ERP Strategy & Planning",
            description: "Define goals, modules, and implementation roadmap",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (2).svg",
            image2: "/assets/DetailPages/Hov2.svg"
        },
        {
            title: "Implementation & Integration",
            description: "Configure, migrate, and connect with existing tools",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (5).svg",
            image2: "/assets/DetailPages/Hov3.svg"
        },
        {
            title: "Training & Change Management",
            description: "Ensure smooth adoption across teams",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (6).svg",
            image2: "/assets/DetailPages/Hov4.svg"
        },
        {
            title: "Monitoring & Continuous Improvement",
            description: "Optimize performance and add new features as you scale",
            image: "/assets/DetailPages/undraw.svg",
            image1: "/assets/DetailPages/Frame (7).svg",
            image2: "/assets/DetailPages/Hov5.svg"
        },
    ];












    const faqs = [
        {
            question: "Which ERP platforms do you work with?",
            answer:
                "We support SAP, Odoo, Oracle NetSuite, Microsoft Dynamics, Zoho, and custom ERP solutions.",
        },
        {
            question: "How long does ERP implementation take?",
            answer:
                "Basic deployments take 2–3 months, while enterprise-grade rollouts may take 6–12 months depending on scope.",
        },
        {
            question: "Can small businesses use ERP?",
            answer:
                "Absolutely. We offer modular ERP solutions that are affordable and scale with SMEs as they grow.",
        },
        {
            question: "Will ERP integrate with my existing systems?",
            answer:
                "Yes. We ensure seamless integration with CRM, HRMS, e-commerce, and accounting platforms.",
        },
        {
            question: "How much does ERP implementation cost?",
            answer:
                "Pricing depends on modules, users, and customization needs. We provide tailored packages after a free consultation.",
        },
     
    ];



    const benefits = [
        {
            title: "Centralized Management",
            desc: "Manage finance, HR, sales, inventory, and operations from a single platform",
        },
        {
            title:(<p> Customizable <br className="hidden md:block" /> Modules</p>),
            desc: "Tailor dashboards, workflows, and reports to your business requirements",
        },
        {
            title: (<p>Seamless <br className="hidden md:block" /> Integration</p>),
            desc: "Connect with CRM, eCommerce, HRMS, and other systems effortlessly",
        },
        {
            title: (<p>Real-Time <br className="hidden md:block" /> Insights</p>),
            desc:(<> Access actionable analytics and reporting for <br className="md:hidden block" /> informed decision-making</>),
        },
        {
            title: "Cloud & On-Premise Options",
            desc: (<p>Choose deployment that suits your <br /> business model</p>),
        },
        {
            title: (<p>Secure & <br className="hidden md:block" /> Scalable</p>),
            desc: (<>Built with advanced security and scalability <br className="md:hidden block" /> for long-term growth</>),
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
            items: ["AWS", "Azure", "Google Cloud", "Docker"],
        },
        {
            category: "Tools & Collaboration",
            items: ["Git", "Jira", "Figma", "Postman"],
        },
    ];

    const industries = [
        {
            title: "Manufacturing & Supply Chain",
            desc: "Optimize production and inventory operations for efficiency",
        },
        {
            title: "Retail & E-Commerce",
            desc: "Streamline sales, stock, and order management",
        },
        {
            title: "Healthcare & Pharma",
            desc: "Manage patients, inventory, and compliance efficiently",
        },
        {
            title: "Real Estate & Construction",
            desc: "Track projects, budgets, and resources effectively",
        },
        {
            title: "Education & Institutions",
            desc: "Automate administration, student, and staff workflows",
        },
        {
            title: "Finance & Professional Services",
            desc: "Simplify accounting, reporting, and client management",
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
                            
                            <h1 className="md:text-[48px] text-[32px] font-medium md:mt-[173px] mt-[197px]"> ERP Services  </h1>
                            <p className="text-lg font-light text-[#E0E0E0] mt-2">
                                The Complete ERP Solution for Smarter Businesses
                            </p>
                        </div>
                        <div className="md:items-end md:justify-end md:text-end">
                            
                            <h4 className="md:text-[18px] font-medium md:mt-[189px] mt-[68px]">Book a Free ERP Consultation Today</h4>
                            <Link href="/contact">
                                <button className="border hover:border-[#04A391] hover:text-[#04A391] duration-300 px-[41px] py-[14px] rounded-lg mt-4 md:ml-[80px]">
                                    Get In Touch{" "}
                                </button>
                            </Link>                        </div>
                    </div>
                </div>

                <div className="md:py-12 py-10   bg-white text-[#000000] ">
                    <div className="md:max-w-[1540px] mx-auto md:px-[120px] px-4 ">
                        <p className="md:text-[18px] text-base font-medium text-justify text-[#000000]">Unify your business operations with our next-gen ERP solutions. From finance and HR to supply chain, sales, and customer management. We design, implement, and support ERP systems that help your business scale faster and perform better.</p>

                        <div className="md:mt-[104px] mt-[72px] md:flex justify-between">
                            <div>
                                <h2 className="md:text-[40px] text-[24px] font-semibold md:w-[565px]">Why Modern Businesses
                                    Need ERP</h2>
                                <div>
                                    <img className="md:w-[557px] w-[361px] md:h-[408px] h-[240px] md:hidden block mt-6" src="/assets/DetailPages/DetailPageImg.png" alt="" />
                                </div>
                                <ul className="mt-8 space-y-6">
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-0 md:py-3 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" /> Centralizing operations in a single platform</li>

                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-0 md:py-3 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" />Automating workflows to reduce errors & save time</li>
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-0 md:py-3 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" />Providing real-time visibility for smarter decision-making</li>
                                    <li className="  flex py-3 md:w-[588px] w-full px-4 md:px-0 md:py-3 bg-[#F3F3F3] rounded-lg text-[16px] font-medium text-[#373737]"><img className="md:ml-4 mr-2" src="/assets/DetailPages/DetailpageArrow.svg" alt="" />Improving collaboration across departments</li>


                                </ul>
                            </div>
                            <div>
                                <img className="md:w-[557px] w-[361px] md:h-[424px] h-[240px] hidden md:block" src="/assets/DetailPages/DetailPageImg.png" alt="" />
                            </div>
                        </div>
                    </div>



                    <div className="bg-black text-white py-16 md:px-[120px] px-6 md:py-[104px] mt-[120px]">
                        <div className="max-w-[1300px] mx-auto">
                            {/* Row 1: Heading + 2 Cards */}
                            <div className="md:flex  space-y-16 items-start mb-12 md:mb-0">
                                {/* Heading */}
                                <div>
                                    <h3 className="text-teal-400 md:text-[40px] text-2xl mt-6 font-medium leading-snug md:w-[434px]">
                                        Key Features of Our <br />
                                        ERP Solution
                                    </h3>
                                </div>

                                {/* First two cards */}
                                <div className={`md:flex gap-12 space-y-20 ${styles.customMl}`}>
                                    {benefits.slice(0, 2).map((benefit, index) => (
                                        <div
                                            key={index}
                                            className=" relative border border-[#1E3C34] rounded-lg px-6 pt-14 pb-8 text-start  transition md:h-[224px] md:w-full"
                                        >
                                           {/* Icon - top centered */}
                                            <div className="absolute -top-[38px] left-[60px] -translate-x-1/2">
                                                <img src="/assets/DetailPages/erprank.svg" alt="icon" />
                                            </div>

                                            {/* Text */}
                                            <h4 className="text-[20px] font-medium mb-2">{benefit.title}</h4>
                                            <p className="text-gray-300 text-[14px] leading-relaxed">
                                                {benefit.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Row 2: 4 Cards */}
                            <div className="grid md:grid-cols-4 gap-12 mt-20 md:mt-0 md:space-y-0 space-y-10">
                                {benefits.slice(2).map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="relative border border-[#1E3C34] rounded-lg px-6 pt-14 pb-8 text-start  transition h-[186x] md:w-full "
                                    >
                                        {/* Icon - top centered */}
                                        <div className="absolute -top-[38px] left-[60px] -translate-x-1/2">
                                            <img src="/assets/DetailPages/erprank.svg" alt="icon" />
                                        </div>

                                        {/* Text */}
                                        <h4 className="text-[20px] font-medium mb-2">{benefit.title}</h4>
                                        <p className="text-gray-300 text-[14px] leading-relaxed">
                                            {benefit.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* SEO Process Section */}

                    <div className="md:px-[120px] px-4">
                        <section className=" md:px-20  bg-white md:mt-[104px] mt-[72px]">
                            <div className="text-center ">
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    Our ERP Implementation Process
                                </h3>
                                {/* <p className="text-gray-500 mt-2">
                                    Our SMM approach is focused on delivering long-term growth for your
                                    business.
                                </p> */}
                            </div>

                            <div className="md:flex gap-[61px] items-start mx-auto md:max-w-[1300px] md:mt-16 mt-8">
                                {/* Left Steps */}
                                <div className="space-y-8 border-l-2 border-gray-200 pl-6 md:w-[324px]">
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
                                                className={`text-[18px] w-[269px] font-medium ${activeIndex === index ? "text-teal-600" : "text-gray-400"
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
                                                className="rounded-md ml-4 mt-3"
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
                                            <p className="text-transparent text-[16px]  bg-clip-text bg-gradient-to-r from-[#04A391] to-[#013D36] font-medium">Book a FREE ERP <br className="md:hidden block" /> Consultation</p>
                                            <Link href="/contact">
                                                <button className="px-5 py-2 mt-3 md:mt-0 border text-[16px] cursor-pointer font-semibold border-teal-600 text-transparent bg-clip-text bg-gradient-to-r from-[#04A391] to-[#013D36]  rounded-md  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l hover:from-[#04A391] hover:to-[#013D36] duration-300 transition">
                                                    Get In Touch{" "}
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>




                    <div className="md:mt-[104px] mt-[72px] md:px-[120px] px-4">
                        <h3 className="md:text-[32px] font-semibold text-[24px] text-center">
                            Why Partner With Us for ERP Solution? 
                        </h3>
                        {/* <p className="md:text-[18px] font-medium text-[#888888] text-center hidden md:block">Why Choose Us: Trusted, innovative, and result-driven solutions.</p> */}

                        <div className="md:flex grid grid-cols-2 md:w-[1110px] mx-auto justify-center text-center gap-[48px] md:mt-[64px] mt-10">
                            <div>
                                <div className="border hover:bg-[#D2EDEA] duration-300 w-[134px] h-[134px] border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/WhiteHAt.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    Experienced ERP <br />
                                    consultants <br />
                                    with expertise
                                </p>
                            </div>

                            <div>
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300  border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/ExpertTeam.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    Flexible engagement <br />
                                    models for SMEs & <br />
                                    enterprises
                                </p>
                            </div>

                            <div>
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300  border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/CustomizedSEO.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    Proven track record in <br />
                                    successful ERP <br />
                                    transformations
                                </p>
                            </div>

                            <div>
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300  border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/Transparent.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    Transparent pricing <br />
                                    & clear project <br />
                                    timelines
                                </p>
                            </div>


                            <div className="col-span-2 md:col-span-1">
                                <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300 border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                                    <img src="/assets/DetailPages/ServingBoth.svg" alt="" />
                                </div>
                                <p className="mt-2">
                                    Dedicated support <br />
                                    for long-term <br />
                                    success
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* tech stack */}


                    <div className="bg-[#FFFFFF] text-black md:py-[104px] pt-12 px-4 md:px-[120px] max-w-[1550px] mx-auto">
                        {/* Industries We Serve */}
                        <div>
                            <h2 className="font-semibold text-2xl leading-8 md:leading-12 md:text-[40px] text-center">
                                Industries We Serve
                            </h2>

                            <p className="text-base font-medium leading-5.5 text-center mt-4 text-[#888888]">
                                Our full-range digital services are designed to help your business grow online.
                            </p>

                            {/* Grid Section */}
                            <div className="md:flex gap-6 md:mt-[88px] mt-10">
                                {/* Left column */}
                                <div className="flex flex-col space-y-4 ">
                                    {industries.slice(0, 3).map((item, i) => (
                                        <div
                                            key={i}
                                            className="bg-white  rounded-2xl px-8 py-3 h-[104px]  relative overflow-hidden"
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
                                        src="/assets/techstack.png" // replace with your image path in public folder
                                        alt="Industries We Serve"

                                        className="rounded-xl md:w-[281px] md:h-[344px] w-full h-[344px] object-cover"
                                    />
                                </div>

                                {/* Right column */}
                                <div className="flex flex-col mt-4 md:mt-0 space-y-4 ">
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



                    <div className="md:px-[120px] px-4">
                        <div>
                            <h2 className="md:text-[48px] text-[32px] font-light text-[#027366] text-center md:mt-0 mt-[72px]">Stop juggling multiple tools. Get a single, intelligent
                                system that drives productivity and growth.</h2>
                            <img className="justify-center items-center mx-auto" src="/assets/DetailPages/Rocket.svg" alt="" />
                        </div>

                        {/* form */}

                        <div>
                            <div className={`md:flex md:items-center md:justify-center bg-white ${styles['custom-shadow']} rounded-lg md:p-[56px] p-4 max-w-6xl mx-auto mt-4 md:mt-12`}>
                                {/* Left Side Image + Text */}
                                <div className="md:w-1/2 flex flex-col items-center text-center mb-8 md:mb-0">
                                    <p className="text-teal-700 font-medium text-2xl md:hidden block">
                                        Ready to Transform Your <br />
                                        Business with ERP
                                    </p>
                                    <img
                                        src="/assets/DetailPages/FormPic.svg"
                                        alt="Form Illustration"
                                        className="w-[250px] md:w-[300px] mb-6 md:mt-0 mt-4"
                                    />
                                    <p className="text-teal-700 font-medium text-2xl hidden md:block">
                                        Ready to Transform Your <br />
                                        Business with ERP
                                    </p>
                                </div>

                                {/* Right Side Form */}
                                <div className="md:w-1/2 w-full">
                                    <h3 className="text-[#00796B] md:font-semibold font-medium md:text-start text-center text-2xl md:mb-8 mb-6">
                                        Get Your Free ERP Consultation
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
                                                <option value="ERP Solutions">ERP Solutions</option>
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
                                                <option value="Web Development">Web Development</option>
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

                    <div className=" mx-auto px-4 md:py-[104] py-[72px] md:px-[120px] max-w-[1550px]">
                        <h3 className="text-2xl md:text-[32px] font-semibold text-center mb-2">
                            Frequently Asked Questions
                        </h3>
                        <p className="text-teal-600 md:text-2xl font-medium text-2xl text-center mb-8">On ERP Service</p>

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


