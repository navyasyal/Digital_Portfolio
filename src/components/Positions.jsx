import Section from "./Section.jsx";
import Card from "./Card.jsx";
import { positions } from "../data/portfolio.js";

export default function Positions() {
  return (
    <Section
      id="positions"
      title="Positions of Responsibility"
      subtitle="Leadership and organizational roles during my university years."
    >
      <Card>
        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8 }}>
          {positions.map((p, index) => (
            <li key={index} style={{ marginBottom: 10 }}>
              <strong>{p.role}</strong>, {p.org}
              {p.desc && <span> – {p.desc}</span>}
            </li>
          ))}
        </ul>
      </Card>
    </Section>
  );
}