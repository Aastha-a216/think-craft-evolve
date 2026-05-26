import { createFileRoute } from "@tanstack/react-router";
import profileImg from "@/assets/aastha-profile.jpg";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const time = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" });
  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* HERO */}
      <section className="pt-36 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-10 fade-up">
            <span className="inline-block size-1.5 rounded-full bg-emerald-400 pulse-dot" />
            <span>Available for select roles & collaborations · {time} IST</span>
          </div>

          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center mb-16">
            <img
              src={profileImg}
              alt="Aastha Srivastava"
              className="size-24 md:size-28 rounded-full object-cover border border-white/10 shadow-2xl"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">[ Portfolio · v2 — 2026 ]</p>
              <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] text-glow">
                Aastha Srivastava
              </h1>
              <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl">
                Product + UI/UX + Content & Research thinker — building thoughtful digital experiences at the intersection of strategy, design, and storytelling.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#work" className="glass glass-hover rounded-full px-6 py-3 text-sm">View Work →</a>
            <a href="mailto:aasthasrivastav627@gmail.com" className="rounded-full px-6 py-3 text-sm bg-foreground text-background hover:bg-foreground/90 transition">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_2fr] gap-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">[ About ]</p>
          <div>
            <p className="font-serif text-2xl md:text-3xl leading-snug mb-8">
              I'm a product-minded designer and digital thinker working at the intersection of UI/UX design, content strategy, and structured research.
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                I focus on how users understand information, how decisions are shaped, and how digital systems communicate clearly and effectively.
              </p>
              <p>
                My work blends UX design for intuitive interfaces, content strategy to simplify complex ideas, product research to understand user behavior, and frontend execution for real-world delivery.
              </p>
              <p>
                I've built and contributed to projects across sustainability commerce, accessibility-first news systems, fraud detection dashboards, and safety-tech — always focusing on clarity, usability, and structured experience design.
              </p>
              <p className="text-foreground/80 italic">
                I enjoy working where design, structure, and communication meet — where clarity transforms into meaningful digital experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {["UX Design", "Product Thinking", "Research", "Content Strategy", "Frontend Execution"].map((t) => (
                <span key={t} className="text-xs glass rounded-full px-3 py-1.5">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* WORK */}
      <section id="work" className="px-6 py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">[ Selected Projects ]</p>
              <h2 className="font-serif text-4xl md:text-5xl">Recent work</h2>
            </div>
            <span className="text-xs text-muted-foreground">05 / case studies</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              index="01"
              title="BinWah — Sustainable Commerce"
              category="Product · UX · Storytelling"
              description="A startup-grade landing experience for a sustainability-first commerce brand — conversion UX, trust-building, and narrative design woven into one funnel."
              tags={["Conversion UX", "Storytelling", "Sustainability", "Trust Design"]}
              to="/work/binwah"
            />
            <ProjectCard
              index="02"
              title="Smart Mess — Hostel Feedback"
              category="Product · Dashboard UX"
              description="Student-focused feedback + analytics system. Designed feedback loops, data visualization UX, and a clear system architecture for everyday use."
              tags={["Dashboard UX", "Feedback Loops", "Data Viz", "Systems"]}
              to="/work/smart-mess"
            />
            <ProjectCard
              index="03"
              title="Raksha Bandhan Suraksha App"
              category="Product · Safety-Tech UX"
              description="NCC State-Level Award concept — a predictive personal safety system with voice-triggered distress detection and tiered multi-channel emergency alerts."
              tags={["Safety-Tech", "Voice UX", "Emergency Flows", "Concept"]}
              to="/work/raksha"
            />
            <ProjectCard
              index="04"
              title="Credit Card Fraud Detection"
              category="Product · Enterprise Dashboard"
              description="Enterprise analytics dashboard translating dense fraud signals into severity-led, decision-first flows for operators reviewing alerts at scale."
              tags={["Enterprise UX", "Analytics", "Decision Design", "Anomaly Viz"]}
              to="/work/fraud"
            />
            <ProjectCard
              index="05"
              title="Echo News — Accessibility Audio"
              category="Product · Accessibility UX"
              description="Audio-first, conversational news platform designed for elderly users, accessibility needs, and multitasking listeners — inclusive by architecture."
              tags={["Accessibility", "Voice-First", "Inclusive Design", "Audio UX"]}
              to="/work/echo-news"
            />
          </div>

        </div>
      </section>

      {/* THINKING */}
      <section id="thinking" className="px-6 py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">[ Practice ]</p>
              <h2 className="font-serif text-4xl md:text-5xl">Research, Content & Digital Thinking</h2>
            </div>
            <span className="text-xs text-muted-foreground">03 / disciplines</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                i: "01",
                t: "SEO & Research-Based Content",
                d: "Long-form and structured content built on keyword intent, SERP analysis, and narrative clarity — written to rank and to read.",
                tags: ["SEO", "Research", "Editorial"],
              },
              {
                i: "02",
                t: "Information Simplification",
                d: "Turning dense, technical, or scattered information into clean hierarchies, mental models, and digestible UI copy.",
                tags: ["IA", "Microcopy", "Clarity"],
              },
              {
                i: "03",
                t: "AI-Assisted Digital Workflow",
                d: "Designing repeatable workflows that pair human judgment with AI — for faster research, drafting, and product iteration.",
                tags: ["AI Tools", "Workflow", "Ops"],
              },
            ].map((c) => (
              <div key={c.i} className="glass glass-hover rounded-2xl p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-10">
                  <span className="text-xs text-muted-foreground">({c.i})</span>
                  <span className="text-xs text-muted-foreground">Practice</span>
                </div>
                <h3 className="font-serif text-2xl mb-3">{c.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{c.d}</p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {c.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/5">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
