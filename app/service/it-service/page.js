"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Pageloader from "../../Loaders/Pageloader"; // adjust path if needed
import KeyHighlight from "../../components/KeyHighlight/keyhighlight";
import TechStack from "../../components/TechStack/TechStack";
import { useForm } from "react-hook-form";
import { Plus, Minus } from "lucide-react";
import Api from "../../../Service/Api";

function ITService() {
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
  

    // ✅ Reset form fields
    reset();

    // ✅ Show "Form Submitted" on button
    setIsSubmitted(true);

    // Optional: Reset button text after 3s
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
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
      question: "How do I get started with Solwyz Technologies?",
      answer:
        "Simply reach out through our contact form or schedule a free consultation. We’ll discuss your goals, challenges, and the best solutions for your business.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We serve diverse industries, including healthcare, retail, finance, education, manufacturing, real estate, and hospitality, with tailored IT solutions.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity. After the discovery phase, we provide a clear roadmap and estimated delivery schedule.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes. We offer ongoing monitoring, maintenance, and updates to ensure your systems remain secure, efficient, and scalable.",
    },
    {
      question: "Can Solwyz work with remote or international clients?",
      answer:
        "Absolutely. We deliver global IT services with local expertise, enabling seamless collaboration across time zones.",
    },
    {
      question: "What technologies does your team work with?",
      answer:
        "We use a wide range of modern technologies, including React, Angular, Node.js, .NET, Java, Python, Flutter, AWS, Azure, and more, to build scalable and secure solutions.",
    },
    {
      question: "How do you ensure data security?",
      answer:
        "Security is a top priority. We follow industry best practices, including encryption, access control, and secure cloud deployment, to safeguard your data.",
    },
    {
      question: "Do you provide consultation for technology strategy?",
      answer:
        "Yes. Our team can analyze your current systems, identify opportunities, and recommend the best technology stack and approach for your business growth.",
    },
    {
      question: "What sets Solwyz apart from other IT service providers?",
      answer:
        "We combine global delivery with local expertise, faster development cycles, dedicated support, and years of experience across multiple industries to ensure measurable results.",
    },
    {
      question: "How do I request a demo or a proposal?",
      answer:
        "You can fill out our contact form specifying your requirements, and our experts will get back to you with a tailored proposal or demo.",
    },
  ];

  const processSteps = [
    {
      title: "Discovery",
      desc: "Understanding your goals and challenges.",
      alignment: "start",
      border: "border-t border-r border-b",
      borderPosition: { top: 41, left: 171 },
      borderSize: { h: 125, w: 332 }
    },
    {
      title: "Planning",
      desc: "Crafting a roadmap and selecting the right tech",
      alignment: "end",
      border: "border-l border-b",
      borderPosition: { top: 45, left: -180 },
      borderSize: { h: 120, w: 332 }
    },
    {
      title: "Development",
      desc: "Building secure and scalable solutions.",
      alignment: "start",
      border: "border-r border-b",
      borderPosition: { top: 44, left: 171 },
      borderSize: { h: 120, w: 332 }
    },
    {
      title: "Testing",
      desc: "Ensuring smooth, error-free performance.",
      alignment: "end",
      border: "border-l",
      borderPosition: { top: 43, left: -180 },
      borderSize: { h: 120, w: 332 }
    },
    {
      title: "Deployment & Support",
      desc: "Launching with ongoing monitoring and updates.",
      alignment: "start",
      border: null,
      borderPosition: null,
      borderSize: null
    }
  ];



  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-[85px] md:mb-[120px] mb-[72px] md:pt-[95px]   bg-gradient-to-r from-[#000f0e5c] to-[#00211d8f] bg-opacity-40">
      <div
        className="text-white md:h-[325px] h-[557px] flex flex-col  bg-cover bg-top-left md:px-[120px] px-4"
        style={{ backgroundImage: "url('/assets/DetailPages/BannerSEO.png')" }}
      >
        <div className="md:flex justify-between md:max-w-[1440px] w-full mx-auto">
          <div>
            {/* <h2 className="md:text-[16px] font-medium text-[#BCBCBC] mt-[30px] md:hidden block">Get More Leads, Sales & Growth with Solwyz Technologies</h2> */}
            <h1 className="md:text-[48px] text-[32px] font-medium md:mt-[173px] mt-[197px]">
              IT Solutions for Modern Businesses
            </h1>
            <p className="text-lg font-light text-[#E0E0E0] mt-2">
              Innovative IT solutions empowering modern businesses with
              efficiency and growth.
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
      <div className="mt-10">
        <p className="md:text-[18px] text-base font-light text-justify text-[#FEFEFE] md:px-[120px] px-4 md:mt-10 max-w-[1440px] mx-auto">
          Solwyz Technologies empowers businesses to grow smarter, faster, and
          more efficiently with advanced IT solutions. From custom web and
          mobile applications to powerful ERP and CRM systems, our expert team
          delivers technology that drives measurable results and transforms
          industries, making us the trusted partner for startups, SMEs, and
          enterprises seeking innovation, scalability, and sustainable business
          growth.
        </p>
        <h2 className="font-semibold text-white md:mt-[40px] mt-[54px] md:text-center text-center md:text-[48px] text-[24px]">
          Our Services
        </h2>
        <p className="md:text-center text-[#A7A7A7] text-[16px] font-medium md:mt-0 mt-[19px] px-4">
          Driving digital transformation with smart{" "}
          <span className="text-[#04A391]">IT solutions globally. </span>
        </p>
        {/* Section: Our Services */}
        <div className="">
          <div className="px-4  md:max-w-[1206px] mx-auto md:mt-[80px] mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[37px] md:gap-[56px] justify-items-center">
              {/* Web Development */}
              <Link href="/services/it-services/web-development">
                <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[588px] w-[361px] p-6  ">
                  <div className="flex  gap-4 md:gap-0 items-start">
                    <img
                      src="/assets/OurServices/webdeve.svg "
                      className=" w-[64px] h-[64px] "
                      alt=""
                    />
                    <div className="md:ml-[19px]">
                      <h3 className="   font-semibold text-[16px] ">
                        Web Development
                      </h3>
                      <p className="text-justify text-[#A5A5A5] font-medium md:w-[340px] w-[239px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                       Create responsive, SEO-friendly websites
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* App Development */}

              <Link href="/services/it-services/app-development">
                <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[588px] w-[361px] p-6  ">
                  <div className="flex  gap-4 md:gap-0 items-start">
                    <img
                      src="/assets/OurServices/appmark.svg"
                      className=" w-[64px] h-[64px] "
                      alt=""
                    />
                    <div className="md:ml-[19px]">
                      <h3 className="   font-semibold text-[16px] ">
                        App Development
                      </h3>
                      <p className="text-justify text-[#A5A5A5] font-medium md:w-[340px] w-[236px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                      Build high-performing mobile and web applications
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* ERP Solutions */}
              <Link href="/services/it-services/erp">
                <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[588px] w-[361px] p-6  ">
                  <div className="flex  gap-4 md:gap-0 items-start">
                    <img
                      src="/assets/OurServices/erp.svg"
                      className=" w-[64px] h-[64px] "
                      alt=""
                    />
                    <div className="md:ml-[19px]">
                      <h3 className="   font-semibold text-[16px] ">
                        ERP Solutions
                      </h3>
                      <p className="text-justify text-[#A5A5A5] font-medium md:w-[376px] w-[248px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                       Streamline operations with customized ERP platforms
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* CRM Solutions */}
              <Link href="/services/it-services/crm">
                <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[588px] w-[361px] p-6  ">
                  <div className="flex  gap-4 md:gap-0 items-start">
                    <img
                      src="/assets/OurServices/crm.svg"
                      className=" w-[64px] h-[64px] "
                      alt=""
                    />
                    <div className="md:ml-[19px]">
                      <h3 className="   font-semibold text-[16px] ">
                        CRM Solutions
                      </h3>
                      <p className="text-justify text-[#A5A5A5] font-medium md:w-[355px] w-[236px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                  Strengthen customer relationships with intelligent CRM systems.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-[120px] mt-[90px] ">
        <TechStack />
      </div>

      {/* <div className="md:mt-[104px] mt-[72px]">
        {" "}
        <KeyHighlight />
      </div> */}

      <div className="text-center md:mt-[104px] mt-[72px] px-4">
        <h2 className="md:text-[40px] font-semibold text-[20px]">
          Our Process
        </h2>
        <p className="text-base text-[#A7A7A7] font-medium mt-4 ">
          Comprehensive IT services delivering innovation, efficiency, and
          growth for your business.
        </p>
      </div>
      <div>
        {/* for Desktop */}

        <div className="relative z-10 md:pt-[56px] pt-10">
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

        {/* for Mobile */}

      </div>

      {/* End-to-End Digital Delivery */}
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

    
      <div className="bg-white mt-[72px] ">
        {/* why choose solwyz */}
        <div className="md:pt-[104px] text-black pt-[72px] md:px-0 px-0 max-w-[1440px] mx-auto">
          <h3 className="md:text-[32px] font-semibold text-[24px] text-center">
            Why Choose Solwyz Technologies?
          </h3>

          <div className="md:flex grid grid-cols-2 md:w-[1110px] mx-auto justify-center text-center gap-[48px] md:mt-[64px] mt-10">
            <div>
              <div className="border hover:bg-[#D2EDEA] duration-300 w-[134px] h-[134px] border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                <img src="/assets/DetailPages/WhiteHAt.svg" alt="" />
              </div>
              <p className="mt-2">
                Global Delivery with <br />
                Local Expertise <br />
              </p>
            </div>

            <div>
              <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300  border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                <img src="/assets/DetailPages/ExpertTeam.svg" alt="" />
              </div>
              <p className="mt-2">
                Scalable & Future- <br />
                Ready Solutions
              </p>
            </div>

            <div>
              <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300  border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                <img src="/assets/DetailPages/CustomizedSEO.svg" alt="" />
              </div>
              <p className="mt-2">
                Faster Development <br />
                Cycles
              </p>
            </div>

            <div>
              <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300  border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                <img src="/assets/DetailPages/Transparent.svg" alt="" />
              </div>
              <p className="mt-2">
                Years of expertise across . <br />
                diverse industries
              </p>
            </div>

            <div className="col-span-2 md:col-span-1">
              <div className="border w-[134px] h-[134px] hover:bg-[#D2EDEA] duration-300 border-[#D2EDEA] flex items-center justify-center rounded-full mx-auto">
                <img src="/assets/DetailPages/ServingBoth.svg" alt="" />
              </div>
              <p className="mt-2">
                Dedicated <br />
                Support
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="md:text-[48px] text-[32px] font-normal md:leading-[56px] leading-12 text-[#027366] text-center md:pt-[104px] pt-[72px]">
            Let’s Grow Your Business Together
          </h2>
          <p className="text-center font-light text-xl leading-8 text-[#949494] mt-4  hidden md:block">
            Your customers are searching online right now. If they don’t find
            you, they’ll <br /> find your competitor.Don’t let that happen
          </p>
          <img
            className="justify-center items-center md:hidden mx-auto"
            src="/assets/DetailPages/Rocket.svg"
            alt=""
          />
        </div>

        <div>
          <div
            className="md:flex md:items-center md:justify-center bg-white md:p-[56px] p-4 max-w-[1240px] mx-auto mt-4 md:mt-12"
            style={{ boxShadow: "16px 32px 84px 0px #0000001F" }}
          >
            {" "}
            {/* Left Side Image + Text */}
            <div className="md:w-1/2 flex flex-col items-center text-center mb-8 md:mb-0">
              <p className="text-teal-700 font-medium text-2xl md:hidden block">
                Contact Us Today
              </p>
              <img
                src="/assets/DetailPages/FormPic.svg"
                alt="Form Illustration"
                className="w-[250px] md:w-[300px] mb-6 md:mt-0 mt-4"
              />
              <p className="text-teal-700 font-medium text-2xl hidden md:block">
                Contact Us Today
              </p>
            </div>
            {/* Right Side Form */}
            <div className="md:w-1/2 w-full">
              <h3 className="text-[#00796B] md:font-semibold font-medium md:text-start text-center text-2xl md:mb-8 mb-6">
                Get a free strategy session
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name + Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-base font-medium text-black">Name*</div>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      {...register("name", { required: "Name is required" })}
                      className="w-full border-b border-gray-300 text-black placeholder-gray-500 focus:outline-none text-[14px] focus:border-teal-600 py-2"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name.message}</p>
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
                    <div className="text-base font-medium text-black">Email*</div>
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
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <div className="text-base font-medium text-black">Phone Number*</div>
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
                      <p className="text-red-500 text-sm">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Website */}
                <div>
                  <div className="text-base font-medium text-black">
                    Website URL (optional)
                  </div>
                  <input
                    type="text"   // use text instead of url
                    placeholder="Enter Website URL"
                    {...register("website", {
                      pattern: {
                        value: /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/\S*)?$/,
                        message: "Enter a valid URL (e.g., https://example.com)",
                      },
                    })}
                    className="w-full border-b border-gray-300 text-black placeholder-gray-500 focus:outline-none text-[14px] focus:border-teal-600 py-2"
                  />
                  {errors.website && (
                    <p className="text-red-500 text-sm">{errors.website.message}</p>
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
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Influencer Marketing">Influencer Marketing</option>
                    <option value="Video Marketing">Video Marketing</option>
                    <option value="Branding">Branding</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm">{errors.service.message}</p>
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
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
                >
                  {isSubmitted ? "Form Submitted ✅" : "Submit"}
                </button>
              </form>
            </div>
          </div>

          <div className=" mx-auto px-4 md:py-[104] py-[72px] max-w-[1540px] ">
            <h3 className="text-2xl md:text-[32px] font-semibold text-center mb-2 text-[#000000]">
              Frequently Asked Questions
            </h3>
            <p className="text-teal-600 md:text-2xl font-medium text-2xl text-center mb-8">
              On IT Services
            </p>

            <div className="space-y-4 md:px-[120px] ">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-[#E3E3E3] rounded-md px-6 py-[18px] cursor-pointer shadow-sm"
                >
                  <div
                    className="flex justify-between items-center text-black"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h4 className="font-medium md:w-full w-[250px]">{faq.question}</h4>
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

export default ITService;
