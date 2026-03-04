import Section from "./Section.jsx";
import Card from "./Card.jsx";
import Badge from "./Badge.jsx";
import { projects } from "../data/portfolio.js";

function LinkRow({ links }) {
  const entries = Object.entries(links || {}).filter(([, v]) => v);

  if (!entries.length) return null;

  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
      {entries.map(([k, v]) => (
        <a key={k} className="btn ghost" href={v} target="_blank" rel="noreferrer">
          {k.toUpperCase()}
        </a>
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <div style={{ fontWeight: 900, fontSize: 16 }}>
          {project.name}
        </div>

        {project.tag && <Badge tone="accent">{project.tag}</Badge>}
      </div>

      <div style={{ color: "var(--muted)", marginTop: 6 }}>
        {project.role}
      </div>

      <p style={{ color: "var(--muted)", marginTop: 12, lineHeight: 1.7 }}>
        {project.impact}
      </p>

      <ul style={{ paddingLeft: 18, color: "var(--muted)", lineHeight: 1.8 }}>
        {project.bullets?.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
        {project.tech?.map((t) => (
          <Badge key={t} tone="ok">
            {t}
          </Badge>
        ))}
      </div>

      <LinkRow links={project.links} />
    </Card>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Some of the projects I have worked on during my studies and research."
    >
      <div className="grid two">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </Section>
  );
}