
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Identity from "./components/Identity";
import Visuals from "./components/Visuals";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#11110f] text-[#f3efe7]">
      <Navbar />

      <main>
        <Hero />

        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14">
          <Music />
          <Identity />
          <Visuals />
          <Contact />
        </div>
      </main>

      <footer className="border-t border-white/15 px-5 py-7 sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-3 text-xs uppercase tracking-[0.18em] text-white/50 sm:flex-row sm:items-center">
          <p className="mb-0">
            Rohan Pande <span className="text-[#d5a66c]">©</span>{" "}
            {new Date().getFullYear()}
          </p>
          <p className="mb-0">Music · Movement · Memory</p>
        </div>
      </footer>
    </div>
  );
}
