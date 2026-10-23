
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Identity from "./components/Identity";
import Visuals from "./components/Visuals";
import Socials from "./components/Socials";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#191a16] text-[#eee8dc]">
      <Navbar />

      <main>
        <Hero />

        <section id="music" aria-label="Music and discography">
          <Music />
        </section>

        <section id="journey" aria-label="Artist journey">
          <Identity />
        </section>

        <section id="cinema" aria-label="Film and visual work">
          <Visuals />
        </section>

        <Socials />

        <section id="booking" aria-label="Booking and enquiries">
          <Contact />
        </section>
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