"use client";

/* eslint-disable react/no-unescaped-entities */
import { ExternalLinkIcon, Linkedin, Rocket } from "lucide-react";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import NavItem from "~/components/ui/navitem";
import { env } from "~/env";
import Image from "next/image";
import WorldeImage from "images/wordle.png";
import PatreonDiscordBot from "images/patreon-discord-bot.png";
import OTPSharer from "images/otp-sharer.png";
import ColorSwitch from "images/color-switch.png";
import FanFund from "images/fanfund.png";
import Gitmoji from "images/gitmoji.png";
import { useEffect, useState } from "react";
import { TextEffect } from "~/components/ui/texteffect";

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState<
    "about" | "education" | "experience" | "projects"
  >("about");

  const handleScroll = () => {
    const newScrollYPosition = window.scrollY;

    if (newScrollYPosition === undefined || newScrollYPosition < 400) {
      setCurrentSection("about");
    } else if (newScrollYPosition < 1000) {
      setCurrentSection("education");
    } else if (newScrollYPosition < 1500) {
      setCurrentSection("experience");
    } else {
      setCurrentSection("projects");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      handleScroll(); // call it once to initialize the current section
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col justify-between px-4 lg:max-w-6xl lg:flex-row lg:gap-24 lg:px-12">
        <header className="flex flex-col px-2.5 py-12 lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:justify-between lg:px-0 lg:py-20">
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <TextEffect className="text-5xl font-bold" preset="scale" as="h1">
                Jad El Asmar
              </TextEffect>
              <h2 className="flex items-center text-lg font-semibold text-foreground/90">
                Full-Stack Developer <Rocket size="18" className="ml-2" />
              </h2>
              <p className="text-foreground/80">
                I create seamless and scalable
                <br /> digital solutions.
              </p>
            </div>

            <div className="mb-12 mt-14 hidden flex-col gap-5 lg:flex">
              <NavItem
                activated={currentSection === "about"}
                text={"about"}
                fn={() => scrollToSection("about")}
              />
              <NavItem
                activated={currentSection === "education"}
                text={"education"}
                fn={() => scrollToSection("education")}
              />
              <NavItem
                activated={currentSection === "experience"}
                text={"experience"}
                fn={() => scrollToSection("experience")}
              />
              <NavItem
                activated={currentSection === "projects"}
                text={"projects"}
                fn={() => scrollToSection("projects")}
              />
            </div>
          </div>

          <footer className="flex flex-col">
            <a href={`mailto:${env.NEXT_PUBLIC_EMAIL}`}>
              <Button className="mb-8 mt-8 w-full lg:mt-0" variant="secondary">
                Contact Me
              </Button>
            </a>

            <ul className="flex gap-6">
              <li>
                <a href="https://github.com/1elasmarjad" target="_blank">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 98 96"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-foreground/70 transition-all hover:fill-foreground"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a href={env.NEXT_PUBLIC_LINKEDIN} target="_blank">
                  <Linkedin className="stroke-foreground/70 transition-all hover:stroke-foreground" />
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-5 text-sm">
              <a href={`tel:${env.NEXT_PUBLIC_PHONE}`}>
                {env.NEXT_PUBLIC_PHONE}
              </a>
              <a href={`mailto:${env.NEXT_PUBLIC_EMAIL}`}>
                {env.NEXT_PUBLIC_EMAIL}
              </a>
            </div>
          </footer>
        </header>

        <div className="py-20 text-foreground/75 lg:w-[60%]">
          <section className="px-2.5 lg:px-6" id="about">
            <h2 className="mb-4 block font-bold text-foreground lg:mb-0 lg:hidden">
              ABOUT
            </h2>
            <p>
              I’m a dedicated software developer, eager to learn with a
              passion for creating innovative solutions.
            </p>
            <br />
            <p>
              In 2017, I wrote my first line of code, sparked by the passion to
              create video games and something that would make users smile. I
              have been in love with programming ever since.
            </p>
            <br />
            <p>
              Over the years, I have familiarized myself with: Front-End,
              Back-End, Machine Learning, Algorithms, Databases, Embedded
              Systems & more.
            </p>
            <br />
            <p>
              My goal is to efficiently work on software that can
              improve people’s lives and leave a positive dent.
            </p>
          </section>

          <section className="mt-28" id="education">
            <h2 className="mb-4 block px-2.5 font-bold text-foreground lg:mb-0 lg:hidden lg:px-0">
              EDUCATION
            </h2>
            <div className="flex flex-col gap-10">
              <div className="group flex flex-col rounded-md px-2.5 py-4 transition-all hover:bg-foreground/10 lg:px-6">
                <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary">
                  Bachelor of Science · University of Toronto
                </h3>
                <h3 className="mb-3 text-sm">September 2021 — Present</h3>
                <p className="text-sm">
                  Pursuing a Major in{" "}
                  <strong>Geographic Information Systems</strong> and a minor in{" "}
                  <strong>Computer Science</strong> and{" "}
                  <strong>Statistics</strong>. I have taken courses in Software
                  Design, Software Tools, Systems Programming, etc.
                </p>
                <ul className="mt-3 flex gap-2">
                  <Badge>3.4 GPA</Badge>
                  <Badge>Computer Science</Badge>
                  <Badge>GIS</Badge>
                  <Badge>Stats</Badge>
                </ul>
              </div>

              <div className="group flex flex-col rounded-md px-2.5 py-4 transition-all hover:bg-foreground/10 lg:px-6">
                <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary">
                  Secondary School Diploma · Garth Webb Secondary School
                </h3>
                <h3 className="mb-3 text-sm">September 2017 — July 2021</h3>
                <p className="text-sm">
                  Graduated from Garth Webb Secondary School, Oakville ON, with
                  high honors. I was part of the{" "}
                  <strong>Computer Science Club</strong>. I took courses in
                  Computer Science, Calculus, Advanced Functions, etc.
                </p>
                <ul className="mt-3 flex gap-2">
                  <Badge>High Honors</Badge>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-28" id="experience">
            <h2 className="mb-4 block px-2.5 font-bold text-foreground lg:mb-0 lg:hidden lg:px-0">
              EXPERIENCE
            </h2>

            <div className="flex flex-col gap-10">
              <div className="group flex flex-col rounded-md px-2.5 py-4 transition-all hover:bg-foreground/10 lg:px-6">
                <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary">
                  Founder & Developer · Discord Bot (Self Employed)
                </h3>
                <h3 className="mb-3 text-sm">April 2021 — Present</h3>
                <p className="text-sm">
                  Founder and sole-developer of a card-collecting discord bot
                  that interacts with the discord API with{" "}
                  <strong className="text-foreground">40,000+</strong> users. In
                  addition to the core functionality of card collection, the bot
                  features advanced image generation for custom cards, efficient
                  caching mechanisms to ensure fast response times, and a
                  scalable architecture designed to handle the growing user
                  base.
                </p>
                <ul className="mt-3 flex gap-2">
                  <Badge>Python</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>GCP</Badge>
                  <Badge>Stripe</Badge>
                </ul>
              </div>

              <Link
                className="group flex flex-col rounded-md px-2.5 py-4 transition-all hover:cursor-pointer hover:bg-foreground/10 lg:px-6"
                href={"https://www.diffcord.com"}
                target="_blank"
              >
                <h3 className="mb-1 flex items-center gap-2 font-semibold text-foreground transition-all group-hover:text-primary">
                  Co-Founder & Developer · Diffcord{" "}
                  <ExternalLinkIcon size="18" />
                </h3>
                <h3 className="mb-3 text-sm">March 2023 — September 2023</h3>
                <p className="text-sm">
                  Co-Founder and developer of a SaaS product that helps discord
                  bot owners generate revenue from advertisements. The platform
                  amassed <strong className="text-foreground">15,000+</strong>{" "}
                  active users in the first 2 weeks. Built with a scalable
                  architecture deployed on Vercel, the platform also leverages
                  Google Cloud Platform (GCP) for microservices. It integrates
                  with Stripe and PayPal to handle payouts and payments.
                </p>
                <ul className="mt-3 flex gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Go</Badge>
                  <Badge>MySQL</Badge>
                  <Badge className="hidden sm:block">PayPal</Badge>
                  <Badge className="hidden lg:block">Tailwind</Badge>
                </ul>
              </Link>

              <div className="group flex flex-col rounded-md px-2.5 py-4 transition-all hover:bg-foreground/10 lg:px-6">
                <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary">
                  Line Cook · Turtle Jack's Muskoka Grill
                </h3>
                <h3 className="mb-3 text-sm">July 2021 — June 2022</h3>
                <p className="text-sm">
                  Line cook at Turtle Jack's Muskoka Grill, Burlington ON.
                  Multi-tasked to meet customer demands, prepared food items
                  consistently and adhered to all recipe standards. Developed
                  creative menu ideas and implemented them.
                </p>
                <ul className="mt-3 flex gap-2">
                  <Badge>Cooking</Badge>
                  <Badge>Speed</Badge>
                  <Badge>High-Pressure</Badge>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-28" id="projects">
            <h2 className="mb-4 block px-2.5 font-bold text-foreground lg:mb-0 lg:hidden lg:px-0">
              EXPERIENCE
            </h2>

            <div className="flex flex-col gap-8">
              <Link
                href="https://multiplayer-wordle-five.vercel.app/"
                target="_blank"
                className="group flex gap-4 rounded-md px-2.5 py-4 transition-all hover:cursor-pointer hover:bg-foreground/10 lg:px-6"
              >
                <Image
                  src={WorldeImage}
                  alt={"Worlde Image"}
                  className="w-[30%] object-scale-down"
                />
                <div className="w-[70%]">
                  <h3 className="mb-1 flex items-center gap-2 font-semibold text-foreground transition-all group-hover:text-primary">
                    Multiplayer Worlde <ExternalLinkIcon size="18" />
                  </h3>
                  <p className="text-sm">
                    A multiplayer version of the popular game Wordle. Users can
                    create a room and play with their friends. The game takes
                    advantage of polling to ensure real-time updates for all
                    players.
                  </p>
                  <ul className="mt-3 flex gap-2">
                    <Badge>Next.js</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>Tailwind</Badge>
                  </ul>
                </div>
              </Link>

              <Link
                href="https://github.com/1elasmarjad/gitmoji-cli"
                target="_blank"
                className="group flex gap-4 rounded-md px-2.5 py-4 transition-all hover:cursor-pointer hover:bg-foreground/10 lg:px-6"
              >
                <Image
                  src={Gitmoji}
                  alt={"GitMoji CLI Image"}
                  className="w-[30%] object-scale-down"
                />
                <div className="w-[70%]">
                  <h3 className="mb-1 flex items-center gap-2 font-semibold text-foreground transition-all group-hover:text-primary">
                    GitMoji AI <ExternalLinkIcon size="18" />
                  </h3>
                  <p className="text-sm">
                    A cli tool that turns lame git commit messages into
                    expressive and fun messages using emojis. The tool uses
                    natural language processing to understand the context of the
                    commit message and suggest an emoji to add to the message.
                  </p>
                  <ul className="mt-3 flex gap-2">
                    <Badge>Go</Badge>
                    <Badge>AI</Badge>
                  </ul>
                </div>
              </Link>

              <Link
                href="https://otp-sharer.vercel.app/"
                target="_blank"
                className="group flex gap-4 rounded-md px-2.5 py-4 transition-all hover:cursor-pointer hover:bg-foreground/10 lg:px-6"
              >
                <Image
                  src={OTPSharer}
                  alt={"OTP Sharer Image"}
                  className="w-[30%] object-scale-down"
                />
                <div className="w-[70%]">
                  <h3 className="mb-1 flex items-center gap-2 font-semibold text-foreground transition-all group-hover:text-primary">
                    OneTime Password Sharer <ExternalLinkIcon size="18" />
                  </h3>
                  <p className="text-sm">
                    Generates a one time password and allows your friends &
                    family to be notified whenever you access this code after
                    its creation. This can be useful for setting screen-time
                    passwords on IOS and ensuring that you don't cheat.
                  </p>
                  <ul className="mt-3 flex gap-2">
                    <Badge>Next.js</Badge>
                    <Badge>SQLite</Badge>
                    <Badge>Auth</Badge>
                  </ul>
                </div>
              </Link>

              <Link
                href="https://github.com/1elasmarjad/patreon-discord-bot"
                target="_blank"
                className="group flex gap-4 rounded-md px-2.5 py-4 transition-all hover:cursor-pointer hover:bg-foreground/10 lg:px-6"
              >
                <Image
                  src={PatreonDiscordBot}
                  alt={"Patron Discord Bot Image"}
                  className="w-[30%] object-scale-down"
                />
                <div className="w-[70%]">
                  <h3 className="mb-1 flex items-center gap-2 font-semibold text-foreground transition-all group-hover:text-primary">
                    Patreon Discord Bot <ExternalLinkIcon size="18" />
                  </h3>
                  <p className="text-sm">
                    A cli tool that allows discord bot owners to easily
                    integrate their bot with Patreon. The tool allows bot owners
                    to manually sync roles from patreon and find patreon
                    information given a discord user id.
                  </p>
                  <ul className="mt-3 flex gap-2">
                    <Badge>Python</Badge>
                  </ul>
                </div>
              </Link>

              <Link
                href="https://www.fortnite.com/@pumpie"
                target="_blank"
                className="group flex gap-4 rounded-md px-2.5 py-4 transition-all hover:cursor-pointer hover:bg-foreground/10 lg:px-6"
              >
                <Image
                  src={ColorSwitch}
                  alt={"Fortnite Maps Image"}
                  className="w-[30%] object-scale-down"
                />
                <div className="w-[70%]">
                  <h3 className="mb-1 flex items-center gap-2 font-semibold text-foreground transition-all group-hover:text-primary">
                    Fortnite Maps <ExternalLinkIcon size="18" />
                  </h3>
                  <p className="text-sm">
                    Created several Fortnite maps using Unreal Engine for
                    Fortnite and Verse. The maps have had over{" "}
                    <strong className="text-foreground">100,000+</strong> plays
                    and have been featured on the Fortnite homepage.
                  </p>
                  <ul className="mt-3 flex gap-2">
                    <Badge>Unreal Engine</Badge>
                    <Badge>Verse Lang</Badge>
                  </ul>
                </div>
              </Link>

              <Link
                href="https://github.com/1elasmarjad/membership-platform"
                target="_blank"
                className="group flex gap-4 rounded-md px-2.5 py-4 transition-all hover:cursor-pointer hover:bg-foreground/10 lg:px-6"
              >
                <Image
                  src={FanFund}
                  alt={"FanFund Image"}
                  className="w-[30%] object-scale-down"
                />
                <div className="w-[70%]">
                  <h3 className="mb-1 flex items-center gap-2 font-semibold text-foreground transition-all group-hover:text-primary">
                    FanFund Donate to Creators <ExternalLinkIcon size="18" />
                  </h3>
                  <p className="text-sm">
                    A platform that allows fans to donate to creators using
                    Stripe. The platform allows creators to create a page to
                    accept donations and fans to donate to creators.
                  </p>
                  <ul className="mt-3 flex gap-2">
                    <Badge>Next.js</Badge>
                    <Badge>SQLlite</Badge>
                    <Badge>Stripe</Badge>
                    <Badge className="hidden">Auth</Badge>
                  </ul>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
