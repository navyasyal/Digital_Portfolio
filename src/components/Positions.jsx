import Section from "./Section.jsx";
import { positions } from "../data/portfolio.js";

export default function Positions() {
  return (
    <Section
      id="positions"
      title="Positions of Responsibility"
      compact={true}
    >
      <ul
        style={{
          margin: "10px 0 0",
          paddingLeft: 22,
          lineHeight: 1.8,
          color: "var(--text)"
        }}
      >
        {positions.map((p, index) => (
          <li key={index} style={{ marginBottom: 10 }}>
            <strong>{p.role}</strong>, {p.org}
            {p.desc && <span> – {p.desc}</span>}
          </li>
        ))}
      </ul>
    </Section>
  );
}