"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../Assets/logonav.svg";
import hamburger from "../Assets/hamburger.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-[100] shadow-lg bg-white">
      <div className="flex px-3 lg:px-24 py-3 justify-between items-center font-helvetica relative">
        <Link href="/home">
          <Image src={logo} alt="logo" className="lg:h-16 h-10" draggable />
        </Link>

        
        <ul className="lg:flex hidden gap-10 items-center">
          <li className="relative group">
            <Link href="/Home" className="text-xl font-medium">
              Beranda
              <span className="absolute left-0 bottom-[-10px] h-[3px] w-0 bg-[#007B8E] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="relative group">
            <Link href="/Berita" className="text-xl font-medium">
              Berita
              <span className="absolute left-0 bottom-[-10px] h-[3px] w-0 bg-[#007B8E] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="relative group">
            <Link href="/Tentang" className="text-xl font-medium">
              Tentang
              <span className="absolute left-0 bottom-[-10px] h-[3px] w-0 bg-[#007B8E] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="relative group">
            <Link href="/Struktur" className="text-xl font-medium">
              Struktur EM
              <span className="absolute left-0 bottom-[-10px] h-[3px] w-0 bg-[#007B8E] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li className="border-2 border-[#007B8E] rounded-[10px] w-[141px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-[#007B8E] hover:text-white">
            EM UB Apps
          </li>
        </ul>

      
        <div className="lg:hidden relative z-50">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="transition-all duration-300">
            {isOpen ? (
              <svg
                className="w-8 h-8 text-[#007B8E] cursor-pointer transition-all duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <Image src={hamburger} alt="Menu" className="w-8 h-8 cursor-pointer transition-all duration-300" />
            )}
          </button>
        </div>
      </div>

      
      <div
        className={`fixed  right-0 w-full bg-white shadow-md transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-5 py-3 font-helveticaExtraBold">
          <ul className="flex flex-col gap-4 mt-4">
            <li className="relative group">
              <Link
                href="/Home"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium block"
              >
                Beranda
                <span className="block h-[3px] w-0 bg-[#007B8E] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/Berita"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium block"
              >
                Berita
                <span className="block h-[3px] w-0 bg-[#007B8E] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/Tentang"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium block"
              >
                Tentang
                <span className="block h-[3px] w-0 bg-[#007B8E] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/Struktur"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium block"
              >
                Struktur EM
                <span className="block h-[3px] w-0 bg-[#007B8E] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li className="border-2 border-[#007B8E] rounded-[10px] w-[141px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-[#007B8E] hover:text-white">
              EM UB Apps
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
