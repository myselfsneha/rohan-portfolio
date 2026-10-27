
export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#191a16]"
    >
      <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-[#77795a]/10 blur-[100px]" />
      <div className="absolute -right-40 top-[30%] h-[32rem] w-[32rem] rounded-full bg-[#a66f52]/10 blur-[120px]" />
      <div className="absolute -bottom-48 left-1/3 h-[28rem] w-[28rem] rounded-full bg-[#77795a]/10 blur-[110px]" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(#e9e4d7 0.6px, transparent 0.6px)",
          backgroundSize: "6px 6px",
        }}
      />
    </div>
  );
}
