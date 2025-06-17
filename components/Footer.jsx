'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" text-center py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 flex justify-center">
          <Link href='/'> <h1 className=' text-3xl font-bold'>
      <span className='text-[#e0c840]'>ARSLAN</span> EDIT'S
       </h1>
        </Link>
        </div>

           <nav className="mb-6">
      <ul className="flex flex-wrap justify-center gap-6 text-white font-medium">
        <li>
          <Link href="/" className="hover:text-[#e0c840] transition-colors">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-[#e0c840] transition-colors">About</Link>
        </li>
        <li>
          <Link href="/portfolio" className="hover:text-[#e0c840] transition-colors">Portfolio</Link>
        </li>
        <li>
          <Link href="/resume" className="hover:text-[#e0c840] transition-colors">Resume</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-[#e0c840] transition-colors">Contact Us</Link>
        </li>
      </ul>
    </nav>

        <p className="text-gray-500 max-w-xl mx-auto mb-6">
          Duis ac finibus enim, sit amet vulputate quam. Ut ac ante vel dolor pulvinar bibendum.
          Curabitur molestie, nisl quis porta laoreet, est ex pellentesque orci.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <Link href="#" className="text-white hover:text-blue-600 text-xl">
            <FaFacebookF />
          </Link>
          <Link href="#" className="text-white hover:text-pink-500 text-xl">
            <FaInstagram />
          </Link>
          <Link href="#" className="text-white hover:text-blue-400 text-xl">
            <FaTwitter />
          </Link>
          <Link href="#" className="text-white hover:text-red-600 text-xl">
            <FaYoutube />
          </Link>
        </div>

        <hr className="border-t border-gray-300 mb-4" />

        <p className="text-sm text-gray-400">
          Copyright 2022 © All Right Reserved. Design by Rometheme
        </p>
      </div>
    </footer>
  );
}
