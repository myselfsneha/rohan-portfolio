export default function Navbar() {
  const scroll = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="fixed top-0 w-full flex justify-center gap-6 py-4 bg-black/30 backdrop-blur z-50">

      <button onClick={() => scroll("home")}>Home</button>
      <button onClick={() => scroll("music")}>Music</button>
      <button onClick={() => scroll("identity")}>Identity</button>
      <button onClick={() => scroll("contact")}>Contact</button>

    </div>
  );
}