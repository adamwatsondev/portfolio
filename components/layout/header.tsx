"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex w-full justify-between sm:px-32 h-24 pt-2 sm:pt-0 items-start sm:items-center bg-white dark:bg-black relative">
      <div className="hidden md:block items-start space-x-4">
        <div className="col-span-3 text-start flex dark:dark:invert text-black">
          <span
            onAnimationEnd={(e) =>
              (e.target as HTMLElement).classList.add("done")
            }
            className="text-lg sm:text-2xl xl:text-3xl 2xl:text-4xl typing-container font-old-standard"
          >
            adamwatsondev<span className="animate-blink">_</span>
          </span>
        </div>
      </div>
      <div className="sm:hidden flex w-full justify-center items-center relative">
        <Button
          variant="ghost"
          onClick={toggleMenu}
          className="relative w-10 h-10"
        >
          <X
            className={`absolute w-4 h-4 transition-all text-black dark:text-white duration-500 ease-in-out ${
              isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          />
          <Menu
            className={`absolute w-4 h-4 mt-5 transition-all text-black dark:text-white duration-500 ease-in-out ${
              isMenuOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          />
        </Button>

        {/* Navigation Menu (mobile) */}
        <div
          className={`absolute top-full left-0 w-full z-10 overflow-hidden flex justify-center transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-[100px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-5"
          }`}
        >
          <nav className="flex items-center px-4 py-4 gap-3">
            <Link
              href="/"
              className="dark:invert text-black font-old-standard font-bold hover:text-gray-400"
            >
              Home_
            </Link>
            <Link
              href="/about"
              className="dark:invert text-black font-old-standard font-bold hover:text-gray-400"
            >
              About_
            </Link>
            <Link
              href="/projects"
              className="dark:invert text-black font-old-standard font-bold hover:text-gray-400"
            >
              Projects_
            </Link>
            <Link
              href="/contact"
              className="dark:invert text-black font-old-standard font-bold hover:text-gray-400"
            >
              Contact_
            </Link>
          </nav>
        </div>
      </div>

      {/* Navigation Menu (desktop) */}
      <nav className="sm:flex md:items-end space-x-8 xl:space-x-16 hidden">
        <Link
          href="/"
          className="dark:invert text-black font-old-standard font-bold hover:text-gray-400 text-2xl"
        >
          Home_
        </Link>
        <Link
          href="/about"
          className="dark:invert text-black font-old-standard font-bold hover:text-gray-400 text-2xl"
        >
          About_
        </Link>
        <Link
          href="/projects"
          className="dark:invert text-black font-old-standard font-bold hover:text-gray-400 text-2xl"
        >
          Projects_
        </Link>
        <Link
          href="/contact"
          className="dark:invert text-black font-old-standard font-bold hover:text-gray-400 text-2xl"
        >
          Contact_
        </Link>
      </nav>
    </div>
  );
}
