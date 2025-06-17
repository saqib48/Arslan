"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' }, 
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Resume', href: '/resume' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#101010] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
       <Link href='/'> <h1 className=' text-3xl font-bold'>
      <span className='text-[#e0c840]'>ARSLAN</span> EDIT'S
       </h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, i) =>
            item.submenu ? (
              <div key={i} className="relative group">
                <button className="hover:text-gray-300">{item.label}</button>
                <div className="absolute hidden group-hover:block bg-gray-800 mt-2 py-2 rounded shadow-lg z-50">
                  {item.submenu.map((sub, j) =>
                    sub.submenu ? (
                      <div key={j} className="relative group px-4 py-2 hover:bg-gray-700">
                        <span>{sub.label}</span>
                        <div className="absolute left-full top-0 ml-2 hidden group-hover:block bg-gray-800 py-2 px-4 rounded">
                          {sub.submenu.map((deep, k) => (
                            <Link key={k} href={deep.href} className="block py-1 text-sm hover:text-gray-300">
                              {deep.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link key={j} href={sub.href} className="block px-4 py-2 text-sm hover:bg-gray-700">
                        {sub.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : (
              <Link key={i} href={item.href} className="hover:text-[#e0c840] font-medium">
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-4 bg-[#e0c840] text-black px-4 py-2 rounded hover:bg-yellow-300 text-sm font-medium"
          >
            CONTACT US
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4">
          {navItems.map((item, i) => (
            <div key={i} className="py-2 border-b border-gray-700">
              <Link href={item.href || '#'} className="block text-white">
                {item.label}
              </Link>
              {item.submenu && (
                <div className="pl-4 mt-2">
                  {item.submenu.map((sub, j) => (
                    <div key={j}>
                      <Link href={sub.href} className="block text-sm text-gray-300">
                        {sub.label}
                      </Link>
                      {sub.submenu && (
                        <div className="pl-4">
                          {sub.submenu.map((deep, k) => (
                            <Link key={k} href={deep.href} className="block text-xs text-gray-400">
                              {deep.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            className="block mt-4 bg-[#e0c840] hover:bg-yellow-300 text-black text-center px-4 py-2 rounded text-sm font-medium"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
}
