"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="grid grid-cols-2 h-screen px-4 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        viewport={{ once: true }}
        className="col-span-2 items-start justify-center flex flex-col gap-4 md:gap-12"
      >
        <span className="md:text-4xl text-lg font-old-standard font-bold leading-tight dark:invert">
          I&apos;m Adam Watson, a Web Developer and Data Engineer with a strong
          foundation in full-stack development, data analysis, and automation. I
          specialize in JavaScript, TypeScript, SQL, and Python, leveraging
          modern frameworks like React, .NET, and Prisma to build scalable and
          user-centric applications.
        </span>
        <span className="md:text-4xl text-lg font-old-standard font-bold leading-tight dark:invert">
          With experience developing consumer-facing applications, automating
          data workflows, and designing intuitive user experiences, I thrive in
          dynamic, growth-focused environments. My work has included revamping
          front-end tools for improved usability, building educational
          marketplace platforms, and automating KPI reporting through Python and
          SQL. Beyond coding, I’m passionate about data-driven decision-making,
          performance optimization, and creating seamless digital experiences.
          Whether it’s developing new applications, refining existing systems,
          or solving complex technical challenges, I’m always eager to apply my
          expertise and continue learning.
        </span>
        <span className="md:text-4xl text-lg font-old-standard font-bold leading-tight dark:invert">
          I’m currently open to new opportunities where I can contribute my
          skills and grow professionally.
        </span>
      </motion.div>
    </div>
  );
}
