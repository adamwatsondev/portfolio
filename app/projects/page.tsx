"use client";

import { GithubIcon, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const pcpPhotos = [
  { src: "/projects/paulphotography/home.png", alt: "Home" },
  { src: "/projects/paulphotography/about.png", alt: "About" },
  { src: "/projects/paulphotography/galleries.png", alt: "Galleries" },
  {
    src: "/projects/paulphotography/gallery-images.png",
    alt: "Gallery Images",
  },
  {
    src: "/projects/paulphotography/image-purchase.png",
    alt: "Image Purchase",
  },
  { src: "/projects/paulphotography/contact.png", alt: "Contact" },
  { src: "/projects/paulphotography/basket-drawer.png", alt: "Basket Drawer" },
  { src: "/projects/paulphotography/checkout.png", alt: "Basket" },
];

const portfolioPhotos = [
  { src: "/projects/portfolio/home.png", alt: "Home" },
  { src: "/projects/portfolio/about.png", alt: "About" },
  { src: "/projects/portfolio/projects.png", alt: "Projects" },
  {
    src: "/projects/portfolio/contact.png",
    alt: "Contact",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-0 px-4">
      {/* Paul Cahill Photography */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "backOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-2 rounded-md border-black dark:border-white gap-12 2xl:gap-40 items-center justify-center mx-4 xl:mx-40 sm:mx-20 mt-28 sm:mt-40"
      >
        <div className="xl:col-span-1 col-span-2 flex flex-col gap-8">
          <div className="flex flex-col items-start gap-2">
            <Link href="https://www.paulcahillphotography.co.uk/">
              <span className="md:text-4xl underline hover:cursor-pointer text-3xl font-bold dark:invert text-left">
                Paul Cahill Photography
              </span>
            </Link>
            <span className="md:text-2xl text-lg dark:invert text-left">
              A portfolio e-commerce website for a photographer
            </span>
          </div>
          <span className="md:text-lg text-sm dark:invert text-left">
            Paul needed a platform where people could view and purchase his
            stunning photography without the ongoing costs of website-building
            services. Using React, Next.js, Cloudinary, Stripe, and EmailJS, I
            developed a sleek, responsive, and high-performance website that
            offers a seamless user experience. Paul can also easily manage and
            update the site&apos;s photos and text, ensuring his portfolio stays
            fresh and up to date! This project was a great opportunity to blend
            performance, aesthetics, and e-commerce functionality into a single
            platform.
          </span>
          <div className="flex gap-4">
            <Link
              href="https://github.com/adamwatsondev/paulcahillphotographynext"
              className="focus:outline-none"
              target="_blank"
            >
              <GithubIcon className="text-black size-8 sm:size-16 dark:invert" />
            </Link>
            <Link
              href="https://www.paulcahillphotography.co.uk/"
              className="focus:outline-none"
              target="_blank"
            >
              <Link2 className="text-black size-8 sm:size-16 dark:invert" />
            </Link>
          </div>
        </div>
        <div className="xl:col-span-1 col-span-2 w-full aspect-[3/2]">
          <Carousel className="w-full">
            <CarouselContent>
              {pcpPhotos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      className="sm:h-[400px] rounded-md h-[200px]"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </motion.div>
      {/* Portfolio */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "backOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-2 rounded-md border-black dark:border-white gap-12 2xl:gap-40 items-center justify-center mx-4 xl:mx-40 sm:mx-20 mt-28 sm:mt-40"
      >
        <div className="xl:col-span-1 col-span-2 w-full aspect-[3/2]">
          <Carousel className="w-full">
            <CarouselContent>
              {portfolioPhotos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      className="sm:h-[400px] rounded-md h-[200px]"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="xl:col-span-1 col-span-2 flex flex-col gap-8">
          <div className="flex flex-col items-start gap-2">
            <Link href="https://www.adamwatsondev.co.uk/">
              <span className="md:text-4xl underline hover:cursor-pointer text-3xl font-bold dark:invert text-left">
                Adam Watson Dev Portfolio
              </span>
            </Link>
            <span className="md:text-2xl text-lg dark:invert text-left">
              This website, my development portfolio
            </span>
          </div>
          <span className="md:text-lg text-sm dark:invert text-left">
            A website that showcases my skills and experiences as a web
            developer.
          </span>
          <div className="flex gap-4">
            <Link
              href="https://github.com/adamwatsondev/portfolio"
              className="focus:outline-none"
            >
              <GithubIcon className="text-black size-8 sm:size-16 dark:invert" />
            </Link>
            <Link
              href="https://www.adamwatsondev.co.uk/"
              className="focus:outline-none"
            >
              <Link2 className="text-black size-8 sm:size-16 dark:invert" />
            </Link>
          </div>
        </div>
      </motion.div>
      {/* Valopedia */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "backOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-2 rounded-md border-black dark:border-white gap-12 2xl:gap-40 items-center justify-center mx-4 xl:mx-40 sm:mx-20 mt-28 sm:mt-40"
      >
        <div className="xl:col-span-1 col-span-2 flex flex-col gap-8">
          <div className="flex flex-col items-start gap-2">
            <span className="md:text-4xl underline hover:cursor-pointer text-3xl font-bold dark:invert text-left">
              Valopedia
            </span>
            <span className="md:text-2xl text-lg dark:invert text-left">
              A wiki style website for a the Riot Games tactical FPS game,
              Valorant, utilising the Valorant API.
            </span>
          </div>
          <span className="md:text-lg text-sm dark:invert text-left">
            Work in progress...
          </span>
          <div className="flex gap-4">
            {/* <Link
              href="https://github.com/adamwatsondev/paulcahillphotographynext"
              className="focus:outline-none"
            >
              <GithubIcon className="text-black size-8 sm:size-16 dark:invert" />
            </Link>
            <Link
              href="https://github.com/adamwatsondev/paulcahillphotographynext"
              className="focus:outline-none"
            >
              <Link2 className="text-black size-8 sm:size-16 dark:invert" />
            </Link> */}
          </div>
        </div>
        <div className="xl:col-span-1 col-span-2 w-full aspect-[3/2]">
          <Image
            src="/images/valopedia.png"
            alt="Home"
            className="sm:h-[400px] blur-sm h-[200px]"
            width={1000}
            height={1000}
          />
        </div>
      </motion.div>
      {/* Pokedex Ultimate */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "backOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-2 rounded-md border-black dark:border-white gap-12 2xl:gap-40 items-center justify-center mx-4 xl:mx-40 sm:mx-20 mt-28 sm:mt-40"
      >
        <div className="xl:col-span-1 col-span-2 w-full aspect-[3/2]">
          <Image
            src="/images/pokedex.png"
            alt="Home"
            className="sm:h-[400px] blur-sm h-[200px]"
            width={1000}
            height={1000}
          />
        </div>
        <div className="xl:col-span-1 col-span-2 flex flex-col gap-8">
          <div className="flex flex-col items-start gap-2">
            <span className="md:text-4xl underline hover:cursor-pointer text-3xl font-bold dark:invert text-left">
              Pokedex Ultimate
            </span>
            <span className="md:text-2xl text-lg dark:invert text-left">
              A web app utilising Pokedex API to display Pokemon information
            </span>
          </div>
          <span className="md:text-lg text-sm dark:invert text-left">
            Work in progress...
          </span>
          <div className="flex gap-4">
            {/* <Link
              href="https://github.com/adamwatsondev/paulcahillphotographynext"
              className="focus:outline-none"
            >
              <GithubIcon className="text-black size-8 sm:size-16 dark:invert" />
            </Link>
            <Link
              href="https://github.com/adamwatsondev/paulcahillphotographynext"
              className="focus:outline-none"
            >
              <Link2 className="text-black size-8 sm:size-16 dark:invert" />
            </Link> */}
          </div>
        </div>
      </motion.div>
      {/* Spotify Web Player */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "backOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-2 rounded-md border-black dark:border-white gap-12 2xl:gap-40 items-center justify-center mx-4 xl:mx-40 sm:mx-20 mt-28 sm:mt-40"
      >
        <div className="xl:col-span-1 col-span-2 flex flex-col gap-8">
          <div className="flex flex-col items-start gap-2">
            <span className="md:text-4xl underline hover:cursor-pointer text-3xl font-bold dark:invert text-left">
              Spotify Web Player
            </span>
            <span className="md:text-2xl text-lg dark:invert text-left">
              Web player for Spotify that allows users to play music from their
              Spotify library
            </span>
          </div>
          <span className="md:text-lg text-sm dark:invert text-left">
            Work in progress...
          </span>
          <div className="flex gap-4">
            {/* <Link
              href="https://github.com/adamwatsondev/paulcahillphotographynext"
              className="focus:outline-none"
            >
              <GithubIcon className="text-black size-8 sm:size-16 dark:invert" />
            </Link>
            <Link
              href="https://github.com/adamwatsondev/paulcahillphotographynext"
              className="focus:outline-none"
            >
              <Link2 className="text-black size-8 sm:size-16 dark:invert" />
            </Link> */}
          </div>
        </div>
        <div className="xl:col-span-1 col-span-2 w-full aspect-[3/2]">
          <Image
            src="/images/spotify-web-player.jpg"
            alt="Home"
            className="sm:h-[400px] blur-sm h-[200px]"
            width={1000}
            height={1000}
          />
        </div>
      </motion.div>
      {/* Database Checker */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "backOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-2 rounded-md border-black dark:border-white gap-12 2xl:gap-40 items-center justify-center mx-4 xl:mx-40 sm:mx-20 mt-28 sm:mt-40"
      >
        <div className="xl:col-span-1 col-span-2 w-full aspect-[3/2]">
          <Image
            src="/images/database-checker.png"
            alt="Home"
            className="sm:h-[400px] blur-sm h-[200px]"
            width={1000}
            height={1000}
          />
        </div>
        <div className="xl:col-span-1 col-span-2 flex flex-col gap-8">
          <div className="flex flex-col items-start gap-2">
            <span className="md:text-4xl underline hover:cursor-pointer text-3xl font-bold dark:invert text-left">
              SPA Database Checker
            </span>
            <span className="md:text-2xl text-lg dark:invert text-left">
              A single page application that checks the database for a given
              record of a user&apos;s address
            </span>
          </div>
          <span className="md:text-lg text-sm dark:invert text-left">
            Work in progress...
          </span>
          <div className="flex gap-4">
            {/* <Link
              href="https://github.com/adamwatsondev/paulcahillphotographynext"
              className="focus:outline-none"
            >
              <GithubIcon className="text-black size-8 sm:size-16 dark:invert" />
            </Link>
            <Link
              href="https://github.com/adamwatsondev/paulcahillphotographynext"
              className="focus:outline-none"
            >
              <Link2 className="text-black size-8 sm:size-16 dark:invert" />
            </Link> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
