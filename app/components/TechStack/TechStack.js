"use client";

import React from "react";
import Image from "next/image";

export default function TechStack() {
  const industries = [
    {
      title: "Healthcare",
      desc: "Patient portals, apps, and ERP for hospital management.",
    },
    {
      title: "Retail & E-Commerce",
      desc: "Scalable websites and CRM for online sales.",
    },
    {
      title: "Finance & Banking",
      desc: "Secure platforms ensuring compliance and performance.",
    },
    {
      title: "Education",
      desc: "eLearning platforms and ERP for institutions.",
    },
    {
      title: "Manufacturing",
      desc: "ERP systems to optimize production and supply chains.",
    },
    {
      title: "Real Estate",
      desc: "Lead management CRMs and property websites.",
    },
    {
      title: "Hospitality & Travel",
      desc: "Booking systems and customer engagement apps.",
    },
  ];


  const techStack = [
    {
      category: "Frontend",
      items: [
        { name: "React", img: "/assets/stack/reactJs.png" },
        { name: "Angular", img: "/assets/stack/angular.png" },
        { name: "Vue.js", img: "/assets/stack/vuejs.png" },
        { name: "Next.js", img: "/assets/stack/nextJs.png" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", img: "/assets/stack/nodejs.png" },
        { name: "Java", img: "/assets/stack/java.png" },
        { name: ".NET", img: "/assets/stack/dotNet.png" },
        { name: "PHP", img: "/assets/stack/php.png" },
        { name: "Python", img: "/assets/stack/python.png" },
      ],
    },
    {
      category: "Mobile",
      items: [
        { name: "IOS(Swift)", img: "/assets/stack/swift.png" },
        { name: "Android(Kotlin)", img: "/assets/stack/kotlin.png" },
        { name: "Flutter", img: "/assets/stack/flutter.png" },
        { name: "React Native", img: "/assets/stack/reactNative.png" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", img: "/assets/stack/mysql.png" },
        { name: "PostgreSQL", img: "/assets/stack/postgresql.png" },
        { name: "MongoDB", img: "/assets/stack/mongoDb.png" },
        { name: "Oracle", img: "/assets/stack/oracle.png" },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", img: "/assets/stack/aws.png" },
        { name: "Azure", img: "/assets/stack/azure.png" },
        { name: "Google Cloud", img: "/assets/stack/googleCloud.png" },
        { name: "Docker", img: "/assets/stack/docker.png" },
        { name: "Kubernetes", img: "/assets/stack/kubernetes.png" },
      ],
    },
    {
      category: "ERP/CRM",
      items: [
        { name: "Odoo", img: "/assets/stack/odoo.png" },
        { name: "SAP", img: "/assets/stack/sap.png" },
        { name: "Salesforce", img: "/assets/stack/salesforce.png" },
        { name: "Zoho", img: "/assets/stack/zoho.png" },
        { name: "ERP Next", img: "/assets/stack/erpNext.png" },
      ],
    },
  ];

  return (
    <div className="bg-[#F4F8FA] text-black md:py-[64px] py-12 px-4 md:px-[120px]">
      {/* Industries We Serve */}
     <div className="">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-semibold text-2xl leading-8 md:leading-12 md:text-[40px] text-center">
            Industries We Serve
          </h2>
  
          <p className="text-base font-medium leading-5.5 text-center mt-4 text-[#888888]">
            Our full-range digital services are designed to help your business
            grow online.
          </p>
  
          {/* Grid Section */}
          <div className="md:flex gap-6 md:mt-[88px] mt-10">
            {/* Left column */}
            <div className="flex flex-col space-y-4 ">
              {industries.slice(0, 4).map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl px-8 py-3 h-[104px] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-14 h-14 bg-[#EBFFFD] rounded-bl-full flex items-center justify-center">
                    <div className="absolute top-0 right-0 w-10 h-10 bg-[#BCEEE8] rounded-bl-full"></div>
                  </div>
                  <h3 className="font-semibold text-xl leading-6">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#999999] font-medium leading-5 mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
  
            {/* Center image */}
            <div className="flex justify-center mt-4 md:mt-0">
              <img
                src="/assets/techstack.png"
                alt="Industries We Serve"
                className="rounded-xl md:w-[281px] md:h-[459px] w-full h-[344px] object-cover"
              />
            </div>
  
            {/* Right column */}
            <div className="flex flex-col mt-4 md:mt-0 space-y-4">
              {industries.slice(3).map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl px-8 py-3 h-[104px] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-14 h-14 bg-[#EBFFFD] rounded-bl-full flex items-center justify-center">
                    <div className="absolute top-0 right-0 w-10 h-10 bg-[#BCEEE8] rounded-bl-full"></div>
                  </div>
                  <h3 className="font-semibold text-xl leading-6">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#999999] font-medium leading-5 mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* tech stack */}
        <div className="md:mt-[104px] mt-[72px]">
          <h2 className="font-semibold text-2xl leading-8 md:leading-12 md:text-[40px] text-center">
            Our Technology Stack
          </h2>
  
          <p className="text-base font-medium leading-5.5 text-center mt-4 text-[#888888]">
            Our technology stack powers innovation, scalability, and reliable
            solutions for businesses.
          </p>
  
          {/* Categories */}
          <div className="space-y-12 mt-12">
            {techStack.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-xl leading-8 font-medium text-center mb-4">
                  {section.category}
                </h3>
  
                {/* Grid: max 4 per row */}
                <div className="flex flex-wrap  gap-4 items-center justify-center mx-auto">
                  {section.items.map((tech, i) => (
                    <div
                      key={i}
                      className="flex flex-col bg-white border md:h-[180px] h-[122px] w-[100px] md:w-[180px] border-[#EBEBEB] rounded-lg items-center justify-between p-4"
                    >
                      {/* Logo */}
                      <div className="flex items-center justify-center flex-1">
                        <img
                          src={tech.img}
                          alt={tech.name}
                          className="max-h-12 md:max-h-14 max-w-[80px] md:max-w-[100px] object-contain"
                        />
                      </div>
  
                      {/* Divider */}
                      <div className="border-b border-[#EBEBEB] w-full my-2"></div>
  
                      {/* Name */}
                      <p className="text-xs md:text-base font-normal text-[#515151] text-center px-1 truncate">
                        {tech.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
  
        </div>
     </div>
    </div>
  );
}
