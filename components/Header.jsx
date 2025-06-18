"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Custom Smooth Scroll Function
const customScrollTo = (id, duration = 1500) => {
  const target = document.getElementById(id);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const easeInOutQuad = (t) => {
    return t < 0.5
      ? 2 * t * t
      : -1 + (4 - 2 * t) * t;
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed / duration) * distance + startPosition;
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Portfolio', href: '/#portfolio' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#101010] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href='/'>
          <h1 className=' text-3xl font-bold'>
            <span className='text-[#e0c840]'>ARSLAN</span> EDIT'S
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => customScrollTo(item.href.replace('/#', ''))}
              className="hover:text-[#e0c840] font-medium"
            >
              {item.label}
            </button>
          ))}
          <Link
            href="/contact"
            className="ml-4 bg-[#e0c840] text-black px-4 py-2 rounded hover:bg-yellow-300 text-sm font-medium"
          >
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4 transition-all duration-500">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                customScrollTo(item.href.replace('/#', ''));
                setMenuOpen(false); // auto-close
              }}
              className="block text-white py-2 border-b border-gray-700 w-full text-left"
            >
              {item.label}
            </button>
          ))}

          <Link
            href="/contact"
            className="block mt-4 bg-[#e0c840] hover:bg-yellow-300 text-black text-center px-4 py-2 rounded text-sm font-medium"
            onClick={() => setMenuOpen(false)} // close on contact click
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
}
