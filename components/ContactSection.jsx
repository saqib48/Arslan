export default function ContactSection() {
  return (
    <section className="  p-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left side - Google Map */}
        <div>
          <iframe
            className="w-full h-96 rounded shadow-md"
            loading="lazy"
            src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near"
            title="London Eye, London, United Kingdom"
          ></iframe>

          {/* Contact Info Blocks */}
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

        {/* Right side - Contact Form */}
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl h-fit self-start border border-[#e0c840] max-w-xl w-full">
          <h5 className="text-sm font-semibold text-[#e0c840] mb-2">CONTACT US</h5>
          <h3 className="text-2xl font-bold mb-4">HELLO, HAVE ANY QUESTION?</h3>
          <p className="text-[#b9b4b4] mb-6">
            Duis ac finibus enim, sit amet vulputate quam. Ut ac ante vel dolor pulvinar bibendum.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <textarea
              placeholder="Your Message"
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
        </div>
      </div>
    </section>
  );
}
