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
                Product Developer <span className="text-foreground/40">|</span> Frontend Engineer <span className="text-foreground/40">|</span> Data Analyst
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
              Analytical and engineering-focused Product Developer specializing in robust frontend architecture, end-to-end interactive digital workflows, and data-driven business intelligence.
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                I translate complex functional specifications into highly performant user-facing applications by combining professional web technologies and Power BI pipeline optimization with modern AI-assisted engineering and automated development environments.
              </p>
              <p>
                My work spans frontend engineering, interactive dashboards, and data visualization — from component architecture and responsive layout execution to real-time forecasting and operational intelligence systems.
              </p>
              <p>
                I've built and contributed to projects across sustainability commerce, accessibility-first news systems, fraud detection dashboards, and safety-tech — always focusing on clarity, performance, and structured data flow.
              </p>
              <p className="text-foreground/80 italic">
                I enjoy working where engineering, data, and interface meet — where structured systems become measurable business intelligence.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {["Frontend Engineering", "Power BI", "React", "Data Analytics", "Product Development", "AI-Assisted Workflows"].map((t) => (
                <span key={t} className="text-xs glass rounded-full px-3 py-1.5">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">[ Capabilities ]</p>
              <h2 className="font-serif text-4xl md:text-5xl">Skills & Stack</h2>
            </div>
            <span className="text-xs text-muted-foreground">04 / categories</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                i: "01",
                t: "Frontend Engineering",
                items: ["HTML5", "CSS3", "JavaScript ES6+", "React Foundational Ecosystem", "Responsive Layout Execution", "Component Architecture", "Layout Optimization"],
              },
              {
                i: "02",
                t: "Data Analytics & Business Intelligence",
                items: ["Microsoft Power BI", "Real-Time Forecasting", "Data Visualization", "Interactive Analytics Dashboards", "Operational Metrics", "Threat & Pattern Modeling"],
              },
              {
                i: "03",
                t: "Product & UX",
                items: ["Product Thinking", "UI/UX Design", "Information Architecture", "Design Systems", "Prototyping", "User Research"],
              },
              {
                i: "04",
                t: "Workflow & Tooling",
                items: ["AI-Assisted Engineering", "Git & Version Control", "Automated Dev Environments", "Figma", "Chart.js", "Content & SEO Strategy"],
              },
            ].map((c) => (
              <div key={c.i} className="glass glass-hover rounded-2xl p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs text-muted-foreground">({c.i})</span>
                  <span className="text-xs text-muted-foreground">Skillset</span>
                </div>
                <h3 className="font-serif text-2xl mb-5">{c.t}</h3>
                <div className="flex flex-wrap gap-2">
                  {c.items.map((it) => (
                    <span key={it} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/5">{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">[ Timeline ]</p>
              <h2 className="font-serif text-4xl md:text-5xl">Experience</h2>
            </div>
            <span className="text-xs text-muted-foreground">03 / roles</span>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Frontend Developer & UI/UX Designer",
                company: "MindSeekers",
                time: "2025 – Present",
                bullets: [
                  "Execute frontend code synchronization to refine component rendering and manage state trees across product surfaces.",
                  "Translate design specs into responsive, accessible React components with consistent design-system tokens.",
                  "Collaborate on UX flows and ship production-ready interfaces aligned with brand and product goals.",
                ],
              },
              {
                title: "Data Analytics Intern",
                company: "Zidio Development",
                time: "June 2025 – August 2025",
                bullets: [
                  "Engineered real-time data ingestion models and dynamic predictive forecasting systems to identify high-impact business metrics.",
                  "Designed and deployed interactive corporate intelligence dashboards using Microsoft Power BI to extract operational performance data patterns.",
                  "Transformed raw multi-dimensional data pipelines into actionable visual trends, reducing decision latency for business stakeholders.",
                ],
              },
              {
                title: "Freelance Product & Frontend Designer",
                company: "Independent",
                time: "2024 – Present",
                bullets: [
                  "Designed and shipped frontend interfaces and product experiences for early-stage brands and capstone builds.",
                  "Owned end-to-end delivery — from research and IA to component build-out and content strategy.",
                ],
              },
            ].map((e) => (
              <div key={e.title + e.company} className="glass glass-hover rounded-2xl p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <h3 className="font-serif text-2xl">{e.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{e.company}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{e.time}</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3"><span className="text-foreground/40">—</span><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            ))}
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
