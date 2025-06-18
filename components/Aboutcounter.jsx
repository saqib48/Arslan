"use client";
import { useEffect, useState } from 'react';

const CounterItem = ({ iconClass, end, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; 
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex items-center space-x-4">
      <i className={`${iconClass} text-4xl`}></i>
      <div>
        <div className="text-4xl font-bold text-white">
          {count}
          <span className="text-2xl align-top text-[#e0c840]">+</span>
        </div>
        <h3 className="text-lg text-[#e0c840]">{title}</h3>
      </div>
    </div>
  );
};

export default function Aboutcounter() {
  return (
    <section className="pb-16 text-[#e0c840]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-25 pl-6">
        <CounterItem iconClass="icon icon-timing" end={3} title="Years Experience" />
        <CounterItem iconClass="icon icon-smart" end={70} title="Project Done" />
        <CounterItem iconClass="icon icon-star" end={15} title="Best Award" />
        <CounterItem iconClass="icon icon-video-camera" end={586} title="Videos Done" />
      </div>
    </section>
  );
}
