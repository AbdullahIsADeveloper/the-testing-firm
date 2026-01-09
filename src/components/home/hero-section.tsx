import { IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import { Button } from "../ui/button";
import { GridPattern } from "../ui/grid-pattern";
import { Marquee } from "../ui/marquee";

const logos = [
  { name: "Cypress", src: "/logos/cypress.svg" },
  { name: "Selenium", src: "/logos/selenium.svg" },
  { name: "TestRail", src: "/logos/testrail.svg" },
  { name: "POSTMAN", src: "/logos/postman.svg" },
  { name: "Appium", src: "/logos/appium.svg" },
  { name: "BrowserStack", src: "/logos/browserstack.svg" },
];

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative px-5 md:px-6 lg:px-8 pt-24 xl:pt-34 pb-16 overflow-hidden"
    >
      <GridPattern
        width={40}
        height={40}
        x={0}
        y={0}
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
        ]}
        className="absolute h-full w-full mask-[linear-gradient(to_bottom,white,transparent,transparent)]"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5 sm:space-y-6 xl:space-y-8 py-8 px-2">
        <div className="flex justify-center">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-1.5 text-xs sm:text-sm font-medium border-accent border transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Learn about The Testing Firm
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:mt-6 xl:pb-1">
          <div className="text-foreground">Maximum talent.</div>
          <div className="text-emerald-500">Zero hassle.</div>
        </h1>

        <p className="text-sm sm:text-lg text-muted-foreground dark:text-white mx-auto max-w-xl">
          The Testing Firm is the premier QA recruiting platform. Connect with
          elite permanent testing professionals or find your next opportunity
          with companies that value quality. Get access to recruiting services
          from a variety of testing services.
        </p>

        <div className="flex flex-row flex-nowrap gap-2 justify-center items-center pt-2">
          <Button className="whitespace-nowrap rounded-md border border-emerald-500 dark:border-emerald-700 bg-primary px-4 sm:px-6 font-normal transition-colors duration-200 ease-out hover:border-emerald-600 hover:bg-emerald-400 dark:hover:border-emerald-500 dark:hover:bg-emerald-700 cursor-pointer">
            Get started
          </Button>

          <Button
            variant="outline"
            className="whitespace-nowrap rounded-md border border-gray-300 bg-transparent px-4 sm:px-6 font-normal transition-colors duration-200 ease-out hover:border-gray-400 hover:bg-gray-100 dark:hover:border-gray-700 cursor-pointer"
          >
            See how it works
          </Button>
        </div>

        <Marquee className="mt-20 [--duration:40s] mask-fade-sides">
          {logos.map((logo) =>
            logo.name === "POSTMAN" ? (
              <div
                key={logo.name}
                className="mx-6 flex items-center justify-center opacity-70 transition-opacity hover:opacity-100 logo-tint"
              >
                <span className={ibmPlexMono.className}>{logo.name}</span>
              </div>
            ) : (
              <div
                key={logo.name}
                className="mx-2.5 flex items-center justify-center transition-opacity"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="h-4 sm:h-8 w-auto dark:invert logo-tint"
                  priority={false}
                />
              </div>
            )
          )}
        </Marquee>

        <p className="text-sm text-foreground/70 opacity-70">Recruiting QA talent experienced with modern testing tools</p>
      </div>
    </section>
  );
}
