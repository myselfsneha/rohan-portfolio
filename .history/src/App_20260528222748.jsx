import Hero from "./components/Hero";
import Music from "./components/Music";
import Identity from "./components/Identity";
import Visuals from "./components/Visuals";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Music />
      <Identity />
      <Visuals />
      <Contact />
    </div>
  );
}