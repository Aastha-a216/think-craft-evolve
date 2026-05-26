import { Link } from "@tanstack/react-router";

interface Props {
  index: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  to?: string;
  external?: string;
  year?: string;
}

export function ProjectCard({ index, title, category, description, tags, to, external, year = "2025" }: Props) {
  const inner = (
    <div className="glass glass-hover rounded-2xl p-8 md:p-10 h-full flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-12">
        <span className="text-xs text-muted-foreground tracking-wider">({index})</span>
        <div className="text-right">
          <span className="text-xs text-muted-foreground block">{category}</span>
          <span className="text-xs text-muted-foreground/60">{year}</span>
        </div>
      </div>
      <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/5">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm pt-6 border-t border-white/5">
        <span className="text-muted-foreground">{to ? "Read case study" : "Visit"}</span>
        <span className="text-lg">→</span>
      </div>
    </div>
  );
  if (to) return <Link to={to} className="block group">{inner}</Link>;
  return <a href={external} target="_blank" rel="noreferrer" className="block group">{inner}</a>;
}
