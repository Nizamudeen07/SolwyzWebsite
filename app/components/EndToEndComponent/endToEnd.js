"use client";

export default function EndToEnd() {
    return (
        <div className="md:mt-[104px] mt-[72px] px-4 md:px-[120px] max-w-[1540px] mx-auto ">
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
    )
}