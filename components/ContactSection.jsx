"use client";

import { useState } from "react";

export default function ContactSection() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch("https://formspree.io/f/mblykpke", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg("Message sent successfully!");
        setFullname("");
        setEmail("");
        setMessage("");
      } else {
        setErrorMsg("Failed to send message.");
      }
    } catch (error) {
      setErrorMsg("Something went wrong.");
    }
  };

  return (
    <section className="p-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Side: Map and Info */}
        <div>
          <iframe
            className="w-full h-96 rounded shadow-md"
            loading="lazy"
            src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near"
            title="London Eye, London, United Kingdom"
          ></iframe>
          <div className="grid grid-cols-2 gap-6 mt-6 text-sm">
            <div>
              <p className="font-semibold">📞 Phone Number</p>
              <p className="text-[#b9b4b4]">123-234-1234</p>
            </div>
            <div>
              <p className="font-semibold">✉️ Email Address</p>
              <p className="text-[#b9b4b4]">hello@awesomesite.com</p>
            </div>
            <div>
              <p className="font-semibold">🌐 Website</p>
              <p className="text-[#b9b4b4]">www.awesomesite.com</p>
            </div>
            <div>
              <p className="font-semibold">📍 Address</p>
              <p className="text-[#b9b4b4]">99 Roving St., Big City, PKU 23456</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl h-fit self-start border border-[#e0c840] max-w-xl w-full">
          <h5 className="text-sm font-semibold text-[#e0c840] mb-2">CONTACT US</h5>
          <h3 className="text-2xl font-bold mb-4">HELLO, HAVE ANY QUESTION?</h3>
          <p className="text-[#b9b4b4] mb-6">
            Duis ac finibus enim, sit amet vulputate quam. Ut ac ante vel dolor pulvinar bibendum.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
            <textarea
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 p-2 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-[#e0c840] text-black cursor-pointer py-2 px-4 rounded hover:bg-yellow-300 transition"
            >
              Submit
            </button>
          </form>

          {/* Success & Error Messages */}
          <div className="mt-4">
            {successMsg && (
              <div className="text-green-800 bg-green-100 px-5 py-2 rounded">{successMsg}</div>
            )}
            {errorMsg && (
              <div className="text-red-800 bg-red-100 px-5 py-2 rounded">{errorMsg}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
