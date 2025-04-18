import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
      <Carousel /> {/* infinite scrolling */}
    </main>
  );
}
