'use client';

import Link from 'next/link';
import React from 'react'; 
import { FaBuilding, FaRegSun, FaTags, FaMobileAlt } from 'react-icons/fa'; 

export default function OurServicesSection() {
  return ( 
    <section className="flex flex-col-reverse md:flex-row md:gap-12 gap-10 bg-[#101010] py-16 px-6 md:px-20 items-center">
      <div className="flex-1 grid grid-cols-2 gap-8">
        <div className="flex flex-col items-start text-left">
          <div className="text-3xl text-[#e0c840] mb-4">
            <FaBuilding />
          </div>
          <h3 className="text-xl font-semibold mb-2">Company Profile</h3>
          <p className="text-sm text-[#878787]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
          </p>
        </div>
        <div className="flex flex-col items-start text-left">
          <div className="text-3xl text-[#e0c840] mb-4">
            <FaRegSun />
          </div>
          <h3 className="text-xl font-semibold mb-2">Wedding Session</h3>
          <p className="text-sm text-[#878787]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
          </p>
        </div>
        <div className="flex flex-col items-start text-left">
          <div className="text-3xl text-[#e0c840] mb-4">
            <FaTags />
          </div>
          <h3 className="text-xl font-semibold mb-2">Branding Mode</h3>
          <p className="text-sm text-[#878787]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
          </p>
        </div>
        <div className="flex flex-col items-start text-left">
          <div className="text-3xl text-[#e0c840] mb-4">
            <FaMobileAlt />
          </div>
          <h3 className="text-xl font-semibold mb-2">Entertainer</h3>
          <p className="text-sm text-[#878787]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
          </p>
        </div>
      </div>

      <div className="flex-1">
        <h5 className="text-[#e0c840] text-sm font-semibold uppercase mb-2">OUR SERVICES</h5>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">WE CREATE AMAZING VIDEO</h3>
        <p className="text-[#878787] mb-6">
          Maecenas eros dui, tempus sit amet quam ac, ultrices vehicula elit. Sed euismod vel tortor et luctus. In viverra finibus velit et ullamcorper. Vivamus eleifend velit ac lobortis fringilla.
        </p>
        <p className="text-[#878787] mb-6">
          Cras auctor tempus mattis. Proin convallis turpis sed aliquam dignissim. Vivamus eleifend velit ac lobortis fringilla.
        </p>
        <Link href="#" className="inline-block bg-[#e0c840] text-black py-2 px-6 rounded hover:bg-yellow-300 transition-all">
          View Services
        </Link>
      </div>
    </section>
  );
}
