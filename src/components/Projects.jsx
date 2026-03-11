import Section from "./Section.jsx";
import Badge from "./Badge.jsx";
import { projects } from "../data/portfolio.js";

function LinkRow({ links }) {
  const entries = Object.entries(links || {}).filter(([, v]) => v);

  if (!entries.length) return null;

  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
      {entries.map(([k, v]) => (
        <a key={k} className="btn ghost" href={v} target="_blank" rel="noreferrer">
          {k.toUpperCase()}
        </a>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Some of the projects I have worked on during my studies and research."
      compact={true}
    >
      <div style={{ display: "grid", gap: 28 }}>
        {projects.map((p) => (
          <div key={p.name}>

            {/* title + tag */}
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
              <div style={{ fontWeight: 900, fontSize: 18 }}>
                {p.name}
              </div>

              {p.tag && <Badge tone="accent">{p.tag}</Badge>}
            </div>

            {/* role */}
            <div style={{ color: "var(--muted)", marginTop: 4 }}>
              {p.role}
            </div>

            {/* description */}
            <p style={{ color: "var(--muted)", marginTop: 8, lineHeight: 1.6 }}>
              {p.impact}
            </p>

            {/* bullets */}
            <ul style={{ paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
              {p.bullets?.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            {/* tech badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6 }}>
              {p.tech?.map((t) => (
                <Badge key={t} tone="ok">
                  {t}
                </Badge>
              ))}
            </div>

            <LinkRow links={p.links} />

          </div>
        ))}
      </div>
    </Section>
  );
}