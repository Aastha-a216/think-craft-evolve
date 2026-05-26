import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export const Route = createFileRoute("/work/binwah")({
  head: () => ({
    meta: [
      { title: "BinWah — Case Study · Aastha Srivastava" },
      { name: "description", content: "Sustainable commerce landing page — conversion UX, storytelling, and trust-building design." },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      index="01"
      role="Product · UX · Storytelling"
      title="BinWah — Sustainable Commerce Landing"
      tagline="A startup-grade landing experience for a sustainability-first commerce brand, designed to convert without compromising the narrative."
      meta={[
        { label: "Role", value: "Product + UX + Frontend" },
        { label: "Year", value: "2025" },
        { label: "Stack", value: "React · Tailwind" },
        { label: "Type", value: "Live build" },
      ]}
      sections={[
        { title: "Problem", body: "Most sustainability brands struggle to communicate value without sounding preachy. Visitors either bounce from heavy moralizing or fail to understand the actual product offering — leading to low conversion and weak brand trust." },
        { title: "Goal", body: "Design a landing experience that explains the brand's mission, builds immediate trust, and drives a single clear conversion action — without watering down the sustainability story." },
        { title: "Research & thinking", body: [
          "Studied 12+ sustainable commerce landing pages to map common conversion patterns.",
          "Mapped buyer hesitations: trust, pricing transparency, and shipping concerns.",
          "Identified narrative gaps where storytelling could pre-empt objections.",
        ]},
        { title: "UX & product decisions", body: [
          "Single conversion funnel — every section pushes toward one CTA.",
          "Story-led hierarchy: hook → values → product → proof → action.",
          "Trust micro-signals (badges, sourcing, transparent claims) placed near friction points.",
          "Mobile-first typographic rhythm to keep scroll momentum.",
        ]},
        { title: "Challenges", body: "Balancing narrative density with conversion clarity — too much copy weakened CTAs, too little weakened brand. Resolved by treating each scroll-stop as a micro-funnel of its own." },
        { title: "Outcome", body: "Shipped a clean, story-driven landing page that holds attention, communicates values fast, and routes visitors to action without manipulative patterns." },
        { title: "Learnings", body: "Sustainability brands win on clarity, not guilt. A confident, well-edited landing page outperforms heavy hero animations every time." },
      ]}
      features={[
        "Hero with single CTA + value proposition",
        "Sustainability proof section with sourcing",
        "Trust signals near purchase friction",
        "Story-led product positioning",
        "Mobile-first responsive system",
        "Lightweight, fast-loading build",
      ]}
      links={[
        { label: "Live site", href: "https://binwah-landingpage.vercel.app/" },
        { label: "GitHub", href: "https://github.com/Aastha-a216/Binwah_landingpage" },
      ]}
    />
  ),
});
