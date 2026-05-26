import { Link } from "@tanstack/react-router";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

interface Section { title: string; body: string | string[]; }

interface Props {
  index: string;
  role: string;
  title: string;
  tagline: string;
  meta: { label: string; value: string }[];
  sections: Section[];
  features: string[];
  links: { label: string; href: string }[];
}

export function CaseStudyLayout(p: Props) {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <article className="pt-36 pb-24 px-6">
        <div className="mx-auto max-w-3xl">
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition inline-flex items-center gap-2 mb-12">
            ← Back to work
          </Link>

          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            [ Case Study · {p.index} ] — {p.role}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1] text-glow mb-6">{p.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">{p.tagline}</p>

          <div className="glass rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {p.meta.map((m) => (
              <div key={m.label}>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{m.label}</p>
                <p className="text-sm">{m.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-14">
            {p.sections.map((s) => (
              <section key={s.title}>
                <h2 className="font-serif text-3xl mb-4">{s.title}</h2>
                {Array.isArray(s.body) ? (
                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    {s.body.map((b, i) => (
                      <li key={i} className="flex gap-3"><span className="text-foreground/40">—</span><span>{b}</span></li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                )}
              </section>
            ))}

            <section>
              <h2 className="font-serif text-3xl mb-4">Key features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {p.features.map((f, i) => (
                  <div key={i} className="glass rounded-xl p-4 text-sm flex gap-3">
                    <span className="text-muted-foreground">0{i + 1}</span><span>{f}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl mb-4">Links</h2>
              <div className="flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="glass glass-hover rounded-full px-5 py-2.5 text-sm inline-flex gap-2">
                    {l.label} <span className="text-muted-foreground">↗</span>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
