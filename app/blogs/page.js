"use client"; // ✅ Needed for state, useEffect, navigation, etc.

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
// import blogImg from "@assets/blog image.png";
// import arrowForward from "@assets/chevron_forward.svg";
// import arrowForwardGreen from "@assets/chevron_forward (green).svg";
import Pageloader from "../Loaders/Pageloader";
import Api from "../../Service/Api";

function BlogsPage() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const router = useRouter();

  const handleBlogClick = (id) => {
    router.push(`/blogdetails/${id}`);
  };

  useEffect(() => {
    Api.get("api/blog/all").then((response) => {
      if (response && response.status === 200) {
        console.log("Blogs fetched successfully:", response.data.data);
        setBlogs(response.data.data);
      } else {
        console.error("Failed to fetch blogs:", response);
      }
    });
  }, []);

  useEffect(() => {
    document.title = "Blogs | Solwyz Technologies";
  }, []);

  useEffect(() => {
    // Simulate delay
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Pageloader />;

  return (
    <div className="md:pt-[200px] pt-[158px] md:pb-[104px] pb-[72px] md:px-[120px] px-4 md:max-w-[1440px] mx-auto">
      <div className="flex items-center md:justify-between justify-center">
        <h1 className="text-[#FFFFFF] md:text-[48px] text-[24px] font-bold">
          Blogs
        </h1>
        <h3 className="md:block hidden text-[20px] text-[#959595] font-normal">
          Insights, ideas, and inspiration—<br />
          explore our latest stories.
        </h3>
      </div>
      <div className="md:hidden block text-[16px] font-normal text-[#959595] text-center mt-6 px-8">
        Insights, ideas, and inspiration—explore our latest stories.
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-12">
        {blogs.map((blog, index) => (
<div
  key={index}
  className="flex flex-col justify-between bg-transparent "
>
  <div>
    <Image
      src={blog.image || '/assets/blogimage.png'}
      alt="blogImage"
      width={384}
      height={237}
      className="w-full md:h-[237px] h-[182px] object-cover "
    />
    <h2 className="text-[16px] font-semibold text-[#FFFFFF] mt-4">
      {blog.title}
    </h2>
    <p className="text-[14px] font-normal text-[#C1C1C1] mt-3">
      {blog.shortDescription
        ?.split(" ")
        .slice(0, 20)
        .join(" ")}
      {blog.shortDescription?.split(" ").length > 20 ? "..." : ""}
    </p>
  </div>

  {/* Read More Button */}
  <div
    className="flex items-center w-fit gap-2 mt-4 duration-300 text-[#FFFFFF] hover:text-[#04A391] hover:border-b group cursor-pointer"
    onClick={() => handleBlogClick(blog.id)}
  >
    <div className="text-[16px] font-semibold">Read More</div>
    <Image
      src="/assets/chevron_forward.svg"
      alt="arrowForward"
      width={6}
      height={10}
      className="group-hover:hidden"
    />
    <Image
      src="/assets/chevron_forward (green).svg"
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
  );
}

export default BlogsPage;
