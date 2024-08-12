import { Linkedin, Rocket } from "lucide-react";
import { Button } from "~/components/ui/button";
import NavItem from "~/components/ui/navitem";
import { env } from "~/env";

export default function HomePage() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="flex w-full justify-between gap-24 px-12 lg:max-w-6xl">
        <header className="flex flex-col py-20 lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-bold">Jad El Asmar</h1>
              <h2 className="flex items-center text-lg font-semibold text-foreground/90">
                Full-stack Developer <Rocket size="18" className="ml-2" />
              </h2>
              <p className="text-foreground/80">
                I create seamless and scalable
                <br /> digital solutions.
              </p>
            </div>

            <div className="mt-20 flex flex-col gap-5">
              <NavItem activated={true} text={"about"} />
              <NavItem activated={false} text={"experience"} />
              <NavItem activated={false} text={"projects"} />
            </div>
          </div>

          <div className="flex flex-col">
            <a href={`mailto:${env.NEXT_PUBLIC_EMAIL}`}>
              <Button className="mb-8 w-full" variant="secondary">
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
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

            <div className="mt-4 flex gap-5 text-sm">
              <a href={`tel:${env.NEXT_PUBLIC_PHONE}`}>
                {env.NEXT_PUBLIC_PHONE}
              </a>
              <a href={`mailto:${env.NEXT_PUBLIC_EMAIL}`}>
                {env.NEXT_PUBLIC_EMAIL}
              </a>
            </div>
          </div>
        </header>

        <div className="py-20 text-foreground/75 lg:w-1/2">
          <section>
            <p>
              I’m a dedicated and forward-thinking software developer with a
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
              At the end of the day, my goal is to work on things that can
              improve people’s lives and leave a positive dent.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <div></div>
          </section>
        </div>
      </div>
    </main>
  );
}
