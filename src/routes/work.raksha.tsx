import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export const Route = createFileRoute("/work/raksha")({
  head: () => ({
    meta: [
      { title: "Raksha Bandhan Suraksha App — Case Study · Aastha Srivastava" },
      { name: "description", content: "Safety-tech UX system with predictive distress detection and multi-channel emergency alerts." },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      index="03"
      role="Product · Safety-Tech UX"
      title="Raksha Bandhan Suraksha App"
      tagline="An NCC State-Level Innovation Award concept — a predictive personal safety system unifying distress detection and multi-channel emergency coordination."
      meta={[
        { label: "Role", value: "Product + UX + Systems" },
        { label: "Year", value: "2024" },
        { label: "Recognition", value: "NCC State Award" },
        { label: "Type", value: "Concept build" },
      ]}
      sections={[
        { title: "Problem", body: "Personal safety systems today are reactive, not predictive, and lack unified emergency coordination across police, family, and bystanders." },
        { title: "Goal", body: "Design a conceptual safety system that combines instant distress detection with reliable multi-channel emergency alert distribution." },
        { title: "Research & thinking", body: [
          "Mapped existing SOS apps and their failure points (network, false triggers, delayed response).",
          "Studied voice-based and motion-based distress detection patterns.",
          "Identified the trust gap between user, family, and authorities.",
        ]},
        { title: "UX & product decisions", body: [
          "Voice + gesture trigger to avoid single-point failure.",
          "Tiered alert system: family → trusted circle → authorities.",
          "Real-time location with visible status to the user.",
          "Low-cognition UI for high-stress moments.",
        ]},
        { title: "Challenges", body: "Designing for panic — every screen had to be readable in under a second, with zero learning curve." },
        { title: "Outcome", body: "A recognized concept system awarded at NCC State-Level Innovation for its structured approach to predictive safety UX." },
        { title: "Learnings", body: "Safety design is interaction design under stress. Defaults matter more than features." },
      ]}
      features={[
        "Voice-triggered SOS activation",
        "Multi-channel emergency dispatch",
        "Tiered trusted-contact escalation",
        "Real-time location relay",
        "Low-cognition emergency UI",
        "Post-incident status timeline",
      ]}
      links={[]}
    />
  ),
});
