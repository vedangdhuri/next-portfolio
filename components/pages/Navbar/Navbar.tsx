"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import {
  FaLaptopCode,
  FaHome,
  FaUser,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";
import { cn } from "@/lib/utils";

const navItems = [
  { logo: <FaHome size={20} />, href: "/" },
  { logo: <FaUser size={20} />, href: "/#about" },
  { logo: <FaCode size={20} />, href: "/#skills" },
  { logo: <FaLaptopCode size={20} />, href: "/projects" },
  { logo: <FaEnvelope size={20} />, href: "/#contact" },
];

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
    } else {
      // default or explicitly dark
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <>
      <nav className="w-max z-[9999] fixed bg-gray-700/10 -translate-x-2/4 flex gap-[0.8rem] backdrop-blur-sm px-4 py-[0.5rem] rounded-[3rem] left-2/4 bottom-6 animate-fade-in">
        <div className="flex gap-4">
          {navItems.map((item, key) => (
            <Link
              key={key}
              href={item.href}
              onClick={() => setActiveLink(item.href)}
              className={cn(
                "flex text-[1.1rem] p-[0.9rem] rounded-[50%] transition-all duration-300",
                activeLink === item.href
                  ? "bg-blue-400 text-black"
                  : "text-white hover:bg-blue-400 hover:text-black",
              )}
            >
              {item.logo}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};
