"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between min-h-screen gap-8 px-4"
      >
        <div className="flex flex-col items-start gap-4">
          <span className="md:text-8xl text-3xl font-bold leading-tight dark:invert text-left">
            Adam Watson
          </span>
          <span className="md:text-2xl text-lg font-bold leading-tight dark:invert text-left">
            Full Stack Web Developer based in Brighton, UK
          </span>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-4">
          <a href="/docs/adam_watson_cv.pdf" download="adam_watson_cv.pdf">
            <Button className="bg-black w-60 h-14 text-white" variant="default">
              <span className="text-white dark:invert">Download my CV</span>
            </Button>
          </a>
          <Link href="/contact">
            <Button className="bg-black w-60 h-14 text-white" variant="default">
              <span className="text-white dark:invert">Contact Me</span>
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Work Experience */}
      <div className="flex flex-col gap-20">
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="md:text-5xl text-3xl font-bold leading-tight dark:invert"
        >
          Experience
        </motion.span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Web Developer & Data Engineer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-4"
          >
            <span className="md:text-4xl text-3xl font-bold leading-tight dark:invert text-left">
              Web Developer & Data Engineer
            </span>
            <span className="md:text-2xl text-xl leading-tight dark:invert text-left">
              Forloop Consulting, Brighton, UK
            </span>
            <span className="md:text-md text-md leading-tight dark:invert text-left">
              July 2023 – August 2024
            </span>

            <ul className="list-disc pl-5 text-left dark:invert">
              <li>
                Built a full-stack, consumer-facing application using TypeScript
                and SQL to provide actionable data insights and performance
                analytics. This solution enabled detailed analysis of customer
                engagement, boosted marketing opt-in rates, and delivered
                demographic insights to drive data-informed decisions.
              </li>
              <li>
                Delivered two key front-end projects, including a complete
                redesign of a title search tool to improve functionality and
                user experience, as well as leading a visual overhaul of a
                proprietary tool that displays information on rights, licenses,
                nationalities, and revenue splits in the film and TV industry,
                enhancing data accessibility and usability.
              </li>
              <li>
                Designed and deployed an educational marketplace application,
                utilizing React, Recharts, and Radix UI for enhanced data
                visualization and user experience, with a back-end powered by
                Prisma and raw SQL queries to optimize data management and
                automation.
              </li>
              <li>
                Streamlined data analysis for a gambling platform by developing
                Python scripts and SQL queries to calculate and validate KPI
                data. Presented key insights visually using Tableau and custom
                SQL-calculated fields for comprehensive reporting.
              </li>
            </ul>
          </motion.div>

          {/* Technical Consultant & .NET Developer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-4"
          >
            <span className="md:text-4xl text-3xl font-bold leading-tight dark:invert text-left">
              Technical Consultant & .NET Developer
            </span>
            <span className="md:text-2xl text-xl leading-tight dark:invert text-left">
              The Software Institute / NETBuilder, Brighton, UK
            </span>
            <span className="md:text-md text-md leading-tight dark:invert text-left">
              July 2022 – September 2022
            </span>

            <ul className="list-disc pl-5 text-left dark:invert">
              <li>
                Enhanced technical skills in C#, SQL, Java, and C++ through a
                hands-on training program, applying these skills to develop
                client-oriented software solutions.
              </li>
              <li>
                Worked alongside a cross-functional team to transform client
                requirements into customized software solutions, improving
                problem-solving abilities, time management, and communication in
                a fast-paced environment.
              </li>
              <li>
                Gained valuable experience throughout full project lifecycles,
                from gathering client specifications to implementing solutions,
                refining abilities in coding, testing, and troubleshooting.
              </li>
            </ul>
          </motion.div>

          {/* IT Support Engineer Helpdesk */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-4"
          >
            <span className="md:text-4xl text-3xl font-bold leading-tight dark:invert text-left">
              IT Support Engineer Helpdesk
            </span>
            <span className="md:text-2xl text-xl leading-tight dark:invert text-left">
              Netsense, Burgess Hill, UK
            </span>
            <span className="md:text-md text-md leading-tight dark:invert text-left">
              May 2023 – July 2023
            </span>

            <ul className="list-disc pl-5 text-left dark:invert">
              <li>
                Provided technical support by managing client service requests
                for software and hardware issues, ensuring clear communication
                and timely resolution.
              </li>
              <li>
                Proactively monitored applications to identify and address
                potential issues, preventing disruptions such as VPN or server
                failures and maintaining seamless operations.
              </li>
              <li>
                Utilized Azure for system administration, along with remote
                desktop software and automation tools, to efficiently resolve
                client issues and manage service requests.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-20">
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="md:text-5xl text-3xl font-bold leading-tight dark:invert"
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 items-center justify-self-center gap-4"
          >
            <Image
              src="/skills/tableau.svg"
              alt="Adam Watson"
              width={100}
              height={100}
              className="h-full dark:invert"
            />
            <span className="text-center text-md sm:text-xl dark:invert">
              Tableau
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
