import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="w-[95%] max-w-[1200px] mx-auto py-10">
      
      {/* <p className="text-sm text-gray-500 mb-6">Home / Contact</p> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white shadow p-6 rounded-lg space-y-6">
          
          <div className="flex items-start gap-4">
            <div className="bg-red-500 text-white p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <div>
              <h2 className="font-bold">Call To Me</h2>
              <p className="text-sm text-gray-500">
                Shop is Open 24/7, 7 days a week.
              </p>
              <p className="text-sm mt-1">Phone: +91 6377733954</p>
            </div>
          </div>

          <hr />

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-red-500 text-white p-3 rounded-full">
              <FaEnvelope />
            </div>
            <div>
              <h2 className="font-bold">Write To Me</h2>
              <p className="text-sm mt-1">Emails: nikhiljangid.dev@gmail.com</p>
              <p className="text-sm">Emails: support@nikhiljangid.dev@gmail.com</p>
            </div>
          </div>

        </div>

        {/* Right Form */}
        <div className="md:col-span-2 bg-white shadow p-6 rounded-lg">
          
          {/* Inputs Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="border bg-gray-100 px-4 py-2 rounded outline-none"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="border bg-gray-100 px-4 py-2 rounded outline-none"
            />
            <input
              type="text"
              placeholder="Your Phone *"
              className="border bg-gray-100 px-4 py-2 rounded outline-none"
            />
          </div>

          {/* Message */}
          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full border bg-gray-100 px-4 py-2 rounded outline-none mb-4"
          ></textarea>

          {/* Button */}
          <div className="text-right">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
              Send Message
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}