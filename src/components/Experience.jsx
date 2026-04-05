import Section from "./Section.jsx";
import Badge from "./Badge.jsx";
import { experience } from "../data/portfolio.js";

export default function Experience() {
  return (
    <Section id="experience" title="Hands-on Experience" compact={true}>
      <div style={{ display: "grid", gap: 20 }}>
        {experience.map((exp, index) => (
          <div key={index}>
            
            <div style={{ fontWeight: 850, fontSize: 17 }}>
              {exp.title}
            </div>

            <ul style={{ paddingLeft: 18, marginTop: 6, color: "var(--muted)", lineHeight: 1.7 }}>
              {exp.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            <div style={{ marginTop: 6 }}>
              <Badge tone="info">Practical Learning</Badge>
            </div>

          </div>
        ))}
      </div>
    </Section>
  );
}