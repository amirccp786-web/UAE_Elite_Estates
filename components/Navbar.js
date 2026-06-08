"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f7f9fb]/95 backdrop-blur-md shadow-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <span className={`font-bold text-2xl tracking-wider font-headline ${scrolled ? 'text-[#0f172a]' : 'text-white drop-shadow-md'}`}>
                  UAE <span className="text-[#c5a059]">ELITE</span>
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`font-medium transition-colors hover:text-[#c5a059] ${pathname === '/' ? 'text-[#c5a059]' : scrolled ? 'text-[#191c1e]' : 'text-white'}`}>Home</Link>
              <Link href="/buy" className={`font-medium transition-colors hover:text-[#c5a059] ${pathname === '/buy' ? 'text-[#c5a059]' : scrolled ? 'text-[#191c1e]' : 'text-white'}`}>Buy</Link>
              <Link href="/rent" className={`font-medium transition-colors hover:text-[#c5a059] ${pathname === '/rent' ? 'text-[#c5a059]' : scrolled ? 'text-[#191c1e]' : 'text-white'}`}>Rent</Link>
              <Link href="/#properties" className={`font-medium transition-colors hover:text-[#c5a059] ${scrolled ? 'text-[#191c1e]' : 'text-white'}`}>Properties</Link>
              <Link href="/#neighborhoods" className={`font-medium transition-colors hover:text-[#c5a059] ${scrolled ? 'text-[#191c1e]' : 'text-white'}`}>Neighborhoods</Link>
              <Link href="/#contact" className={`font-medium transition-colors hover:text-[#c5a059] ${scrolled ? 'text-[#191c1e]' : 'text-white'}`}>Contact</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                id="mobile-menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                className={`focus:outline-none transition-colors ${scrolled ? 'text-[#0f172a]' : 'text-white'}`}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-[#0f172a] transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link href="/" onClick={() => setMenuOpen(false)} className={`text-2xl hover:text-[#c5a059] font-headline ${pathname === '/' ? 'text-[#c5a059]' : 'text-white'}`}>Home</Link>
          <Link href="/buy" onClick={() => setMenuOpen(false)} className={`text-2xl hover:text-[#c5a059] font-headline ${pathname === '/buy' ? 'text-[#c5a059]' : 'text-white'}`}>Buy</Link>
          <Link href="/rent" onClick={() => setMenuOpen(false)} className={`text-2xl hover:text-[#c5a059] font-headline ${pathname === '/rent' ? 'text-[#c5a059]' : 'text-white'}`}>Rent</Link>
          <Link href="/#properties" onClick={() => setMenuOpen(false)} className="text-2xl text-white hover:text-[#c5a059] font-headline">Properties</Link>
          <Link href="/#neighborhoods" onClick={() => setMenuOpen(false)} className="text-2xl text-white hover:text-[#c5a059] font-headline">Neighborhoods</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)} className="text-2xl text-white hover:text-[#c5a059] font-headline">Contact</Link>
        </div>
      </div>
    </>
  );
}
