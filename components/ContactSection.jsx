"use client";

import { useState } from "react";

export default function ContactSection() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [success, setSuccess] = useState(false);

 const handlesubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("api/contact", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      fullname,
      email,
      message,
    }),
  });

  const { msg, success } = await res.json();

  setSuccess(success);

  if (success) {
    setFullname("");
    setEmail("");
    setMessage("");
    setError([]);
    setSuccessMsg(msg);

    setTimeout(() => {
      setSuccess(false);
      setSuccessMsg("");
    }, 1000);
  } else {
    setError(msg);
    setSuccessMsg("");
  }
};




  return (
    <section className="  p-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
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

        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl h-fit self-start border border-[#e0c840] max-w-xl w-full">
          <h5 className="text-sm font-semibold text-[#e0c840] mb-2">CONTACT US</h5>
          <h3 className="text-2xl font-bold mb-4">HELLO, HAVE ANY QUESTION?</h3>
          <p className="text-[#b9b4b4] mb-6">
            Duis ac finibus enim, sit amet vulputate quam. Ut ac ante vel dolor pulvinar bibendum.
          </p>

          <form className="space-y-4" onSubmit={handlesubmit}>
            <input
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              type="text"
              id="fullname"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Your Message"
              id="message"
              rows="5"
              className="w-full border border-gray-300 p-2 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-[#e0c840] text-black cursor-pointer py-2 px-4 rounded hover:bg-yellow-300 transition"
            >
              Submit
            </button>
          </form>
          <div className="mt-4">
            {success && successMsg && (
              <div className="text-green-800 bg-green-100 px-5 py-2 rounded">{successMsg}</div>
            )}

            {!success && Array.isArray(error) && error.length > 0 && (
              <div className="bg-red-100 px-5 py-3 rounded space-y-1">
                {error.map((err, i) => (
                  <div key={i} className="text-red-600">{err}</div>
                ))}
              </div>
            )}
          </div>


        </div>
      </div>
    </section>
  );
}