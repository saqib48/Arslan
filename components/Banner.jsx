'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="relative text-white py-16 overflow-hidden bg-[#101010]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/L-4.jpg"
          alt="Studio Art"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

      <div className="relative z-10 max-w-[85%] mx-auto px-4 grid md:grid-cols-2 items-center gap-6">
        <div className="space-y-0">
          <div className="text-center md:text-left">
            <div className="text-6xl font-extrabold">
              3<span className="text-[#e0c840] text-4xl align-top">+</span>
            </div>
            <h3 className="text-lg mt-1">Years Experience</h3>
          </div>
          <div className="flex justify-center md:justify-start mt-[-80] mb-10">
            <Image
              src="/images/F1-1.png"
              alt="Experience"
              width={320}
              height={200}
              className="rounded-md"
            />
          </div>

          <div className="grid grid-cols-2 ">
            <div className="text-center md:text-left">
              <div className="text-5xl font-extrabold">
                15<span className="text-[#e0c840] text-3xl align-top">+</span>
              </div>
              <h3 className="text-base mt-1">Best Award</h3>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl font-extrabold">
                70<span className="text-[#e0c840] text-3xl align-top">+</span>
              </div>
              <h3 className="text-base mt-1">Project Done</h3>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left space-y-6 animate-fadeInRight">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">WELCOME TO Arslan Edit's</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">
            LET&apos;S <span className="text-[#e0c840]">MAKE</span> YOUR VIDEO LOOKS MORE{' '}
            <span className="text-[#e0c840]">COOL</span>
          </h2>
          <p className="text-[#b9b4b4]">
            At Arslan Edit's, we transform your raw footage into captivating visual stories. Whether it’s for social media, YouTube, or personal projects — our editing adds style, emotion, and polish that brings your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#e0c840] text-black font-semibold rounded hover:bg-yellow-300 transition"
          >
            <span>GET STARTED</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
