import Section from "./Section.jsx";
import Card from "./Card.jsx";
import Badge from "./Badge.jsx";
import { skills } from "../data/portfolio.js";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
    >
      <div className="grid two">
        {skills.map((s) => (
          <Card key={s.group}>
            <div style={{ fontWeight: 850, marginBottom: 8 }}>{s.group}</div>
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
              {s.items.map((it) => (
                <Badge key={it} tone="info">{it}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}