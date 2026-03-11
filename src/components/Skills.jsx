import Section from "./Section.jsx";
import Badge from "./Badge.jsx";
import { skills } from "../data/portfolio.js";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      compact={true}
    >
      <div style={{ display: "grid", gap: 22 }}>
        {skills.map((s) => (
          <div key={s.group}>
            <div style={{ fontWeight: 850, marginBottom: 10, fontSize: 18 }}>
              {s.group}
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {s.items.map((it) => (
                <Badge key={it} tone="info">
                  {it}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}