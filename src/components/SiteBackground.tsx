export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.18]" />
      {/* Vignette to fade grid at edges */}
      <div className="absolute inset-0 bg-vignette" />
      {/* Orbs */}
      <div className="orb orb-blue" />
      <div className="orb orb-violet" />
      <div className="orb orb-cyan" />
      {/* Floating dots */}
      <span className="dot dot-a" />
      <span className="dot dot-b" />
      <span className="dot dot-c" />
      <span className="dot dot-d" />
      <span className="dot dot-e" />
    </div>
  );
}
