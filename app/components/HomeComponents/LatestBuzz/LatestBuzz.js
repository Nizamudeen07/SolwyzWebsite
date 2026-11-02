"use client"; // 

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; //  Next.js navigation
import Image from "next/image"; // Optimized Next.js Image
import Link from "next/link"; //Next.js routing
import { motion } from "framer-motion";

// Assets
// import forwardArrowGreen from "@assets/arrow_forward (green).svg";
// import forwardArrow from "@assets/arrow_forward.svg";

export default function LatestBuzz() {
    const blogs = [];
    const router = useRouter();

    const handleBuzzClick = (id) => {
        router.push(`/blogdetails/${id}`);
    };

    return (
        <motion.div
            className="bg-[#FFFFFF] mt-[104px] md:pt-[104px] pt-[48px] md:pb-[104px] pb-[48px] md:px-[120px] px-4"
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex items-center justify-between pb-[32px] md:pb-[48px] md:max-w-[1550px] mx-auto"
            >
                <h2 className="md:text-[48px] text-black text-[24px] mx-auto md:mx-0 font-bold">
                    The Latest Buzz.
                </h2>

                <Link href="/blogs">
                    <div className="md:flex items-center justify-center gap-2 hidden hover:bg-[#EDEDED] duration-300 px-4 py-[6px]">
                        <div className="text-[16px] font-medium text-[#03434F]">View All</div>
                        <Image
                            src='/assets/arrow_forward (green).svg'
                            width={15}
                            height={15}
                            alt="Forward Arrow Green"
                            className="w-[15px] h-[15px]"
                        />
                    </div>
                </Link>
            </motion.div>

            {/* Blogs List */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid md:grid-cols-3 grid-cols-1 gap-6 md:max-w-[1550px] mx-auto"
            >
                {blogs.slice(0, 3).map((blog, index) => (
                    <div
                        key={index}
                        className="md:min-h-[443px] min-h-[339px] relative"
                    >
                        {/* Blog Image */}
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width={500}
                            height={300}
                            className="w-full md:h-[255px] h-[175px] object-cover"
                        />

                        {/* Title */}
                        <div className="text-[16px] font-medium text-black md:mt-4 mt-2">
                            {blog.title}
                        </div>

                        {/* Short Description */}
                        <div className="text-[14px] font-normal text-[#C1C1C1] md:w-[384px] mt-3">
                            {blog.shortDescription
                                ?.split(" ")
                                .slice(0, 20)
                                .join(" ")}
                            {blog.shortDescription?.split(" ").length > 20 ? "..." : ""}
                        </div>

                        {/* Read More Button */}
                        <div className="justify-start flex md:justify-start items-center mt-6">
                            <div
                                className="relative group w-[156px] mt-8 md:mt-0 h-[48px] rounded-lg overflow-hidden cursor-pointer bg-[#04A391]"
                                onClick={() => handleBuzzClick(blog.id)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#04A391] to-[#035249] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10 flex items-center justify-center gap-2 h-full">
                                    <div className="sm:text-[16px] text-[12px] text-white leading-6 font-medium">
                                        Read More
                                    </div>
                                    <Image
                                        src='/assets/arrow_forward.svg'
                                        alt="Forward Arrow"
                                        width={15}
                                        height={15}
                                        className="w-[15px] h-[15px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Mobile View All */}
            <Link href="/blogs" className="md:hidden flex items-center justify-center gap-2 mt-8">
                <div className="text-[16px] font-medium text-[#03434F]">View All</div>
                <Image
                    src='/assets/arrow_forward (green).svg'
                    width={15}
                    height={15}
                    alt="Forward Arrow Green"
                    className="w-[15px] h-[15px]"
                />
            </Link>
        </motion.div>
    );
}
