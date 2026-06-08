"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle, submitting, success
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    emailjs
      .sendForm(
        "service_480u1il",
        "template_oz7x0q4",
        form.current,
        "xMls071m2pm6iXMon"
      )
      .then(
        (result) => {
          setStatus("success");
          e.target.reset();

          setTimeout(() => {
            setStatus("idle");
          }, 3000);
        },
        (error) => {
          console.error(error.text);
          setStatus("idle");
          alert("Something went wrong, please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[#0f172a] h-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Contact Info */}
          <div className="bg-[#0f172a] p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold font-headline mb-6 text-[#c5a059]">Get in Touch</h2>
              <p className="text-white/80 text-lg mb-12">
                Whether you're looking for an investment opportunity or your dream home in Dubai/Abu Dhabi/Ras Al Khaimah, our elite advisors are here to help.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-[#c5a059] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span className="text-lg">+923336515085</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-[#c5a059] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="text-lg">amirccp786@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-[#c5a059] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="text-lg">Please Submit Contact Form for More Information</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-12">
            <h3 className="text-2xl font-bold font-headline text-[#0f172a] mb-8">Send us a message</h3>
            <form ref={form} id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input name="first_name" required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c5a059] focus:border-transparent transition-all outline-none" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input name="last_name" required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c5a059] focus:border-transparent transition-all outline-none" placeholder="Doe" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input name="email" required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c5a059] focus:border-transparent transition-all outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input name="phone_number" required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c5a059] focus:border-transparent transition-all outline-none" placeholder="+971 50 123 4567" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                  <input name="budget" required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c5a059] focus:border-transparent transition-all outline-none" placeholder="e.g. 2,000,000 AED" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select name="location" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c5a059] focus:border-transparent transition-all outline-none bg-white">
                    <option value="">Select Location</option>
                    <option value="UAE">UAE</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                  <select name="inquiry_type" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c5a059] focus:border-transparent transition-all outline-none bg-white">
                    <option value="">Select Inquiry Type</option>
                    <option value="Buy">Buy</option>
                    <option value="Rent">Rent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Category</label>
                  <select name="property_category" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c5a059] focus:border-transparent transition-all outline-none bg-white">
                    <option value="">Select Category</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea name="message" required rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c5a059] focus:border-transparent transition-all outline-none resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg ${status === "success" ? "bg-green-600 text-white" : "bg-[#c5a059] hover:bg-[#b08d4b] text-white"
                  }`}
              >
                {status === "idle" && "Send Message"}
                {status === "submitting" && "Sending..."}
                {status === "success" && "✓ Message Sent"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
