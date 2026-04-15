"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import Api from "../../../../Service/Api";

export default function HomeContact() {

 const [hoveredIcon, setHoveredIcon] = useState(null);
  const icons = [
    {
      name: "linkedin",
      defaultSrc: "/assets/homeContacts/linkedin.svg",
      hoverSrc: "/assets/homeContacts/linkedinhover.svg",
      url: "https://www.linkedin.com/company/solwyz-technologies",
    },
    {
      name: "insta",
      defaultSrc: "/assets/homeContacts/insta.svg",
      hoverSrc: "/assets/homeContacts/instahover.svg",
      url: "https://www.instagram.com/solwyz_technologies/",
    },
    {
      name: "fb",
      defaultSrc: "/assets/homeContacts/fb.svg",
      hoverSrc: "/assets/homeContacts/fbhover.svg",
      url: "https://www.facebook.com/profile.php?id=61559030405055",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    websiteLink: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");
  const recaptchaRef = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const router = useRouter();

  const validateField = (name, value) => {
    let error = "";
    if (name === "name" && /\d/.test(value)) error = "Name cannot contain numbers";
    if (name === "websiteLink") {
      const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/i;
      if (value && !urlPattern.test(value)) error = "Enter a valid website URL";
    }
    if (name === "phone" && !/^\d*$/.test(value))
      error = "Phone number must contain only digits";
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const requiredFields = ["name", "email", "phone", "service", "message"];
  const isFormValid =
    requiredFields.every((key) => String(formData[key]).trim() !== "") &&
    Object.values(errors).every((err) => err === "");

  const onReCAPTCHAChange = async (token) => {
    if (!token) {
      setIsSubmitting(false);
      setFeedback("reCAPTCHA failed — please try again.");
      return;
    }

    const payload = {
      id: 0,
      ...formData,
      budget: parseInt(formData.budget || "0"),
      createdAt: new Date().toISOString(),
      recaptchaToken: token,
    };

    try {
      const params = new URLSearchParams(payload).toString();
      const response = await Api.post(`api/contact/create?${params}`);
      console.log("Success:", response.data);
      setIsSent(true);
      setFeedback("Message sent!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        websiteLink: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });

      // ✅ Redirect to ThankYouPage
      router.push("/thank-you");
    } catch (err) {
      console.error("Error sending form data:", err);
      setFeedback("Error sending message. Try again later.");
    } finally {
      setIsSubmitting(false);
      if (recaptchaRef.current) recaptchaRef.current.reset();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback("");
    if (!isFormValid) {
      setFeedback("Please fill all fields correctly.");
      return;
    }
    setIsSubmitting(true);
    if (recaptchaRef.current) {
      recaptchaRef.current.execute();
    } else {
      setIsSubmitting(false);
      setFeedback("reCAPTCHA not ready. Refresh the page.");
    }
  };

  return (
    <div className="bg-white md:px-[120px] md:py-[104px] px-4 py-12">
      <div className="max-w-[1240px] mx-auto">
        <div className="md:flex md:justify-between">
          <div className="md:mt-[64px]">
            <h1 className="font-bold text-[40px] text-black leading-10 text-start md:w-[350px]">
              Get In Touch With Our{" "}
              <span className="text-[#04A391] font-normal">Support</span>
            </h1>
            <p className="font-normal text-base leading-6 mt-6 text-black">
              Let our team help you move forward
            </p>

            <div className="flex gap-2 mt-6 mb-2">
              {icons.map((icon) => (
                <a
                  key={icon.name}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[32px] h-[32px] cursor-pointer"
                  onMouseEnter={() => setHoveredIcon(icon.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  {/* Default */}
                  <img
                    src={icon.defaultSrc}
                    alt={icon.name}
                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${hoveredIcon === icon.name ? "opacity-0" : "opacity-100"
                      }`}
                  />
                  {/* Hover */}
                  <img
                    src={icon.hoverSrc}
                    alt={icon.name}
                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${hoveredIcon === icon.name ? "opacity-100" : "opacity-0"
                      }`}
                  />
                </a>
              ))}
            </div>

          </div>

          <div className="w-full md:w-[675px] py-10 px-4 mt-6 md:mt-0 md:px-10 border border-[#DBDBDB]">
            <form className="space-y-6 text-black" onSubmit={handleSubmit}>
              {/* --- Name / Email --- */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="text-sm font-light">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none placeholder:text-[#D9D9D9] text-sm mt-1"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="w-full">
                  <label className="text-sm font-light">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none placeholder:text-[#D9D9D9] text-sm mt-1"
                  />
                </div>
              </div>

              {/* Company / Website */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="text-sm font-light">Company </label>
                  <span className="text-[#B8B8B8]">(optional)</span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Enter company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none placeholder:text-[#D9D9D9] text-sm mt-1"
                  />
                </div>
                <div className="w-full">
                  <label className="text-sm font-light">Website Link </label>
                  <span className="text-[#B8B8B8]">(optional)</span>
                  <input
                    type="text"
                    name="websiteLink"
                    placeholder="Enter website link"
                    value={formData.websiteLink}
                    onChange={handleChange}
                    className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none placeholder:text-[#D9D9D9] text-sm mt-1"
                  />
                  {errors.websiteLink && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.websiteLink}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="w-full">
                <label className="text-sm font-light">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none placeholder:text-[#D9D9D9] text-sm mt-1"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Service / Budget */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="text-sm font-light">
                    Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none text-sm mt-1 appearance-none"
                  >
                    <option value="" disabled hidden>
                      Select service
                    </option>
                    <option value="SEO">SEO Service</option>
                    <option value="SMM">Social Media Marketing</option>
                    <option value="SEM">Search Engine Marketing</option>
                    <option value="Influencer">Influencer Marketing</option>
                    <option value="Video">Video Marketing</option>
                    <option value="Branding">Branding</option>
                    <option value="WebDev">Web Development</option>
                    <option value="AppDev">App Development</option>
                    <option value="ERP">ERP Solution</option>
                    <option value="CRM">CRM Solution</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="text-sm font-light">Budget</label>
                  <span className="text-[#B8B8B8]">(optional)</span>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none text-sm mt-1 appearance-none"
                  >
                    <option value="" disabled hidden>
                      Select your budget
                    </option>
                    <option value="0">Below 1 lakh</option>
                    <option value="1">1 lakh - 5 lakh</option>
                    <option value="2">Above 5 lakh</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-light">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-[#5B5B5B] p-2 focus:outline-none placeholder:text-[#D9D9D9] text-sm mt-1 resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-6 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting || isSent}
                  className={`w-full ${isFormValid && !isSent
                      ? "bg-[#04A391] hover:bg-[linear-gradient(270deg,#035249_0%,#04A391_100%)]"
                      : "bg-[#04A391] opacity-50 cursor-not-allowed"
                    } text-white py-3 rounded-md text-base font-medium transition-all duration-300`}
                >
                  {isSent
                    ? "Message Sent ✓"
                    : isSubmitting
                      ? "Sending..."
                      : "Send Message"}
                </button>

                {feedback && (
                  <p className="text-sm text-center text-[#333]">{feedback}</p>
                )}
              </div>

              {/* Invisible reCAPTCHA */}
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                size="invisible"
                badge="inline"
                ref={recaptchaRef}
                onChange={onReCAPTCHAChange}
              />

              <style jsx global>{`
                .grecaptcha-badge {
                  transform: scale(0.5);
                  transform-origin: bottom left;
                  left: 10px;
                  right: auto;
                  bottom: 10px;
                }
              `}</style>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
