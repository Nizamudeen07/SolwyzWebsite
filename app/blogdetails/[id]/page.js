"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation"; // ✅ Next.js
import Pageloader from "../../Loaders/Pageloader";
import Api from "../../../Service/Api";
// import arrowForward from "@assets/chevron_forward.svg";
// import arrowForwardGreen from "@assets/chevron_forward (green).svg";
// import "./BlogPage.css";

function BlogDetailsPage() {
    const [loading, setLoading] = useState(true);
    const [detailedBlog, setDetailedBlog] = useState(null);
    const [similarBlogs, setSimilarBlogs] = useState([]);

    const { id } = useParams();
    const router = useRouter();

    const handleBlogClick = (id) => {
        router.push(`/blogdetails/${id}`);
    };
 useEffect(() => {
            document.title = " Blog-Details | Solwyz Technologies";
        }, []);
    useEffect(() => {
        if (!id) return;

        Api.get(`api/blog/${id}`).then((response) => {
            if (response && response.status === 200) {
                setDetailedBlog(response.data);
            } else {
                console.error("Failed to fetch blog:", response);
            }
        });

        Api.get(`api/blog/similar/${id}`).then((response) => {
            if (response && response.status === 200) {
                setSimilarBlogs(response.data.similarBlogs);
            } else {
                console.error("Failed to fetch similar blogs:", response);
            }
        });
    }, [id]);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000); // simulate loader delay
    }, []);

    if (loading) return <Pageloader />;
    if (!detailedBlog) return <div className="text-white p-10">Blog not found</div>;

    return (
        <div className="md:pt-[167px] pt-[158px]">
            <div className="md:text-[32px] text-[16px] font-semibold text-[#FFFFFF] md:px-[120px] px-4">
                {detailedBlog.title}
            </div>

            <Image
                src={detailedBlog.image}
                alt={detailedBlog.title}
                width={1200}
                height={354}
                className="md:mt-[55px] mt-[48px] md:h-[354px] md:w-full h-[193px] object-cover md:px-0 px-4"
            />

            <div className="text-[16px] font-normal text-[#FFFFFF] md:px-[120px] px-4 text-justify leading-6 pt-6">
                <div
                    className="mt-6 blog-content"
                    dangerouslySetInnerHTML={{ __html: detailedBlog.paragraphs }}
                />
            </div>

            <div className="text-[#FFFFFF] md:px-[120px] px-4 text-justify md:mt-[104px] mt-[72px]">
                <div className="text-[16px] font-medium">More Blogs</div>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:mt-12 mt-8">
                    {similarBlogs.map((blog, index) => (
                        <div className="flex flex-col justify-between bg-transparent" key={index}>
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={384}
                                height={237}
                                className="w-full md:h-[237px] h-[182px] object-cover"
                            />
                            <div className="text-[16px] font-semibold text-[#FFFFFF] mt-4">
                                {blog.title}
                            </div>
                            <div className="text-[14px] font-normal text-[#C1C1C1] mt-3">
                                {blog.shortDescription?.split(" ").slice(0, 20).join(" ")}
                                {blog.shortDescription?.split(" ").length > 20 ? "..." : ""}
                            </div>
                            <div
                                className="flex items-center w-fit gap-2 mt-4 duration-300 text-[#FFFFFF] hover:text-[#04A391] hover:border-b group cursor-pointer"
                                onClick={() => handleBlogClick(blog.id)}
                            >
                                <div className="teaxt-[16px] font-semibold">Read More</div>
                                <Image
                                    src='/assets/chevron_forward.svg'
                                    alt="arrowForward"
                                    width={6}
                                    height={10}
                                    className="group-hover:hidden"
                                />
                                <Image
                                    src='/assets/chevron_forward (green).svg'
                                    alt="arrowForwardGreen"
                                    width={6}
                                    height={10}
                                    className="hidden group-hover:block"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogDetailsPage;
