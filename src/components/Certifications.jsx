import Section from "./Section.jsx";
import Badge from "./Badge.jsx";
import { certifications } from "../data/portfolio.js";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" compact={true}>
      <div style={{ display: "grid", gap: 24 }}>
        {certifications.map((c, index) => (
          <div key={index}>

            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              <div style={{ fontWeight: 900, fontSize: 18 }}>
                {c.name}
              </div>

              <Badge tone="info">{c.year}</Badge>
            </div>

            <div style={{ color: "var(--muted)", marginTop: 4 }}>
              {c.org}
            </div>

            <ul style={{ paddingLeft: 18, marginTop: 8, color: "var(--muted)", lineHeight: 1.7 }}>
              {c.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            {c.link && (
              <a
                className="btn"
                href={c.link}
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 10 }}
              >
                View Certificate
              </a>
            )}

          </div>
        ))}
      </div>
    </Section>
  );
}