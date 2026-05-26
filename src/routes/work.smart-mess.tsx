import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";

export const Route = createFileRoute("/work/smart-mess")({
  head: () => ({
    meta: [
      { title: "Smart Mess — Case Study · Aastha Srivastava" },
      { name: "description", content: "Student-focused hostel feedback + analytics system. Dashboard UX, feedback loops, data viz." },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      index="02"
      role="Product · Dashboard UX"
      title="Smart Mess — Hostel Feedback System"
      tagline="A student-focused feedback + analytics system that turns daily mess complaints into a clear, actionable loop for hostel administration."
      meta={[
        { label: "Role", value: "Product + UX + System Design" },
        { label: "Year", value: "2025" },
        { label: "Stack", value: "Web · Dashboard" },
        { label: "Type", value: "Capstone build" },
      ]}
      sections={[
        { title: "Problem", body: "Hostel mess feedback usually disappears into WhatsApp groups, paper registers, or never reaches anyone with authority to act. Students stop reporting; quality stays unchecked." },
        { title: "Goal", body: "Create a low-friction feedback channel for students and a clear analytics layer for administrators — closing the loop between complaint and action." },
        { title: "Research & thinking", body: [
          "Interviewed students about why they stop submitting feedback.",
          "Mapped the existing manual workflow used by mess in-charge.",
          "Identified the trust gap: students need to see action, not just submit forms.",
        ]},
        { title: "UX & product decisions", body: [
          "Two-surface system — submission for students, analytics for admins.",
          "Daily rating + tag-based feedback to surface patterns quickly.",
          "Time-series dashboards highlighting recurring issues vs one-offs.",
          "Visible 'action taken' status to close the feedback loop.",
        ]},
        { title: "Outcome", body: "A working prototype that translates messy daily feedback into a structured, prioritized view — making it realistic for administrators to act on patterns instead of noise." },
        { title: "Learnings", body: "Feedback systems only work when the loop is visible. Dashboards must answer 'what should I do next?' — not just show charts." },
      ]}
      features={[
        "Quick daily feedback submission",
        "Tag-based complaint categorization",
        "Admin analytics dashboard",
        "Trend & recurrence detection",
        "Action-status visibility for students",
        "Role-based access surfaces",
      ]}
      links={[
        { label: "GitHub", href: "https://github.com/Aastha-a216/HOSTEL" },
      ]}
    />
  ),
});
