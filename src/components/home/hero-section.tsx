import { Button } from "../ui/button";
import { GridPattern } from "../ui/grid-pattern";

export default function HeroSection() {
  return (
    <section className="relative px-6 pt-24 pb-16 overflow-hidden">
      <GridPattern
        width={50}
        height={50}
        x={0}
        y={0}
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
        ]}
        className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom,white,transparent,transparent)]"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 py-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl mt-6">
          <div className="text-foreground">Maximum talent.</div>
          <div className="text-primary">Zero hassle.</div>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          The Testing Firm is the premier QA recruiting platform.
          <br />
          Connect with elite testing professionals or find your next opportunity
          with companies that value quality.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
          <Button
            size="lg"
            variant="outline"
            className="rounded-md border-green-500 bg-primary px-6 font-normal hover:border-green-600 hover:bg-emerald-400"
          >
            Get started
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-md border-accent bg-transparent px-6 font-normal hover:border-gray-300 hover:bg-gray-50"
          >
            See how it works
          </Button>
        </div>
      </div>
    </section>
  );
}
