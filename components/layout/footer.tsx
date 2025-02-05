"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, Mail, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex w-full justify-center sm:justify-end gap-4 px-8 md:px-16 h-12 sm:h-20 bg-white dark:bg-black items-center">
      <div className="flex items-center gap-4 justify-center">
        <Link href="/contact" className="focus:outline-none">
          <Mail className="text-black size-8 sm:size-10 dark:invert" />
        </Link>
        <Link
          href="https://github.com/adamwatsondev"
          className="focus:outline-none"
        >
          <GithubIcon className="text-black size-8 sm:size-10 dark:invert" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/adamwatsondev"
          className="focus:outline-none"
        >
          <LinkedinIcon className="text-black size-8 sm:size-10 dark:invert" />
        </Link>
      </div>
      <div>
        <Button
          onClick={toggleDarkMode}
          className="group relative flex items-center justify-start overflow-hidden w-full hover:w-40 size-10 rounded-md dark:border-white border-black border transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center justify-start gap-4 transform transition-all duration-300">
            {darkMode ? (
              <Sun className="text-black" />
            ) : (
              <Moon className="text-white" />
            )}
            <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-sm whitespace-nowrap">
              {darkMode ? "Set to Light Mode" : "Set to Dark Mode"}
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
}
