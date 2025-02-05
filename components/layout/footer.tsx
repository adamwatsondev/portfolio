"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, Mail, Moon, Sun } from "lucide-react";

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
        {darkMode ? (
          <Sun
            onClick={toggleDarkMode}
            className="text-white size-8 sm:size-10 hover:cursor-pointer"
          />
        ) : (
          <Moon
            onClick={toggleDarkMode}
            className="text-black size-8 sm:size-10 hover:cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}
