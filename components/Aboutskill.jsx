"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Aboutskill() {
  return (
    <section className="py-20 px-6 md:px-20 w-full bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-[100%] md:w-[80%]">
          <Image
            src="/images/F2-1.jpg"
            alt="Alex Videen"
            width={750}
            height={900}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        <div>
          <h5 className="text-sm text-gray-400 font-medium">SINCE 2004</h5>
          <h3 className="text-3xl font-bold text-white mt-2">HELLO, I'M ARSLAN KHIZER</h3>
          <p className="mt-4 text-gray-300">
            Duis ac finibus enim, sit amet vulputate quam. Ut ac ante vel dolor pulvinar bibendum.
            Curabitur molestie, nisl quis porta laoreet.
          </p>

          <h4 className="text-xl font-semibold text-white mt-8 mb-4">MY SKILLS</h4>

          <div className="space-y-6">
            <SkillBar label="ADOBE PREMIERE PRO" percent={95} />
            <SkillBar label="ADOBE AFTER EFFECT" percent={85} />
            <SkillBar label="3D MODELLING" percent={90} />
            <SkillBar label="POST-PRODUCTION TECHNIQUES" percent={100} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ label, percent }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(percent);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [percent]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{label}</span>
        <span className="text-sm font-medium text-gray-300">{width}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-[#e0c840] h-2.5 rounded-full transition-all duration-1000"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}
