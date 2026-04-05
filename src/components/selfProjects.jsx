import Section from "./Section.jsx";
import Badge from "./Badge.jsx";
import { selfProjects } from "../data/portfolio.js";

export default function SelfProjects() {
  return (
    <Section id="self-projects" title="Self-Driven Projects" compact={true}>
      <div style={{ display: "grid", gap: 22 }}>
        {selfProjects.map((proj, index) => (
          <div key={index}>
            
            <div style={{ fontWeight: 900, fontSize: 18 }}>
              {proj.title}
            </div>

            <ul style={{ paddingLeft: 18, marginTop: 8, color: "var(--muted)", lineHeight: 1.7 }}>
              {proj.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {proj.tech.map((t, i) => (
                <Badge key={i} tone="info">{t}</Badge>
              ))}
            </div>

            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{ marginTop: 10 }}
              >
                View on GitHub
              </a>
            )}

          </div>
        ))}
      </div>
    </Section>
  );
}