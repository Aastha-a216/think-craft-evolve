import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export const Route = createFileRoute("/work/fraud")({
  head: () => ({
    meta: [
      { title: "Credit Card Fraud Detection — Case Study · Aastha Srivastava" },
      { name: "description", content: "Enterprise analytics dashboard for fraud signal interpretation and decision flows." },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      index="04"
      role="Product · Enterprise Dashboard UX"
      title="Credit Card Fraud Detection System"
      tagline="An enterprise analytics dashboard that translates complex fraud signals into readable, actionable decision flows for operators."
      meta={[
        { label: "Role", value: "Product + Data UX" },
        { label: "Year", value: "2024" },
        { label: "Stack", value: "Dashboard · Analytics" },
        { label: "Type", value: "Product design" },
      ]}
      sections={[
        { title: "Problem", body: "Financial fraud systems produce dense, high-volume data that operators struggle to interpret quickly — leading to missed alerts or alert fatigue." },
        { title: "Goal", body: "Design a clear, actionable dashboard that turns fraud signals into structured decision flows operators can act on in seconds." },
        { title: "Research & thinking", body: [
          "Studied operator workflows and decision points in fraud review.",
          "Mapped anomaly types to visual urgency hierarchies.",
          "Identified where false positives erode trust in the system.",
        ]},
        { title: "UX & product decisions", body: [
          "Severity-led visual hierarchy — color, weight, position.",
          "Decision-first dashboard layout (action above analysis).",
          "Expandable transaction context without losing the queue.",
          "Audit trail visible inline for compliance.",
        ]},
        { title: "Outcome", body: "A dashboard concept that reframes fraud review as a decision tool — not a data exploration tool — reducing time-to-action per alert." },
        { title: "Learnings", body: "In enterprise UX, the dashboard is a decision surface. Every chart must answer 'approve, block, or escalate?'" },
      ]}
      features={[
        "Severity-ranked alert queue",
        "Inline transaction context",
        "Anomaly pattern visualization",
        "One-click decision actions",
        "Audit trail per decision",
        "Operator workload balancing",
      ]}
      links={[]}
    />
  ),
});
