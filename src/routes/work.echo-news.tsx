import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export const Route = createFileRoute("/work/echo-news")({
  head: () => ({
    meta: [
      { title: "Echo News — Case Study · Aastha Srivastava" },
      { name: "description", content: "Accessibility-first audio news platform with voice-led interaction for inclusive multitasking users." },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      index="05"
      role="Product · Accessibility UX"
      title="Echo News — Accessibility Audio News Platform"
      tagline="A conversational, audio-first news experience designed for elderly users, accessibility needs, and multitasking listeners."
      meta={[
        { label: "Role", value: "Product + Accessibility UX" },
        { label: "Year", value: "2025" },
        { label: "Focus", value: "Inclusive Design" },
        { label: "Type", value: "Concept build" },
      ]}
      sections={[
        { title: "Problem", body: "Traditional news platforms are visual-heavy, dense, and inaccessible to elderly users, vision-impaired users, and multitasking listeners." },
        { title: "Goal", body: "Design an audio-first, conversational news experience with simplified navigation and inclusive defaults." },
        { title: "Research & thinking", body: [
          "Studied accessibility frameworks (WCAG) for audio-led interfaces.",
          "Interviewed elderly users about radio vs app news habits.",
          "Mapped voice-command patterns that feel natural, not robotic.",
        ]},
        { title: "UX & product decisions", body: [
          "Voice-first navigation — every action has a spoken equivalent.",
          "Large-target visual fallback for hybrid use.",
          "Topic-based, not feed-based browsing.",
          "Adjustable pace, tone, and language defaults.",
        ]},
        { title: "Outcome", body: "An inclusive news prototype that proves audio can be the primary modality — not an afterthought — without sacrificing depth or control." },
        { title: "Learnings", body: "Accessibility is not a feature layer. It is the architecture. Designing voice-first forces clarity everywhere else." },
      ]}
      features={[
        "Voice-first navigation system",
        "Topic-based audio browsing",
        "Adjustable pace and tone",
        "High-contrast visual fallback",
        "Hands-free listening modes",
        "Multilingual default support",
      ]}
      links={[]}
    />
  ),
});
