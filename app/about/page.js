import Navbar from "../components/Navbar";
import About from "../components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-10">
        <About />
      </div>
    </main>
  );
}