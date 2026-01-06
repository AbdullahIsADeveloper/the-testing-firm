import HeroSection from "@/src/components/home/hero-section";
import Navbar from "@/src/components/home/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
}
