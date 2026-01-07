import { Button } from "../ui/button";
import { GridPattern } from "../ui/grid-pattern";

export default function HeroSection() {
  return (
    <section className="relative px-6 pt-14 xl:pt-16 pb-16 overflow-hidden">
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

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 py-8 px-2">
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
        <h1 className="text-4xl sm:text-5xl lg:text-7xl mt-6 pb-1">
          <div className="text-foreground">Maximum talent.</div>
          <div className="text-primary">Zero hassle.</div>
        </h1>

        <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed mx-auto">
          The Testing Firm is the premier QA recruiting platform. Connect with
          elite testing professionals or find your next opportunity with
          companies that value quality. Get recruiting services from a variety
          of testing fields.
        </p>

        <div className="flex flex-row flex-nowrap gap-2 justify-center items-center pt-1">
          <Button
            size="lg"
            variant="outline"
            className="whitespace-nowrap rounded-md border-green-500 bg-primary px-4 sm:px-6 font-normal hover:border-green-600 hover:bg-emerald-400 cursor-pointer"
          >
            Get started
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="whitespace-nowrap rounded-md border-gray-300 bg-transparent px-4 sm:px-6 font-normal hover:border-gray-400 hover:bg-gray-100 cursor-pointer"
          >
            See how it works
          </Button>
        </div>
      </div>
    </section>
  );
}
