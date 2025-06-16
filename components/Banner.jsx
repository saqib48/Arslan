'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="relative bg-black text-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="relative z-10 max-w-[85%] mx-auto px-4 grid md:grid-cols-2 items-center gap-5">
        <div className="space-y-2">
          <div className="text-center md:text-left">
            <div className="text-6xl font-extrabold">
              18<span className="text-[#e0c840] text-4xl align-top">+</span>
            </div>
            <h3 className="text-lg mt-2">Years Experience</h3>
          </div>
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/F1-1.png"
              alt="Experience"
              width={320}
              height={300}
              className="rounded-md"
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <div className="text-5xl font-extrabold">
                15<span className="text-[#e0c840] text-3xl align-top">+</span>
              </div>
              <h3 className="text-base mt-2">Best Award</h3>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl font-extrabold">
                523<span className="text-[#e0c840] text-3xl align-top">+</span>
              </div>
              <h3 className="text-base mt-2">Project Done</h3>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left space-y-6 animate-fadeInRight">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">WELCOME TO Arslan Edit's</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">
            LET&apos;S <span className="text-[#ffde21]">MAKE</span> YOUR VIDEO LOOKS MORE{' '}
            <span className="text-[#ffde21]">COOL</span>
          </h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 bg-[#e0c840] text-black font-semibold rounded hover:bg-yellow-300 transition"
          >
            <span>GET STARTED</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 z-0 opacity-30 md:block hidden">
        <Image

          src="/images/L-4.jpg"
          alt="Studio Art"
          width={2000}
          height={1000}
          priority
        />
      </div>
    </section>
  );
}
