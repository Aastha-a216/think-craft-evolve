import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-sm tracking-tight">
          <span className="inline-block size-1.5 rounded-full bg-[oklch(0.75_0.15_250)] pulse-dot" />
          <span className="font-medium">Aastha Srivastava</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5 text-xs">
          <Link to="/" hash="work" className="px-3 py-1.5 rounded-full hover:bg-white/5 transition">Work</Link>
          <Link to="/" hash="about" className="px-3 py-1.5 rounded-full hover:bg-white/5 transition">About</Link>
          <Link to="/" hash="thinking" className="px-3 py-1.5 rounded-full hover:bg-white/5 transition">Thinking</Link>
          <Link to="/" hash="contact" className="px-3 py-1.5 rounded-full hover:bg-white/5 transition">Contact</Link>
        </nav>
        <a
          href="mailto:aasthasrivastav627@gmail.com"
          className="text-xs glass rounded-full px-4 py-2 hover:bg-white/10 transition"
        >
          Let's talk →
        </a>
      </div>
    </header>
  );
}
