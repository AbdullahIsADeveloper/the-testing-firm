import HeroSection from "@/src/components/home/hero-section";
import Navbar from "@/src/components/home/navbar";
import WhyUs from "@/src/components/why-us/why-us";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mb-20">
        <HeroSection />
      </div>
      <WhyUs />
    </div>
  );
}
