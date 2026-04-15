"use client";

export default function KeyHighlightIT() {
    const highlights = [
        { number: "01", text: "Custom- built web & app solutions for business growth" },
        { number: "02", text: "Tailored CRM & ERP systems for better operations" },
        { number: "03", text: "Transperant process with on-time delivery" },
        { number: "04", text: "Scalable technology for startup & enterprises" },
        { number: "05", text: "Affordable packages with flexible options" },
        { number: "06", text: "Dedicated support team for ongoing success" },

    ];

    return (
        <div>
            <div className="bg-white">
                <div className="bg-white md:py-[104px] md:px-[120px] py-10 px-4 relative max-w-[1440px] mx-auto">
                    {/* Left Content */}
                    <div className="max-w-[1440px] mx-auto">
                        <h2 className="text-[#000000] font-bold md:text-[24px] text-[20px] leading-8 font-sans mb-10 md:w-full w-[337px]">
                            Delivering Excellence in Web, App, CRM & ERP solutions
                        </h2>
                        <img
                            className="w-[463px] h-[309px] object-cover block md:hidden mb-6"
                            src="/assets/service/keylight.png"
                            alt="Digital Marketing Highlight"
                        />
                        {/* Highlights Grid */}
                        <div className="md:relative z-10 max-w-[877px] bg-white md:py-6 md:pr-[63px]">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-14 md:max-w-[877px]">
                                {highlights.map((item, index) => (
                                    <div key={index}>
                                        <div className="text-[#91E0D7] font-medium text-[32px] leading-[40px]">
                                            {item.number}
                                        </div>
                                        <p className="text-black font-medium text-[14px] leading-5 md:w-[205px] w-[161px] mt-2">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
    
                        </div>
                    </div>
    
                    {/* Right Image */}
                    <div className="md:absolute top-[104px] right-[120px] z-0">
                        <img
                            className="w-[463px] h-[309px] object-cover hidden md:block"
                            src="/assets/service/keylight.png"
                            alt="Digital Marketing Highlight"
                        />
                    </div>
                </div>
            </div>
            <div className="md:mt-[104px] mt-[72px] md:px-[120px] px-4  ">
                <h2 className="font-bold text-[24px] text-[#ffffff] text-center">Why businesses in trivandrum trust Solwyz</h2>
                <div className="md:mt-[64px] mt-8 md:flex gap-6 mx-auto md:max-w-[1200px] space-y-4 md:space-y-0">
                    <div className="flex items-start bg-[#000000] border border-[#282828] md:w-[588px] md:px-[140px] md:py-[48px] px-6 py-8 md:rounded-br-4xl rounded-br-4xl ">
                        <img src="/assets/service/keyUser.svg" className="w-10 h-10" alt="" />
                        <div className="w-[252px] ml-4">
                            <h3 className="text-[20px] font-semibold">Experienced Team</h3>
                            <p className="font-semibold text-[14px]"> Skilled IT professionals with global expertise.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start bg-[#000000] border border-[#282828] md:w-[588px] md:px-[140px] md:py-[48px] px-6 py-8 md:rounded-bl-4xl  ">
                        <img src="/assets/service/keyUser.svg" alt="" />
                        <div className="w-[252px] ml-4">
                            <h3 className="text-[20px] font-semibold">Custom Solutions</h3>
                            <p className="font-semibold text-[14px]"> Tailored services that fit your exact needs.</p>
                        </div>
                    </div>
                </div>
                <div className="md:mt-[24px] mt-4 md:flex gap-6 mx-auto md:max-w-[1200px] space-y-4 md:space-y-0">
                    <div className="flex items-start bg-[#000000] border border-[#282828] md:w-[588px] md:px-[140px] md:py-[48px] px-6 py-8 md:rounded-tr-4xl  ">
                        <img src="/assets/service/keyUser.svg" alt="" />
                        <div className="w-[252px] ml-4">
                            <h3 className="text-[20px] font-semibold">Affordable & Transparent </h3>
                            <p className="font-semibold text-[14px]">No hidden costs—clear results.</p>
                        </div>
                    </div>
                    <div className="flex items-start bg-[#000000] border border-[#282828] md:w-[588px] md:px-[140px] md:py-[48px] px-6 py-8 md:rounded-tl-4xl  ">
                        <img src="/assets/service/keyUser.svg" alt="" />
                        <div className="w-[252px] ml-4">
                            <h3 className="text-[20px] font-semibold">End-to-End Services</h3>
                            <p className="font-semibold text-[14px]"> From consultation to deployment and support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
