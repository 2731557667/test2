"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/public/img/logo.svg";
import {
  BookOpenCheck,
  CodeXml,
  Cpu,
  MoreHorizontal,
  Network,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isNearViewportEdge, setIsNearViewportEdge] = useState(false);
  const dropdownRef = useRef([]);
  const dropDownButtons = useRef([]);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const menu = [
    {
      id: 1,
      title: "Upis",
      link: "/admissions/btech",
    },
    {
      id: 2,
      title: "Karijera",
      link: "/cells/placement",
    },
    {
      id: 3,
      title: "Prigovori",
      link: "/cells/grievance",
    },
    {
      id: 4,
      title: "Dostignuća",
      link: "/about/achievements",    
    },
    {
      id: 5,
      title: "Nastavnici",
      link: "/faculties",
    },
    {
      id: 6,
      title: "Kontakt",
      link: "/about/contact",
    },
  ];

  const setButtonRef = (index) => (element) => {
    dropDownButtons.current[index] = element;
  };
  const setDropDownRef = (index) => (element) => {
    dropdownRef.current[index] = element;
  };
  const handleDropdownToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.some((element) => element.contains(event.target)) &&
      !dropDownButtons.current.some((button) => button.contains(event.target))
    ) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white border-b z-30 flex items-center flex-col">
      <div className="w-full py-4 px-2 md:px-16 md:h-[100px] flex flex-col md:flex-row items-center justify-between">
        <Link href="/">
        <div className="flex items-center space-x-4 ">
          <Image
            width={85}
            height={85}
            src={Logo.src}
            alt="Београдски технички институт за аутоматизацију Logo"
            className="h-[50px] w-[50px] md:h-[85px] md:w-[85px] text-black prevent-select"
          />
          <div>
            <h1 className="text-lg font-bold text-[17.99px] md:text-[27px]">
              Београдски технички институт за аутоматизацију
            </h1>
            <p className="text-sm text-[12px] md:text-[14px]">
              Beograd, Srbija
            </p>
          </div>
        </div>
        </Link>
        <nav className="flex-wrap justify-evenly gap-3 flex md:space-x-1 mt-4 md:mt-0 text-[14px] md:text-[16px] font-[500]">
          {pathname != "/" && (
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Početna
            </Link>
          )}
          <div className="relative">
            <button
              ref={setButtonRef(1)}
              onClick={() => handleDropdownToggle("cells")}
              className="text-gray-600 hover:text-gray-800 flex items-center"
            >
              Sekcije i Komiteti
              <svg
                className="w-3 h-3 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              ref={setDropDownRef(1)}
              className={`absolute left-0 mt-2 w-40 bg-white border rounded-xl md:text-[14px] text-[12px] z-30 shadow-lg ${
                openDropdown === "cells" ? "block" : "hidden"
              }`}
            >
              <Link
                href="/cells/union"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Studentska Unija
              </Link>
              <Link
                href="/cells/pta"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Savet roditelja
              </Link>
              <Link
                href="/cells/anti-ragging"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Protiv vršnjačkog nasilja
              </Link>
              <Link
                href="/cells/womencell"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Ženska sekcija
              </Link>
              <Link
                href="/cells/placement"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Centar za zapošljavanje
              </Link>
              <Link
                href="/cells"
                className="flex px-4 text-gray-600 hover:bg-gray-100 hover:rounded-b-xl gap-2 items-center py-3"
              >
                <MoreHorizontal/>Vidi sve
              </Link>


            </div>
          </div>
          <div className="relative">
            <button
              ref={setButtonRef(3)}
              onClick={() => handleDropdownToggle("departments")}
              className="text-gray-600 hover:text-gray-800 flex items-center "
            >
              Smerovi
              <svg
                className="w-3 h-3 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              ref={setDropDownRef(2)}
              className={`origin-top-right absolute -right-10 mt-2 w-72 bg-white border rounded-xl md:text-[14px] text-[12px] z-30 shadow-lg department ${
                openDropdown === "departments" ? "block" : "hidden"
              } ${isHomePage ? "-right-10 home-dep" : "right-1 nothome-dep"}`}
            >
              <Link
                href="/departments/cse"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                <CodeXml className="md:w-6 w-5" />
                Računarstvo
              </Link>
              <Link
                href="/departments/ece"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                <Cpu className="md:w-6 w-5" />
                Elektronika i telekomunikacije
              </Link>
              <Link
                href="/departments/it"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                <Network className="md:w-6 w-5" />
                Informacione tehnologije
              </Link>
              <Link
                href="/departments/gen"
                className="flex px-4 text-gray-600 hover:bg-gray-100 hover:rounded-b-xl gap-2 items-center py-3"
              >
                <BookOpenCheck className="md:w-6 w-5" />
                Opšti smerovi
              </Link>
            </div>
          </div>
          <div className="relative">
            <button
              ref={setButtonRef(4)}
              onClick={() => handleDropdownToggle("clubs")}
              className="text-gray-600 hover:text-gray-800 flex items-center"
            >
              Klubovi i sekcije
              <svg
                className="w-3 h-3 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              ref={setDropDownRef(3)}
              className={`absolute -right-10 mt-2 w-44 bg-white border rounded-xl md:text-[14px] text-[12px] z-30 shadow-lg dropdown‑clubs ${
                openDropdown === "clubs" ? "block" : "hidden"
              } ${isHomePage ? "max-md:right-1" : "max-md:-right-[5rem] nothomeclub"}`}
            >
               <Link
                href="/clubs/foss"
                className="flex px-4 text-gray-600 hover:bg-gray-100 hover:rounded-b-xl gap-2 items-center py-3"
              >
                 <Image src={"/logos/foss.png"} width={30} height={30} alt="logo"/>
                FOSS Klub
              </Link>

              <Link
                href="/clubs/hult"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                 <Image src={"/logos/hult.png"} width={30} height={30} alt="logo"/>
                 Međunarodni klub
              </Link>
              <Link
                href="/clubs/ieee"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                 <Image src={"/logos/ieee.png"} width={30} height={30} alt="logo"/>
                Tehnički klub
              </Link>
              <Link
                href="/clubs/iedc"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                 <Image src={"/logos/iedc.png"} width={30} height={30} alt="logo"/>
                Klub inovacija
              </Link>
              <Link
                href="/clubs/mulearn"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
              <Image src={"/logos/mulearn.png"} width={30} height={30} alt="logo"/>
                Klub projekata
              </Link>
              <Link
                href="/clubs/nss"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                 <Image src={"/logos/nss.png"} width={30} height={30} alt="logo"/>
                Volonterski klub
              </Link>
              <Link
                href="/clubs/tourism"
                className="flex px-4 text-gray-600 hover:bg-gray-100 hover:rounded-b-xl gap-2 items-center py-3"
              >
                Turistički klub
              </Link>
              
            </div>
          </div>
         
          <div className="relative">
            <button
              ref={setButtonRef(5)}
              onClick={() => handleDropdownToggle("facilities")}
              className="text-gray-600 hover:text-gray-800 flex items-center"
            >
              Sadržaji
              <svg
                className="w-3 h-3 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              ref={setDropDownRef(5)}
              className={` absolute -left-10 mt-2 w-40 bg-white border rounded-xl md:text-[14px] text-[12px] z-30 shadow-lg facilities ${
                openDropdown === "facilities" ? "block" : "hidden"
              }`}
            >
              <Link
                href="/facilities/canteen"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Kantina
              </Link>
              
              <Link
                href="/facilities/centrallibrary.php"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Centralna biblioteka
              </Link>
              <Link
                href="/facilities/co-op-society"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Zadruga
              </Link>
              <Link
                href="/facilities/college-bus"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Prevoz
              </Link>
              <Link
                href="/facilities/health-centre"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Zdravstveni centar
              </Link>
              <Link
                href="/facilities/scholarship.php"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Stipendije
              </Link>
              <Link
                href="/facilities/wifi-facility"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Internet
              </Link>
            </div>
          </div>

          <div className="relative">
            <button
              ref={setButtonRef(2)}
              onClick={() => handleDropdownToggle("about")}
              className="text-gray-600 hover:text-gray-800 flex items-center"
            >
              O Centru
              <svg
                className="w-3 h-3 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              ref={setDropDownRef(4)}
              className={` absolute right-0 mt-2 w-40 bg-white border rounded-xl md:text-[14px] text-[12px] z-30 shadow-lg ${
                openDropdown === "about" ? "block" : "hidden"
              }`}
            >
              <Link
                href="/about/college"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Centar
              </Link>
              
              <Link
                href="/about/principal"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Direktor
              </Link>
              <Link
                href="/about/office-bearers"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Administracija
              </Link>
              <Link
                href="/faculties"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Nastavnici
              </Link>
              <Link
                href="/about/disclosures"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Informacije
              </Link>
              <Link
                href="/about/itpolicy"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                IT Politika
              </Link>
              <Link
                href="/about/achievements"
                className="flex px-4 text-gray-600 hover:bg-gray-100 hover:rounded-b-xl gap-2 items-center py-3"
              >
                Dostignuća
              </Link>
              <Link
                href="/about/contact"
                className="flex px-4 text-gray-600 hover:bg-gray-100 gap-2 items-center py-3"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="md:h-[30px] z-10 pb-2 sm:pb-0 bg-white border-t-[1.8px] border-[#2D3E50] w-full flex items-center ">
        <div className="w-full md:px-4 md:py-0 mt-2 md:mt-0 flex flex-wrap justify-center md:justify-evenly ">
          {menu.map((item, idx) => (
            <div key={`p${idx}`} className="flex items-center">
              <Link
                key={item.id}
                href={item.link}
                className="text-[#2D3E50] text-[12px] md:text-[14px] hover:text-gray-800 font-[600] border-gray-300 md:border-none md:last:border-none"
              >
                {item.title}
              </Link>
              {idx < menu.length - 1 && (
                <span className="mx-2 visible md:hidden text-gray-300">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Nav;