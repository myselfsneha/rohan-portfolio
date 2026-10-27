import { useEffect, useState } from "react";

import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Identity from "./components/Identity";
import Visuals from "./components/Visuals";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setShowLoader(false);
    }, 3600);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#191a16] text-[#eee8dc]">
      <Background />

      {showLoader && <Loader />}

      <Navbar />

      <main className="relative">
        <div id="home">
          <Hero />
        </div>

        <Music />

        <Identity />

        <Visuals />

        <Socials />

        <Contact />
      </main>

      <footer className="relative border-t border-white/15 px-5 py-10 sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-3xl italic tracking-tight text-[#eee8dc] sm:text-4xl">
              Rohan Pande<span className="text-[#a2a184]">.</span>
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#aaa696]">
              Music · Movement · Memory
            </p>
          </div>

          <p className="mb-0 text-xs tracking-wide text-[#aaa696]">
            © {new Date().getFullYear()} Rohan Pande
          </p>
        </div>
      </footer>
    </div>
  );
}
