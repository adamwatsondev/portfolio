"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter();

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();

    if (window.location.pathname === "/") {
      // Smooth scroll if already on home page
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home first, then scroll
      router.push(`/#${sectionId}`);
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Ensure page is loaded before scrolling
    }
  };

  return (
    <div className="flex w-full justify-between sm:px-32 h-24 transition-colors duration-1000 ease-in-out pt-2 sm:pt-0 items-start sm:items-center bg-white dark:bg-black relative">
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
          className={`absolute top-full w-fit z-10 flex justify-center bg-white dark:bg-black transition-all duration-700 ease-in-out ${
            isMenuOpen
              ? "max-h-[400px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-5 overflow-hidden"
          }`}
        >
          <ul className="flex border border-black dark:border-white rounded-md p-2 flex-col gap-3 text-center transition-all duration-500 ease-in-out">
            <li>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-md font-bold dark:invert"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#experience"
                onClick={(e) => {
                  handleScroll(e, "experience");
                  setIsMenuOpen(false);
                }}
                scroll={false}
                className="text-md font-bold dark:invert"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/#skills"
                onClick={(e) => {
                  handleScroll(e, "skills");
                  setIsMenuOpen(false);
                }}
                scroll={false}
                className="text-md font-bold dark:invert"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/#testimonials"
                onClick={(e) => {
                  handleScroll(e, "testimonials");
                  setIsMenuOpen(false); // Close menu on click
                }}
                scroll={false}
                className="text-md font-bold dark:invert"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-md font-bold dark:invert"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                onClick={() => setIsMenuOpen(false)}
                className="text-md font-bold dark:invert"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-md font-bold dark:invert"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation Menu (desktop) */}
      <NavigationMenu className="sm:flex md:items-end space-x-8 xl:space-x-16 hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link href="/">
                <span className="dark:invert text-black font-bold hover:text-gray-400 text-2xl">
                  Home_
                </span>
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-2 p-4">
                <Link
                  href="/#experience"
                  onClick={(e) => handleScroll(e, "experience")}
                  scroll={false}
                  title="Experience"
                >
                  Experience
                </Link>
                <Link
                  href="/#skills"
                  onClick={(e) => handleScroll(e, "skills")}
                  scroll={false}
                  title="Skills"
                >
                  Skills
                </Link>
                <Link
                  href="/#testimonials"
                  onClick={(e) => handleScroll(e, "testimonials")}
                  scroll={false}
                  title="Testimonials"
                >
                  Testimonials
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="dark:invert text-black font-bold hover:text-gray-400 text-2xl">
                  About_
                </span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="dark:invert text-black font-bold hover:text-gray-400 text-2xl">
                  Projects_
                </span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="dark:invert text-black font-bold hover:text-gray-400 text-2xl">
                  Contact_
                </span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
