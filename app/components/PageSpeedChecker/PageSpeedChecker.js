"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Api from "../../../Service/Api"; 

function PageSpeedChecker() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const resultRef = useRef(null);

  const router = useRouter();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "", // ✅ Added
  });

  const API_KEY = process.env.NEXT_PUBLIC_PAGESPEED_API_KEY;
  const score = Math.round(
    (result?.lighthouseResult?.categories?.performance?.score || 0) * 100
  );

  useEffect(() => {
    if (showForm || showResult) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [showForm, showResult]);
  // Decide label & message
  let label = "";
  let labelStyle = "";
  let message = "";

  if (score < 50) {
    label = "Poor";
    labelStyle = "bg-[#FFE2E2] text-[#FF0000]";
    message = "Urgent fixes needed";
  } else if (score < 80) {
    label = "Average";
    labelStyle = "bg-[#FBE0D7] text-[#933E3E]";
    message = "Works, but losing potential customers";
  } else {
    label = "Good";
    labelStyle = "bg-[#D7FAE2] text-[#096023]";
    message =
      "Strong technically, but still needs strategy to turn into leads/sales";
  }

  // ✅ URL validation
  const validateUrl = (value) => {
    const pattern = /^(https?:\/\/)[^\s$.?#].[^\s]*$/;
    return pattern.test(value);
  };

 // ✅ Form validation
const validateForm = () => {
  const newErrors = {};

  // Name
  if (!userData.name.trim()) {
    newErrors.name = "Full name is required";
  }

  // Email
  if (!userData.email) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
    newErrors.email = "Enter a valid email";
  }

  // Phone
  if (!userData.phone) {
    newErrors.phone = "Contact number is required";
  } else {
    // Remove spaces and + for validation
    const phone = userData.phone.replace(/\s+/g, "");

    // India: 10 digits or starts with +91 followed by 10 digits
    const indiaRegex = /^(\+91)?\d{10}$/;

    // UAE: 9–12 digits, may start with +971
    const uaeRegex = /^(\+971)?\d{9,12}$/;

    if (!(indiaRegex.test(phone) || uaeRegex.test(phone))) {
      newErrors.phone = "Enter a valid Indian or UAE phone number";
    }
  }

  return newErrors;
};

  const handleAuditClick = () => {
    if (!validateUrl(url)) {
      setError("Please enter a valid URL starting with http:// or https://");
      return;
    }
    setError("");
    setShowForm(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }
  
    setFormErrors({});
    setShowForm(false);
    setLoading(true);
  
    try {
      // 1️⃣ Send form data to backend
      const queryParams = new URLSearchParams({
        name: userData.name,
        email: userData.email,
        businessName: userData.businessName,
        websiteUrl: url,
        phoneNo: userData.phone,
      }).toString();
  
      const formData = new FormData();
  
      await Api.post(`api/audit/create?${queryParams}`, formData, {
        "Content-Type": "multipart/form-data",
      });
  
      // 2️⃣ Call Google PageSpeed API
      const response = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
          url
        )}&key=${API_KEY}`
      );
  
      // 3️⃣ Save the audit data
      setResult(response.data);
  
      // 4️⃣ Show result modal
      setShowResult(true);
    } catch (err) {
      console.error("❌ Error in audit submission or PageSpeed fetch:", err);
      setError("Failed to generate audit report. Please try again.");
    }
  
    setLoading(false);
  };
  
  

  // ✅ Utility for result score colors
  const getScoreColor = (score) => {
    if (score >= 0.9) return "text-green-600";
    if (score >= 0.5) return "text-yellow-600";
    return "text-red-600";
  };

  const replaceLabColors = (element) => {
    if (!element) return;

    const allElements = element.querySelectorAll("*");
    allElements.forEach((el) => {
      const style = getComputedStyle(el);

      // Background color
      if (style.backgroundColor.includes("lab(")) {
        el.style.backgroundColor = "#F9F9F9"; // fallback or choose closest color
      }

      // Text color
      if (style.color.includes("lab(")) {
        el.style.color = "#000000"; // fallback or closest color
      }

      // Border color
      if (style.borderColor.includes("lab(")) {
        el.style.borderColor = "#E5E7EB"; // fallback
      }
    });
  };

  const handleDownloadReport = async () => {
    if (!resultRef.current) return;

    try {
      await document.fonts.ready; // Ensure fonts are loaded

      // Replace unsupported lab() colors with hex
      replaceLabColors(resultRef.current);

      const originalOverflow = resultRef.current.style.overflow;
      resultRef.current.style.overflow = "visible"; // capture full content

      const canvas = await html2canvas(resultRef.current, {
        scale: 2, // sharp text
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      resultRef.current.style.overflow = originalOverflow; // restore

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidthMm = pdf.internal.pageSize.getWidth();
      const pageHeightMm = pdf.internal.pageSize.getHeight();

      const pxPerMm = 96 / 25.4;
      const pageWidthPx = Math.round(pageWidthMm * pxPerMm);
      const pageHeightPx = Math.round(pageHeightMm * pxPerMm);

      const scale = pageWidthPx / canvas.width;
      const scaledHeightPx = canvas.height * scale;

      let yOffset = 0;
      let pageIndex = 0;

      const tempCanvas = document.createElement("canvas");
      const ctx = tempCanvas.getContext("2d");
      tempCanvas.width = canvas.width;
      tempCanvas.height = pageHeightPx / scale;

      while (yOffset < canvas.height) {
        const sliceHeight = Math.min(
          tempCanvas.height,
          canvas.height - yOffset
        );

        ctx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
        ctx.drawImage(
          canvas,
          0,
          yOffset,
          canvas.width,
          sliceHeight,
          0,
          0,
          canvas.width,
          sliceHeight
        );

        const sliceData = tempCanvas.toDataURL("image/png");
        const sliceHeightMm = (sliceHeight * scale) / pxPerMm;

        if (pageIndex > 0) pdf.addPage();
        pdf.addImage(sliceData, "PNG", 0, 0, pageWidthMm, sliceHeightMm);

        yOffset += sliceHeight;
        pageIndex++;
      }

      pdf.save(`pagespeed-report-${new Date().toISOString()}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
    }
  };

  return (
    <div className="w-full bg-white md:px-[120px] px-4 py-12 md:py-[104px] mt-[150px] md:mt-[75px]  ">
      <div className="max-w-[1550px] mx-auto">
        <h2 className="md:text-[32px] font-normal md:text-start text-center text-black md:leading-10">
        &quot; Your website should serve as a strategic asset—designed to{" "}
          <span className="text-[#04A391]">scale</span> your business,{" "}
          <span className="text-[#04A391]">attract</span> new customers, and
          reinforce your <span className="text-[#04A391]">brand</span>{" "}
          identity.&quot;
        </h2>

        <div className="md:flex mt-10 md:mt-[56px]">
          <div>
            <img
              src="/assets/pageSpeed.png"
              alt=""
              className="hidden md:block w-[588px] h-[345px]"
            />
            <img
              src="/assets/pageSpeedMob.png"
              alt=""
              className="md:hidden w-full h-[211px]"
            />
          </div>
          <div className="md:ml-4 md:mt-[105px] mt-10">
            <h3 className="font-semibold text-[#04A391] text-2xl leading-8">
              Website Audit Report
            </h3>
            <p className="font-medium text-[#7B7B7B] text-sm leading-6">
              Your can directly view your statistics of your website here. Try
              now !!
            </p>
            {/* Input Section */}
            <div className="md:flex mt-10 md:mt-8 md:gap-2">
              <input
                type="text"
                placeholder="Enter website URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border md:w-[313px] w-full rounded-lg border-[#8B8B8B] text-black px-5 py-3 placeholder:text-[#BCBCBC] font-medium text-base focus:outline-none"
              />
              <button
                onClick={handleAuditClick}
                disabled={loading}
                className="bg-[#04A391] hover:bg-[linear-gradient(270deg,#035249_0%,#04A391_100%)]  mt-3 md:mt-0 w-full md:w-32 text-white px-4 font-semibold text-base py-3 rounded-lg transition-all duration-300"
              >
                {loading ? "Checking..." : "Audit now"}
              </button>
            </div>
            {error && <p className="text-red-500  text-sm mt-2">{error}</p>}
          </div>
        </div>

        {/* Popup Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
            <div className="bg-white md:px-[72px] px-6 text-black md:py-[56px] py-10 w-full md:max-w-[732px] rounded-lg relative">
              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-600 cursor-pointer hover:text-black text-xl"
              >
                ✕
              </button>

              <h2 className="text-2xl font-medium leading-8 text-center">
                Ready to see your website performance?
              </h2>

              <form onSubmit={handleFormSubmit}>
                <h2 className="text-[#04A391] text-base font-semibold md:mt-[57px] mt-6">
                  Basic Information
                </h2>

                {/* Full Name + Email */}
                <div className="flex flex-col mt-6 md:flex-row gap-6">
                  <div className="w-full">
                    <label className="text-sm font-light">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={userData.name}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Allow only letters and spaces
                        if (/^[a-zA-Z\s]*$/.test(value)) {
                          setUserData({ ...userData, name: value });
                          setFormErrors({
                            ...formErrors,
                            name: value.trim() ? "" : "Full name is required",
                          });
                        } else {
                          setFormErrors({
                            ...formErrors,
                            name: "Only letters are allowed",
                          });
                        }
                      }}
                      className={`w-full border-b p-2 text-sm mt-1 focus:outline-none ${
                        formErrors.name ? "border-red-500" : "border-[#5B5B5B]"
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="w-full">
                    <label className="text-sm font-light">Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      value={userData.email}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                      className={`w-full border-b p-2 text-sm mt-1 focus:outline-none ${
                        formErrors.email ? "border-red-500" : "border-[#5B5B5B]"
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone + Business Name */}
                <div className="flex flex-col md:mt-6 mt-4 md:flex-row gap-6">
                  <div className="w-full">
                    <label className="text-sm font-light">
                      Contact number*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter number"
                      value={userData.phone}
                      onChange={(e) => {
                        const value = e.target.value;

                        // Allow only digits
                        if (/^\d*$/.test(value)) {
                          setUserData({ ...userData, phone: value });

                          // Validate India and UAE numbers
                          let error = "";
                          if (!value) {
                            error = "Contact number is required";
                          } else if (
                            !(
                              value.length === 10 ||
                              value.length === 12 ||
                              value.length === 13
                            )
                          ) {
                            // 10 digits (India without country), 12 digits (India with +91), 9-12 digits UAE
                            error = "Enter a valid phone number";
                          }

                          setFormErrors({ ...formErrors, phone: error });
                        }
                      }}
                      className={`w-full border-b p-2 text-sm mt-1 focus:outline-none ${
                        formErrors.phone ? "border-red-500" : "border-[#5B5B5B]"
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label className="text-sm font-light">
                      Business name (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Enter business name"
                      value={userData.businessName}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          businessName: e.target.value,
                        })
                      }
                      className="w-full border-b border-[#5B5B5B] p-2 text-sm mt-1 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="md:mt-[56px] mt-6">
                  <button
                    type="submit"
                    className="bg-[#04A391] hover:bg-gradient-to-r hover:from-[#035249] hover:to-[#04A391] w-full text-white px-4 font-semibold text-base py-3 rounded-lg transition-all duration-300"
                  >
                    Audit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Results Modal */}
        {showResult && result && (
          <div className="fixed inset-0 bg-black/80  z-50 overflow-y-auto">
            <div
              ref={resultRef}
              className="bg-white md:px-[72px] px-4 md:py-[72px] py-[30px] mx-auto text-black rounded-lg shadow-lg w-full max-w-5xl relative"
            >
              {/* Close button */}
              <button
                onClick={() => setShowResult(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                ✕
              </button>

              {result.error ? (
                <p className="text-red-500">{result.error}</p>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-2">
                    {/* Left Side - Performance Index */}
                    <div className="flex flex-col items-center justify-center md:pt-[72px] md:w-[453px] md:h-[507px] px-10 pt-[28px] pb-[80px] md:px-[70px] md:pb-8 bg-[#F9F9F9] rounded-[16px]">
                      <h2 className="text-center font-medium text-2xl md:text-[32px] leading-8 md:leading-10">
                        Performance Index
                      </h2>

                      {/* Score Circle */}
                      <div
                        className="mt-6 relative"
                        style={{ width: 172, height: 120 }}
                      >
                        <CircularProgressbar
                          value={score}
                          maxValue={100}
                          circleRatio={0.8} // semi-circle
                          strokeWidth={16} // thickness
                          styles={buildStyles({
                            rotation: 0.6, // start from bottom center
                            textColor: "transparent", // hide default text
                            pathColor: "url(#gradient)", // gradient stroke
                            trailColor: "#E5E7EB",
                            strokeLinecap: "butt",
                          })}
                        />

                        {/* Custom Centered Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center mt-6">
                          <span className="font-bold mt-[54px] text-[56px] leading-none">
                            {score}
                          </span>
                          <span className="text-base  font-medium mt-2">
                            {" "}
                            score
                          </span>
                        </div>
                      </div>

                      {/* Gradient definition */}
                      <svg style={{ height: 0 }}>
                        <defs>
                          <linearGradient
                            id="gradient"
                            gradientTransform="rotate(90)"
                          >
                            <stop offset="0%" stopColor="#11897C" />
                            <stop offset="100%" stopColor="#6AF4E5" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <p
                        className={`mt-[56px] font-medium text-xl text-center rounded-lg leading-5 py-2 px-6 ${labelStyle}`}
                      >
                        {label}
                      </p>

                      {/* Message */}
                      <div className="mt-4 text-base leading-[22px] font-normal text-center">
                        {message}
                      </div>

                      {/* Download PDF */}
                      <button
                        onClick={handleDownloadReport}
                        className="mt-[56px] text-[#2E77BC] border-b-[1px] text-base font-semibold flex items-center"
                      >
                        Download report{" "}
                        <img
                          src="/assets/dwnld.svg"
                          className="ml-2"
                          alt="download"
                        />
                      </button>
                    </div>

                    {/* Right Side - Core Web Vitals */}
                    <div>
                      <h2 className="text-center font-medium text-2xl">
                        Core Web Vitals
                      </h2>

                      <div className="space-y-4 mt-8">
                        {[
                          {
                            key: "first-contentful-paint",
                            img: "/assets/fcp.png",
                          },
                          {
                            key: "cumulative-layout-shift",
                            img: "/assets/cls.png",
                          },
                          {
                            key: "largest-contentful-paint",
                            img: "/assets/fcp.png",
                          },
                          {
                            key: "total-blocking-time",
                            img: "/assets/totalblocking.png",
                          },
                        ].map(({ key, img }) => (
                          <div key={key} className="space-y-2">
                            {/* Title + Value */}
                            <div className="px-4 py-3 bg-[#FAF1E4] md:w-[265px] mx-auto flex justify-between font-medium leading-[22px] text-[#6B3F02] text-base items-center">
                              <strong>
                                {result.lighthouseResult.audits[key].title}
                              </strong>
                              <span>
                                {
                                  result.lighthouseResult.audits[key]
                                    .displayValue
                                }
                              </span>
                            </div>

                            {/* Corresponding Image */}
                            <img
                              src={img}
                              alt={key}
                              className="w-[257px] mx-auto mt-4 h-[58px]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:mt-[48px] mt-[67px] md:space-y-4 space-y-5">
                    <div>
                      <h2 className="text-[#6B3F02] font-medium text-base">
                        First contentful Paint{" "}
                      </h2>
                      <p className="text-[#121212] font-normal text-sm text-start mt-2">
                        How fast does “something” show up when someone opens
                        your site? If it takes too long, visitors think your
                        site is broken and leave.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-[#6B3F02] font-medium text-base">
                        Cumulative Layout Shift{" "}
                      </h2>
                      <p className="text-[#121212] font-normal text-sm text-start mt-2">
                        How long until the main part of the page (like your
                        banner or big image) fully appears?If it’s slow, it
                        feels like waiting outside a shop with the shutter
                        half-open.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-[#6B3F02] font-medium text-base">
                        Largest contentful Paint{" "}
                      </h2>
                      <p className="text-[#121212] font-normal text-sm text-start mt-2">
                        Does the page “jump around” while loading? Like a shop
                        where shelves keep moving while you try to pick
                        something — frustrating and unprofessional.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-[#6B3F02] font-medium text-base">
                        Total Blocking Time{" "}
                      </h2>
                      <p className="text-[#121212] font-normal text-sm text-start mt-2">
                        Does the site freeze before you can click anything? If
                        yes, customers can’t browse or buy smoothly.
                      </p>
                    </div>
                  </div>

                  {/* What You Should Do Next */}
                  <div className="bg-[#F9F9F9] px-4 md:px-10 py-12 mt-12 md:mt-[64px] ">
                    <h3 className="text-2xl text-center font-semibold leading-10">
                      What You Should Do Next ?
                    </h3>
                    <p className="text-[#1A564F] mt-8 text-base leading-6 font-medium text-start">
                      Don’t stop at the score. Think of this like a health
                      check, even if the numbers look okay, you still need a
                      doctor to make sure your business is really healthy.
                    </p>
                    <p className="text-[#1A564F] text-base leading-6 font-medium mt-6 text-start">
                      Talk to our consultants, and we’ll help you get more leads
                      and conversions from your website.
                    </p>
                    <button
                      onClick={() => router.push("/contact")}
                      className="border border-[#838383] cursor-pointer font-medium text-base rounded-lg px-6 py-3 mt-12 md:mt-10 flex mx-auto"
                    >
                      Contact Us Now
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PageSpeedChecker;
