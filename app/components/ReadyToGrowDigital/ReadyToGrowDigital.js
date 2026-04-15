"use client";

import React, { useState } from "react";
import Api from "../../../Service/Api"

export default function ReadyToGrowDigital() {
    const [isOpen, setIsOpen] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [userData, setUserData] = useState({
      name: "",
      email: "",
      phone: "",
      BusinessName: "",
      service: "",
    });
  
    // ✅ Validation
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
  
      // Phone (India + UAE basic)
      if (!userData.phone) {
        newErrors.phone = "Contact number is required";
      } else {
        const phone = userData.phone.replace(/\s+/g, "");
        const indiaRegex = /^(\+91)?\d{10}$/;
        const uaeRegex = /^(\+971)?\d{9,12}$/;
  
        if (!(indiaRegex.test(phone) || uaeRegex.test(phone))) {
          newErrors.phone = "Enter a valid Indian or UAE phone number";
        }
      }
  
      // Service
      if (!userData.service) {
        newErrors.service = "Please select a service";
      }
  
      return newErrors;
    };
  
   

// ✅ Handle submit
const handleSubmit = async (e) => {
  e.preventDefault();
  const errors = validateForm();
  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }

  setFormErrors({});

  const params = new URLSearchParams({
    id: 0,
    name: userData.name.trim(),
    email: userData.email.trim(),
    service: userData.service,
    phoneNumber: userData.phone.trim(),
    BusinessName: userData.BusinessName ? userData.BusinessName.trim() : "",
    companyName: "",
  });

  try {
    const res = await Api.post(`api/location/create?${params.toString()}`);
    console.log("Form submitted ✅", res.data);

    // ✅ Show success state
    setIsSubmitted(true);

    // Reset form fields
    setUserData({
      name: "",
      email: "",
      phone: "",
      BusinessName: "",
      service: "",
    });

    // ✅ Revert button text after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);

  } catch (error) {
    console.error("Error submitting form ❌", error.response?.data || error);
  }
};

   

  
  return (
    <div className="relative w-full flex flex-col items-center justify-center text-center py-16 px-6 md:px-20 bg-[linear-gradient(180deg,#010B02_0%,#022C21_40%,#025446_70%,#04A391_100%)] overflow-hidden">
      {/* Left pattern */}
      <img
        src="/assets/readyLeft.png"
        alt="pattern left"
        className="absolute object-cover md:left-[120px] md:top-6 left-6 top-10 w-[82px] h-[82px] md:w-[202px] md:h-[202px] z-0"
      />

      {/* Right pattern */}
      <img
        src="/assets/readyRight.png"
        alt="pattern right"
        className="absolute object-cover md:right-[120px] md:top-6 right-6 top-10 w-[82px] h-[82px] md:w-[202px] md:h-[202px] z-0"
      />

      {/* Heading */}
      <h3 className="relative z-10 font-bold text-2xl mt-4 md:mt-0 md:text-[32px] text-white leading-snug">
        Ready to Transform your Business?
      </h3>

      {/* Subtext */}
      <p className="mt-4 text-sm md:text-base text-gray-200 max-w-lg">
        Take the first step toward smarter operations, higher efficiency, and
        long-term growth with our IT services in Trivandrum.
      </p>

      {/* Contact button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white text-[#04A391] hover:bg-[#04A391] hover:text-white duration-300 font-semibold text-sm md:text-base rounded-lg px-6 py-3 mt-8"
      >
        Contact Us Today
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white text-black   w-full md:w-[732px] p-6 md:px-12 md:py-10 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-black text-xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl text-black leading-8 font-semibold text-center ">
              Ready to Grow your Business?
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <h3 className="text-[#04A391] text-start text-base font-semibold md:mt-[57px] mt-6">
                Basic Information
              </h3>

              {/* Full Name + Email */}
              <div className="flex flex-col text-start mt-6 md:flex-row gap-6">
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
              <div className="flex flex-col text-start md:mt-6 mt-4 md:flex-row gap-6">
                <div className="w-full">
                  <label className="text-sm font-light">Contact number*</label>
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
                    value={userData.BusinessName}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        BusinessName: e.target.value,
                      })
                    }
                    className="w-full border-b border-[#5B5B5B] p-2 text-sm mt-1 focus:outline-none"
                  />
                </div>
              </div>
               {/* Service Select */}
               <h3 className="text-[#04A391] text-start text-base font-semibold md:mt-[40px] mt-6">
               Service Interested              </h3>

               <div className="mt-2 text-start">

                <select
                  value={userData.service}
                  onChange={(e) =>
                    setUserData({ ...userData, service: e.target.value })
                  }
                  className={`w-full md:w-[265px] h-[36px] bg-[#EFEFEF] font-medium focus:outline-none text-sm md:text-base item-center px-4  ${
                    formErrors.service ? "border border-red-500" : ""
                  }`}
                >
                  <option value="">Select Service</option>
                  <option value="SEO Services">SEO Services</option>
                  <option value="Search Engine Marketing">
                    Search Engine Marketing
                  </option>
                  <option value="Social Media Marketing">
                    Social Media Marketing
                  </option>
                  <option value="Influencer Marketing">
                    Influencer Marketing
                  </option>
                  <option value="Video Marketing">Video Marketing</option>
                  <option value="Branding">Branding</option>
                </select>
                {formErrors.service && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.service}
                  </p>
                )}
              </div>


              {/* Submit */}
              <div className="md:mt-[56px] mt-6">
  <button
    type="submit"
    disabled={isSubmitted} // prevent double-clicks
    className={`w-full text-white px-4 font-semibold text-base py-3 rounded-lg transition-all duration-300 
      ${isSubmitted 
        ? 'bg-[#04A391] hover:bg-gradient-to-r hover:from-[#035249] hover:to-[#04A391] cursor-not-allowed' 
        : 'bg-[#04A391] hover:bg-gradient-to-r hover:from-[#035249] hover:to-[#04A391]'
      }`}
  >
    {isSubmitted ? "Request sent" : "Request a callback"}
  </button>
</div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
