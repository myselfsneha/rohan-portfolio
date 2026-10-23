
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Identity from "./components/Identity";
import Visuals from "./components/Visuals";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#09090d] text-[#eeeef2]">
      <Navbar />

      <main>
        <Hero />

        <div className="relative mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:px-16">
          <Music />
          <Identity />
          <Visuals />
          <Contact />
        </div>
      </main>

      <footer className="mt-20 border-t border-white/15 px-5 py-8 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-[1680px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="mb-0 text-xs uppercase tracking-[0.22em] text-white/60">
            Rohan Pande <span className="text-[#963d56]">/</span>{" "}
            Independent Artist
          </p>

          <p className="mb-0 text-xs uppercase tracking-[0.18em] text-white/40">
            Music. Movement. Memory.
          </p>

          <p className="mb-0 text-xs text-white/40">
            © {new Date().getFullYear()} Rohan Pande
          </p>
        </div>
      </footer>
    </div>
  );
}