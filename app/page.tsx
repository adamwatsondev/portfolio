"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="h-screen justify-center sm:h-screen flex flex-col gap-4 items-start"
      >
        <span className="md:text-6xl text-3xl font-old-standard font-bold leading-tight dark:invert">
          Adam Watson
        </span>
        <span className="md:text-xl text-lg font-old-standard font-bold leading-tight dark:invert">
          Full Stack Web Developer based in Brighton, UK
        </span>
      </motion.div>
      {/* Skills */}
      <div className="flex flex-col gap-20 justify-between">
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="md:text-5xl text-3xl font-old-standard font-bold leading-tight dark:invert"
        >
          Skills
        </motion.span>
        {/* Frontend */}
        <div className="grid grid-cols-3 gap-8">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl col-span-3 text-center dark:invert"
          >
            Frontend
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/javascript.svg"
              alt="Adam Watson"
              className="h-full"
              width={100}
              height={100}
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              JavaScript
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/typescript.svg"
              alt="Adam Watson"
              className="h-full"
              width={100}
              height={100}
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              TypeScript
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/react.svg"
              alt="Adam Watson"
              className="h-full"
              width={100}
              height={100}
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              React
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/html.svg"
              alt="Adam Watson"
              className="h-full"
              width={100}
              height={100}
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              HTML
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/css.svg"
              alt="Adam Watson"
              className="h-full"
              width={100}
              height={100}
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              CSS
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/next.svg"
              className="dark:invert h-full"
              alt="Adam Watson"
              width={100}
              height={100}
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              NextJS
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/tailwind.svg"
              alt="Adam Watson"
              className="h-full"
              width={100}
              height={100}
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              Tailwind
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/vite.svg"
              alt="Adam Watson"
              className="h-full"
              width={100}
              height={100}
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              Vite
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/playwright.svg"
              alt="Adam Watson"
              className="h-full"
              width={100}
              height={100}
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              Playwright
            </span>
          </motion.div>
        </div>
        {/* Backend */}
        <div className="grid grid-cols-3 gap-8">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl col-span-3 text-center dark:invert"
          >
            Backend
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/node.svg"
              alt="Adam Watson"
              width={100}
              height={100}
              className="h-full"
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              NodeJS
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/python.svg"
              alt="Adam Watson"
              width={100}
              height={100}
              className="h-full"
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              Pyhton
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/dbeaver.svg"
              alt="Adam Watson"
              className="dark:invert h-full"
              width={100}
              height={100}
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              DBeaver
            </span>
          </motion.div>
        </div>
        {/* Databasing */}
        <div className="grid grid-cols-3 gap-8">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl col-span-3 text-center dark:invert"
          >
            Databasing
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/postgresql.svg"
              alt="Adam Watson"
              width={100}
              height={100}
              className="h-full"
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              PostgreSQL
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/mysql.svg"
              alt="Adam Watson"
              width={100}
              height={100}
              className="h-full"
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              MySQL
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/firebase.svg"
              alt="Adam Watson"
              className="h-full"
              width={100}
              height={100}
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              Firebase
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/prisma.svg"
              alt="Adam Watson"
              className="h-full"
              width={100}
              height={100}
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              Prisma
            </span>
          </motion.div>
        </div>
        {/* Ops */}
        <div className="grid grid-cols-3 gap-8">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl col-span-3 text-center dark:invert"
          >
            Ops
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/vercel-icon.svg"
              className="dark:invert h-full"
              alt="Adam Watson"
              width={100}
              height={100}
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              Vercel
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/cloudflare.svg"
              alt="Adam Watson"
              width={100}
              height={100}
              className="h-full"
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              Cloudflare
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/aws.svg"
              alt="Adam Watson"
              width={100}
              height={100}
              className="h-full"
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              AWS
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/git.svg"
              alt="Adam Watson"
              width={100}
              height={100}
              className="h-full"
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              Git
            </span>
          </motion.div>
        </div>
        {/* Tools */}
        <div className="grid grid-cols-3 gap-8">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl col-span-3 text-center dark:invert"
          >
            Tools
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/figma.svg"
              alt="Adam Watson"
              width={100}
              height={100}
              className="h-full"
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              Figma
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/jira.svg"
              alt="Adam Watson"
              width={100}
              height={100}
              className="h-full"
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              Jira
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/trello.svg"
              alt="Adam Watson"
              width={100}
              height={100}
              className="h-full"
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              Trello
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/azure.svg"
              alt="Adam Watson"
              width={100}
              height={100}
              className="h-full"
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              Azure
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
}
