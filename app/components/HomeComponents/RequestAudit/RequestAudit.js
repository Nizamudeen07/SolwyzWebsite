"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import Api from "../../../../Services/Api";

export default function RequestAudit() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    businessName: "",
    industry: "",
    location: "",
    website: "",
    goals: [],
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isModalOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isModalOpen]);

  //  Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required.";
    } else if (!/^[0-9]{7,15}$/.test(formData.contact)) {
      newErrors.contact = "Enter a valid phone number.";
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required.";
    }

    if (!formData.industry.trim()) {
      newErrors.industry = "Industry is required.";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required.";
    }

    if (!formData.website.trim()) {
      newErrors.website = "Website link is required.";
    } else if (
      !/^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/.test(formData.website)
    ) {
      newErrors.website = "Enter a valid website URL.";
    }

    if (formData.goals.length === 0) {
      newErrors.goals = "Please select at least one goal.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRequestClick = async () => {
    if (!validateForm()) return; // ✅ Run validation first

    try {
      setIsSubmitting(true);
      // const response = await Api.post("api/audit/create", { ...formData });
      const response = { status: 200 }; // mock response for testing

      if (response?.status === 200) {
        setIsSubmitted(true);
        console.log("Audit request submitted successfully");

        setFormData({
          fullName: "",
          email: "",
          contact: "",
          businessName: "",
          industry: "",
          location: "",
          website: "",
          goals: [],
        });

        setTimeout(() => {
          setIsModalOpen(false);
          setIsSubmitted(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting audit request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-[34px]">
      {/* CTA */}
      <div
        className="w-fit mx-auto cursor-pointer group pb-[10px]"
        onClick={toggleModal}
      >
        <div className="flex gap-2 items-center">
          <h1 className="text-[16px] font-medium text-white group-hover:text-[#05C2AE]">
            Request a website audit
          </h1>
          <div className="relative w-[24px] h-[24px]">
            <Image
              src="/assets/arrow_forward.svg"
              alt="Arrow"
              fill
              className="object-contain transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/assets/icons/bgArrow.svg"
              alt="Hover Arrow"
              fill
              className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </div>
        <div className="mt-1 border-b border-white group-hover:border-[#05C2AE]" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 md:px-[177px] px-4 bg-black bg-opacity-50 overflow-y-auto z-50">
          <div className="bg-white text-black md:py-[104px] mt-[104px] py-[56px] md:px-[248px] px-3 w-full relative">
            {/* Close button */}
            <button
              className="absolute md:top-8 md:right-8 top-2 right-2 w-10 h-10 hover:bg-[#F5F5F5] rounded-lg"
              onClick={toggleModal}
            >
              <img
                src="/assets/close.svg"
                alt="Close"
                width={20}
                height={20}
                className="mx-auto"
              />
            </button>

            <h2 className="text-center md:text-[32px] text-[24px] font-medium">
              Maximize Your Online Impact <br />
              <span className="font-normal">Get a Free Audit</span>
            </h2>

            {/* Form */}
            <form className="md:mt-[64px] mt-[56px] text-left flex flex-col items-start w-full">
              {/* Basic Info */}
              <h1 className="text-[#04A391] font-semibold text-base">
                Basic Information
              </h1>
              <div className="flex mt-4 flex-col md:flex-row gap-6 w-full">
                <div className="w-full">
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full border-b border-[#5B5B5B] p-2 mt-1 text-sm focus:outline-none"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs">{errors.fullName}</p>
                  )}
                </div>

                <div className="w-full">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Enter email"
                    className="w-full border-b border-[#5B5B5B] p-2 mt-1 text-sm focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Contact */}
              <div className="w-full md:w-[300px]">
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  placeholder="Enter number"
                  className="w-full border-b border-[#5B5B5B] p-2 mt-4 text-sm focus:outline-none"
                />
                {errors.contact && (
                  <p className="text-red-500 text-xs">{errors.contact}</p>
                )}
              </div>

              {/* Business Info */}
              <h1 className="text-[#04A391] mt-[56px] font-semibold text-base">
                Business details
              </h1>
              <div className="flex mt-4 flex-col md:flex-row gap-6 w-full">
                <div className="w-full">
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        businessName: e.target.value,
                      })
                    }
                    placeholder="Enter Business Name"
                    className="w-full border-b border-[#5B5B5B] p-2 mt-1 text-sm focus:outline-none"
                  />
                  {errors.businessName && (
                    <p className="text-red-500 text-xs">
                      {errors.businessName}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    value={formData.industry}
                    onChange={(e) =>
                      setFormData({ ...formData, industry: e.target.value })
                    }
                    placeholder="Enter category"
                    className="w-full border-b border-[#5B5B5B] p-2 mt-1 text-sm focus:outline-none"
                  />
                  {errors.industry && (
                    <p className="text-red-500 text-xs">{errors.industry}</p>
                  )}
                </div>
              </div>

              {/* Location */}
              <div className="w-full md:w-[300px]">
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="Enter Location"
                  className="w-full border-b border-[#5B5B5B] p-2 mt-4 text-sm focus:outline-none"
                />
                {errors.location && (
                  <p className="text-red-500 text-xs">{errors.location}</p>
                )}
              </div>

              {/* Website */}
              <h1 className="text-[#04A391] mt-[56px] font-semibold text-base">
                Website details
              </h1>
              <div className="w-full">
                <input
                  type="text"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                  placeholder="Enter website link"
                  className="w-full border-b border-[#5B5B5B] p-2 mt-4 text-sm focus:outline-none"
                />
                {errors.website && (
                  <p className="text-red-500 text-xs">{errors.website}</p>
                )}
              </div>

              {/* Goals */}
              <div className="mt-6 w-full">
                <p className="text-sm font-medium">
                  What are your top goals for the website?
                </p>
                {[
                  "Increase traffic",
                  "Improve design/UX",
                  "Generate leads",
                  "Enhance SEO",
                  "Boost conversions",
                ].map((goal) => (
                  <label
                    key={goal}
                    className="flex items-center gap-4 mt-3 text-sm text-[#494949]"
                  >
                    <input
                      type="checkbox"
                      checked={formData.goals.includes(goal)}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          goals: e.target.checked
                            ? [...prev.goals, goal]
                            : prev.goals.filter((g) => g !== goal),
                        }))
                      }
                    />
                    {goal}
                  </label>
                ))}
                {errors.goals && (
                  <p className="text-red-500 text-xs mt-2">{errors.goals}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleRequestClick}
                className={`mt-[56px] w-full py-3 rounded-md text-base font-medium transition-all duration-300 ${isSubmitting
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#04A391] text-white hover:bg-[linear-gradient(270deg,#035249_0%,#04A391_100%)]"
                  }`}
              >
                {isSubmitted ? "Request Audit Sent ✓" : "Request Audit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
