"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-40">
      <div className="col-span-3 flex flex-col gap-4 items-start">
        <span className="md:text-6xl text-3xl font-old-standard font-bold leading-tight dark:invert">
          Hi, I&apos;m Adam Watson
        </span>
        <span className="md:text-2xl text-lg font-old-standard font-bold leading-tight dark:invert">
          A Full Stack Developer based in Brighton, UK
        </span>
      </div>
      <div className="col-span-3 flex flex-col gap-8 justify-between">
        <span className="md:text-5xl text-lg font-old-standard font-bold leading-tight dark:invert">
          Skills
        </span>
        {/* Frontend */}
        <div className="flex flex-col gap-4">
          <span className="md:text-xl text-md font-old-standard font-bold leading-tight dark:invert">
            Frontend
          </span>
          <div className="flex justify-start gap-4">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/html.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                HTML
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/css.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                CSS
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/javascript.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                JavaScript
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/typescript.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                TypeScript
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/next.svg"
                className="dark:invert"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                NextJS
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/react.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                React
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/tailwind.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                Tailwind
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/vite.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                Vite
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/playwright.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                Playwright
              </span>
            </div>
          </div>
        </div>
        {/* Backend */}
        <div className="flex flex-col gap-4">
          <span className="md:text-xl text-md font-old-standard font-bold leading-tight dark:invert">
            Backend
          </span>
          <div className="flex justify-start gap-4">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/node.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                NodeJS
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/python.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                Pyhton
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/dbeaver.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                DBeaver
              </span>
            </div>
          </div>
          {/* Frontend */}
        </div>
        {/* Databasing */}
        <div className="flex flex-col gap-4">
          <span className="md:text-xl text-md font-old-standard font-bold leading-tight dark:invert">
            Databasing
          </span>
          <div className="flex justify-start gap-4">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/postgresql.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                PostgreSQL
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/mysql.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                MySQL
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/firebase.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                Firebase
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/prisma.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                Prisma
              </span>
            </div>
          </div>
        </div>
        {/* Ops */}
        <div className="flex flex-col gap-4">
          <span className="md:text-xl text-md font-old-standard font-bold leading-tight dark:invert">
            Ops
          </span>
          <div className="flex justify-start gap-4">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/vercel-icon.svg"
                className="dark:invert"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                Vercel
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/cloudflare.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                Cloudflare
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/aws.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                AWS
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/git.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                Git
              </span>
            </div>
          </div>
        </div>
        {/* Tools */}
        <div className="flex flex-col gap-4">
          <span className="md:text-xl text-md font-old-standard font-bold leading-tight dark:invert">
            Tools
          </span>
          <div className="flex justify-start gap-4">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/figma.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                Figma
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/jira.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                Jira
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/trello.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                Trello
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/skills/azure.svg"
                alt="Adam Watson"
                width={150}
                height={150}
              />
              <span className="text-center text-lg font-old-standard font-bold leading-tight dark:invert">
                Azure
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
