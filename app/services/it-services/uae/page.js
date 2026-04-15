

"use client";
import React, { useEffect, useState } from "react";

import KeyHighlightIT from "../../../components/KeyHighlightIT/KeyHighlightIT";

import Pageloader from "../../../Loaders/Pageloader";
import EndToEnd from "../../../components/EndToEndComponent/endToEnd";
import Link from "next/link";
import KeyHighlightDubai from "../../../components/KeyHighlightDubai/KeyHighlightDubai";
import ReadyToGrowIT from "../../../components/ReadyToGrowIT/ReadyToGrowIT";
import KeyHighlightITDubai from "../../../components/KeyHighlightITDubai/KeyHighlightITDubai";
import Api from "../../../../Service/Api"

export default function ITServiceDubai() {

     useEffect(() => {
            document.title = "IT Services UAE | Solwyz Technologies";
        }, []);

    const [openFAQIndex, setOpenFAQIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQIndex(openFAQIndex === index ? null : index);
    };

    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        company: "",
        service: "",
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.contact.trim()) {
            newErrors.contact = "Email or phone is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact) && // email check
            !/^\d{10}$/.test(formData.contact) // phone check (10 digits)
        ) {
            newErrors.contact = "Enter a valid email or phone number";
        }
        if (!formData.company.trim()) newErrors.company = "Company name is required";
        if (!formData.service.trim()) newErrors.service = "Select a service";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return; // exit if validation fails

        try {
            // Prepare payload
            const payload = {
                id: 0,
                name: formData.name.trim(),
                service: formData.service,
                phoneNumber: formData.contact.trim(), // if contact is phone, adjust
                companyName: formData.company?.trim() || "",
            };

            // Call API
            const res = await Api.post(`api/location/create?${new URLSearchParams(payload)}`);
            console.log("Form submitted ✅", res.data);

            // Reset form & show success
            setSuccess(true);
            setFormData({
                name: "",
                contact: "",
                company: "",
                service: "",

            });

            // hide message after 3s
            setTimeout(() => setSuccess(false), 3000);
        } catch (error) {
            console.error("Error submitting form ❌", error.response?.data || error);
        }
    };
    const processSteps = [
        {
            title: "Understanding Business Goals",
            desc: "Analyze your challenges and objectives.",
            alignment: "start",
            border: "border-t border-r border-b",
            borderPosition: { top: 41, left: 171 },
            borderSize: { h: 125, w: 332 }
        },
        {
            title: "Strategy & Planning",
            desc: "Design IT solutions aligned with your business model.",
            alignment: "end",
            border: "border-l border-b",
            borderPosition: { top: 45, left: -180 },
            borderSize: { h: 120, w: 332 }
        },
        {
            title: "Development & Implementation",
            desc: "Build scalable web, app, CRM, or ERP systems.",
            alignment: "start",
            border: "border-r border-b",
            borderPosition: { top: 44, left: 171 },
            borderSize: { h: 120, w: 332 }
        },
        {
            title: "Testing & Optimization",
            desc: "Ensure flawless performance and security.",
            alignment: "end",
            border: "border-l ",
            borderPosition: { top: 43, left: -180 },
            borderSize: { h: 120, w: 332 }
        },
        {
            title: "Deployment & Support",
            desc: "Deliver solutions with ongoing maintenance.",
            alignment: "start",
            border: null,
            borderPosition: null,
            borderSize: null
        }
    ];

    const faqs = [
        {
            question: "What IT services do you provide in Dubai?",
            answer:
                "We provide a full range of IT services including web development, mobile app development, CRM solutions, and ERP systems. Our services are tailored to meet the needs of startups, SMEs, and enterprises in Dubai."
        },
        {
            question: "Why should I choose a Dubai-based IT company?",
            answer:
                "A local IT company in Dubai offers quick support, a strong understanding of the UAE market, and compliance with local regulations while delivering international-level technical expertise."
        },
        {
            question: "How much do IT services cost in Dubai?",
            answer:
                "The cost depends on your specific requirements such as website size, app features, or CRM and ERP customizations. We provide transparent pricing and affordable packages that fit different business needs."
        },
        {
            question: "Do you provide ongoing support and maintenance?",
            answer:
                "Yes, we provide continuous support, updates, and maintenance to ensure your website, app, or IT systems run smoothly without interruptions."
        },
        {
            question: "Can IT services help my small or medium business in Dubai?",
            answer:
                "Yes, our IT solutions are scalable and designed to grow with your business. Whether you are a small shop, a growing startup, or an established enterprise, our services adapt to your goals."
        },
        {
            question: "Do you build both iOS and Android apps?",
            answer:
                "Yes, we develop mobile applications for both iOS and Android. We also create cross-platform apps that allow you to engage with customers across multiple devices."
        },
        {
            question: "How long does it take to develop a website or app?",
            answer:
                "The timeline depends on the complexity of the project. A simple website may take a few weeks, while a feature-rich mobile app or ERP system may take a few months. We always ensure timely delivery."
        },
        {
            question: "Do you offer custom CRM and ERP solutions?",
            answer:
                "Yes, we build customized CRM and ERP systems that align with your workflows. Our solutions help businesses manage sales, finance, HR, inventory, and operations more efficiently."
        }
    ];
    // const [loading, setLoading] = useState(true);


    //    useEffect(() => {
    //     // Simulate delay
    //     setTimeout(() => setLoading(false), 1000);
    // }, []);

    // if (loading) return <Pageloader />;


    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="pt-[104px]  mb-[72px] md:pt-[95px]" >
            <div className="relative overflow-hidden">
                <div className="absolute top-[148px] md:top-[-148px] left-[-80px] md:w-[400px] w-[200px] md:h-[400px] h-[200px] bg-[#04A39166] rounded-full hidden md:block blur-[90px] md:blur-[170px] opacity-80 "></div>
                <div className="absolute bottom-[198px] right-[-10px] w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#04A39166] rounded-full hidden md:block md:blur-[170px] blur-[90px] opacity-80"></div>
                <div className="px-4 md:px-[120px] text-center md:mt-[136px] mt-[72px] ">
                    <h1 className="font-bold md:text-[48px] text-[20px] md:leading-[56px] text-[#ffffff]">
                        Boost Your Brand Efficiency with the  <br />
                        <span className="text-[#04A391] md:text-[48px] text-[25px] font-normal md:font-light">
                            Best IT Service
                        </span>{" "}
                        in Dubai
                    </h1>
                    <p className=" text-[16px] font-medium text-[#6E6E6E] text-center md:mt-12 mt-[72px]"> Customised Web, App, CRM & ERP Solutions for Your Business in Dubai, UAE</p>

                </div>

                <div className="md:flex items-center gap-4 text-center justify-center md:mt-20 mt-[72px] ">
                    <p className="text-[20px] font-medium bg-gradient-to-r from-[#04A391] to-[#9C6EA0] bg-clip-text text-transparent">
                        Get a Free Consultation
                    </p>
                    <Link href="/contact"> <button className="px-[42px] py-[14px] bg-white text-black rounded-lg text-base font-semibold md:mt-0 mt-4">Get In Touch</button></Link>
                </div>

                <div>
                    <h2 className="font-semibold md:text-[40px] text-[20px] text-center md:mt-[104px] mt-20">Why Partner with Solwyz <br className="md:hidden block" /> Technologies for <br className="hidden md:block" />
                        IT Service in <br className="md:hidden block" /> Dubai?
                    </h2>

                    <p className="font-medium text-[18px] text-justify md:px-[120px] text-[#A7A7A7] md:mt-12 mt-[29px] px-4 max-w-[1440px] mx-auto">Redefine the way you do business with advanced IT services in Dubai. We specialise in web development, app development, CRM, and ERP solutions that help startups, SMEs, and enterprises optimise operations, enhance customer experiences, and achieve measurable growth. As a trusted IT solutions company in Dubai, our expert team blends creativity with expertise to build scalable digital products that improve efficiency and accelerate revenue.</p>
                </div>
            </div>

            <div className="md:mt-[104px] mt-20"> <KeyHighlightITDubai /></div>

            <h2 className="font-semibold text-white md:mt-[40px] mt-[54px] md:text-center text-center md:text-[48px] text-[24px]">
                Our Range of IT Services

            </h2>
            <p className="md:text-center text-[#A7A7A7] text-[16px] font-medium md:mt-0 mt-[19px] px-4">Choose from our wide range of services designed to maximize your ROI. <br className="hidden md:block" />
                Click to explore each service</p>

            <div className="px-4  md:max-w-[1206px] mx-auto md:mt-[80px] mt-10">


                <div className="grid grid-cols-1 md:grid-cols-2 gap-[37px] md:gap-[56px] justify-items-center">
                    {/* Web Development */}
                    <Link href="/services/it-services/web-development">
                        <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[588px] w-[361px] p-6  ">
                            <div className="flex  gap-4 md:gap-0 items-start">
                                <img src='/assets/OurServices/webdeve.svg ' className=" w-[64px] h-[64px] " alt="" />
                                <div className="md:ml-[19px]">
                                    <h2 className="   font-semibold text-[16px] ">
                                        Web Development
                                    </h2>
                                    <p className="text-start text-[#A5A5A5] font-medium md:w-[340px] w-[239px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                                        Build responsive, SEO-friendly, and high-performing
                                    </p>
                                </div>
                            </div>

                        </div>
                    </Link>

                    {/* App Development */}
                    <Link href="/services/it-services/app-development">
                        <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[588px] w-[361px] p-6  ">
                            <div className="flex  gap-4 md:gap-0 items-start">
                                <img src='/assets/OurServices/appmark.svg' className=" w-[64px] h-[64px] " alt="" />
                                <div className="md:ml-[19px]">
                                    <h2 className="   font-semibold text-[16px] ">
                                        App Development
                                    </h2>
                                    <p className="text-start text-[#A5A5A5] font-medium md:w-[340px] w-[236px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                                        Create user-friendly, scalable iOS & Android apps to
                                        engage your customers.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </Link>

                    {/* ERP Solutions */}
                    <Link href="/services/it-services/erp">
                        <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[588px] w-[361px] p-6  ">
                            <div className="flex  gap-4 md:gap-0 items-start">
                                <img src='/assets/OurServices/erp.svg' className=" w-[64px] h-[64px] " alt="" />
                                <div className="md:ml-[19px]">
                                    <h2 className="   font-semibold text-[16px] ">
                                        ERP Solutions
                                    </h2>
                                    <p className="text-start text-[#A5A5A5] font-medium md:w-[376px] w-[248px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                                        Streamline finance, HR, inventory, and operations with an
                                        integrated ERP system tailored to your business.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </Link>

                    {/* CRM Solutions */}
                    <Link href="/services/it-services/crm">
                        <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[588px] w-[361px] p-6  ">
                            <div className="flex  gap-4 md:gap-0 items-start">
                                <img src='/assets/OurServices/crm.svg' className=" w-[64px] h-[64px] " alt="" />
                                <div className="md:ml-[19px]">
                                    <h2 className="   font-semibold text-[16px] ">
                                        CRM Solutions
                                    </h2>
                                    <p className="text-start text-[#A5A5A5] font-medium md:w-[355px] w-[236px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                                        Manage leads, automate sales, and improve customer
                                        relationships with powerful CRM systems.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </Link>
                </div>
            </div>

            <div className="md:px-[120px] px-4 md:mt-[104px] mt-20 md:flex gap-10 items-center justify-between max-w-[1440px] mx-auto">
                <div>
                    <h2 className="md:text-[24px] font-semibold">Grow Your Business with Advanced IT Solutions</h2>
                    <p className=" md:text-[18px] font-medium text-[#A7A7A7] md:w-[542px] mt-4">We understand that every business, whether a startup, SME, or enterprise, needs reliable and future-ready technology to stay competitive. Our IT services in Dubai are built to help you:</p>
                    <ul className="space-y-8 md:mt-12 mt-[30px]">
                        <li className="flex items-center text-[18px] font-medium"><img className="mr-4" src="/assets/ITService/Arrow.svg" alt="" />Optimize operations with smarter digital solutions</li>
                        <li className="flex items-center text-[18px] font-medium"><img className="mr-4" src="/assets/ITService/Arrow.svg" alt="" />Enhance customer engagement through seamless experience</li>
                        <li className="flex items-center text-[18px] font-medium"><img className="mr-4" src="/assets/ITService/Arrow.svg" alt="" />Boost productivity across teams and processes</li>
                        <li className="flex items-center text-[18px] font-medium"><img className="mr-4" src="/assets/ITService/Arrow.svg" alt="" />Achieve sustainable growth with scalable IT solutions</li>
                    </ul>
                </div>
                <div>
                    <div className="md:w-[589px]  bg-gradient-to-b md:mt-0 mt-[56px] from-[#04A391] to-[#001715]">
                        <form
                            onSubmit={handleSubmit}
                            className=" p-8  space-y-8"
                        >
                            <h2 className="font-semibold text-[28px]">Let’s work together</h2>

                            {/* Name */}
                            <div className=" md:flex md:gap-4 md:justify-between mt-[41px]">
                                <div className="md:mt-0 mt-3">
                                    Name
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        className="w-full py-3 border-b focus:outline-none "
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email / Phone */}
                                <div className="md:mt-0 mt-3">
                                    Phone Number
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        value={formData.contact}
                                        onChange={(e) =>
                                            setFormData({ ...formData, contact: e.target.value })
                                        }
                                        className="w-full py-3 border-b focus:outline-none "
                                    />
                                    {errors.contact && (
                                        <p className="text-red-500 text-sm">{errors.contact}</p>
                                    )}
                                </div>
                            </div>

                            {/* Company */}
                            <div className="md:flex md:gap-4 md:justify-between">
                                <div className="md:mt-0 mt-3">
                                    Company Name
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        value={formData.company}
                                        onChange={(e) =>
                                            setFormData({ ...formData, company: e.target.value })
                                        }
                                        className="w-full py-3 border-b focus:outline-none "
                                    />
                                    {errors.company && (
                                        <p className="text-red-500 text-sm">{errors.company}</p>
                                    )}
                                </div>

                                {/* Service Interest */}
                                <div className="md:mt-0 mt-3">
                                    Service Interested
                                    <select
                                        value={formData.service}
                                        onChange={(e) =>
                                            setFormData({ ...formData, service: e.target.value })
                                        }
                                        className="w-full py-3 border-b focus:outline-none text-[#7EB4AE] "
                                    >
                                        <option value="">Select Service Interest</option>
                                        <option value="web">Web Development</option>
                                        <option value="mobile">Mobile App Development</option>
                                        <option value="crm">CRM Solutions</option>
                                        <option value="erp">ERP Systems</option>
                                    </select>
                                    {errors.service && (
                                        <p className="text-red-500 text-sm">{errors.service}</p>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className={`w-full mt-[14px] font-semibold py-4 transition duration-300
    ${success ? "bg-white text-[#04A391]" : "bg-white text-[#04A391]"}`}
                            >
                                {success ? "Form Submitted" : "Request a Callback"}
                            </button>
                        </form>

                    </div>
                </div>
            </div>

            {/* grow your section */}
            <div>
                <div className="px-4 ">




                </div>
                <div className="text-center px-4 md:px-0 md:mt-[104px] mt-20">
                    <h2 className="md:text-[24px] text-[20px] font-bold">
                        How we Work
                    </h2>
                    <p className="md:text-base font-medium md:mt-4 mt-6 text-[#A7A7A7]">We guide you through a clear and structured process to ensure every solution aligns perfectly with your business needs.</p>
                </div>

            </div>

            {/* for Desktop */}

            <div className="relative z-10 md:pt-[56px] pt-10">
                <div className="absolute top-[-148px] left-[-80px] w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#04A39166] rounded-full hidden md:block blur-[70px] md:blur-[170px] opacity-80 "></div>
                <div className="absolute bottom-[198px] right-[-10px] w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#04A39166] rounded-full hidden md:block blur-[70px] md:blur-[170px] opacity-80"></div>


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



            <EndToEnd />

            <div className=" mx-auto  md:py-[104] py-[72px] max-w-[1550px] md:px-[120px] px-4 ">

                <div className="absolute top-[5000px] left-[-80px] w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#04A39166] rounded-full hidden md:block md:blur-[170px] blur-[70px] opacity-80 "></div>
                <div className="absolute bottom-[-5000px] right-[-10px] w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#04A39166] rounded-full hidden md:block md:blur-[170px] blur-[70px] opacity-80"></div>


                <h2 className="text-2xl md:text-[32px] font-semibold text-center mb-2">
                    Frequently Asked Questions
                </h2>
                <p className="text-teal-600 md:text-2xl font-medium text-2xl text-center mb-8">IT Services in Dubai</p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-[#404040]  px-6 py-4 cursor-pointer shadow-sm"
                        >
                            <div
                                className="flex justify-between items-center w-full"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="font-medium text-[#FFFFFF] md:w-full w-[300px]">{faq.question}</h3>
                                <div className="w-5 h-5 flex items-center justify-center z-10">
                                    {openFAQIndex === index ? (
                                        <img src="/assets/ITService/minus.svg" />
                                    ) : (
                                        <img src="/assets/ITService/plus.svg" />
                                    )}
                                </div>
                            </div>
                            {openFAQIndex === index && (
                                <p className=" text-[#c5c3c3] font-extralight mt-4">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:mt-[104px] mt-[80px]">
                <ReadyToGrowIT />
            </div>

        </div>





    )
}