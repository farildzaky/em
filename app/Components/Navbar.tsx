"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../Assets/logonav.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
     
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 z-[100] shadow-lg bg-white w-full">
      <div className="flex px-3 lg:px-24 py-3 justify-between items-center font-helvetica relative text-[#00094D]">
        {/* Logo */}
        <Link href="/home">
          <Image src={logo} alt="logo" className="lg:h-16 h-10" draggable />
        </Link>

        {/* Menu Desktop */}
        <ul className="lg:flex hidden gap-10 items-center">
          <li className="relative group">
            <Link href="/Home" className="text-xl font-medium">
              Beranda
              <span
                className="
                  absolute left-0 bottom-[-10px] h-[3px] w-full bg-[#007B8E]
                  transform scale-x-0 origin-right transition-transform duration-300
                  group-hover:origin-left group-hover:scale-x-100
                "
              />
            </Link>
          </li>
          <li className="relative group">
            <Link href="/Berita" className="text-xl font-medium">
              Berita
              <span
                className="
                  absolute left-0 bottom-[-10px] h-[3px] w-full bg-[#007B8E]
                  transform scale-x-0 origin-right transition-transform duration-300
                  group-hover:origin-left group-hover:scale-x-100
                "
              />
            </Link>
          </li>
          <li className="relative group">
            <Link href="/Tentang" className="text-xl font-medium">
              Tentang
              <span
                className="
                  absolute left-0 bottom-[-10px] h-[3px] w-full bg-[#007B8E]
                  transform scale-x-0 origin-right transition-transform duration-300
                  group-hover:origin-left group-hover:scale-x-100
                "
              />
            </Link>
          </li>
          <li className="relative group">
            <Link href="/Struktur" className="text-xl font-medium">
              Struktur EM
              <span
                className="
                  absolute left-0 bottom-[-10px] h-[3px] w-full bg-[#007B8E]
                  transform scale-x-0 origin-right transition-transform duration-300
                  group-hover:origin-left group-hover:scale-x-100
                "
              />
            </Link>
          </li>
          <li className="border-2 border-[#007B8E] rounded-[10px] w-[141px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-[#007B8E] hover:text-white">
            EM UB Apps
          </li>
        </ul>

      
        <div className="lg:hidden relative z-50" onClick={toggleMenu}>
        
          <div className="flex flex-col justify-center items-center w-8 h-6 space-y-1 cursor-pointer">
           
            <div
              className={`
                w-6 h-1 bg-[#007B8E] rounded-lg transition-all duration-300
                ${isOpen ? "rotate-45 translate-y-[8px]" : ""}
              `}
            />
            
            <div
              className={`
                w-6 h-1 bg-[#007B8E] rounded-lg transition-all duration-300
                ${isOpen ? "opacity-0" : ""}
              `}
            />
            
            <div
              className={`
                w-6 h-1 bg-[#007B8E] rounded-lg transition-all duration-300
                ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}
              `}
            />
          </div>
        </div>
      </div>

    
      <div
        className={`
          fixed right-0 w-full bg-white shadow-md transform
          transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
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
                <span
                  className="
                    absolute left-0 bottom-[-2px] h-[3px] w-full bg-[#007B8E]
                    transform scale-x-0 origin-right transition-transform duration-300
                    group-hover:origin-left group-hover:scale-x-100
                  "
                />
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/Berita"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium block"
              >
                Berita
                <span
                  className="
                    absolute left-0 bottom-[-2px] h-[3px] w-full bg-[#007B8E]
                    transform scale-x-0 origin-right transition-transform duration-300
                    group-hover:origin-left group-hover:scale-x-100
                  "
                />
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/Tentang"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium block"
              >
                Tentang
                <span
                  className="
                    absolute left-0 bottom-[-2px] h-[3px] w-full bg-[#007B8E]
                    transform scale-x-0 origin-right transition-transform duration-300
                    group-hover:origin-left group-hover:scale-x-100
                  "
                />
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/Struktur"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium block"
              >
                Struktur EM
                <span
                  className="
                    absolute left-0 bottom-[-2px] h-[3px] w-full bg-[#007B8E]
                    transform scale-x-0 origin-right transition-transform duration-300
                    group-hover:origin-left group-hover:scale-x-100
                  "
                />
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
};

export default Navbar;
