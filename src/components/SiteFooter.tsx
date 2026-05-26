export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-white/5 mt-32">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">[ Contact ]</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
              Let's build<br />something thoughtful.
            </h2>
            <a
              href="mailto:aasthasrivastav627@gmail.com"
              className="inline-block mt-8 font-serif text-2xl md:text-3xl underline underline-offset-8 decoration-1 hover:decoration-[oklch(0.75_0.15_250)] transition"
            >
              aasthasrivastav627@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-3 text-sm md:items-end">
            <a href="https://github.com/Aastha-a216" target="_blank" rel="noreferrer" className="glass glass-hover rounded-full px-5 py-2.5 inline-flex w-fit gap-2">
              <span>GitHub</span><span className="text-muted-foreground">↗</span>
            </a>
            <a href="mailto:aasthasrivastav627@gmail.com" className="glass glass-hover rounded-full px-5 py-2.5 inline-flex w-fit gap-2">
              <span>Email</span><span className="text-muted-foreground">↗</span>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="glass glass-hover rounded-full px-5 py-2.5 inline-flex w-fit gap-2">
              <span>LinkedIn</span><span className="text-muted-foreground">↗</span>
            </a>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <span>© 2026 Aastha Srivastava — All rights reserved.</span>
          <span>Designed & built with intention.</span>
        </div>
      </div>
    </footer>
  );
}
